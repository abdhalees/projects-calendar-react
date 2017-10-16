import React, { Component } from 'react';
import _ from 'lodash';

import { propTypeMoment, chunk } from '../../utlis';
import CalendarDay from '../CalendarDay/CalendarDay';

const weekdays = [
  'Sun', 'Mon', 'Tue', 'Wed',
  'Thu', 'Fri', 'Sat'
];

const projects = [
  'Food project', 'Women project', 'Work project', 'Water project'];

class CalenderMonth extends Component {
  render() {
    const today = this.props.today;
    const start = today.clone().startOf('month');
    const startOfWeek = today.clone().startOf('week');
    const monthDays = today.daysInMonth();
    let daySkip = start.isoWeekday();
    if (daySkip === 7) daySkip = 0;

    const daysToSkip = _.times(daySkip, n => {
      return <td key={-1 * n} />;
    });
    const daysToView = _.times(7, n => {
      return <CalendarDay
        key={n + 1}
        date={startOfWeek.clone().add(n, 'days')}
        today={today}
      />;
    });

    const days = [].concat(daysToSkip, daysToView);
    console.log(days);
    const projectDays = chunk(7, days);

    return (
      <table className='table'>
        <caption>
          {start.format('MMMM YYYY')}
        </caption>
        <tbody>
          <tr>
            <th> Projects </th>
            {weekdays.map((day, i) => {
              return <th key={day}>{day} {daysToView[i].props.date.format('D')} </th>;
            })}
          </tr>

          {projects.map(project => {
            return (<tr key={project}>
              <td> {project} </td>
              {days.map(day => {
                return day;
              })}
            </tr>);
          })}

        </tbody>
      </table>
    );
  }
}

CalenderMonth.propTypes = {
  today: propTypeMoment
};
export default CalenderMonth;
