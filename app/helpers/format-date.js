import Ember from 'ember';
import { formatDate } from '../utils/date-helpers';

export default Ember.Helper.helper(
  ([date, format]) => formatDate(date, format)
);
