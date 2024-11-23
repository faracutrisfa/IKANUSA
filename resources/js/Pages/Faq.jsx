import LandingPageLayout from '@/Layouts/LandingPageLayout';
import React from "react";
import { Accordion } from "flowbite-react";
import { Head } from '@inertiajs/react';

const Faq = ({ faqs = [] }) => {
    return (
        <section>
            <Head title="FAQ" />
            <LandingPageLayout>
                <div className="border-x-2 border-b-2 text-dark-blue-active rounded-2xl shadow-lg px-10 lg:px-16 xl:px-24 py-20">
                    {faqs && faqs.length > 0 ? (
                        <Accordion collapseAll>
                            {faqs.map((faq, index) => (
                                <Accordion.Panel key={index}>
                                    <Accordion.Title
                                        className='font-bold text-base xl:text-xl tracking-widest'>
                                        {faq.question}
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <p className="text-sm xl:text-lg tracking-wide">{faq.answer}</p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                            ))}
                        </Accordion>
                    ) : (
                        <p className="text-center text-xl lg:text-2xl  font-semibold animate-bounce tracking-wide">Tidak ada FAQ yang tersedia.</p>
                    )}
                </div>
            </LandingPageLayout>
        </section>
    );
};

export default Faq;
