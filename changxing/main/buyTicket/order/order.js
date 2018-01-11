define(function(require){
	var $ = require("jquery");
	var Model = function(){
		this.callParent();
		this.data = null;
		this.time = null;	
	};
	Model.prototype.myModelParamsReceive = function(event){
		this.data = event.params.data;
		this.time = event.params.time;
	};
	return Model;
});