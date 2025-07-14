// ייבא מודולים נדרשים ואת מודל המשתמש
const { json, text } = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
// פונקציית אסינכרון ליצירת משתמש חדש
const addUser  = async (req, res) => {
    // פירוק נתוני משתמש מגוף הבקשה
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


    // אימות: בדיקה אם המייל  כבר קיים במערכת
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
        //  צור משתמש חדש באמצעות מודל המשתמש והנתונים שסופקו
        const User  = await User .create({
            name,
            password: hashedPwd,
            email,
            phone,
             
        });
        console.log("User ",User .image);

        console.log(User );


        // החזר תגובת הצלחה עם פרטי המשתמש שנוצרו
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
        // החזר תגובת שגיאה אם יצירת המשתמש נכשלת
        return res.status(400).json({
            error: true,
            message: ' error',
            data: null
        })
    }
};

// פונקציית אסינכרון כדי לאחזר את כל המשתמשים
const getAllUser  = async (req, res) => {
    try {
        // מצא את כל המשתמשים במסד הנתונים רק את האלה שהם משתמשים - לקוחות והמר לאובייקטי JavaScript רגילים
        const userList = await User .find({ roles: { $ne: 'ADMIN' }, deleted: false, }, { password: 0, roles: 0 }).lean();

        // בדוק אם קיימים משתמשים; אם לא, החזר מערך ריק
        if (!userList || userList.length === 0) {
            return res.status(201).json({
                error: false,
                message: "No userList  ==0 ",
                data: []
            })
        }
        // החזר תגובת הצלחה עם רשימת המשתמשים
        // res.status(200).json(userList);
        res.status(201).json({
            error: false,
            message: "",
            data: userList
        })
    } catch (error) {
        // החזר תגובת שגיאה אם אחזור משתמשים נכשל
        console.error("Error adding user:", error);
        res.status(500).json({
            error: true,
            message: "Internal server error",
            data: null
        });
    }
}

// פונקציית אסינכרון לעדכון משתמש
const updateUser  = async (req, res) => {
    
console.log(req.file,);

    // גוף הבקשה לפירוק
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
    // בדוק אם מסופק מזהה משתמש
    const User  = await User .findById(_id);
    if (!User ) {
        return res
            .status(400).json({
                error: true,
                message: "no User  found",
                data: null
            });
    }


    // אימות: בדיקה אם המייל כבר קיים במערכת
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



// Set firstName if it's provided, otherwise keep the existing value
User .name = name ? name : User .name;

//

// Set email if it's provided, otherwise keep the existing value
User .email = email ? email : User .email;

// Set phone if it's provided, otherwise keep the existing value
User .phone = phone ? phone : User .phone;

// Save the updated User 
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

// ייצא את הפונקציות המוגדרות לשימוש בקבצים אחרים
module.exports = { 
    getAllUser , 
    addUser , 
    updateUser , 
    deleteUser , 
};