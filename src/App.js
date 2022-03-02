import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/Card';
function App() {
  const [data, setAdvice] = useState(null);
  const [size, setSize] = useState(null);
  const [rotate, setRotate] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const cardRotate = () => {
    setRotate(!rotate);
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };
  const fetchData = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((data) => data.json())
      .then((data) => setAdvice(data))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchData();
    setSize(window.innerWidth);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className='App'>
      {data ? (
        <Card
          advice={data.slip.advice}
          id={data.slip.id}
          size={size}
          rotate={rotate}
          disabled={disabled}
          handleClick={fetchData}
          cardRotate={cardRotate}
        />
      ) : null}
    </div>
  );
}

export default App;
