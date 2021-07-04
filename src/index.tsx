import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Chord from './components/chord';

const App = () => {
  return (
    <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'flex-start', alignItems: 'center'}}>
      <Chord
        name='Test'
        tuning={['D#', 'A#', 'F#', 'C#', 'G#', 'D#']}
        notes={[0, 1, 2, 3, 4, 5]} />

      <Chord 
        name='B'
        tuning={['E', 'B', 'G', 'D', 'A', 'E']}
        notes={[-1, 2, 4, 4, 4, 2]} />

      <Chord
        name='E'
        tuning={['E', 'B', 'G', 'D', 'A', 'E']}
        notes={[-1, 7, 9, 9, 9, 7]} />

      <Chord
        name='E'
        tuning={['E', 'B', 'G', 'D', 'A', 'E']}
        notes={[-1, 6, 9, 11, 9, 7]} />

      <Chord
        name='D'
        tuning={['E', 'B', 'G', 'D', 'A', 'E']}
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
