import Menu from "./Menu";
import Theme from "./Theme";

function Navbar() {
  return (
    <div id="navbar" className="flex justify-between items-center bg-white dark:bg-black pt-4 pb-4">
      <Menu />
      <Theme />
    </div>
  );
}

export default Navbar;
