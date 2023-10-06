export type BlogProps = {
    _id: string;
    topic: string;
    e_topic: string;
    detail: string;
    e_detail: string;
    date: Date;
    location: string;
    e_location: string;
    category: string;
    nflag: boolean;
    picture: string[];
    eflag: boolean;
    status: string;
    undertaker: string;
    formattedDate: string;
}