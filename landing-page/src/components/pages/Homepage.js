import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowLeft, 
  Star, 
  Users, 
  TrendingUp, 
  Target, 
  Zap, 
  BarChart3, 
  Globe, 
  PlayCircle, 
  Check,
  Sparkles,
  Rocket,
  Shield,
  Heart
} from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const Homepage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // נתונים דינמיים
  const stats = [
    { icon: Users, number: 1000, label: 'לקוחות מרוצים', suffix: '+' },
    { icon: Star, number: 4.9, label: 'דירוג ממוצע', suffix: '/5' },
    { icon: Globe, number: 50, label: 'מדינות', suffix: '+' },
    { icon: Rocket, number: 99, label: 'זמן פעילות', suffix: '%' }
  ];

  const features = [
    {
      icon: Zap,
      title: 'מהירות ברק',
      description: 'אתרים שנטענים תוך שניות עם טכנולוגיות מתקדמות',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'אבטחה מקסימלית',
      description: 'הגנה מתקדמת נגד איומי סייבר וגיבוי אוטומטי',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: Heart,
      title: 'תמיכה 24/7',
      description: 'צוות מקצועי זמין עבורכם בכל שעות היממה',
      color: 'from-pink-400 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'אנליטיקה מתקדמת',
      description: 'מעקב מפורט אחר ביצועים ונתוני משתמשים',
      color: 'from-purple-400 to-indigo-500'
    }
  ];

  const testimonials = [
    {
      name: 'שרה לוי',
      role: 'מנכ"לית סטארט-אפ',
      content: 'WebWay שינה לנו את המשחק לחלוטין. האתר שלנו עכשיו מהיר ויפה בצורה מדהימה!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'דני כהן',
      role: 'בעל עסק',
      content: 'השירות המקצועי והתמיכה הטכנית פשוט מעולים. ממליץ בחום!',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'מיכל רוזן',
      role: 'מעצבת גרפית',
      content: 'העיצוב החדשני והחוויה המשתמש הם פשוט בלתי נתפסים!',
      rating: 5,
      avatar: '🎨'
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* רקע אנימציה */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"
        />
        
        {/* חלקיקים מרחפים */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-6"
            >
              <Sparkles className="w-4 h-4 ml-2 text-yellow-400" />
              <span className="text-sm font-medium">חדשנות בכל פיקסל</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              בואו נבנה את
              <span className="gradient-text block mt-2">
                האתר של החלומות
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              פתרונות טכנולוגיים מתקדמים שיקחו את העסק שלכם לשלב הבא. 
              עיצוב מדהים, ביצועים מהירים ותמיכה מקצועית.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" icon={Rocket}>
                בואו נתחיל
              </Button>
              <Button variant="secondary" size="lg" icon={PlayCircle}>
                צפו בהדגמה
              </Button>
            </motion.div>

            {/* סטטיסטיקות */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              למה <span className="gradient-text">WebWay</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              אנחנו מביאים לכם את הטכנולוגיות הכי מתקדמות עם השירות הכי אישי
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full" glassEffect>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mb-6`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              מה הלקוחות שלנו אומרים
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card glassEffect className="h-full">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl ml-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              מוכנים להתחיל?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              בואו ניצור משהו מדהים ביחד. קבלו ייעוץ חינם והצעת מחיר מותאמת אישית
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" icon={Rocket}>
                קבלו הצעת מחיר חינם
              </Button>
              <Button variant="outline" size="lg">
                דברו איתנו
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;