import checkoutModel from 'models/checkout';

var CheckoutView = Backbone.View.extend({

      tagName: 'li',
      className: 'create-view',

      template: JST['restaurant/cart'],

      initialize: function(){
        this.listenTo(checkoutModel, 'change', this.render)
      },

      render: function(){
        this.$el.html(this.template(this.present()));
        return this;
      },

      present: function(){
        return {
        items: checkoutModel.get('items').map((p) =>{
        return p.toJSON();
      }),
      subtotal: checkoutModel.get('items').reduce(function(total, current){
        return total + Number(current.get('price'));
      }, 0) + ''
    };

    }






});

export default CheckoutView;
