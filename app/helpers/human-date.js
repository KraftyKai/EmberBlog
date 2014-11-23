import Ember from 'ember';

export function humanDate(date) {
    return moment(date).calendar()
};

export default Ember.Handlebars.makeBoundHelper(humanDate);
