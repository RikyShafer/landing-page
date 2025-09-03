
const Contact = require("../models/ContactUs")
// יצירת בקשה חדשה
const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "הטופס נשלח בהצלחה!", contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "שגיאה בשליחת הטופס" });
  }
};

// קבלת כל הפניות
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "שגיאה בשליפת נתונים" });
  }
};
module.exports = { getContacts, createContact }
