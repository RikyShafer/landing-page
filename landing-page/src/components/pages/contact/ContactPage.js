import { useState } from "react";
import { useSendContactFormMutation } from "./ContactUsApiSlice.js"; 
import "../../../styles/contact.css";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [contact, { isLoading, isSuccess, isError }] = useSendContactFormMutation();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contact(formData).unwrap();
      alert("הטופס נשלח בהצלחה!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (err) {
      alert("אירעה שגיאה, נסה שוב");
    }
  };

  return (
    <div className="contact-container">
      {/* Header */}
      <header className="contact-header">
        <h1>בוא נדבר</h1>
        <p>מוכן להתחיל את הפרויקט הבא שלך? בוא נבנה יחד את הדרך להצלחה דיגיטלית</p>
      </header>

      {/* דרכי יצירת קשר */}
      <section className="contact-info">
        <div className="contact-card">
          <div className="icon-box gradient-orange"><Clock /></div>
          <h3>שעות פעילות</h3>
          <p><b>8:00 - 16:00</b></p>
          <span>ראשון עד חמישי</span>
        </div>
        <div className="contact-card">
          <div className="icon-box gradient-pink"><MapPin /></div>
          <h3>כתובת</h3>
          <p><b>מודיעין , ישראל</b></p>
          <span>פגישות לפי תיאום מראש</span>
        </div>
        <div className="contact-card">
          <div className="icon-box gradient-green"><Phone /></div>
          <h3>טלפון</h3>
          <p><b>+972-54-852-4409</b></p>
          <span>8:00-16:00 , ראשון-חמישי</span>
        </div>
        <div className="contact-card">
          <div className="icon-box gradient-blue"><Mail /></div>
          <h3>אימייל</h3>
          <p><b>riky.shafer@gmail.com</b></p>
          <span>מענה תוך 24 שעות</span>
        </div>
      </section>

      {/* טופס */}
      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>ספר לנו על הפרויקט שלך</h2>
          <p>מלא את הפרטים ונחזור אליך עם הצעה מותאמת אישית</p>

          <div className="form-group">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="שם מלא *"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="כתובת מייל *"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="טלפון"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="שם החברה"
            />
          </div>

          <div className="form-group">
            <select name="service" value={formData.service} onChange={handleChange}>
              <option value="">בחר סוג שירות</option>
              <option>בניית אתר</option>
              <option>מערכת ניהול</option>
              <option>עיצוב UI/UX</option>
            </select>
            <select name="budget" value={formData.budget} onChange={handleChange}>
              <option value="">בחר טווח תקציב</option>
              <option>עד 5,000₪</option>
              <option>5,000₪ - 15,000₪</option>
              <option>15,000₪+</option>
            </select>
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="ספר לנו עוד על הפרויקט שלך..."
          ></textarea>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "שולח..." : "שלח הודעה ✉️"}
          </button>
        </form>

        {isSuccess && <p style={{ color: "green" }}>הטופס נשלח בהצלחה!</p>}
        {isError && <p style={{ color: "red" }}>אירעה שגיאה בשליחה</p>}
      </section>
    </div>
  );
};

export default ContactPage;
