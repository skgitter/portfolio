define([
	"jQuery",
	"Underscore",
	"Backbone",
	"router" // request router.js
],function($,_,Backbone,Router){
	var initialize = function(){
		Router.initialize();
	}

	return {
		"initialize":initialize
	};
});