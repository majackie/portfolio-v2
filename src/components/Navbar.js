import Menu from "./Menu";
import Theme from "./Theme";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-black">
      <Menu />
      <Theme />
    </div>
  );
}

export default Navbar;
