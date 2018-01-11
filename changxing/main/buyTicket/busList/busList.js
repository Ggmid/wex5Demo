define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var start = null;
	var end = null;
	var time = null;
	var Model = function(){
		this.callParent();
	};
	Model.prototype.modelParamsReceive = function(event){
		start = event.params.start;
		end = event.params.end;
		time = event.params.time;
		this.setData(start,end);
		var span2 = this.getIDByXID("span2");
		var span3 = this.getIDByXID("span3");
		$("#"+span2).html(start);
		$("#"+span3).html(end);
		this.comp("input1").val(time);
	};
	Model.prototype.li2Click = function(event){
		var row = event.bindingContext.$object;
		this.comp("passenger").open({
			src : require.toUrl("../passenger/passenger.w"),
			params : {
				title : "添加乘客",
				data : row,
				time : time
			}
		});
	};

	Model.prototype.setData = function(start,end){
		var list = [];
		var item1 = {num:"K43242",start:"06:40",startPosition:start,endPosition:end,cost:"45元",leave:"30张"};
		var item2 = {num:"K34627",start:"07:40",startPosition:start,endPosition:end,cost:"45元",leave:"40张"};
		var item3 = {num:"K46856",start:"09:50",startPosition:start,endPosition:end,cost:"45元",leave:"33张"};
		var item4 = {num:"K34343",start:"11:40",startPosition:start,endPosition:end,cost:"45元",leave:"33张"};
		var list = [item1,item2,item3,item4];
		this.comp("listData").loadData(list)
	}

	Model.prototype.preClick = function(event){
		var self = this;
		var time = this.comp("input1").val();
		var arr = time.split("-");
		Number(arr[2])-1<10?"0"+Number(arr[2])-1:Number(arr[2])-1
		var newTime = arr[0]+"-"+arr[1]+"-"+((Number(arr[2])-1)<10?"0"+(Number(arr[2])-1):(Number(arr[2])-1));
		this.comp("input1").val(newTime);
		this.comp("popOver1").show();
		setTimeout(function(){
			self.comp("popOver1").hide();
		},2000);
	};

	Model.prototype.aftClick = function(event){
		var self = this;
		var time = this.comp("input1").val();
		var arr = time.split("-");
		var newTime = arr[0]+"-"+arr[1]+"-"+(Number(arr[2])+1);
		this.comp("input1").val(newTime);
		this.comp("popOver1").show();
		setTimeout(function(){
			self.comp("popOver1").hide();
		},2000);
	};
	
	return Model;
});