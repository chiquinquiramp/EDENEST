import ServiceCard from "./ServiceCard";
import { useState } from "react";

function Services () {

  const {selectedService, setSelectedService} = useState(null);
    const services = [
        { title:"Childcare",
          description: "",
          icon: ""
        },
        { title: "Housekeeping",
          description: "",
          icon: ""
        },
        { title:"Senior Care",
          description:"",
          icon: ""
        },
        { title:"Personal Assistance",
          description:"",
          icon: ""
        },
        { title: "Home Maintenance",
        description: "",
        icon: ""
        },


      function handleLearnMore() {
        setSelectedService(service);
      }
];
    return (
        <section>
        {services.map((service) => (
          <ServiceCard
          key={service.title}
          service={service}
          onLearnMore={() => handleLearnMore(service)}
          />
           ))
        }
           {selectedService && (<p>You Selected: {selectedService.title}</p>  
          )}
        </section>
    );
}
export default Services;
