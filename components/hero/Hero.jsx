import TrustIndicators from "./TrustIndicators";
import HeroVisual from "./HeroVisual";

function Hero () {
    return (
        <section className="container mx-auto min-h-screen flex flex-col justify-center items-center gap-4 px-4">
        <h1>EDENEST</h1>
        <p>Where trust finds the right people.</p>


        <button type="button">Find Trusted Help</button>
        <button type="button">Find Opportunities</button>


        <HeroVisual />
        <TrustIndicators />
        </section>
    );
}

export default Hero; 