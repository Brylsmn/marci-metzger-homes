import { useState, useRef, useEffect } from 'react';

export const useDropdowns = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});

  const dropdowns = [
    { id: 'location', label: 'Location' },
    { id: 'type', label: 'Property Type' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'bathroom', label: 'Bathroom' },
    { id: 'sort', label: 'Sort By' },
  ];

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutside = Object.values(dropdownRefs.current).every(
        (ref) => ref && !ref.contains(event.target)
      );
      if (clickedOutside) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return {
    openDropdown,
    toggleDropdown,
    closeDropdown,
    dropdownRefs,
    dropdowns,
  };
};