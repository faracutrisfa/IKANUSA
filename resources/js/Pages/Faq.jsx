import LandingPageLayout from '@/Layouts/LandingPageLayout';
import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = ({ faqs = [] }) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (index) => (event, isExpanded) => {
        setExpanded(isExpanded ? index : false);
    };

    return (
        <section>
            <Head title="FAQ" />
            <LandingPageLayout>
                <div className="px-10 lg:px-16 xl:px-24 py-10 lg:py-20">
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === index}
                            onChange={handleChange(index)}
                            sx={{
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                                borderRadius: '1rem',
                                marginBottom: '1rem',
                                backgroundColor: '#DAF0F9',
                                '&:before': { display: 'none' },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index}-content`}
                                id={`panel${index}-header`}
                                className="font-semibold text-base xl:text-xl tracking-wide"
                            >
                                <h2>{faq.question}</h2>
                            </AccordionSummary>
                            <AccordionDetails className="px-4 py-2">
                                <p className="text-sm xl:text-lg tracking-wider">{faq.answer}</p>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </LandingPageLayout>
        </section>
    );
};

export default Faq;