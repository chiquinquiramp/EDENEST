
function WhyEdenest () {

    const reasons = [
        {
        title: "Verified Professionals",
        description: "Every professional must complete our required verification process before being listed."
    },
    {
        title: "",
        description: "..."
    }]
    return (
    <section>
    {reasons.map((reason) => (
        <div key={reason.title}>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
        </div>
    ))}
    </section>
    );
}

export default WhyEdenest;
