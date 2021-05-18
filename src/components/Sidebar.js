import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({isOPen, toggleSidebar}) => {
  return (
    <aside className={`sidebar ${isOPen ? "show-sidebar" : " "}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass={`${isOPen ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${isOPen ? "sidebar-icons" : ""}`}  />
      </div>
    </aside>
  )
}

export default Sidebar
