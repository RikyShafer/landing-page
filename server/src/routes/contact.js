const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Mock database - בפרויקט אמיתי תחליפי במסד נתונים
let contacts = [];
let contactId = 1;

// Validation middleware
const validateContact = [
  body('name')
    .notEmpty()
    .withMessage('שם הוא שדה חובה')
    .isLength({ min: 2, max: 50 })
    .withMessage('השם חייב להיות בין 2-50 תווים'),
  body('email')
    .isEmail()
    .withMessage('כתובת אימייל לא תקינה')
    .normalizeEmail(),
  body('phone')
    .optional()
    .isMobilePhone('he-IL')
    .withMessage('מספר טלפון לא תקין'),
  body('subject')
    .notEmpty()
    .withMessage('נושא הוא שדה חובה')
    .isLength({ min: 5, max: 100 })
    .withMessage('הנושא חייב להיות בין 5-100 תווים'),
  body('message')
    .notEmpty()
    .withMessage('הודעה היא שדה חובה')
    .isLength({ min: 10, max: 1000 })
    .withMessage('ההודעה חייבת להיות בין 10-1000 תווים')
];

// GET - קבלת כל הפניות
router.get('/', (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedContacts = contacts.slice(startIndex, endIndex);
    
    res.json({
      success: true,
      data: paginatedContacts,
      pagination: {
        current: page,
        pages: Math.ceil(contacts.length / limit),
        total: contacts.length
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'שגיאה בקבלת הפניות',
      error: error.message
    });
  }
});

// POST - יצירת פנייה חדשה
router.post('/', validateContact, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'שגיאות בנתונים שנשלחו',
        errors: errors.array()
      });
    }

    const { name, email, phone, subject, message } = req.body;
    
    const newContact = {
      id: contactId++,
      name,
      email,
      phone: phone || null,
      subject,
      message,
      status: 'new',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    contacts.unshift(newContact); // הוספה בתחילת המערך

    // TODO: שליחת אימייל התראה
    console.log('New contact received:', newContact);

    res.status(201).json({
      success: true,
      message: 'הפנייה נשלחה בהצלחה! נחזור אליכם בהקדם',
      data: newContact
    });

  } catch (error) {
    console.error('Contact creation error:', error);
    res.status(500).json({
      success: false,
      message: 'שגיאה בשליחת הפנייה',
      error: error.message
    });
  }
});

// GET - קבלת פנייה ספציפית
router.get('/:id', (req, res) => {
  try {
    const contact = contacts.find(c => c.id === parseInt(req.params.id));
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'פנייה לא נמצאה'
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'שגיאה בקבלת הפנייה',
      error: error.message
    });
  }
});

// PUT - עדכון סטטוס פנייה
router.put('/:id/status', (req, res) => {
  try {
    const { status } = req.body;
    const contactIndex = contacts.findIndex(c => c.id === parseInt(req.params.id));
    
    if (contactIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'פנייה לא נמצאה'
      });
    }

    if (!['new', 'in-progress', 'resolved', 'closed'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'סטטוס לא תקין'
      });
    }

    contacts[contactIndex].status = status;
    contacts[contactIndex].updatedAt = new Date().toISOString();

    res.json({
      success: true,
      message: 'סטטוס הפנייה עודכן בהצלחה',
      data: contacts[contactIndex]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'שגיאה בעדכון הפנייה',
      error: error.message
    });
  }
});

module.exports = router;