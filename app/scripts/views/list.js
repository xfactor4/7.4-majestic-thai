import ItemView from 'views/item';
import CollectionView from 'views/collection-view';

var MenuCollectionView = CollectionView.extend({
    className: 'item-list',
    tagName: 'ul',
    ItemViewConstructor: ItemView
});

var MenuIndexView = Backbone.View.extend({
  template: JST['restaurant/create'],
   initialize: function(){
     this.collectView = new MenuCollectionView({
       collection: this.collection
     });
   },

   render: function(){
     this.$el.html(this.template())
     this.$el.append(this.collectView.render().el);
     return this;
   },

   remove: function(){
     this.collectView.remove();
     Backbone.View.prototype.remove.apply(this, arguments);
   }
});

export default MenuIndexView;
