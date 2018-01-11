define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Utils = require("../common/Utils");

	var Model = function() {
		this.callParent();
		this.pageIndex = 1;
		//window.currentDialog.push(this);
	};

	Model.prototype.modelParamsReceive = function(event) {
	    var title = event.params.title;
	    this.comp("title").set({
			title:title
		});
		Utils.heatmapFlag = true;
		this.getData();
	};
	Model.prototype.getData = function(){
		var self = this;
	}
	Model.prototype.backBtnClick = function(event) {
		this.owner.close();
		window.currentDialog.pop();
		this.mySelfClose();
	};

	Model.prototype.liClick = function(event) {
		this.comp("windowDialog").open({
			src : require.toUrl("./propagandaDetails.w"),
			params : {
				title : "新闻详情",
				header : event.bindingContext.$object.val("title")
			},
			forceRefreshOnOpen : true
		})
	};

	Model.prototype.scrollView2PullDown = function(event){
		this.pageIndex = 1;
		this.getData();
	};

	Model.prototype.scrollView2PullUp = function(event){
		this.getData();
	};

	return Model;
});