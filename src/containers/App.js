/**
 * Dépendances npm : utilitaire React-Redux
 */
import { connect } from 'react-redux';

/**
 * Dépendances locales : le composant à connecter au store
 */
import App from '~/components/App';

/**
 * Connection du composant au store via connect()()
 */

const mapStateToProps = (state, ownProps) => ({
  randomValue: state.value,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  generateRandomValue: () => {
    dispatch({
      type: 'GENERATE_RANDOM_VALUE',
      facesNb: ownProps.diceFacesNb,
    });
  },
});

const AppContainer = connect(
  mapStateToProps, // Props en lecture
  mapDispatchToProps, // Props en écriture
)(App);

export default AppContainer;
