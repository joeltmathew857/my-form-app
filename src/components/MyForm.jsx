import React, { useState } from 'react';

const MyForm = () => {
  // Initial state for form data
  const initialState = { name: '', email: '' };
  // State to store form data
  const [formData, setFormData] = useState(initialState);
  // State to track if the form has been submitted successfully
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    if (!formData.name || !formData.email) {
      alert('Please enter your name and email.');
      return;
    }

    // Submit the form data to the server or perform any other action
    console.log('Form data submitted:', formData);

    // Reset the form and show the success message
    setFormData(initialState);
    setIsSubmitted(true);

    // Hide success message after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  // State to track if the mouse is over the form
  const [isMouseOver, setIsMouseOver] = useState(false);

  // Function to handle mouse over event
  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  // Function to handle mouse out event
  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-indigo-800">Contact Us</h1>
      <form
        // Apply conditional background color when the mouse is over the form
        className={`p-4 border rounded ${isMouseOver ? 'bg-blue-100' : ''}`}
        onSubmit={handleSubmit}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="mb-4">
          <label className="block font-semibold">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
        {/* Show the success message when the form is submitted */}
        {isSubmitted && (
          <p className="mt-4 p-2 bg-green-500 text-white rounded">
            Thank you for your submission!
          </p>
        )}
      </form>
    </div>
  );
};

export default MyForm;
