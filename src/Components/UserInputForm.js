/* Copyright (c) 2024 Dante Passalacqua */

import React, { useRef, useEffect } from "react";

function UserInputForm() {
  const textareaRef = useRef(null);
  let textareaValue = "";

  // adjust height depending on value of the textarea
  function adjustHeight() {
    const textarea = textareaRef.current;
    textarea.scrollHeight === 76 ||
    textarea.scrollHeight === 96 ||
    textarea.scrollHeight === 116 ||
    textarea.scrollHeight === 136 ||
    textarea.scrollHeight === 156
      ? (textarea.style.height = `${textarea.scrollHeight}px`)
      : (textarea.style.height = "");
  }

  const currentDate = new Date().toISOString().split("T")[0];

  // check date to make sure it isn't too far in the past and not in the future
  function checkDate(e) {
    let selectedDate = e.target.value;
    if (selectedDate < "1950-01-01") {
      alert("Date must be on or after 01-01-1950");
    }

    if (selectedDate > currentDate) {
      e.target.value = currentDate;
      alert("Date cannot be set in the future");
      selectedDate = e.target.value;
    }
  }

  // update height when textareaValue is updated
  useEffect(() => {
    adjustHeight();
  }, [textareaValue]);

  // Handle textarea input and resize automatically
  function handleInput(e) {
    textareaValue = e.target.value;
    adjustHeight();
  }

  return (
    <div className="user-input-form">
      <input
        type="text"
        className="form--location-input"
        placeholder="Location Name"
        maxLength="30"
        required
      />
      <input
        type="text"
        className="form--state-input"
        placeholder="State or Country"
        maxLength="30"
        required
      />
      <input
        type="date"
        className="form--date-input"
        min="1950-01-01"
        max={currentDate}
        onChange={checkDate}
        required
      />
      <textarea
        ref={textareaRef}
        // value={value}
        className="form--description-input"
        onChange={handleInput}
        placeholder="Enter a description..."
        maxLength="300"
        required
      />
      <button className="form--submit-button">Add Trip ✈️</button>
    </div>
  );
}

export default UserInputForm;
