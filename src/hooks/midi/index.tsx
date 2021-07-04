
import React, {useState} from 'react';
import MIDISounds from 'midi-sounds-react';

const O = 12;

const C = 0;
const c = 1;
const D = 2;
const d = 3;
const E = 4;
const F = 5;
const f = 6;
const G = 7;
const g = 8;
const A = 9;
const a = 10;
const B = 11;

const S1 = 5 * O;
const S2 = 4 * O;
const S3 = 4 * O;
const S4 = 4 * O;
const S5 = 3 * O;
const S6 = 3 * O;
const Strings = [S6, S5, S4, S3, S2, S1];

const mapStringToNote = (note: string) => {
  switch(note.toLowerCase()) {
    case 'c':
      return C;

    case 'c#':
    case 'db':
      return c;

    case 'd':
      return D;

    case 'd#':
    case 'eb':
      return d;

    case 'e':
      return E;

    case 'f':
      return F;

    case 'f#':
    case 'gb':
      return f;

    case 'g':
      return G;

    case 'g#':
    case 'ab':
      return g;

    case 'a':
      return A;

    case 'a#':
    case 'bb':
      return a;

    case 'b':
      return B;

    // default to c
    default:
      console.error(`can't match note ${note}`);
      return 0;
  }
}

const mapNumberToNote = (note: number, tuning: number) => {
  // filter out muted notes
  if(note === -1) {
    return undefined;
  }

  // tuning is preloaded with the correct  string,
  // so adding the fret number should offset it properly
  return tuning + note;
}

const mapMidiToNote = (midi: number) => {
  // remove octaves
  const note = midi % 12;
  return ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'][note];
}

// preload acoustic guitar
const DEFAULT_INSTRUMENT = 246;

const useMidi = (tuning: string[]): [() => JSX.Element, (arg0: number[]) => void] => {
  const [strings,] = useState<number[]>(tuning.map((note, index) => Strings[index] + mapStringToNote(note)));
  const [cached, setCached] = useState<boolean>(false);

  let midiInstance: any;
  if(midiInstance && !cached) {
    setCached(true);
    midiInstance.cacheInstrument(DEFAULT_INSTRUMENT);
  }

  const component = () => (
    <div style={{display: 'none'}}>
      <MIDISounds ref={(ref:any) => midiInstance = ref} appElementName='root' instruments={[DEFAULT_INSTRUMENT]} />
    </div>
  );

  const playChord = (notes: number[]) => {
    const notesToPlay = notes.map((note, index) => mapNumberToNote(note, strings[index])).filter(item => item !== undefined);
    if(midiInstance) {
      notesToPlay.forEach(note => {
        note && console.log(`playing ${mapMidiToNote(note)}`);
      });

      midiInstance.playChordNow(DEFAULT_INSTRUMENT, notesToPlay, 1.5);
    } else {
      console.error('midi instance not loaded!');
    }
  }

  return [component, playChord];
}

export default useMidi;