import DS from 'ember-data';

export default DS.Model.extend({
    firstName: DS.attr(),
    lastName: DS.attr(),
    title: DS.attr(),
    about: DS.attr(),
    createDate: DS.attr('date'),
    posts: DS.hasMany('post'),
    partial: DS.attr('boolean')
});
