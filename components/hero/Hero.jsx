import TrustIndicators from "./TrustIndicators";
import HeroVisual from "./HeroVisual";

function Hero () {
    return (
        <section className="container mx-auto min-h-screen flex flex-col justify-center items-center gap-4 px-4">
        <h1 className="font-brand text-5xl md:text-7xl font-bold tracking-tight text-foreground ">
            EDENEST
            </h1>
        <p className="text-lg md:text-xl text-foreground/70 text-center">
            Where trust finds the right people.
            </p>

    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <button type="button"
        className="w-full sm:w-auto bg-edenest-green text-[#292b25] font-semibold px-6 py-3 rounded-lg
        hover:bg-edenest-green/80 transition-colors duration-200
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground">
            Find Trusted Help
            </button>
        
        <button type="button"
        className="w-full sm:w-auto border border-edenest-green text-foreground font-semibold px-6 py-3 rounded-lg
        hover:bg-edenest-green/10 transition-colors duration-200
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground">
            Find Opportunities</button>

    </div>
        <HeroVisual />
        <TrustIndicators />
        </section>
    );
}

export default Hero; 