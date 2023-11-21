import React from 'react';
import { Collapse } from 'bootstrap';
import faqData from '../data/Faq.json'

const FaqAccordion = () => {
    return (
        <div className="accordion" id="FAQ">
            {faqData.faqs.map((faq, index) => (
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded="true"
                            aria-controls={`collapse${index}`}
                        >
                            {faq.question}
                        </button>
                    </h2>
                    <div
                        id={`collapse${index}`}
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FaqAccordion;