import React from 'react';
import PropTypes from 'prop-types';

import './app.styl';

// Notre premier composant React :)

// Création d'un élément virtuel (virtual DOM)
// document.createElement('div')
// React.createElement('div')
const App = ({ text }) => (
  <div>
    <p className="message">{text}</p>
  </div>
);

App.propTypes = {
  text: PropTypes.string.isRequired,
};

export default App;
