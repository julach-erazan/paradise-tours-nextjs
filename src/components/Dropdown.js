import { Button, DropdownHeader } from 'flowbite-react';
import React, { useState } from 'react';

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{backgroundColor:'none',border:'none'}}
        className=" text-white rounded focus:outline-none focus:bg-blue-600"
      >
        Dropdown
      </Button>
      {isOpen && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute mt-2 right-0 z-10"
        >
          <div className="bg-white border rounded-lg shadow-lg">
            {options.map((option, index) => (
              <a
                key={index}
                href={option.url}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                {option.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
