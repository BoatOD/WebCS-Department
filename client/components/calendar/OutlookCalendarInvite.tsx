import React from 'react';

interface OutlookCalendarInviteProps {
    eventDetails: {
        subject: string;
        location: string;
        startDate: Date;
        endDate: Date;
        description: string;
    };
}

const OutlookCalendarInvite: React.FC<OutlookCalendarInviteProps> = ({ eventDetails }) => {
    const generateOutlookCalendarInvite = () => {
        const { subject, location, startDate, endDate, description } = eventDetails;
        const outlookLink = `https://outlook.live.com/owa/?path=/calendar/action/compose&subject=${encodeURIComponent(
            subject
        )}&startdt=${startDate.toISOString()}&enddt=${endDate.toISOString()}&location=${encodeURIComponent(
            location
        )}&body=${encodeURIComponent(description)}`;
        window.open(outlookLink, '_blank');
    };

    return (
        <button onClick={generateOutlookCalendarInvite} className="underline hover:opacity-75">
            Outlook
        </button>
    );
};

export default OutlookCalendarInvite;
