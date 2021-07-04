import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  ChordChartWrapper: {
    height: '300px',
    maxWidth: '250px',
    position: 'relative',
    margin: 0,
    backgroundColor: 'white',
  },

  ChordChartName: {
    position: 'absolute',
    top: '10px',
    width: '100%',
    textAlign: 'center',
    zIndex: 2,
    fontFamily: 'Roboto',
    margin: '0'
  },

  ChordChartTuning: {
    position: 'absolute',
    top: '250px',
    textAlign: 'center',
    fontFamily: 'Roboto'
  },

  ChordCardActions: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}));

export default useStyles;