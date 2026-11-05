import TrustIndicators from "./TrustIndicators";
import HeroVisual from "./HeroVisual";

function Hero () {
    return (
        <section className="container mx-auto min-h-screen flex flex-col justify-center items-center gap-4 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground ">
            EDENEST
            </h1>
        <p className="text-lg md:text-xl text-foreground/70 text-center">
            Where trust finds the right people.
            </p>

    <div className="flex flex-col sm:flex-row gap-4">
        <button type="button"
        className="bg-edenest-green text-foreground font-semibold px-6 py-3 rounded-lg">
            Find Trusted Help
            </button>
        
        <button type="button"
        className="border border-edenest-green text-foreground font-semibold px-6 py-3 rounded-lg">
            Find Opportunities</button>

    </div>
        <HeroVisual />
        <TrustIndicators />
        </section>
    );
}

export default Hero; 