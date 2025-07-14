const { json, text } = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const addUser  = async (req, res) => {
    const {
        name,
        password,
        email,
        phone,
    } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({
            error: true,
            message: 'Name || email || phone  are required',
            data: null
        })
    }
    const existingUseremail = await User .findOne({ email: email });
    if (existingUseremail) {
        return res.status(400).json({
            error: true,
            message: ' email must be unique',
            data: null
        })
    }

    const hashedPwd = await bcrypt.hash(password, 10);


    try {
        const User  = await User .create({
            name,
            password: hashedPwd,
            email,
            phone,
             
        });
        console.log("User ",User .image);

        console.log(User );

        return res.status(201).json({
            error: false,
            message: "User created successfully",
            data: {
                _id: User ._id,
                name: User .name,
                phone: User .phone,
                email: User .email
            }
        })
    
    }

    catch (error) {
                return res.status(400).json({
            error: true,
            message: ' error',
            data: null
        })
    }
};

const getAllUser  = async (req, res) => {
    try {
        const userList = await User .find({ roles: { $ne: 'ADMIN' }, deleted: false, }, { password: 0, roles: 0 }).lean();

        if (!userList || userList.length === 0) {
            return res.status(201).json({
                error: false,
                message: "No userList  ==0 ",
                data: []
            })
        }

        res.status(201).json({
            error: false,
            message: "",
            data: userList
        })
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({
            error: true,
            message: "Internal server error",
            data: null
        });
    }
}

const updateUser  = async (req, res) => {
    
console.log(req.file,);

    const { _id,
        name,
        password,
        email,
        phone,
    } = req.body;

   
        if (!_id) {

        return res.status(400).json({
            error: true,
            message: 'id   are required',

            data: null
        })
    }
    const User  = await User .findById(_id);
    if (!User ) {
        return res
            .status(400).json({
                error: true,
                message: "no User  found",
                data: null
            });
    }

    const existingUseremail = await User .findOne({ email: email });
    if (existingUseremail && existingUseremail._id.toString() !== _id) {
        return res.status(400).json({
            error: true,
            message: 'email must be unique',
            data: null
        });
    }
    if (password) {
        const hashpwd = await bcrypt.hash(password, 10)
        User .password = hashpwd
    }



User .name = name ? name : User .name;


User .email = email ? email : User .email;

User .phone = phone ? phone : User .phone;

const updateUser = await User .save();

    res.json({
        error: false,
        message: "",
        data: {
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            phone: updateUser.phone
        }
    });
};

const deleteUser  = async (req, res) => {
    const { _id } = req.body
    if (!_id) {
        return res.status(400).json({
            error: true,
            message: "id  are required",
            data: null
        })
    }
    const User  = await User .findById(_id)
    if (!User ) {
        return res.status(400).json({
            error: true,
            message: "No User  found",
            data: null
        })
    }
    User .deleted = true

    const deletUser = await User .save()
    res.status(201).json({
        error: false,
        message: '',
        data: { firstName: User .firstName, _id: User ._id }
    })

};

module.exports = { 
    getAllUser , 
    addUser , 
    updateUser , 
    deleteUser , 
};