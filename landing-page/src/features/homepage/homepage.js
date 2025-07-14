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
                <img src='./logo.png' alt="Riky Web Design" className="homepage-logo" />
                <h1>בניית אתרים מותאמים אישית</h1>
                <p className="homepage-tagline">מפתחת אתרים עם חזון, עיצוב ייחודי, וטכנולוגיות מתקדמות</p>
                <button className="homepage-button" onClick={openModal}>חזרו אליי</button>
            </header>
            {showModal && <ContactAdd onClose={closeModal} />}
        </div>
    );
};

export default Homepage;
