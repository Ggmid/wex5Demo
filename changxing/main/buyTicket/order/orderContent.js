define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Utils = require("../../common/Utils");
	var Model = function(){
		this.callParent();
		this.borRed = justep.Bind.observable("all");
	};
	Model.prototype.modelParamsReceive = function(event){
		if(this.getParent().data){
			var data = this.getParent().data;
			var time = this.getParent().time;
			var item = data.toJson();
			item.time = time;
			item.leave = "4A"
			item.where = "12B";
			Utils.arr.push(item);
		}
		this.comp("listData").loadData(Utils.arr);
	};
	Model.prototype.allClick = function(event){
		this.borRed.set("all");
		var self = this;
		this.comp("popOver1").show();
		setTimeout(function(){
			self.comp("popOver1").hide();
		},2000);
	};

	Model.prototype.suceessClick = function(event){
		this.borRed.set("suc");
		var self = this;
		this.comp("popOver1").show();
		setTimeout(function(){
			self.comp("popOver1").hide();
		},2000);
	};

	Model.prototype.notGoClick = function(event){
		this.borRed.set("faile");
		var self = this;
		this.comp("popOver1").show();
		setTimeout(function(){
			self.comp("popOver1").hide();
		},2000);
	};

	

	return Model;
});