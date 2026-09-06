function ServiceCard ( {service, onLearnMore }) {
    return (
        <div className="p-6 border rounded shadow hover:shadow-lg">
        <span>{service.icon}</span>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <button 
        className="bg-black text-white px-4 py-2"
        onClick={onLearnMore}>
            Learn More
            </button>
        </div>
    )
}
export default ServiceCard;
