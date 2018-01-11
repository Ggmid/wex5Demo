define(function(require){
	var $ = require("jquery");
	var Utils = require("../common/Utils");
	var Model = function(){
		this.callParent();
		this.showHeadMap = false;
		Utils.register("showList",this.showList,this);
		this.showList = justep.Bind.observable(false);
	};
	Model.prototype.myModelParamsReceive = function(event){
		this.getBusData();
	}
	Model.prototype.getBusData = function(event){
		var busData = this.getParent().data;
		var busList = [];
		busList.push(busData.toJson());
		this.comp("busData").loadData(busList);
		var line = busData.val("line");
		console.log(line);
		this.busSearch(line);
		this.comp("listData").loadData(busList);
	}
	//搜索路线
	Model.prototype.busSearch = function(name){
		var self = this;
		var busLine = this.getIDByXID("busLine");
		var busline = new BMap.BusLineSearch(self.map,{
			renderOptions:{map:self.map,autoViewport: true},
				onGetBusListComplete: function(result){
				   if(result) {
					 var fstLine = result.getBusListItem(0);//获取第一个公交列表显示到map上
					 busline.getBusLine(fstLine);
				   }
				}
		});
		busline.getBusList(name);
		var startPoint = new BMap.Icon("images/start.png", new BMap.Size(27,37));
		var endPoint = new BMap.Icon("images/end.png", new BMap.Size(27,37));
		busline.setMarkersSetCallback(function(result){
			result[0].setIcon(startPoint);
	        var len = result.length;
	        result[len-1].setIcon(endPoint);
	        self.showMaker(name);
	        result.forEach(function(ele,i){
	        	$("#"+busLine).append("<div style='padding-left:28px;font-size:16px;border-bottom:1px solid #eee;line-height:2;'>"+ele.zB+"</div>");
	        })
		});
	};
	//公交车信息
	Model.prototype.busInfo = function(marker,point){
		var self = this;
		marker.addEventListener("click",function(e){
			var p = e.target;
			var info = p.info;
			var content = "<div><div><span>车牌:</span><span>"+info.plate+"</span></div><div><span>车次:</span>"+info.number+"<span></span></div></div>";
			var infoWindow = new BMap.InfoWindow(content);
			self.map.openInfoWindow(infoWindow,point); //开启信息窗口
		})	
	};
	//显示公交车
	Model.prototype.showMaker = function(name){
		var self = this;
		var carImage = new BMap.Icon("images/car.png", new BMap.Size(24,29));
		if(name==="13路"){
			var point1 = new BMap.Point(120.039876,30.868052);
			var point2 = new BMap.Point(120.074658,30.869044);
			var point3 = new BMap.Point(120.10556,30.870532);
			
		}else{
			var point1 = new BMap.Point(120.081343,30.854383);
			var point2 = new BMap.Point(120.149183,30.850414);
			var point3 = new BMap.Point(120.312459,30.851903);
		}
		var marker1 = new BMap.Marker(point1,{icon:carImage});
		var marker2 = new BMap.Marker(point2,{icon:carImage});
		var marker3 = new BMap.Marker(point3,{icon:carImage});
		marker1.info = {
	    	plate : "浙E37434",
	    	number : 1
	    };
	    marker2.info = {
	    	plate : "浙E38680",
	    	number : 2
	    };
	    marker3.info = {
	    	plate : "浙E76389",
	    	number : 3
	    };
		self.map.addOverlay(marker1);
		self.map.addOverlay(marker2);
		self.map.addOverlay(marker3);
		this.busInfo(marker1,point1);
		this.busInfo(marker2,point2);
		this.busInfo(marker3,point3);
	};
	
	//判断是否显示列表
	Model.prototype.showList = function(data){
		this.showList.set(data);
	}

	return Model;
});