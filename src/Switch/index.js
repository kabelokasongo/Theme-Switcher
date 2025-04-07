import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme(); // Destructure toggleTheme from useTheme
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme} // Call toggleTheme on change
        style={{ display: "none" }} // Hide the default checkbox

      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
