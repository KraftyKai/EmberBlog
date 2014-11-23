import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('posts', { path: '/posts' });
    this.resource('post', { path: '/posts/:post_id'});
    this.resource('author', { path: '/authors/:author_id' });
    this.route('posts/new');
});

export default Router;
