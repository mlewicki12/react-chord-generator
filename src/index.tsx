import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Chord from './components/chord';

const App = () => {
  return (
    <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'flex-start', alignItems: 'center'}}>
      <Chord 
        name='B'
        tuning={['E', 'A', 'D', 'G', 'B', 'E']}
        notes={[0, 2, 2, 0, 0, 0]} />

      <Chord
        name='E'
        tuning={['E', 'A', 'D', 'G', 'B', 'E']}
        notes={[-1, 7, 9, 9, 9, 7]} />

      <Chord
        name='D'
        tuning={['E', 'A', 'D', 'G', 'B', 'E']}
        notes={[-1, 5, 4, 0, 3, 0]} />
    </div>
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
