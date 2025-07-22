import React from 'react';
import { HiMail } from 'react-icons/hi';
import { BiLogoWhatsapp } from 'react-icons/bi';
import './footer.css';

const Footer = () => {
  const subject = encodeURIComponent("מעוניין/ת בהצעת מחיר לבניית אתר");
  const body = encodeURIComponent(`שלום שרה וריקי,

אני מעוניין/ת בשירותי בניית אתרים ומעוניין/ת לקבל מכם פרטים נוספים והצעת מחיר.

אשמח לשמוע על תהליך העבודה, עלויות, ולראות דוגמאות נוספות אם יש.

תודה רבה מראש!`);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=riky.shafer@gmail.com&su=${subject}&body=${body}`;

  const phoneNumber1 = '0548524409';
  const phoneNumber2 = '0556799675';
  const message = 'שלום, אני מעוניין/ת לשאול לגבי שירות בניית אתרים.';
  const whatsappUrl1 = `https://wa.me/${phoneNumber1}?text=${encodeURIComponent(message)}`;
  const whatsappUrl2 = `https://wa.me/${phoneNumber2}?text=${encodeURIComponent(message)}`;

  return (
    <footer id="contact-section" className='footer'>
      <div className="footer-left copyright">
        © 2025 S&R Studio כל הזכויות שמורות
      </div>

      <div className="footer-center">
        <h1 className="footer-address">מיתוג | עיצוב | בניית אתרים</h1>
        <h2 className="studio">סטודיו S&R - אתרים בעיצוב אישי</h2>
      </div>

      <div className="footer-right">
        <div className="footer-contactus">
          <div className="contact-line">
            <a
              href={whatsappUrl1}
              target="_blank"
              rel="noopener noreferrer"
              title={`וואטסאפ ${phoneNumber1}`}
              className="whatsapp-icon"
            >
              <BiLogoWhatsapp />
            </a>

            <div className="phone-numbers">
              <a
                href={whatsappUrl1}
                target="_blank"
                rel="noopener noreferrer"
                className="phone-link"
              >
                {phoneNumber1}
              </a>
              <span>|</span>
              <a
                href={whatsappUrl2}
                target="_blank"
                rel="noopener noreferrer"
                className="phone-link"
              >
                {phoneNumber2}
              </a>
            </div>
          </div>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mail-link"
            title="שלח לנו מייל"
          >
            <HiMail className="mail-icon" />
            <span className="mail-text">שלח לנו מייל</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
