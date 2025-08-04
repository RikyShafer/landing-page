import React from 'react';
import './footer.css';
import { HiMail } from 'react-icons/hi';
import { BiLogoWhatsapp } from 'react-icons/bi';
const Footer = () => {

  const subject = encodeURIComponent("מעוניין/ת בהצעת מחיר לבניית אתר");
  const body = encodeURIComponent(`שלום שרה וריקי,

אני מעוניין/ת בשירותי בניית אתרים ומעוניין/ת לקבל מכם פרטים נוספים והצעת מחיר.

אשמח לשמוע על תהליך העבודה, עלויות, ולראות דוגמאות נוספות אם יש.

תודה רבה מראש!`);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=riky.shafer@gmail.com&su=${subject}&body=${body}`;
  const message = 'שלום, אני מעוניין/ת לשאול לגבי שירות בניית אתרים.';
  const whatsappUrl1 = `https://wa.me/972548524409?text=${encodeURIComponent(message)}`;
  const whatsappUrl2 = `https://wa.me/972556799675?text=${encodeURIComponent(message)}`;
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* עמודה 1: תיאור החברה */}
        <div className="footer-column">
          <h2 className="footer-logo">S&R Studio</h2>
          <p>עיצוב ובניית אתרים - מיתוג דיגיטלי מתקדם</p>
        </div>

        {/* עמודה 2: קישורים מהירים */}
        <div className="footer-column">
          <h3>קישורים מהירים</h3>
          <ul>
            <li><a href="/">בית</a></li>
            <li><a href="#about">אודות</a></li>
            <li><a href="#blog">בלוג</a></li>
            <li><a href="#faq">שאלות נפוצות</a></li>
            <li><a href="#contact">צור קשר</a></li>
          </ul>
        </div>

        {/* עמודה 3: פרטי יצירת קשר */}
        <div className="footer-column">
          <h3>פרטי יצירת קשר</h3>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-link"
            title="שלח לנו מייל"
          >
            <HiMail className="footer-icon" />
            riky.shafer@gmail.com
          </a>

          <div className="footer-whatsapp-numbers">
            <a
              href={whatsappUrl1}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
              title="שלח הודעת וואטסאפ"
            >
              <BiLogoWhatsapp className="footer-icon" />
              054-852-4409
            </a>
            <span>|</span>
            <a
              href={whatsappUrl2}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
              title="שלח הודעת וואטסאפ"
            >
              <BiLogoWhatsapp className="footer-icon" />
              055-679-9675
            </a>
          </div>

          <p style={{ marginTop: '10px' }}>שעות פעילות: ראשון-חמישי, 9:00–18:00</p>
        </div>

        {/* עמודה 4: הרשמה לעדכונים */}
        <div className="footer-column">
          <h3>עדכונים</h3>
          <p>הרשמו לעדכונים שבועיים על חדשות עיצוב ושיווק</p>
          <form>
            <input type="email" placeholder="כתובת המייל שלך" />
            <button type="submit">הרשמה</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 S&R Studio. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
};

export default Footer;
