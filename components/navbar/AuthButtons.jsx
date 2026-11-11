import AuthLink from "./AuthLink";

function AuthButtons () {
    return (
<div className="flex items-center gap-6">
     <AuthLink href="/login" variant="text">
        Log In
     </AuthLink>
    
    <AuthLink href="/signup" variant="outlined">
        Sign Up
    </AuthLink>
    </div>
);
}

export default AuthButtons;

