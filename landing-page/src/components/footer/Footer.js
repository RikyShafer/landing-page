import  { useEffect, useState } from 'react';
import { HiMail } from 'react-icons/hi';
import { BiLogoWhatsapp, BiMap } from 'react-icons/bi';
import './footer.css';

const Footer = () => {
  const [, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
const subject = encodeURIComponent("מעוניין/ת בהצעת מחיר לבניית אתר");
const body = encodeURIComponent(`שלום שרה וריקי,

אני מעוניין/ת בשירותי בניית אתרים ומעוניין/ת לקבל מכם פרטים נוספים והצעת מחיר.

אשמח לשמוע על תהליך העבודה, עלויות, ולראות דוגמאות נוספות אם יש.

תודה רבה מראש!`);

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=riky.shafer@gmail.com&su=${subject}&body=${body}`;

  const phoneNumber = '0548524409';
  const phoneNumber1 = '0556799675';
  const message = 'Hello, I would like to inquire about...';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const whatsappUrl1 = `https://wa.me/${phoneNumber1}?text=${encodeURIComponent(message)}`;

  return (
    <footer className='footer'>
      <h1 className='footer-address'>
        מיתוג | עיצוב | בניית אתרים
      </h1>

      <h1 className='studio'>
        סטודיו S&R - אתרים בעיצוב אישי
      </h1>

      <h1 className='footer-contactus'>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" title="ריקי - וואטסאפ">
          <BiLogoWhatsapp />
        </a>
        <a href={whatsappUrl1} target="_blank" rel="noopener noreferrer" title="רותם - וואטסאפ">
          <BiLogoWhatsapp />
        </a>
      </h1>

      <h1 className='footer-contactus'>
        <a href={gmailUrl} target="_blank" rel="noopener noreferrer" title="שלח לנו מייל">
          <HiMail />
        </a>
      </h1>

      <div className='copyright'>
        © 2025 S&R Studio | כל הזכויות שמורות
      </div>
    </footer>
  );
};

export default Footer;
