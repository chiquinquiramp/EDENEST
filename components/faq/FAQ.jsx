"use client";
import { useState } from "react";

function FAQ () {
    const [openQuestion, setOpenQuestion] = useState(null);
    const faq = [
        {
            id: "provider-verification",
            question: "How are providers verified?",
            answer:""
        },
        {
            id:"payment",
            question: "How does payment work?",
            answer:""
        },
        {
            id: "provider-no-show",
            question: "What happens if a provider doesn't show up?",
            answer:""
        }, 
        {
            id: "reviews",
            question: "Can I see reviews and ratings?",
            answer:""
        },
        {
            id:"help",
            question: "Can I get help from a real person?",
            answer:""
        },  
    ]

    return (
        <section className="w-full max-w-3xl mx-auto">\
        <h2 className="mb-8 text-3x1 font-semibold">
          Frequently Asked Questions
        </h2>
        {faq.map((question) => (
        <div key={question.id}>
            <button type="button"
            onClick={()=> setOpenQuestion(openQuestion === question.id ? null : question.id)}>
            {question.question}
            </button>
        {openQuestion === question.id && (<p>{question.answer}</p>)}
     </div>
    ))}
    </section>
);
}
export default FAQ;

