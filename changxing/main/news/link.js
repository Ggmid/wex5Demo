define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Utils = require("../common/Utils");
	
	var Model = function(){
		this.callParent();
	};
	
	Model.prototype.modelParamsReceive = function(event){
		var a = event.params.a;
		var iframe1 = this.getIDByXID("iframe1");
		$('#'+iframe1).attr("src",a);
	};
	
	return Model;
});