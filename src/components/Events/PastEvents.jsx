import React from 'react';
import moment from 'moment';
import SectionBox from '../SectionBox';
import '../../styles/events/event-list.scss';
import EventCard from './EventCard';
import useWindowDimensions from '../../lib/useWindowDimensions';

/**
 * Lists upcoming events for NTXFIT
 */
const PastEvents = ({ events }) => {
  const { isMobile } = useWindowDimensions();

  return (
    <div className={`event-list ${isMobile ? 'mobile' : ''}`}>
      <div className="section">
        <h2>Past Events</h2>
        <SectionBox>
          {events && events.map((event) => {
            const date = moment(new Date(event.start.local));
            if (date.isBefore()) {
              const name = event.name.text;
              const logo = event.logo.url;
              const url = event.url;
              const fromNow = date.fromNow().toUpperCase();

              return <EventCard key={event.id} name={name} logo={logo} url={url} date={fromNow} />;
            }
            return null;
          })}
        </SectionBox>
      </div>
    </div>
  );
};

export default PastEvents;
