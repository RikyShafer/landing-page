import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import './navbar.css';
// import useAuth from "../../hooks/useAuth";
// import { useSendLogoutMutation } from "../../features/auth/authApiSlice";
import { MdLogout, MdDensityMedium, MdEmojiPeople, MdFace, MdOutlinePermIdentity, MdOutlineSearch } from "react-icons/md";
import "./navbar.css"


const Navbar = () => {

  //   const [logout, { isSuccess: isLogoutSuccess }] = useSendLogoutMutation()
  const navigate = useNavigate();
  const location = useLocation();
  //   const { firstname, lastname, image, isUser, isAdmin } = useAuth();

  //   const [isPersonalZoneOpen, setIsPersonalZoneOpen] = useState(false);
  //   const [selectedOption, setSelectedOption] = useState("האזור האישי");
  //   const logoutClick = () => {
  //     console.log("logout")
  //     logout()
  //   }

  //   const handleSelectOption = (option) => {
  //     setSelectedOption(option);
  //     setIsPersonalZoneOpen(false);
  //   };

  //   useEffect(() => {
  //     if (isLogoutSuccess) {
  //       navigate("/")
  //     }

  //   }, [isLogoutSuccess])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };



  // פונקציה שמחזירה className בהתאם לסטטוס של isActive
  const getNavLinkClass = (isActive) => isActive ? "active-navlink-nav" : "";
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbarBox">
      {/* for mobile only */}
      <img className="iphone-menu" onClick={toggleMenu} />

      {isMenuOpen && (
        <div className="navbar-under-homepage">
          <NavLink to="/dash/about" className={({ isActive }) => getNavLinkClass(isActive)}>אודות</NavLink>
          <NavLink to="/dash/astro" className={({ isActive }) => getNavLinkClass(isActive)}>אסטרולוגיה</NavLink>
          <NavLink to="/dash/diagnosis" className={({ isActive }) => getNavLinkClass(isActive)}>אבחונים</NavLink>
          <NavLink to="/dash/reviews" className={({ isActive }) => getNavLinkClass(isActive)}>מה אומרים עלינו?</NavLink>
          <NavLink to="/dash/courses" className={({ isActive }) => getNavLinkClass(isActive)}>קורסים</NavLink>
          <button onClick={() => scrollToSection("contact-section")}>יצירת קשר</button>
        </div>
      )}
      <div className="navbar-top-homepage">
        <div className="nav-hello">
          <img
            src="/account-white.png"
            className="account-profile"
            alt="account"
          />
          היי  </div>

        {!isHomePage && (
          <button className="logout-button"
          //   onClick={logoutClick}
          >
            <MdLogout />
            יציאה
          </button>
        )}

      </div>
      <div className="navbar-under-homepage">
        <img className="logo-homepage" src="/logo.png" />
        <NavLink to="/dash/about" className={({ isActive }) => getNavLinkClass(isActive)}>אודות</NavLink>
        <NavLink to="/dash/astro" className={({ isActive }) => getNavLinkClass(isActive)}>אסטרולוגיה</NavLink>
        <NavLink to="/dash/diagnosis" className={({ isActive }) => getNavLinkClass(isActive)}>אבחונים</NavLink>
        <NavLink to="/dash/reviews" className={({ isActive }) => getNavLinkClass(isActive)}>מה אומרים עלינו?</NavLink>
        <NavLink to="/dash/courses" className={({ isActive }) => getNavLinkClass(isActive)}>קורסים</NavLink>
        <button onClick={() => scrollToSection("contact-section")}>יצירת קשר</button>
      </div>
    </div>

  );
};

export default Navbar;
