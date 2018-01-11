define(function(require){
	var temp = false;
	var $ = require("jquery");
	var Utils = require("../common/Utils");
	var Model = function(){
		this.callParent();
		this.data = null;
		this.showMenu = true;
	};
	
	Model.prototype.myModelParamsReceive = function(event){
		this.data = event.params.data;
	}
	Model.prototype.button11Click = function(){
		if(!temp){
			this.comp("button11").set("label","地图");
			temp = true;
		}else{
			this.comp("button11").set("label","列表");
			temp = false;
		}
		Utils.target("showList",temp);
	}
	return Model;
});