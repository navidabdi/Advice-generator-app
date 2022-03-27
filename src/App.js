import React, { useEffect, useState } from 'react';
import './App.css';
import PatternDivider from './images/pattern-divider-desktop.svg';
import PatternImg from './images/icon-dice.svg';
function App() {
  const [advice, setAdvice] = useState('');

  const fetchData = async () => {
    const data = await fetch('https://api.adviceslip.com/advice');
    const json = await data.json();
    setAdvice(json);
  };
  useEffect(() => {
    // declare the data fetching function

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <>
      <main className="app">
        <h1>Advice #{advice?.slip?.id}</h1>
        <p>"{advice?.slip?.advice}"</p>
        <img src={PatternDivider} alt="" />
        <button onClick={fetchData} type="button" className="generate">
          <img src={PatternImg} alt="" />
        </button>
      </main>
      <footer>
        <div class="attribution">
          Challenge by Frontend Mentor. Coded by{' '}
          <a href="https://www.youtube.com/channel/UCxd6yE9578AmHr1DIRAnJdA">
            Navid Dev
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
