import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/pages/homepage/homepage';
import DashLayout from "./components/layout/dash/DashLayout";
import UseraQuestion from "./components/pages/questions/UserQuestions.js";
import NotFoundPage404 from "./components/NotFoundPage404.js";

function App() {
  return (

    <Router>
      <Routes>
        {/* <Route element={<CheckLoginNotRequired />} > */}
        <Route path='/' element={<DashLayout />}>
          <Route index element={<Homepage />} />
          <Route path="question_answer" element={<UseraQuestion />} />
          דף נחיתה שלנו
          אלופות העולם
        </Route>
        <Route path="*" element={<NotFoundPage404/>} />
      </Routes>
    </Router>


  );
}

export default App;
