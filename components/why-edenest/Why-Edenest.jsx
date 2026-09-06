
function WhyEdenest () {

    const reasons = [
        {
        title: "",
        description: "..."
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
