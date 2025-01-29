import { useAuth } from "../../context/authContext.jsx";
import { useNavigate } from "react-router-dom";
import AquaGemIcon from "../../assets/aquagem.png"
import LogoutIcon from "../../svg/logout-icon.svg"
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale-extreme.css";
import Button from "../Button/Button.jsx"
import * as auth from "../../actions/authActions.js"

const TooltipMessage = "Earn by completing habits, use to grow your aquarium friends"

function DashboardHeader({ toggleSidebar }) {
  const { user, removeUserState } = useAuth()
  const navigate = useNavigate()

  const handleUserLogout = async () => {
    try {
      await auth.logout()
      removeUserState()
      navigate("/")
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }
  return (
    <header className="flex items-center justify-between px-4 py-4 border-b border-accent">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hidden hover:bg-primary hover:text-secondary focus:outline-none focus:ring focus:ring-primary md:block transition-colors duration-200"
          aria-label="Toggle Sidebar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="ml-4 text-2xl font-bold">AquaHabits</h1>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium">Welcome, {user?.name} !</span>
        <Tippy content={TooltipMessage} placement="bottom-start" animation="scale-extreme">
          <div className="flex items-center space-x-2  px-2.5 py-0.5 rounded-full  font-medium text-neutral">
            <img src={AquaGemIcon} alt="Aquagem" className="w-5 h-5" />
            <span className="text-primary" >{user?.aquaCoins}</span>
          </div>
        </Tippy>
        <Button onClick={handleUserLogout} variant="btn-ghost" size="btn-xs" isCircle iconRight={LogoutIcon} iconAlt="Logout Icon"></Button>

      </div>
    </header>

  );
}

export default DashboardHeader;

