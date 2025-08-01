import React from 'react';
import '../../styles/events/event-navigation.scss';

/**
 * Member call to action
 */
const About = () => (
  <div className="events-about">
    <div className="section">
      <h2>Professional Trainings Available</h2>
      <div>
        {/* eslint-disable-next-line max-len */}
        <p>North Texas Families in Transition provides training to assist professionals working with families involved in litigation in staying up to date with best practices and current research.</p>
      </div>
      <a href="http://eepurl.com/hQXwxP" target="_blank" rel="noopener noreferrer" className="get-notified-button button">Get Notified of Upcoming Events</a>
    </div>
  </div>
);
export default About;
