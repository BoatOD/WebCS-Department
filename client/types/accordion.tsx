export type ResearchAccordionProps = {
    topic: string;
    description: string;
    researchers: {
        e_name: string;
        personal_web: string;
    }[];
}

type FAQsAccordionProps = {
    question: string;
    answer: string;
}

export default FAQsAccordionProps