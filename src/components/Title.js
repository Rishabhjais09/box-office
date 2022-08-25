import React from 'react';

const Title = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        <h4>{subtitle}</h4>
      </p>
    </div>
  );
};

export default Title;
