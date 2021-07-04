
import React from 'react';
import TuningText from '../tuning-text';
import ChordIcon from '../chord-icon';
import { exportComponentAsPNG } from 'react-component-export-image';

import useStyles from '../../../styles';

import chart from '../assets/chord-chart.png';

type ChordChart = {
  name: string;
  tuning: string[];
  notes: number[];
};

const ChordChart = ({
  name, tuning, notes
}: ChordChart) => {
  const ref = React.createRef<HTMLDivElement>();
  const classes = useStyles();
  return (
    <div
      className={classes.ChordChartWrapper}
      ref={ref} onClick={() => exportComponentAsPNG(ref, {fileName: `${name}-chord-generator`})}>
      <h1 className={classes.ChordChartName}>{name}</h1>
      <img
        src={chart}
        alt='Chord chart'
        style={{position: 'absolute'}}
      />
      {tuning.map((note, index) =>
        <TuningText
          note={note}
          index={index}
        />
      )}
      {notes.map((note, index) =>
        <ChordIcon
          note={note}
          index={index}
        />
      )}
    </div>
  )
}

export default ChordChart;