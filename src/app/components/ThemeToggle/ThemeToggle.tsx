import { useState, useEffect } from 'react';

/** Theme Toggle Switch Component. Stores current selection in localStorage and updates colors. Does NOT use `data-theme` attribute */
const ThemeToggle = () => {
  const [ isDark, setIsDark ] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('theme-dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('theme-dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('theme-dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
      />
      <span className="switch-slider"></span>
    </label>
  );
}

export default ThemeToggle;