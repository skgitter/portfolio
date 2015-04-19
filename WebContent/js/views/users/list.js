define([
        "jQuery",
        "Underscore",
        "Backbone",
        "text!/myrest/templates/user/list.html"
    ],function($,_,Backbone,UserListTmplt){
		var userLisrViewObj = Backbone.View.extend({
			el:$("#content"),
			render:function(){
				var usrListCmplTmplt = _.template(UserListTmplt);
				this.$el.html(usrListCmplTmplt);
			}
		});
		return userLisrViewObj;
});