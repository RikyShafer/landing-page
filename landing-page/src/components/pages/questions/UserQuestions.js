import { useState } from "react";
import { ChevronDown, Search, MessageCircle, HelpCircle, Phone } from "lucide-react";
import "../../../styles/user-question.css";

const UserQuestions = () => {
  // נתונים מדומים לדוגמה
  const mockQuestions = [
    {
      _id: "1",
      question: "כמה זמן לוקח לפתח אתר אינטרנט?",
      answer: "זמן הפיתוח תלוי בסוג האתר ובמורכבות הדרושה. אתר בסיסי יכול להיות מוכן תוך 2-3 שבועות, בעוד שאתר מורכב עם פונקציונליות מתקדמת יכול לקחת 6-12 שבועות. אנחנו מספקים לוח זמנים מפורט לפני תחילת העבודה."
    },
    {
      _id: "2",
      question: "האם אני יכול לערוך את האתר בעצמי לאחר המסירה?",
      answer: "בהחלט! אנחנו בונים את כל האתרים עם מערכת ניהול תוכן (CMS) ידידותית למשתמש. בנוסף, אנחנו מעבירים הדרכה מקיפה ומספקים מדריכים כתובים ווידאו כדי שתוכל לנהל את האתר בקלות."
    },
    {
      _id: "3",
      question: "מה כלול בחבילת התחזוקה השבועית?",
      answer: "חבילת התחזוקה כוללת גיבויים אוטומטיים, עדכוני אבטחה, מעקב אחר ביצועים, תמיכה טכנית, עדכונים קטנים לתוכן ודוח חודשי על פעילות האתר. אנחנו דואגים שהאתר שלך יעבוד תמיד בצורה מיטבית."
    },
    {
      _id: "4",
      question: "האם האתרים שלכם מותאמים למכשירים ניידים?",
      answer: "כן, בהחלט! כל האתרים שאנחנו בונים הם responsive design ומותאמים לכל סוגי המסכים - סמארטפונים, טאבלטים ומחשבים. אנחנו בודקים את האתר על מגוון מכשירים לפני המסירה."
    },
    {
      _id: "5",
      question: "איך אתם עוזרים בקידום האתר בגוגל (SEO)?",
      answer: "אנחנו מטמיעים בסיס SEO חזק בכל אתר: אופטימיזציה טכנית, מהירות טעינה, תגי meta, מבנה URL נכון, ועוד. בנוסף, אנחנו מציעים שירותי קידום מתקדמים הכוללים מחקר מילות מפתח, יצירת תוכן איכותי ובניית קישורים."
    },
    {
      _id: "6",
      question: "מה קורה אם יש בעיה טכנית באתר?",
      answer: "אנחנו מספקים תמיכה טכנית 24/7 ללקוחות התחזוקה שלנו. בעיות דחופות נפתרות תוך שעות ספורות. ללקוחות אחרים אנחנו מציעים תמיכה במהלך שעות העבודה הרגילות עם זמן תגובה מהיר."
    },
    {
      _id: "7",
      question: "האם אתם מספקים שירותי עיצוב גרפי נוספים?",
      answer: "כן! בנוסף לעיצוב אתרים, אנחנו מציעים עיצוב לוגו, חומרי שיווק דיגיטליים, עיצוב לרשתות חברתיות, כרטיסי ביקור דיגיטליים ועוד. אנחנו יכולים ליצור זהות ויזואלית שלמה לעסק שלך."
    },
    {
      _id: "8",
      question: "איך אפשר להתחיל לעבוד איתכם?",
      answer: "פשוט מאוד! פנה אלינו דרך טופס יצירת הקשר, שלח מייל או התקשר. נקבע פגישת ייעוץ ללא התחייבות בה נכיר את הצרכים שלך ונכין הצעת מחיר מותאמת. אחרי אישור ההצעה, נתחיל לעבוד על הפרויקט שלך."
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItems, setExpandedItems] = useState({});

  const filteredQuestions = mockQuestions.filter((q) =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="faq-page" dir="rtl">
      {/* Header Section */}
      <div className="faq-header">
        <div className="container">
          <div className="header-icon">
            <HelpCircle size={48} />
          </div>

          <h1 className="header-title">
            שאלות <span className="gradient-text">נפוצות</span>
          </h1>

          <p className="header-subtitle">
            כל התשובות לשאלות הפופולריות ביותר על השירותים שלנו, תהליך העבודה והתמחיר
          </p>

          <div className="search-container">
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="חפש בשאלות ותשובות..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Questions Only */}
      <div className="faq-content">
        <div className="questions-container">
          {filteredQuestions.length === 0 ? (
            <div className="no-results">
              <MessageCircle size={48} className="no-results-icon" />
              <p className="no-results-title">לא נמצאו שאלות מתאימות לחיפוש שלך</p>
              <p className="no-results-subtitle">נסה לחפש במילים אחרות</p>
            </div>
          ) : (
            <div className="questions-list">
              {filteredQuestions.map((question) => (
                <div key={question._id} className="question-item">
                  <button
                    onClick={() => toggleExpanded(question._id)}
                    className="question-header"
                  >
                    <span className="question-text">
                      {question.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`chevron-icon ${expandedItems[question._id] ? 'expanded' : ''}`}
                    />
                  </button>

                  {expandedItems[question._id] && (
                    <div className="question-answer">
                      <p>{question.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Contact Section - Full Width */}
      <div className="bottom-contact-section">
        <div className="container">
          <MessageCircle size={40} className="contact-icon" />
          <h3 className="contact-title">לא מצאת את התשובה?</h3>
          <p className="contact-subtitle">
            הצוות שלנו כאן לענות על כל שאלה ולהוסיף תשובות לשאלות נפוצות
          </p>
          <div className="contact-buttons">
            <button className="contact-btn phone-btn">
              <Phone size={18} />
              התקשר עכשיו
            </button>
            <button className="contact-btn whatsapp-btn">
              <MessageCircle size={18} />
              צ'אט בווטסאפ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserQuestions;