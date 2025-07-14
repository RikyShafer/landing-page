


const express = require("express");
const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "..", "public", "image") );
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + "-" + file.originalname); // Corrected line
    }
});

const upload = multer({ storage: storage });
const router = express.Router();
const UserController = require('../controllers/userController.js');
const verifyJWT = require("../middleware/verifyJWT.js");
const verifyAdmin = require("../middleware/verifyAdmin.js");

// router.use(verifyJWT);
// router.use(verifyAdmin);
router.get("/", verifyJWT,verifyAdmin,UserController.getAllUser );
router.post("/" , upload.single('image') , UserController.addUser );
router.put("/" , [verifyJWT, upload.single('image')], UserController.updateUser );
router.delete("/",verifyJWT,verifyAdmin, UserController.deleteUser );

// Export the router
module.exports = router;

