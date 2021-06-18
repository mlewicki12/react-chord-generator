
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  chordDiagram: {
    position: 'relative',
    height: '325px',
    width: '250px',

    margin: 0,
    backgroundColor: 'white',
    cursor: 'pointer'
  },

  chordName: {
    position: 'absolute',
    top: '-5px',
    width: '100%',

    textAlign: 'center',
    fontFamily: 'Roboto',

    zIndex: 2
  },

  chordDiagramImage: {
    position: 'absolute',
    top: '25px'
  },

  chordTuningText: {
    position: 'absolute',
    textAlign: 'center',
    fontFamily: 'Roboto'
  }
}));