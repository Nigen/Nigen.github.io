import React from 'react';

import Button from './Button'

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

render() {
  return (
      <form className="todo-form">
        <input type="text" placeholder="Напишите новость" />

        <Button type="submit">Добавить</Button>
      </form>
    );
  }
}

Form.PropTypes = {

};

export default Form;
