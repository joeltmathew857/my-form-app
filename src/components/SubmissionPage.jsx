import React from "react";

const SubmissionPage = ({ isSuccessful }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-indigo-800">
        Submission Result
      </h1>
      {isSuccessful ? (
        <div>
          <p>Your submission was successful!</p>
        </div>
      ) : (
        <div>
          <p>Something went wrong with your submission. Please try again.</p>
        </div>
      )}
    </div>
  );
};

export default SubmissionPage;
