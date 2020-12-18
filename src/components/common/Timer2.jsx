import React from 'react';
import { useDispatch } from 'react-redux';

import { authActions, rememberPasswordActions } from '../../redux/actions';

function Timer2({ visible, text, type }) {
  // 19 - количество секунд в таймере
  const [time, setTime] = React.useState(19);
  const dispatch = useDispatch();

  React.useEffect(() => {
    time > 0 && visible && setTimeout(() => setTime(time - 1), 1000);

    if (time === 0) {
      switch (type) {
        case 'login':
          dispatch(authActions.setTryTimeButton(false));
          break;
        case 'rememberPassword':
          dispatch(rememberPasswordActions.setTryTimeButton(false));
          break;
        default:
          break;
      }
    }
  }, [time, visible, dispatch, type]);

  return (
    <div className="login__misstakes">
      <p>
        {text} {time}
      </p>
    </div>
  );
}

export default Timer2;
