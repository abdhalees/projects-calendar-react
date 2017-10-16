import React, { Component } from 'react';
import moment from 'moment';

import CalendarDay from './CalendarDay/CalendarDay';
import CalendarMonth from './CalendarMonth/CalendarMonth';

class App extends Component {
  render() {
    return (
      <div>
        {/* <CalendarDay /> */}
        <CalendarMonth today={moment()} />
      </div>
    );
  }
}

export default App;
