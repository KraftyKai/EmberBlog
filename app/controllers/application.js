import Ember from 'ember';

export default Ember.Controller.extend({

    needs: ['session'],

    isLoggedIn: Ember.computed.alias('controllers.session.isAuthenticated')
});
