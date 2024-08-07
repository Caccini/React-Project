// src/components/Notifications.js
import React from 'react';
import '../css/Notifications.css';

const notifications = [
  {
    id: 1,
    user: 'Thomas',
    time: '5H',
    message: 'Everyone who knows buys crypto, that\'s a practical solution for funds transfer.',
    reactions: {
      like: 89,
      comment: 12,
    },
  },
  {
    id: 2,
    user: 'Master Cat',
    time: '1H',
    message: 'Don\'t worry! When all other currencies are obsolete, every soul on earth will hold bitcoin!',
    reactions: {
      like: 128,
      comment: 16,
    },
  },
];

const Notifications = () => {
  return (
    <div className="notifications">
      <h3>214,957 reactions</h3>
      {notifications.map(notification => (
        <div key={notification.id} className="notification">
          <div className="notification-header">
            <span className="user">{notification.user}</span>
            <span className="time">{notification.time}</span>
          </div>
          <div className="message">{notification.message}</div>
          <div className="reactions">
            <span>{notification.reactions.like} 👍</span>
            <span>{notification.reactions.comment} 💬</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;

