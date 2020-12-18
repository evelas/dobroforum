// Old version with class

// import React from 'react';
// import { connect } from 'react-redux';
// import { authActions, rememberPasswordActions } from '../../redux/actions';

// class Timer extends React.Component {
//   constructor() {
//     super();
//     this.setTime = 19;
//     this.state = { time: {}, seconds: this.setTime };
//     this.timer = 0;
//     // this.startTimer = this.startTimer.bind(this);
//     this.countDown = this.countDown.bind(this);
//   }

//   secondsToTime(secs) {
//     let hours = Math.floor(secs / (60 * 60));

//     let divisor_for_minutes = secs % (60 * 60);
//     let minutes = Math.floor(divisor_for_minutes / 60);

//     let divisor_for_seconds = divisor_for_minutes % 60;
//     let seconds = Math.ceil(divisor_for_seconds);

//     let obj = {
//       h: hours,
//       m: minutes,
//       s: seconds,
//     };
//     return obj;
//   }

//   componentDidMount() {
//     let timeLeftVar = this.secondsToTime(this.state.seconds);
//     this.setState({ time: timeLeftVar });
//     if (this.timer === 0 && this.state.seconds > 0 && this.props.visible) {
//       this.timer = setInterval(this.countDown, 1000);
//     }
//   }

//   countDown() {
//     let seconds = this.state.seconds - 1;
//     this.setState({
//       time: this.secondsToTime(seconds),
//       seconds: seconds,
//     });

//     if (seconds === 0) {
//       clearInterval(this.timer);
//       this.setState({
//         time: this.secondsToTime(this.setTime),
//         seconds: this.setTime,
//       });
//       this.timer = 0;
//       if (this.props.login) {
//         this.props.setTryTimeButton(false);
//       }
//       if (this.props.rememberPassword) {
//         this.props.setRememberPasswordTryTimeButton(false);
//       }
//     }
//   }

//   render() {
//     return (
//       <div className="timer">
//         {this.props.text}
//         {this.state.time.m}:{this.state.time.s}
//       </div>
//     );
//   }
// }

// let mapStateToProps = (state) => {
//   return undefined;
// };
// let mapDispatchToProps = (dispatch) => {
//   return {
//     setTryTimeButton: (value) => {
//       dispatch(authActions.setTryTimeButton(value));
//     },
//     setRememberPasswordTryTimeButton: (value) => {
//       dispatch(rememberPasswordActions.setTryTimeButton(value));
//     },
//   };
// };

// const timerContainer = connect(mapStateToProps, mapDispatchToProps)(Timer);

// export default timerContainer;
