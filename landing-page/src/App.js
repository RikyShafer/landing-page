import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './features/homepage/homepage';
import DashLayout from "./components/layout/dash/DashLayout";
function App() {
  return (

    <Router>
      <Routes>
        {/* <Route element={<CheckLoginNotRequired />} > */}
        <Route path='/' element={<DashLayout />}>
          <Route index element={<Homepage />} />

          דף נחיתה שלנו
          אלופות העולם
        </Route>
      </Routes>
    </Router>


  );
}

export default App;
