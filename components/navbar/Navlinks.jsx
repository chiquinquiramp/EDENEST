import Link from "next/link";

function NavLinks() {
    return (
      <div className="flex items-center gap-8 font-sans text-[12px] font-medium tracking-[0.18em]">
    <Link href="/" className="hover:underline">Home</Link>
    <Link href="/about" className="hover:underline">About Us</Link>
    <Link href="/services" className="hover:underline">Services</Link>
    <Link href="/faq" className="hover:underline">FAQ</Link>
    <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    );
    }
    

    export default NavLinks;