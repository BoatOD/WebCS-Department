export type AccordionProps = {
    topic: string;
    description: string;
    researchers: {
        e_name: string;
        personal_web: string;
    }[];
    // Define the types for triggerEl and targetEl
    triggerEl: HTMLElement | null;
    targetEl: HTMLElement | null;
}