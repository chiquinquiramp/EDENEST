function HowItWorks () {
    const workFlow = [
        {
       title: "",
       description:'' 
        }, 
   
]
    return (
        <section>
        {workFlow.map((step) => (
            <div key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
            </div>
        ))}
        </section>
    );
}
export default HowItWorks;


