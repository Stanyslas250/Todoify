import { LuMoonStar, LuSun } from "react-icons/lu";
import { useThemeToggler } from "../../../hooks/useThemeToggler";

export default function ThemSwapper() {
  // Toogle theme
  const { toggle } = useThemeToggler(true);
  return (
    <div>
      <label className="rounded-lg swap swap-rotate btn btn-square text-primary">
        <input type="checkbox" className="theme-controller" onClick={toggle} />
        <LuMoonStar className="text-xl swap-on" />
        <LuSun className="text-xl swap-off" />
      </label>
    </div>
  );
}
