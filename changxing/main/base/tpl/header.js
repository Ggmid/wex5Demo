define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Utils = require("../../common/Utils");
	var Model = function(){
		this.callParent();
		this.showMenu = false;
		this.showMenuIcon = justep.Bind.observable(this.showMenu);
		this.color = justep.Bind.observable(false);
		//window.currentDialog.push(this);
	};

	Model.prototype.modelParamsReceive = function(event){
		this.color.set(event.params.color);
		this.showMenuIcon.set(this.showMenu);
		var title = event.params.title;
		this.comp("title").set({
			title:title
		});
		this.myModelParamsReceive(event);
	};
	Model.prototype.myModelParamsReceive = function(){};
	Model.prototype.button11Click = function(event){
		this.MenuClick(event);
	};
	Model.prototype.MenuClick = function(event){
		
	};

	Model.prototype.backBtnClick = function(event){
		Utils.target("orderBack","consult");
		this.owner.close();
		window.currentDialog.pop();
		this.mySelfClose();
	};
	return Model;
});