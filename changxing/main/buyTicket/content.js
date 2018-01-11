define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Utils = require("../common/Utils");	
	var Model = function(){
		this.callParent();
		this.orderImg = justep.Bind.observable("consult");
		Utils.register("orderBack",this.orderBack,this);
	};
	
	Model.prototype.modelParamsReceive = function(event){
		this.comp("startPosition").val("杭州");
		this.comp("endPosition").val("南浔");
		this.orderImg.set("consult");
	};
	
	Model.prototype.lineSearchClick = function(event){
		var start = this.comp("startPosition").val();
		var end = this.comp("endPosition").val();
		var time = this.comp("input5").val();
		this.comp("busList").open({
			src : require.toUrl("./busList/busList.w"),
			params : {
				start : start,
				end : end,
				time : time
			}
		});
	};

	Model.prototype.changeClick = function(event){
		var start = this.comp("startPosition").val();
		var end = this.comp("endPosition").val();
		this.comp("startPosition").val(end);
		this.comp("endPosition").val(start);
	};

	Model.prototype.preBtnClick = function(event){
		this.orderImg.set("consult");
	};

	Model.prototype.afterBtnClick = function(event){
		this.orderImg.set("order");
		this.comp("busList").open({
			src : require.toUrl("./order/order.w"),
			params : {
				title : "订单"
			}
		});
	};
	
	Model.prototype.orderBack = function(data){
		this.orderImg.set(data);
	}
	
	return Model;
});