import Ember from 'ember';

export function markupText(input) {
    //TODO: Sanitize html using Google caja and a white list approach
    return Ember.String.htmlSafe(input);
}

export default Ember.Handlebars.makeBoundHelper(markupText);
