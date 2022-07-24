import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { reduxActions, reduxSelectors } from './ducks';

const App = () => {
  const color = useSelector(reduxSelectors.getColor);
  const dispatch = useDispatch();

  const changeRed = () => {
    dispatch(reduxActions.redAction);
  };

  const changeBlue = () => {
    dispatch(reduxActions.blueAction);
  };

  const changeGreen = () => {
    dispatch(reduxActions.greenAction);
  };
  return (
    <div className="App">
      <div className={`App_Box ${color}`}></div>
      <p>Hello Underworld!!</p>
      <button onClick={changeRed}>Red</button>
      <button onClick={changeBlue}>Blue</button>
      <button onClick={changeGreen}>Green</button>
    </div>
  );
};

export default App;
