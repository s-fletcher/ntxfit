/* eslint-disable max-len */
import React, { useState } from 'react';
import moment from 'moment';
import SectionBox from '../SectionBox';
import '../../styles/events/event-list.scss';
import EventCard from './EventCard';
import useWindowDimensions from '../../lib/useWindowDimensions';

/**
 * Lists upcoming events for NTXFIT
 */
const UpcomingEvents = ({ events, venues }) => {
  const [none, setNone] = useState(true);
  const { isMobile } = useWindowDimensions();

  return (
    <div className={`event-list ${isMobile ? 'mobile' : ''}`}>
      <div className="section">
        <SectionBox>
          {events && events.map((event) => {
            const date = moment(new Date(event.start.local));
            if (date.isAfter()) {
              const name = event.name.text;
              const logo = event.logo.url;
              const url = event.url;
              const dateFormatted = date.format('ddd, MMMM Do YYYY, LT ');
              const venueObj = venues.find(({ id }) => id === event.venue_id);
              let venue;
              if (venueObj) {
                venue = venueObj.name;
              }

              if (none) {
                setNone(false);
              }

              return (
                <EventCard
                  register
                  key={event.id}
                  venue={venue}
                  name={name}
                  logo={logo}
                  url={url}
                  date={dateFormatted}
                />
              );
            }
            return null;
          })}
          {none && <p className="quiet">There are currently no scheduled upcoming events.</p>}
        </SectionBox>
      </div>
    </div>
  );
};

export default UpcomingEvents;
