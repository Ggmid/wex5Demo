define(function(require){
	var $ = require("jquery");
	var data = null;
	var time = null;
	var Model = function(){
		this.callParent();
		this.showMenu = true;
	};
	Model.prototype.myModelParamsReceive = function(event){
		data = event.params.data;
		time = event.params.time;
	};
	Model.prototype.button11Click = function(event){
		this.comp("payfor").open({
			src : require.toUrl("../payfor/payfor.w"),
			params : {
				data : data,
				time : time
			}
		});
	};
	return Model;
});