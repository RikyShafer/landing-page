const express = require("express");
const router = express.Router();
const conversationController = require('../controllers/conversationController.js');


const verifyJWT = require("../middleware/verifyJWT");
const verifyAdmin = require("../middleware/verifyAdmin");



router.get("/Admin",verifyJWT,verifyAdmin, conversationController.viewInChatToADMIN);
router.get("/",verifyJWT, conversationController.viewInChat);
router.post("/", verifyJWT,verifyAdmin, conversationController.continueChatting);
router.put("/", verifyJWT, conversationController.chat);
router.delete("/", verifyJWT, conversationController.deleteMessage);




module.exports = router;