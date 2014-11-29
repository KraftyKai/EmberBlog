export function initialize(container, application) {
    
    application.inject('adapter', 'store', 'store:main');
}


/*
** Inject store in into adapter
*/
export default {
  name: 'adapter-store',
  initialize: initialize
};
