import MenuCollection from 'models/menu-collection';
import MenuIndexView from  'views/list';
import OrderView from 'views/checkoutview';
import checkoutModel from 'models/checkout';


var MenuRouter = Backbone.Router.extend({
  /*this route sets up the address so that when in nothing is behind the default
  in this case localhost:3000 it will display the index view.
  */
        routes: {
          '' : 'index',

        },
/*First you want to automatically run your collection you want displayed on this
route.
*/
        initialize: function(){
          this.collections = new MenuCollection();
          return this;
        },

        index: function(){
          var view = new MenuIndexView({
            collection: this.collections
          });

        var orderview = new OrderView({
          collection: this.collections
        });

          this.collections.fetch();


        $('#container').append(view.render().el)
          $('#container').append(orderview.render().el);
      },



});

export default MenuRouter;
