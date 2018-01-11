define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var temp = true;
	var collectArr = [];
	var proItem1 = {
		line : "101路	",
		start : "泰安路车站",
		end : "高铁站",
		startTime : "05:40",
		endTime : "17:50",
		cost : "最高票价8元",
		flag : false
	};
	var proItem2 = {
		line : "13路",
		start : "高铁湖州站",
		end : "绿色东站",
		startTime : "06:45",
		endTime : "23:00",
		cost : "2元",
		flag : false
	};
	var Model = function(){
		this.callParent();
		this.collectImg = justep.Bind.observable("bus");
	};

	Model.prototype.modelParamsReceive = function(event){
		var title = event.params.title;
	    this.comp("title").set({
			title:title
		});
	};

	Model.prototype.backBtnClick = function(event){
		this.owner.close();
		window.currentDialog.pop();
		this.mySelfClose();
	};

	//搜索
	Model.prototype.searchClick = function(event){
		var self = this;
		var sval = this.comp("suggestId").val();
		var proList = [];
		var newArr = [];
		proList = [proItem1,proItem2];
		proList.forEach(function(ele,i){
			if(sval == ""){
				self.comp("listData").loadData([]);
			}else if(ele.line.indexOf(sval)>=0){
				newArr.push(ele);
				self.comp("listData").loadData(newArr);
			}
		})
		
	};
	//收藏
	Model.prototype.collectClick = function(event){
		var self = this;
		var row = event.bindingContext.$object;
		var proList = [];
		proList = [proItem1,proItem2];
		proList.forEach(function(ele,i){
			if(ele.line == row.val("line") && temp){
				ele.flag = true;
				justep.Util.hint("收藏成功！", {
					type : "warning"
				});
				temp = false;
				self.comp("listData").loadData([ele]);
			}else if(ele.line == row.val("line") && !temp){
				ele.flag = false;
				justep.Util.hint("取消收藏成功！", {
					type : "warning"
				});
				temp = true;
				self.comp("listData").loadData([ele]);
			}
		});
		collectArr = proList;
		//this.collectImg.set(true);
		//console.log(this.collectImg.get());
	};
	//路线查询
	Model.prototype.preBtnClick = function(event){
		this.collectImg.set("bus");
		var myBus = this.getIDByXID("myBus");
		$("#"+myBus).css({"display":"block"});
		var myCollect = this.getIDByXID("myCollect");
		$("#"+myCollect).css({"display":"none"});
	};
	//我的收藏
	Model.prototype.afterBtnClick = function(event){
		var self = this;
		this.collectImg.set("collect");
		var myBus = this.getIDByXID("myBus");
		$("#"+myBus).css({"display":"none"});
		var myCollect = this.getIDByXID("myCollect");
		$("#"+myCollect).css({"display":"block"});
		$("#"+myCollect).empty();
		collectArr.forEach(function(ele,i){
			if(ele.flag){
				$("#"+myCollect).append("<div style='line-height:2;font-size:18px;padding-left:10px;border-bottom:1px solid #eee;'>"+ele.line+"</div>");
				$("#"+myCollect).css({"text-align":"left"});
			}
		});
		if($("#"+myCollect).html() == ""){
			$("#"+myCollect).html("暂无收藏记录！");
			$("#"+myCollect).css({"text-align":"center"});
		}
	};

	Model.prototype.li2Click = function(event){
		var row = event.bindingContext.$object;
		this.comp("windowDialog1").open({
			src : require.toUrl("../busDetails/busDetails.w"),
			params : {
				data : row,
				title : row.val("line")+"详情"
			}
		})
	};

	return Model;
});