
require("dotenv").config() 
const express = require("express") 
const cors = require("cors")
const cookieParser=require("cookie-parser")
const corsOptions = require("./config/corsOptions") 
const connectDB = require("./config/dbConn")
const mongoose=require("mongoose") 
const path = require('path');
const cors_proxy = require('cors-anywhere'); 

const PORT = process.env.PORT || 7000 

cors_proxy 
  .createServer({
    originWhitelist: [], 
  })

const app = express() 
connectDB() 

//middlewares 
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())  
app.use(express.static("public")) 
app.use(express.static(path.join(__dirname, 'app')));

//routes 
app.use("/api/auth", require("./routers/authRouter"))

 app.use("/api/users", require("./routers/routeUser"));
 app.use("/api/contact", require("./routers/routeContact"))
 app.use("/api/conversation", require("./routers/routeConversation"))
 
app.get("/",(req,res)=>{ // הגדרת מסלול בשם הפסוקה הראשונה ב-URL
res.send(`בדיקה האם השרת לדף נחיתה  עובד
  בעזרת ה' יצא לי  מדהים
    בשם ה' נעשה ונצליח `) // מענה לבקשת GET עם מחרוזת טקסט
})


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname+'app/index.html'));
});
mongoose.connection.once('open', () => { // התחברות מוצלחת למסד הנתונים
    console.log('Connected to MongoDB') // הדפסת הודעה על התחברות מוצלחת למסד הנתונים
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

})

mongoose.connection.on('error', err => { // שגיאה בהתחברות למסד הנתונים
    console.log(err) // הדפסת השגיאה
})