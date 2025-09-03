const mongoose=require("mongoose") 

const contactSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    company: { type: String },
    service: { type: String },
    budget: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);


module.exports = mongoose.model('ContactUs', contactSchema);