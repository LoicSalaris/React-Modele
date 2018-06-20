import React from 'react';
import PropTypes from 'prop-types';

import './app.styl';

/**
 * L'application simule un lancé de dé.
 */
const App = ({
  diceFacesNb,
  randomValue,
  generateRandomValue,
}) => (
  <div>
    <h1>{`D${diceFacesNb}`}</h1>
    <p className="message">
      {randomValue}
      <br />
      <button onClick={generateRandomValue}>Lancer le dé !</button>
    </p>
  </div>
);

App.propTypes = {
  diceFacesNb: PropTypes.number.isRequired,
  randomValue: PropTypes.number,
  generateRandomValue: PropTypes.func.isRequired,
};

App.defaultProps = {
  randomValue: 0,
};

export default App;
