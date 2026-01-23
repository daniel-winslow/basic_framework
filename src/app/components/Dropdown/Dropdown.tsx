import { useState, useRef, useEffect, ReactNode } from 'react';
import AnimatedHamburgerIcon from './AnimatedHamburgerIcon';
import DropdownItemList, { DropdownItemProps } from './DropdownItemList';

interface DropdownProps {
  /** Optional. Trigger element to replace the default hamburger icon */
  trigger?: ReactNode;
  /** Items to show in the top section of the dropdown */
  topItems: DropdownItemProps[];
  /** Optional. Items to show in the bottom section of the dropdown */
  bottomItems?: DropdownItemProps[];
  /** Optional. Whether to use the animated hamburger icon as the trigger */
  useHamburger?: boolean;
}

/** Dropdown component with optional animated hamburger icon trigger */
const Dropdown = ({ trigger, topItems, bottomItems, useHamburger = false }: DropdownProps) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const triggerElement = useHamburger ? <AnimatedHamburgerIcon isOpen={isOpen} /> : trigger;

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
        {triggerElement}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <DropdownItemList topItems={topItems} bottomItems={bottomItems} />
        </div>
      )}
    </div>
  );
}

export default Dropdown;