define([
        "Underscore",
        "Backbone"
    ],function(_,Backbone){
		var UserModel = Backbone.Model.extend({
			defaults:function(){
				return {
					"name":"",
					"age":""
				}
			},
			url:"/myrest/api/v1/user/find.json"
		});
		return UserModel;
})