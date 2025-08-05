import React, { useEffect, useState } from 'react';
import './homepage.css';
// נכון:
import { motion } from 'framer-motion';

import ContactAdd from '../contact/registeration/ContactAdd';
import {
    // ArrowLeft,
    // Star,
    // Users,
    // TrendingUp,
    Target,
    Zap,
    BarChart3,
    Globe,
    // PlayCircle,
    // Check,
    // ArrowUp,
    // Sparkles
} from "lucide-react";
const Homepage = () => {
     const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    useEffect(() => {
        // IntersectionObserver
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.feature-card, .testimonial-card, .stat-item').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);
    const [activeFeature, setActiveFeature] = useState(0);
  
    const features = [
        {
            icon: Target,
            title: "פרסום ממוקד",
            description: "הגעה מדויקת לקהל היעד שלך עם אלגוריתמים מתקדמים"

        },
        {
            icon: BarChart3,
            title: "אנליטיקה מתקדמת",
            description: "מעקב אחר ביצועים בזמן אמת עם דוחות מפורטים"

        },
        {
            icon: Zap,
            title: "אוטומציה חכמה",
            description: "חיסכון בזמן עם כלים אוטומטיים לניהול קמפיינים"

        },
        {
            icon: Globe,
            title: "נוכחות גלובלית",
            description: "הרחבת הטווח שלך לשווקים בינלאומיים"

        }
    ];
    const showDemo = () => alert('כאן יופיע סרטון הדגמה');
    const learnMore = () => alert('כאן יהיה קישור למידע נוסף');

    return (
        <div className="hero-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="main-title">
                        המסע שלך לאתר <span className="highlighted">מושלם</span>
                    </h1>
                    <p className="subtitle">
                        אתרים מותאמים אישית, נבנים במהירות שיא, ניהול עם פרויקטים רבים, פתרונות זמינים
                    </p>
                    <div className="buttons">
                        <button className="start-journey-btn" onClick={openModal}>
                            התחל את המסע שלך←
                        </button>
                        <button className="demo-button" onClick={showDemo}>
                            <div className="play-icon"></div>
                            צפה בסרטון הדגמה
                        </button>
                    </div>
                </div>

                <div className="stats">
                    <div className="stat-item">
                        <span className="stat-number">+500</span>
                        <span className="stat-label">לקוחות מרוצים</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">98%</span>
                        <span className="stat-label">שביעות רצון</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">תמיכה טכנית</span>
                    </div>
                </div>
            </section>


            {/* Why Choose */}
            <section className="why-choose">
                <div className="container">
                    <h2 className="section-title">
                        למה לבחור ב
                        <span style={{ color: '#7e3ff2' }}>Web</span>
                        <span style={{ color: '#18c3e2' }}>Way</span>?
                    </h2>
                    <p className="section-subtitle">
                        פתרונות שיווק דיגיטלי מתקדמים המותאמים לעסק שלך
                    </p>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`feature-card ${activeFeature === index ? 'active-feature' : ''}`}
                                onMouseEnter={() => setActiveFeature(index)}
                            >
                                <div className={`feature-icon ${feature.iconClass}`}>
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Testimonials */}
            <section className="testimonials">
                <div className="container">
                    <h2 className="section-title">מה הלקוחות שלנו אומרים</h2>
                    <p className="section-subtitle">אלפי לקוחות כבר בחרו בנו - הצטרפו אליהם</p>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p className="testimonial-text">"שירות מקצועי ותמיכה מעולה. ממליצה בחום!"</p>
                            <div className="testimonial-author">מיכל אברהם</div>
                            <div className="testimonial-role">חברת יעוץ</div>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">⭐⭐⭐⭐</div>
                            <p className="testimonial-text">"הכלים האנליטיים פשוט מדהימים. ראינו צמיחה של 300%"</p>
                            <div className="testimonial-author">דני לוי</div>
                            <div className="testimonial-role">סטארט-אפ דיגיטל</div>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars">⭐⭐⭐⭐⭐</div>
                            <p className="testimonial-text">"WebWay שינה לחלוטין את אופן הפרסום שלנו. תוצאות מדהימות!"</p>
                            <div className="testimonial-author">שרה כהן</div>
                            <div className="testimonial-role">טכנולוגיות חדשניות</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <div className="container">
                    <div className="cta-icon">✨</div>
                    <h2 className="section-title">מוכן להתחיל?</h2>
                    <p className="section-subtitle">
                        הצטרף לאלפי לקוחות מרוצים והתחל את המסע שלך לאתר מושלם עוד היום
                    </p>
                    <div className="cta-buttons">
                        <button className="start-journey-btn" onClick={openModal}>בוא נתחיל</button>
                        <button className="btn-outline" onClick={learnMore}>למד עוד</button>
                    </div>
                </div>
            </section>
              {showModal && <ContactAdd onClose={closeModal} />}
        </div>
    );
};

export default Homepage;
