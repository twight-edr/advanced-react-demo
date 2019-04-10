import React from 'react';
import storeProvider from './storeProvider';

class Timestamp extends React.PureComponent {

  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log(`updating timestamp`);
  // }
  static timeDisplay = timestamp =>
    timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.timeDisplay(this.props.timestamp) !==
        this.timeDisplay(nextProps.timestamp)
    );
  }

  render() {
    return (
      <div>
        {this.timeDisplay(this.props.timestamp)}
      </div>
    );
  }
}

function extraProps(store) {
  return {
    timestampDisplay: Timestamp.timeDisplay(store.getState().timestamp),
  };
}

export default storeProvider(extraProps)(Timestamp);
