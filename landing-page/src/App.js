import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './features/homepage/homepage';
import DashLayout from "./components/layout/dash/DashLayout";
import UseraQuestion from "./features/questions/UserQuestions"
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
      </Routes>
    </Router>


  );
}

export default App;
