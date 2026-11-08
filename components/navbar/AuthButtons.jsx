import Link from "next/link";

function AuthButtons () {
    return (
     <div 
     className="flex items-center gap-6">
     <Link href="/login" 
    className="flex w-fit items-center font-sans text-[12px] font-medium uppercase tracking-[0.18em] min-h-11 hover:underline" >
    Log In
    </Link>

    <Link href="/signup" 
    className="flex w-fit items-center font-sans text-[12px] font-medium uppercase tracking-[0.18em] min-h-11 border border-foreground px-4 hover:underline"> 
    Sign Up 
    </Link> 

    </div>
        
    );
}

export default AuthButtons;
