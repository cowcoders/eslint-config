import React, { FC } from 'react';

export const Component: FC = () => {
  return <div>
    <h1 key="123"
      aria-label="name">Hello World</h1>
  </div>;
};

const Simple: FC = () => {
  return <Component name="one"
    value={10}/>;
};

console.log(Simple);
