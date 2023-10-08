import React from 'react';

type GoogleCalendarProps = {
  eventDetails: {
    title: string;
    location: string;
    startDate: Date;
    endDate: Date;
    description: string;
  };
};

const GoogleCalendar: React.FC<GoogleCalendarProps> = ({ eventDetails }) => {
  const { title, location, startDate, endDate, description } = eventDetails;

  // Convert dates to string format
  const startStr = startDate.toISOString().replace(/-|:|\.\d+/g, '');
  const endStr = endDate.toISOString().replace(/-|:|\.\d+/g, '');

  // Construct the Google Calendar URL
  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${startStr}/${endStr}&details=${encodeURIComponent(
    description
  )}&location=${encodeURIComponent(location)}`;

  return (
    <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer" className='underline hover:opacity-75'>
      Google
    </a>
  );
};

export default GoogleCalendar;
