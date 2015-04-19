define([
        "jQuery",
        "Underscore",
        "Backbone",
        "text!/myrest/templates/header/header.html"
    ],function($,_,Backbone,headerTemplate){
		var headerView = Backbone.View.extend({
			el:$("#header"),
			render:function(){
				var headerData = ["Home","Books","Contact us"];
				var headerCmplTmplt = _.template(headerTemplate,headerData);
				//this.$el.html(headerCmplTmplt);
			}
		});
		
		return headerView;
});