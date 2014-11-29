import Ember from 'ember';
/* global moment */

export function humanDate(date) {
    return moment(date).calendar();
}

export default Ember.Handlebars.makeBoundHelper(humanDate);
