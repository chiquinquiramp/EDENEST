import NavLinks from "./Navlinks";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";
import AuthLink from "./AuthLink";
function Navbar() {
    return (
        <nav>
       
        {/* Desktop navigation */}
        <div className="hidden md:flex w-full items-center justify-between px-20 py-[22px] uppercase">
        <NavLinks direction="row" />
        <AuthButtons />
        </div>

        {/* Mobile navigation */}
        <div className="relative flex md:hidden px-6 py-[22px] items-center justify-between">
        <MobileMenu />

        <AuthLink href="/signup" variant="text">
        Sign Up
        </AuthLink>

        </div>

        </nav>
    );
}

export default Navbar; 