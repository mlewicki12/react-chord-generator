
import React from 'react';
import useStyles from '../../../styles';

const LeftTuning = [
  '30px',
  '66px',
  '102px',
  '138px',
  '174px',
  '210px'
];

type TuningText = {
  note: string;
  index: number;
}

const TuningText = ({
  note, index
}: TuningText) => {
  const classes = useStyles();
  const left = LeftTuning[index];

  return (
    <p className={classes.ChordChartTuning} style={{left: left}}>
      {note}
    </p>
  )
}

export default TuningText;