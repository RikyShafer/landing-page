const express = require("express") 
const controller = require("../controllers/contactUsController.js");
const router = express.Router();


// POST /api/contact
router.post("/", controller.createContact);

// GET /api/contact
router.get("/", controller.getContacts);

module.exports = router;