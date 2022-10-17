import moment from 'moment-js';

export const formatDate = date => moment(date).format('DD.MM YYYY');
