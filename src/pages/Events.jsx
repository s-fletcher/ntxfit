/* eslint-disable react/no-this-in-sfc */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import UpcomingEvents from '../components/Events/UpcomingEvents';
import PastEvents from '../components/Events/PastEvents';
import GetNotified from '../components/Events/GetNotified';

/**
 * Landing page
 */
const Events = () => {
  const [events, setEvents] = useState();

  useEffect(() => {
    const request = new XMLHttpRequest();

    request.open('GET', `https://www.eventbriteapi.com/v3/organizations/${process.env.REACT_APP_ORGANIZATION_ID}/events/`);

    request.setRequestHeader('Authorization', `Bearer ${process.env.REACT_APP_EVENTBRITE_TOKEN}`);

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        setEvents(JSON.parse(this.responseText).events.reverse());
      }
    };

    request.send();
  }, []);

  return (
    <div className="events">
      <Header short backgroundImage={require('../images/conference.jpg')} backgroundPosition="right 60%">
        <h1>Events</h1>
      </Header>
      <UpcomingEvents events={events} />
      <PastEvents events={events} />
      <GetNotified />
    </div>
  );
};

export default Events;
