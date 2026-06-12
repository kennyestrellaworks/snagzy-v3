// src/components/Dropdown.jsx
import { useState, useRef } from "react";
import { ButtonIcon } from "./ButtonIcon";

export const NavButton = ({
  dropdownName,
  hasArrowIcon,
  isButtonStyle,
  isIconStyle,
  Icon,
  link,
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
    </div>
  );
};
