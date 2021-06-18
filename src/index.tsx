import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import reportWebVitals from './reportWebVitals';
import Chord from './components/chord';

const App = () => {
  return (
    <>
    <Chord 
      name='A'
      tuning={['E', 'B', 'G', 'D', 'A', 'E']}
      notes={[-1, 0, 2, 2, 2, 0]} />

    <Chord 
      name='B'
      tuning={['E', 'B', 'G', 'D', 'A', 'E']}
      notes={[-1, 2, 4, 4, 4, 2]} />
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
