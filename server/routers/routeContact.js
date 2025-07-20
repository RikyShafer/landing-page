

const express = require("express");
const router = express.Router();
const contactController = require('../controllers/contactController.js');

router.get("/", contactController.getAllContact);
router.get("/:id", contactController.getContactById);
router.post("/", contactController.createContact);
router.put("/", contactController.updateContact);
router.delete("/", contactController.deleteContact);

module.exports = router;

