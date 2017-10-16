import React, { Component } from 'react';
import classnames from 'classnames';

import { propTypeMoment } from '../../utlis';

class CalenderDay extends Component {
  render() {
    const today = this.props.today;
    const date = this.props.date;

    const dayClass = classnames({
      today: today.isSame(date, 'day')
    });

    return (
      <td className={dayClass}>
        images
      </td>
    );
  }
}

CalenderDay.propTypes = {
  date: propTypeMoment,
  today: propTypeMoment
};

export default CalenderDay;
