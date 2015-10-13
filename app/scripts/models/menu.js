var Menu = Backbone.Model.extend({
  idAttribute: "_id",
  defaults: function(){
    return {
      category: "",
      name: "",
      price: "",
      description: "",
    }
  },


});

export default Menu;
