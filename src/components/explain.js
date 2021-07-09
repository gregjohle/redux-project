import React from "react";

export default function Explain() {
  return (
    <div className='explain'>
      <p>
        This is a simple React app built for me to explore how Redux works. This
        app is made of a few different components. The state is used by two of
        them. The amount in the input field is stored as state. The actions
        initiated by the buttons then alter the state by that amount.
      </p>
    </div>
  );
}
