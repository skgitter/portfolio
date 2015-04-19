define([
	"jQuery",
	"Underscore",
	"Backbone",
	"views/books/list",
	"views/users/list",
	"views/header/headerView"
	],function($,_,Backbone,bookListView,UserListView,HeaderView){
		console.log(UserListView);
		var AppRouter = Backbone.Router.extend({
			routes:{
				"books":"showBooks",
				"users":"renderUser",
				"*actions":"defaultAction"
			},
			showBooks:function(){
				//bookListView.render();
				$("#content").html("now its time to show book list");
				console.log("now its time to show book list");
			},
			renderUser:function(){
				//$("#content").html("now its time to show user list");
				var usersListViewObj = new UserListView();
				usersListViewObj.render();
			},
			defaultAction:function(){
				var headerViewObj = new HeaderView();
				headerViewObj.render();
			}
		});

		var initialize = function(){
			var app_router = new AppRouter();
			Backbone.history.start();
		};
		return {
			"initialize":initialize
		}
	});