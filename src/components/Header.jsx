import React from 'react';
import Stats from './stats';

function Header(props) {
  return (
    <header>
      <Stats />
      <h1>{props.title}!</h1>
    </header>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Header;
