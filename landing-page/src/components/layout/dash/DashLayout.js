

import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

import "../../../styles/dash-dashLayout.css";
import Navbar from '../Navbar/Navbar'

const DashLayout = () => {


  return (
    <div className='container'>
    
      <div className='contemt'>
        <Navbar/>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default DashLayout
