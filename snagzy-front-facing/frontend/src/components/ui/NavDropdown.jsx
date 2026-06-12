// src/components/Dropdown.jsx
import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ButtonIcon } from "./ButtonIcon";

export const NavDropdown = ({
  dropdownName,
  listItems,
  hasArrowIcon,
  isButtonStyle,
  isIconStyle,
  Icon,
  link,
  position,
  dropdownList,
  dropdownListHover,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const leaveTimer = useRef(null);

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
          dropdownName={dropdownName}
          hasArrowIcon={hasArrowIcon}
          isButtonStyle={isButtonStyle}
          isIconStyle={isIconStyle}
          Icon={Icon}
          link={link}
          isOpen={isOpen}
        />
      </div>

      {isOpen && (
        <div
          className={`${position} ${dropdownList} mt-2 ${
            isButtonStyle ? "w-44" : "w-32"
          } rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10`}
        >
          <div className="py-1" role="none">
            {listItems.map((item, index) => (
              <NavLink
                key={index}
                className={`${dropdownListHover} block px-4 py-2 text-sm theme-list-text theme-list-item transition duration-100`}
                to=""
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
