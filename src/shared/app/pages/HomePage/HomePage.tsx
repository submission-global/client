import * as React from 'react';

export const HomePage = () => {
  return (
    <div>
      <div>Home Component</div>
      <button onClick={() => console.log('Hi there')}>Press me</button>
    </div>
  );
};

export default HomePage;
