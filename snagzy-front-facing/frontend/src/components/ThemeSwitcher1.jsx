import { useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { ButtonIcon } from "./ui/ButtonIcon";

export const ThemeSwitcher = ({ listItems, isButtonStyle, Icon, position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const leaveTimer = useRef(null);
  const { toggleTheme } = useTheme();

  const handleMouseEnter = () => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimer.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <ButtonIcon
          Icon={Icon}
          className={`${isOpen ? "theme-btn-icon-bg-is-open" : ""}`}
        />
      </div>

      {isOpen && (
        <div
          className={`${position} mt-2 ${
            isButtonStyle ? "w-56" : "w-32"
          } rounded-md shadow-lg theme-list ring-1 ring-black ring-opacity-5 z-10`}
        >
          <div className="py-1 " role="none">
            {listItems.map((item, index) => (
              <button
                key={index}
                className={`block w-full px-4 py-2 text-left text-sm theme-list-text theme-list-item transition duration-100`}
                onClick={() => toggleTheme(item.slug)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
