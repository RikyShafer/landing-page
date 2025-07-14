// ייבא מודולים נדרשים ואת מודל המשתמש
const { json, text } = require("express");
const Contact = require("../models/Contact");
const nodemailer = require('nodemailer');

async function sendEmailToManager(name, email, message, phone) {
    const websiteUrl = 'http://localhost:3000'; 
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USERNAME_EMAIL,
                pass: process.env.PASSWORD_EMAIL,
            },
            tls: {
                rejectUnauthorized: false 
            }
        });

        let mailOptions = {
            from: process.env.EMAIL,
            to:  process.env.EMAIL,
            subject: 'New Contact Form Submission',
            html: `
                <p  style="direction: rtl; font-family: 'Arial', sans-serif; font-size: 16px; margin-bottom:100px;">
                    Name: ${name}<br>
                    Email: ${email}<br>
                    Phone: ${phone}<br>
                    Message: ${message}
                </p>
                <p style="text-align: right;">
                    <a href="${websiteUrl}" style="padding: 10px 20px; background-color: #000; color: #fff; text-decoration: none; border-radius: 5px; font-size: 18px;">בקר באתר</a>
                </p>
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            if (error.code === 'EAUTH') {
                console.error('Invalid login credentials. Please check your Gmail username and password.');
            }
        }
    } catch (error) {
        console.error('Error creating transporter:', error);
    }
}
const createContact = async (req, res) => {
    const { name, email, phone, message } = req.body;
    
    if (!email || !phone || !name) {
        return res.status(400).json({ message: 'Missing mandatory fields', error: { fields: 'name, email, and phone are required' } });
    }

    try {
        const contact = await Contact.create({ name, email, phone, message });
        await contact.save();
        await sendEmailToManager(name, email, message,phone);
        return res.status(201).json({ message: 'New contact created', contact });
    } catch (error) {
        console.error('Error creating contact:', error);
        return res.status(500).json({ message: 'Error creating contact', error });
    }
};

const getAllContact = async (req, res) => {
    try {
        const contactList = await Contact.find( ).lean();

        if (!contactList || contactList.length === 0) {
            return res.status(200).json({ message: 'No contactList found', contactList: [] });
        }

        res.status(200).json(contactList);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

const getContactById = async (req, res) => {
    const { id } = req.params;

    const contact = await Contact.findById(id).lean()

    if (!contact) {
        return res.status(400).json({ message: 'No contact found' });
    }

    res.json(contact);
}
const updateContact = async (req, res) => {
  
    const { _id, name,  email, phone ,message } = req.body;

    if (!_id) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    try {
       
        const updateObj = {
            name,
            email,
            phone,
           message
        };
        const contact = await Contact.findByIdAndUpdate(
            _id,
            updateObj,
            { new: true, runValidators: true }
        );

        if (!contact) {
            return res.status(404).json({ message: 'contact not found' });
        }

        res.json(`${contact.name} updated`);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};


const deleteContact = async (req, res) => {
    const { id } = req.body;
    const contact = await Contact.findByIdAndDelete({ _id: id }).exec();

    let reply;
    if (contact) {
        reply = `contact '${contact.title}' ID ${contact._id} deleted`;
    } else {
        reply = 'No such user found';
    }

    res.json(reply);
};



       
module.exports = { createContact, getAllContact, getContactById, updateContact, deleteContact }


