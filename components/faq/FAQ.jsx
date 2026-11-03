"use client";

import { useState } from "react";

function FAQ() {
    const [openQuestion, setOpenQuestion] = useState(null);

    const faq = [
        {
            id: "provider-verification",
            question: "How are providers verified?",
            answer: ""
        },
        {
            id: "payment",
            question: "How does payment work?",
            answer: ""
        },
        {
            id: "provider-no-show",
            question: "What happens if a provider doesn't show up?",
            answer: ""
        },
        {
            id: "reviews",
            question: "Can I see reviews and ratings?",
            answer: ""
        },
        {
            id: "help",
            question: "Can I get help from a real person?",
            answer: ""
        }
    ];

    return (
        <section className="w-full max-w-3xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold">
                Frequently Asked Questions
            </h2>

            {faq.map((question) => (
                <div
                    className="border-b border-zinc-200 py-5"
                    key={question.id}
                >
                    <button
                        type="button"
                        className="flex w-full items-center justify-between text-left"
                        aria-expanded={openQuestion === question.id}
                        aria-controls={`faq-answer-${question.id}`}
                        onClick={() =>
                            setOpenQuestion(
                                openQuestion === question.id
                                    ? null
                                    : question.id
                            )
                        }
                    >
                        <span>{question.question}</span>

                        <span>
                            {openQuestion === question.id ? "-" : "+"}
                        </span>
                    </button>

                    {openQuestion === question.id && (
                        <p
                            id={`faq-answer-${question.id}`}
                            className="mt-3 text-zinc-600"
                        >
                            {question.answer}
                        </p>
                    )}
                </div>
            ))}
        </section>
    );
}

export default FAQ;