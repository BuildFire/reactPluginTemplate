import React from 'react'

export default function Widget() {
  buildfire.messaging.onReceivedMessage = (message) => {
    console.log("Message received", message);
  };
  return (
    <div>Widget</div>
  )
}

