import checkOut from 'models/checkout';

var ItemView = Backbone.View.extend({
//this will list each item as a list
className: 'list',
  tagName: 'li',
  template: JST['restaurant/item'],
  events: {
    'click .price-btn' : 'showProduct'
  },

  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(checkOut, 'change:items', this.render);
  },

  render: function(){
    this.$el.prepend(this.template(this.model.toJSON()));
     return this;
  },

  showProduct: function(){
    checkOut.addItem(this.model)

  }
});

export default ItemView;
