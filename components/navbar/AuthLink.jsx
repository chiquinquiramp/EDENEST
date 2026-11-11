import Link from "next/link";

function AuthLink({ href, variant, children, onClick }) {
    const variantClasses = variant === "outlined"
    ? "border border-foreground px-4"
    :"";
    return (
        <Link
        href={href}
        onClick={onClick}
        className={`flex w-fit items-center font-sans text-[12px] font-medium uppercase tracking-[0.18em] min-h-11 hover:underline ${variantClasses}`}>
        {children}
        </Link>
    );
}

export default AuthLink;