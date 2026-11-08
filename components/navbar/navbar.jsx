import NavLinks from "./Navlinks";
import AuthButtons from "./AuthButtons";

function Navbar() {
    return (
        <nav
        className="flex items-center justify-between px-6 md:px-20 py-[22px] uppercase" >
        <NavLinks />
        <AuthButtons />
        </nav>
    );
}

export default Navbar; 