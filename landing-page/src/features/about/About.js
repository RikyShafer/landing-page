import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">אודות WebWay</h1>
        <p className="text-xl text-gray-600">דרכך לעולם הדיגיטלי</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">מי אנחנו?</h2>
          <p className="text-gray-700 mb-4">
            WebWay היא חברה מובילה בתחום השיווק הדיגיטלי, המתמחה בפיתוח אתרים מתקדמים 
            ופתרונות שיווק דיגיטלי מותאמים אישית.
          </p>
          <p className="text-gray-700 mb-4">
            אנו מאמינים שכל עסק ראוי לנוכחות דיגיטלית מרשימה שמביאה תוצאות מדידות.
            הצוות שלנו משלב יצירתיות עם טכנולוגיה מתקדמת כדי ליצור חוויות דיגיטליות 
            שמעוררות השראה ומניבות תוצאות.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-xl font-semibold mb-4">המשימה שלנו</h3>
          <p className="mb-4">
            להפוך כל עסק לבלתי נשכח ברשת, עם אתרים שמספרים סיפור ומביאים תוצאות.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>עיצוב מותאם אישית</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>טכנולוגיה מתקדמת</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>תוצאות מדידות</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;