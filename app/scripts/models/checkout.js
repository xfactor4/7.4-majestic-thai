var CheckOut = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: function(){
    return {
      items: [],
    };
  },

   addItem: function(product){
     this.set('items', this.get('items').concat([product]));
   },
   removeItem: function(product){
     this.set('items',_.without(this.get('items'), prodcut));
   }
});

export default new CheckOut();
