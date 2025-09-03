import React, { useState } from 'react';
import './homepage.css';
import ContactAdd from '../contact/registeration/ContactAdd';

const Homepage = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div className="homepage-container">
            <header className="homepage-header">
                <img src="logo.png" alt="PeakCode Logo" className="homepage-logo" />
                <p className="homepage-subtitle">אתרים שמייצרים תוצאות</p>
                <p className="homepage-tagline">
                    בואו נבנה לכם אתר עם נוכחות – עיצוב מהפנט, חוויית משתמש מוקפדת, וביצועים עוצמתיים.
                    אני כאן כדי לקחת את העסק שלכם לשלב הבא בדיגיטל.
                </p>
                <button className="homepage-button" onClick={openModal}>לקביעת שיחה →</button>
            </header>

            <section className="homepage-content">
                <h2 className="section-title">מה הופך את האתרים שלי לבלתי נשכחים?</h2>
                <div className="features">
                    <div className="feature">
                        <h3>UX מרהיב</h3>
                        <p>משתמשים נהנים מכל קליק – עם זרימה טבעית ועיצוב שמתאים בדיוק לצרכים.</p>
                    </div>
                    <div className="feature">
                        <h3>פיתוח בטכנולוגיה מתקדמת</h3>
                        <p>React, Node.js, אנימציות, ופתרונות ענן – הכול במטרה להוביל אתכם קדימה.</p>
                    </div>
                    <div className="feature">
                        <h3>מותאם לכל עסק</h3>
                        <p>אתר שמספר את הסיפור הייחודי של העסק שלך, ומשאיר חותם אמיתי ברשת.</p>
                    </div>
                </div>
            </section>

            <section className="call-to-action">
                <h2>רוצים לראות איך זה נראה בפועל?</h2>
                <p>שלחו לי הודעה וקבלו הדגמה חינמית לאתר מעוצב ומוכן לפי תחום הפעילות שלכם.</p>
                <button className="homepage-button" onClick={openModal}>בואו נתחיל →</button>
            </section>

            {showModal && <ContactAdd onClose={closeModal} />}
        </div>
    );
};

export default Homepage;
