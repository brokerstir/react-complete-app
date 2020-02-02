import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.module.css';
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {

  console.log('[Person.js] rendering...');
  return (
    <Aux>
      {this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in</p>}
      <p onClick={this.props.click} >
        I'm {this.props.name} and I'm {this.props.age} yers old!
      </p>
      <p>{this.props.children}</p>
      <input
        key ="3"
        // ref={(inputEl) => {this.inputElement = inputEl}}
        ref={this.inputElementRef}
        type="text"
        onChange={this.props.changed}
        value={this.props.name} />
    </Aux>
    );
  }
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
