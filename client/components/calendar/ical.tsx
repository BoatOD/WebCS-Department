// components/ical.tsx

import React from 'react';

interface ICalProps {
    title: string;
    location: string;
    startDate: Date;
    endDate: Date;
    description: string;
}

const ICal: React.FC<ICalProps> = ({ title, location, startDate, endDate, description }) => {
    const generateICalEvent = () => {
        const eventStartDate = startDate.toISOString();
        const eventEndDate = endDate.toISOString();

        const iCalData = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
LOCATION:${location}
DESCRIPTION:${description}
DTSTART:${eventStartDate}
DTEND:${eventEndDate}
END:VEVENT
END:VCALENDAR
`;

        // Create a Blob with the iCal data
        const blob = new Blob([iCalData], { type: 'text/calendar' });

        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create a link element for downloading
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title}.ics`;
        a.click();

        // Clean up
        URL.revokeObjectURL(url);
    };

    return (
        <button onClick={generateICalEvent} className='underline hover:opacity-75'>
            iCal
            </button>
    );
};

export default ICal;
