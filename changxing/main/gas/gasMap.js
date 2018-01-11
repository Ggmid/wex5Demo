define(function(require){
	var $ = require("jquery");
	var Model = function(){
		this.callParent();
		this.showHeadMap = false;
	};
	Model.prototype.myModelParamsReceive = function(event){
		var title = "南浔"+this.getParent().title;
		this.getGasStation(title);
	}
	Model.prototype.getGasStation = function(name){
		var self = this;
		var local = new BMap.LocalSearch(self.map, {
			renderOptions:{map: self.map}
		});
		local.search(name);
		
	}
	return Model;
});