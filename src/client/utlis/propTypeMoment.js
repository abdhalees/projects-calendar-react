import moment from 'moment';
/**
 * PropType validator for moment date objects
 */
function propTypeMoment(props, propName) {
  if (!moment.isMoment(props[propName])) {
    return new Error(
      `Expected ${propName
      } to be moment`
    );
  }
}

export default propTypeMoment;
