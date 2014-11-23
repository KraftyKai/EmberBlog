import DS from 'ember-data';

var Post = DS.Model.extend({
    title: DS.attr(),
    captionTitle: DS.attr(),
    subheading: DS.attr(),
    content: DS.attr(),
    publishDate: DS.attr('date'),
    category: DS.attr(),
    author: DS.belongsTo('author'),
    partial: DS.attr('boolean')
});

export default Post;
