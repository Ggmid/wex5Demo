define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var data = null;
	var time = null;
	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelParamsReceive = function(event){
		data = event.params.data;
		time = event.params.time;
		var span2 = this.getIDByXID("span2");
		var span3 = this.getIDByXID("span3");
		var span5 = this.getIDByXID("span5");
		var span6 = this.getIDByXID("span6");
		$("#"+span2).html(data.val("startPosition"));
		$("#"+span3).html(data.val("endPosition"));
		$("#"+span5).html(time);
		$("#"+span6).html(data.val("start")+"始发");
		var item = {start:data.val("startPosition"),endPosition:data.val("endPosition"),time:data.val("start"),cost:data.val("cost"),where:"12B"};
		item.leave = data.val("leave");
		item.num = "E83468323423";
		this.comp("data1").loadData([item]);
	};
	
	Model.prototype.payClick = function(event){
		var self = this;
		this.comp("popOver1").show();
		setTimeout(function(){
			self.comp("popOver1").hide();
			self.comp("paySuceess").show();
			
		},2000);
	};
	
	
	
	Model.prototype.paySuceessOK = function(event){
		this.comp("orderWin").open({
			src : require.toUrl("../order/order.w"),
			params : {
				title : "订单",
				data : data,
				time : time
			}
		});
	};
	
	
	
	return Model;
});