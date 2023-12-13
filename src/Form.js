import React, { useState } from 'react';

const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
//   const [error, setError] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // if (firstName && lastName) {
      const newFullName = `${firstName} ${lastName}`;
      setFullName(newFullName);
    //   setError(''); // Clear any previous error
    // } else {
    //   setError('Both first and last names are required.');
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} required />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} required />
        </label>
        <br />
        <button type="submit">
          Submit
        </button>
      </form>

      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}

      {fullName && (
        <div>
    Full Name:{fullName}
        </div>
      )}
    </div>
  );
};

export default NameForm;
