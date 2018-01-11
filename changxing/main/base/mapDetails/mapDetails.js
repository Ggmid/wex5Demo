define(function(require){
	var $ = require("jquery");
	var tempIcon=null;
	var tempMark=null;
	var Model = function(){
		this.callParent();
		this.markerDel = justep.Bind.observable(false);
	};
	Model.prototype.doMyClear = function(){
		this.markerDel.set(false);
	};
	Model.prototype.addListernMyMarkClick = function(marker,info){
		var self = this;
		var createtime = info.createtime.split(".")[0];
		marker.info = {
			id : 1,	
			lon : info.lon.toFixed(2),
			lat : info.lat.toFixed(2),
			location : info.location,
			saturation : info.saturation,
			havenType :info.havenType,
			resourceName : info.resourceName,
			content : info.content,
			createtime : createtime,
			content : info.content,
			createuser : info.userName
		}
		marker.addEventListener("click",function(e){
			self.markerDel.set(true);
			if (tempIcon!=null&&tempMark!=null){
                tempMark.setIcon(tempIcon);
            }
            tempMark = null;
            tempIcon = null;
            var p = e.target;
            tempIcon = p.getIcon();
            tempMark = p;
            var newIcon = new BMap.Icon("images/active.png", new BMap.Size(30,30));
            p.setIcon(newIcon);
			var info = p.info;
			self.comp("markerDetils").loadData([info]);	
		})
	}
	
	
	Model.prototype.closeClick = function(event){
		this.markerDel.set(false);
	};
	
	
	return Model;
});