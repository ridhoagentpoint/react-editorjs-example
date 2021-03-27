import React from 'react';

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
        <input placeholder="Enter Field Name" type="text" />
        <input placeholder="Enter Field Description" type="text" />
      </form>
    )
  }
}

export default SimpleForm;
