import React from 'react';
import EditorJs from 'react-editor-js';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { EDITOR_JS_TOOLS } from './constants';

const App = () => {
  const instanceRef = React.useRef(null);

  async function handleSave() {
    const savedData = await instanceRef.current.save();

    console.log('savedData', savedData);
  }

  return (
    <React.Fragment>
      <Button
        color="primary"
        variant="contained"
        onClick={handleSave}
      >
        Save
      </Button>

      <Paper elevation={3}>
        <EditorJs
          tools={EDITOR_JS_TOOLS}
          instanceRef={(instance) => (instanceRef.current = instance)}
        />
      </Paper>
    </React.Fragment>
  );
}

export default App;
