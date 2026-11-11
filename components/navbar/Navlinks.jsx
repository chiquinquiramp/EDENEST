import Link from "next/link";

function NavLinks({ direction = "row", onNavigate }) {
  const layoutClasses = direction === "column"
  ? "flex flex-col items-start gap-6"
  : "flex flex-row items-center gap-8";
  
  return (
    <div className={`${layoutClasses} font-sans text-[12px] font-medium tracking-[0.18em]`}>
    <Link href="/" className="hover:underline" onClick={onNavigate}>
    Home</Link>
    <Link href="/about" className="hover:underline" onClick={onNavigate}>
      About Us</Link>
    <Link href="/services" className="hover:underline" onClick={onNavigate}>
    Services</Link>
    <Link href="/faq" className="hover:underline" onClick={onNavigate}>
    FAQ</Link>
    <Link href="/contact" className="hover:underline" onClick={onNavigate}>
    Contact</Link>
      </div>
    );

    }
    
    export default NavLinks;