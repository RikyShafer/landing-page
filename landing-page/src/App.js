import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './features/homepage/homepage';
import WebWayLayout from "./components/layout/site/WebWayLayout";
import UseraQuestion from "./features/questions/UserQuestions";
import About from "./features/about/About";
import Blog from "./features/blog/Blog";
import FAQ from "./features/faq/FAQ";
import Contact from "./features/contact/Contact";
function App() {
  return (

    <Router>
      <Routes>
        {/* <Route element={<CheckLoginNotRequired />} > */}
        <Route path='/' element={<WebWayLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="question_answer" element={<UseraQuestion />} />
        </Route>
      </Routes>
    </Router>


  );
}

export default App;
