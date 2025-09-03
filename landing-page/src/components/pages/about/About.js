import React from "react";
import '../../../styles/AboutPage.css';


export default function AboutPage() {
  return (
    <div className="about-container" dir="rtl">
      {/* Hero */}
      <header className="about-hero">
        <h1><span className="highlight">WebWay</span> אודות</h1>
        <p>
          אנחנו צוות של מומחים בשיווק דיגיטלי, מפתחים ומעצבים 
          הפועלים מתוך תשוקה לייצר חוויות דיגיטליות ייחודיות שמסוגלות להביא תוצאות אמיתיות ללקוחותינו.
        </p>
      </header>

      {/* Our Story */}
      <section className="story-section">
        <div className="story-image">
          <img src="/photo.jpg" alt="צוות עובד" />
          <div className="badge">+5 שנות ניסיון</div>
        </div>
        <div className="story-text">
          <h2>הסיפור שלנו</h2>
          <p>
            WebWay נוסדה בשנת 2020 מתוך חזון ברור – להנגיש לעסקים קטנים ובינוניים פתרונות
            דיגיטליים איכותיים שיביאו לתוצאות בשטח. לאורך השנים עבדנו עם עשרות לקוחות,
            פיתחנו אסטרטגיות מותאמות אישית, ויצרנו מערכות דיגיטליות שהפכו להצלחות.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <h2>הערכים שלנו</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>חדשנות</h3>
            <p>חשיבה מחוץ לקופסה והתאמת פתרונות יצירתיים</p>
          </div>
          <div className="value-card">
            <h3>דיוק</h3>
            <p>שימת דגש על פרטים קטנים ליצירת תוצאות מדויקות</p>
          </div>
          <div className="value-card">
            <h3>שקיפות</h3>
            <p>שיתוף הלקוחות לאורך כל הדרך</p>
          </div>
          <div className="value-card">
            <h3>תשוקה</h3>
            <p>עשייה מתוך אהבה אמיתית לעולם הדיגיטל</p>
          </div>
          <div className="value-card">
            <h3>אמינות</h3>
            <p>יחסים המבוססים על אמון ושירות הוגן</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <h2>הצוות שלנו</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="/images/team1.jpg" alt="חיה דוד" />
            <h3>חיה דוד</h3>
            <p>מנהלת פרויקטים</p>
          </div>
          <div className="team-card">
            <img src="/images/team2.jpg" alt="מיכאל אברהם" />
            <h3>מיכאל אברהם</h3>
            <p>מעצב UX/UI</p>
          </div>
          <div className="team-card">
            <img src="/images/team3.jpg" alt="שרה לוי" />
            <h3>שרה לוי</h3>
            <p>מפתחת Frontend</p>
          </div>
          <div className="team-card">
            <img src="/images/team4.jpg" alt="דניאל כהן" />
            <h3>דניאל כהן</h3>
            <p>מפתח Backend</p>
          </div>
        </div>
      </section>
    </div>
  );
}
