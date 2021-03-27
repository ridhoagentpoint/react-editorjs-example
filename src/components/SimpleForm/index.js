import React from 'react';
import { TextField } from '@material-ui/core';

class SimpleForm extends React.Component {
  static get toolbox() {
    return {
      title: 'Simple Form',
      icon: 'Form',
    }
  }

  save(blockContent) {
    return {
      data: blockContent.value,
    }
  }

  render() {
    return (
      <form>
        <TextField
          id="field-name"
          variant="outlined"
          placeholder="Enter Field Name"
          name="fieldName"
        />
        <TextField
          id="field-description"
          variant="outlined"
          placeholder="Enter Field Description"
          name="fieldDescription"
        />
      </form>
    )
  }
}

export default SimpleForm;
