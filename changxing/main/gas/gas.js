define(function(require){
	var $ = require("jquery");
	var Model = function(){
		this.callParent();
		this.title = null;
	};
	Model.prototype.myModelParamsReceive = function(event){
		this.title = event.params.title;
	}
	return Model;
});