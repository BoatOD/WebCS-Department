'use client';

import { ResearchAccordionProps } from "@/types/accordion";
import { Accordion } from 'flowbite-react';
import { useTranslations } from "next-intl";

const ResearchAccordion = ({ data }: { data: ResearchAccordionProps[] }) => {

    const r = useTranslations("Research");
    return (
        <Accordion collapseAll className="bg-[#F8A138] bg-opacity-70">
            {data.map((item, index) => (
                <Accordion.Panel key={index}>
                    <Accordion.Title className="text-black font-bold bg-[#F8A138] bg-opacity-70 hover:bg-[#F29D35] hover:bg-opacity-35">
                        {item.topic}
                    </Accordion.Title>
                    <Accordion.Content>
                        <div className="mb-2">
                            <span className="font-bold">{r("title0")}</span>
                            <span>{item.description}</span>
                        </div>
                        <div className="mb-2">
                            <span className="font-bold">{r("title1")}</span>
                            <span>
                                {item.researchers.length === 1 ? (
                                    <a
                                        href={item.researchers[0].personal_web}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-gray-700 underline cursor-pointer"
                                    >
                                        {item.researchers[0].e_name}
                                    </a>
                                ) : (
                                    <span>
                                        {item.researchers.map((researcher, index) => (
                                            <span key={index}>
                                                <a
                                                    href={researcher.personal_web}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-gray-700 underline cursor-pointer"
                                                >
                                                    {researcher.e_name}
                                                </a>
                                                {index < item.researchers.length - 1 && ', '}
                                            </span>
                                        ))}
                                    </span>
                                )}
                            </span>
                        </div>
                    </Accordion.Content>
                </Accordion.Panel>
            ))}
        </Accordion>
    );
};

export default ResearchAccordion

