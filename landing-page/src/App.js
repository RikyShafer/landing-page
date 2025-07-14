import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './features/homepage/homepage';

function App() {
  return (

       <Router>
            <Routes>
            {/* <Route element={<CheckLoginNotRequired />} > */}
                <Route index element={<Homepage />} />

      דף נחיתה שלנו
      אלופות העולם
      </Routes>
          </Router>


  );
}

export default App;
