require.config({
	paths:{
		jQuery:"libs/jquery/jquery",
		Underscore:"libs/underscore/underscore",
		Backbone:"libs/backbone/backbone"
	}
});

require([
		"app",
		"order!libs/jquery/jquery-2.0.0.min",
		"order!libs/underscore/underscore-1.7.0.min",
		"order!libs/backbone/backbone-min-1.1.2",
	],function(App){
		alert("files loaded");
		//App.initialize();
	});