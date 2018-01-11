define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	require('http://api.map.baidu.com/api?v=2.0&ak=o9pzum8sF8s3wqodZnt9S5OsKlLdjOil&callback=_baiduInit');
	require('http://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js');
	var Utils = require("../../common/Utils");
	require("css!./map.css").load();
	require("css!../../css/TrafficControl_min.css").load();
	require('http://api.map.baidu.com/library/TrafficControl/1.4/src/TrafficControl_min.js');
	var num = 3000;
	var heatmap = {};
	var searchRoute = null;
	var before = new Date().getTime();
	var Model = function(){
		this.callParent();
		this.map = null;
		this.marker = [];
		this.heatmapOverlay = null;
		this.heatIcon = justep.Bind.observable(false);
		this.upLoadIocn = justep.Bind.observable(false);
		this.showHeadMap = true;
		this.control = true;
		this.ebleDrag = true;
		this.time = null;
		this.dateTime = null;
		this.navigationControl = null;
		this.stCtrl = null;
		this.ctrl = null;
		this.geolocationControl = null;
	};

	Model.prototype.modelParamsReceive = function(event){
		this.initMap();
		this.map.disableDoubleClickZoom();
		if(this.showHeadMap){
			this.initHeatMap();
		}
		this.myModelParamsReceive(event);
		this.sjsbModelParamsReceive(event);	
		
	};
	Model.prototype.sjsbModelParamsReceive = function(event){};
	Model.prototype.myModelParamsReceive = function(event){};
	//初始化map对象
	Model.prototype.initMap = function(){
		var self =this;
		var baiduMap = self.getIDByXID("baiduMap");
		window._baiduInit = function() {
			var map = new BMap.Map(baiduMap,{minZoom:6,maxZoom:18});
			map.centerAndZoom("湖州南浔", 14);
			self.map = map;
			if(self.showHeadMap){
				self.heatImgClick();
			}
		}
		if (window.BMap && window.BMap.Map) {
			window._baiduInit();
		}
		self.addControl();
	};
	
	//加载地图控件
	Model.prototype.addControl = function(){
		this.navigationControl = new BMap.NavigationControl({
			// 靠左上角位置
	        anchor : BMAP_ANCHOR_TOP_LEFT,
	        // LARGE类型
	        type : BMAP_NAVIGATION_CONTROL_LARGE,
	        // 启用显示定位
	        enableGeolocation : true
	    });
	    //this.map.addControl(this.navigationControl);
	
	    //this.stCtrl = new BMap.PanoramaControl(); // 构造全景控件
	    //this.stCtrl.setOffset(new BMap.Size(10, 10));
	    
	    // 添加定位控件
	    this.geolocationControl = new BMap.GeolocationControl();
	    //this.map.addControl(this.geolocationControl);
	
	   /* this.ctrl = new window.BMapLib.TrafficControl({
	        showPanel: true //是否显示路况提示面板
	    });
	    this.ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);*/ 	
	    if(this.control){
	    	this.map.addControl(this.ctrl);
	    	//this.map.addControl(this.stCtrl);// 添加全景控件
	    } 
	};
	//路线
	Model.prototype.lineClick = function(event){
		this.doMyline();
	};
	Model.prototype.doMyline= function(event){
		this.comp("windowDialog1").open({
			src : require.toUrl("../../bndhs/path/path.w"),
			params : {
				title : ""
			}
		})
	};
	
	
	//画区域
	Model.prototype.draw = function(point,strokePoint,color,icon){
		var self = this;
		var strokePoint = strokePoint.replace(/,/g, ";").split(";");
		var len = strokePoint.length;
		var list = [];
		for (var j = 0; j < len / 2; j++) {
			list.push(new BMap.Point(strokePoint[j * 2], strokePoint[j * 2 + 1]));
		}
		if (polygon != undefined) {
			self.map.removeOverlay(polygon);
			polygon == undefined;
		}
		var polygon = new BMap.Polygon(list, {
			strokeColor : color, // 边线颜色。
			fillColor : color, // 填充颜色。当参数为空时，圆形将没有填充效果。
			strokeWeight : 2, // 边线的宽度，以像素为单位。
			strokeOpacity : 0.8, // 边线透明度，取值范围0 - 1。
			fillOpacity : 0.2, // 填充的透明度，取值范围0 - 1。
			strokeStyle : 'dashed' // 边线的样式，solid或dashed。
		});
		var marker = new BMap.Marker(point,{icon:icon});
		this.map.panTo(point);
		this.map.addOverlay(marker);
		self.map.addOverlay(polygon);
	}
	
	
	//事件上报
	Model.prototype.reportImgClick = function(event){
		this.doReportImgClick();
	};
	Model.prototype.doReportImgClick = function(event){
		this.comp("windowDialog1").open({
			src : require.toUrl("../../sjsb/report.w"),
			params : {
				title : "事件上报",
				color : true
			}
		})
	};
	
	//获取当前位置
	Model.prototype.getCurrentPosition = function(callBack){
		function success(data){	
			if(callBack instanceof Function){
				callBack(data);
			}
		};
		function error(result){
			console.log("错误信息："+result);
		};
		navigator.geolocation.getCurrentPosition(success, error,{
		  	"enableHighAccuracy":false,
		  	"timeout":5000,
		  	"maximumAge":2000
		});
	};
	//定时获取当前位置
	Model.prototype.interval = function(){
		var self = this;
		this.time = setInterval(function(){
			self.getCurrentPosition(function(data){
				var lon = data.coords.longitude;
				var lat = data.coords.latitude;
				var point = new BMap.Point(lon,lat);
				var Icon = new BMap.Icon("images/nav.png",new BMap.Size(30,30));
				if(self.marker == null){
					var marker = new BMap.Marker(point,{icon:Icon});
				}
				self.marker = marker;
				self.map.removeOverlay(marker);
				self.map.addOverlay(marker);
			});
		},1000);
	};
	
	//清除定时器
	Model.prototype.clearTime = function(){
		var self = this;
		clearInterval(this.time);
	};
	
	//获取中心点的地理位置
	Model.prototype.getCenterPosition = function(pt,callBack){
		var lon = pt.lng;
		var lat = pt.lat;
		var self = this;
		$.ajax({
             type : "get",
             async:false,
             url : "http://api.map.baidu.com/geocoder/v2/?output=json&ak=o9pzum8sF8s3wqodZnt9S5OsKlLdjOil&location="+lat+","+lon+"",
             dataType : "jsonp",
             success : function(data){
            	 var data = data.result;
            	 var str = data.sematic_description.replace(/\d/g,'');
            	 var description = str.substring(0,str.length-1)
            	 self.content = data.formatted_address + description;
            	 if(callBack instanceof Function){
					 callBack(self.content);
				 }
             },
             error:function(){
                 console.log('fail');
             }
         });	
	};
	//------------------hetmap start----------------
	//初始化热力图
	Model.prototype.initHeatMap = function(){
		var self =this;
		this.comp("popOver1").show();
		this.getHeatData(function(data,radius,max){	
			self.showHeatMap(data,radius,max);
			self.comp("popOver1").hide();
			Utils.heatmapFlag = true;
		});
	}

	//拖动地图
	Model.prototype.doMoveHeatMap = function(state){
		var self = this;
		if(!this.showData){
			this.showData = function(){
			    var now  =  new Date().getTime();
			    if(now-before > num){
			        self.getHeatData(function(data,radius,max){
						self.dateTime = new Date().getTime();
						if(self.heatmapOverlay){
							self.heatmapOverlay.setDataSet({data:data,max:max});
						}
					});
			        before = now;
			    }else{
			        setTimeout(function () {
			            var now  =  new Date().getTime();
			            if(now-before > num){
			                self.getHeatData(function(data,radius,max){
								self.dateTime = new Date().getTime();
								if(self.heatmapOverlay){
									self.heatmapOverlay.setDataSet({data:data,max:max});
								}
							});
			                before = now;
			            }
			        },num);
			    }
				
			};
		};	
		if(!state){
			this.map.addEventListener("dragend",this.showData );
			this.map.addEventListener("zoomend",this.showData );
		}else{
			this.map.removeEventListener("dragend",this.showData);
			this.map.removeEventListener("zoomend",this.showData);
			this.showData = null;
		};
	};
	//显示热力图
	Model.prototype.showHeatMap=function(points,radius,count){
		var map = this.map;
		this.heatmapOverlay = new BMapLib.HeatmapOverlay({
			"radius" : radius
		});
		map.addOverlay(this.heatmapOverlay);
		this.heatmapOverlay.setDataSet({
			data : points,
			max : count
		});
		var gradient = {
			'1.0' : 'rgb(254,56,48)',
			'0.8' : 'rgb(235,250,100)',
			'0.6' : 'rgb(162, 248, 134)',
			'0.2' : 'rgb(174,176,244)',
			'0' : 'rgb(245,243,240)'
		};
		this.heatmapOverlay.setOptions({
			"gradient" : gradient,
			"opacity" : 50
		});
		// 是否显示热力图
		this.heatmapOverlay.show();
	};
	
	//隐藏热力图
	Model.prototype.hideHeatMap = function(){
		this.heatmapOverlay.hide();
	}
	
	//热力图
	Model.prototype.heatImgClick = function(event){
		var self =this;
		var heatIcon = this.heatIcon.get();
		this.heatIcon.set(!heatIcon);
		if(!heatIcon){
			if(!this.heatmapOverlay){
				/*this.getHeatData(function(data,radius,max){
					self.heatmapOverlay.setDataSet({data:data,max:max});
				});*/
			}else{
				this.heatmapOverlay.show();
			}
		}else{
			this.hideHeatMap();
		}
		this.doMoveHeatMap(heatIcon);
	};
	
	//获取热力图参数
	Model.prototype.heatMapParams = function(){
		var map = this.map;
		var mdata = {};
		var points;
		var bs = map.getBounds(); // 获取可视区域
		var bssw = bs.getSouthWest(); // 可视区域左下角
		var bsne = bs.getNorthEast(); // 可视区域右上角
		mdata.minlng = bssw.lng;
		mdata.maxlng = bsne.lng;
		mdata.minlat = bssw.lat;
		mdata.maxlat = bsne.lat;
		mdata.type = 0;
		mdata.zoom = map.getZoom();
		return mdata;
	}
	
	//地图等级获取个推等级
	Model.prototype.getPrecisionByZoom = function(mapzoom) {
		var precision = 4;
		if (mapzoom >= 15)
			precision = 8;
		else if (mapzoom >= 12)
			precision = 7;
		else if (mapzoom >= 10)
			precision = 6;
		else if (mapzoom >= 8)
			precision = 5;

		return precision;
	};
	Model.prototype.getHeatData=function(callBack){
		var self = this;
		setTimeout(function(){
			var mdata = self.heatMapParams();
			Utils.ajax({
				type : "post",
				url : "app/heatmap/getjson",
				data : {
					filter : JSON.stringify(mdata)
				},
				fnSuccess:function(data){
					if(callBack instanceof Function){
					   var max = 200;
		               if (data.data.count > 100) {
		                   max = Math.round(data.data.count / 100) * 100;
		               } else if (data.data.count > 10) {
		                   max = Math.round(data.data.count / 10) * 10;
		               } else {
		                   max = 10;
		               };
		               callBack(data.data.data,data.data.radius,max);
					}
				}
			});
		},0)
	};
	//------------------hetmap end----------------
	
	
	//----------------------event-----------------
	
	//事件点击
	Model.prototype.trafficImgClick = function(event){
		var self = this;
		var upLoadIocn = this.upLoadIocn.get();
		this.upLoadIocn.set(!upLoadIocn);
		if(!upLoadIocn){
			if(this.marker.length == 0){
				self.getTrafficData(function(data){
					self.showTraffic(data);
				});
			}else{
				
			}
		}else{
			this.doMyClear();
			for(var i = 0 ;i<this.marker.length;i++){
				this.map.removeOverlay(this.marker[i]);
			};
			this.marker = [];
		}	
	};
	Model.prototype.doMyClear = function(){	
	};
	
	//显示事件
	Model.prototype.showTraffic = function(data){
		var self = this;
		for (var i = 0; i < data.data.data.length; i++) {
			if(data.data.data[i].status == "001"){
				var Icon = new BMap.Icon("images/001.png",new BMap.Size(30,30));
			}else if(data.data.data[i].status == "002"){
				var Icon = new BMap.Icon("images/002.png",new BMap.Size(30,30));
			}else if(data.data.data[i].status == "003"){
				var Icon = new BMap.Icon("images/003.png",new BMap.Size(30,30));
			}else{
				var Icon = new BMap.Icon("images/004.png",new BMap.Size(30,30));
			}
			var point = new BMap.Point(data.data.data[i].lon, data.data.data[i].lat);
			
			var marker = new BMap.Marker(point,{icon:Icon});
			this.marker.push(marker);
			self.map.addOverlay(marker);
			self.addListernMyMarkClick(marker,data.data.data[i]);
		}
	}
	Model.prototype.addListernMyMarkClick = function(marker,info){
		
	}
	
	//获取事件数据
	Model.prototype.getTrafficData=function(callBack){
		var sdata = {};
		Utils.ajax({
			type : "post",
			url : "app/event/list",
			data : {
				filter : JSON.stringify(sdata)
			},
			fnSuccess:function(data){
				if(callBack instanceof Function){
					callBack(data);
				}
			}
		})
	};
	
	//事件详细信息
	Model.prototype.pointDetails = function(data){
	}
	
	//------------------event------------------------ 
	
	//------------------导航-----------------------
	//画驾车和步行路线
	Model.prototype.route = function(start,end,type,callBack){
		var self = this;
		if(searchRoute != null){
			self.map.removeOverlay(searchRoute); 
		};
		switch (type) {
			case "jc":
				var searchComplete = function(results) {
					if (transit.getStatus() != BMAP_STATUS_SUCCESS) {
						return;
					};
				}
				var transit = new BMap.DrivingRoute(self.map, {
					renderOptions : {
						map : self.map,
						autoViewport: true
					},
					onSearchComplete : searchComplete,
					onPolylinesSet : function(routes) {
						 searchRoutes = routes[0].getPolyline();//导航路线
						 self.map.addOverlay(searchRoutes); 
						
					}
				});
				transit.search(start, end);
				break;
			case "bx":
				
				break;
		}	
	};
	//获取公交路线信息
	Model.prototype.getBusRouteInfo = function(start,end,callBack){
		this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);    
		var transit = new BMap.TransitRoute("北京市"); 
		transit.setSearchCompleteCallback(function(results){
			 if (transit.getStatus() == BMAP_STATUS_SUCCESS){	 
			   // 输出方案信息  
			   var s = [];    
			   for (var i = 0; i < results.getNumPlans(); i ++){    
			     s.push(results.getPlan(i).getDescription());    
			   }  
			 } 
			 if(callBack instanceof Function){
				 callBack(s);
			 }   
		})    
		transit.search(start,end);
	};
	
	
	//获取公交线路
	Model.prototype.getBusRoute = function(start,end,index,callBack){
		var self = this;
		this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);    
		var transit = new BMap.TransitRoute("北京市");
		var searchComplete = function(results) {
			if (transit.getStatus() != BMAP_STATUS_SUCCESS) {
				return;
			}
			var plan = results.getPlan(index);
		}
		var transit = new BMap.TransitRoute(self.map, {
			renderOptions : {
				map : self.map
			},
			onSearchComplete : searchComplete,
			onPolylinesSet : function() {
			}
		}); 
		transit.search(start,end);   
	};
	
	//本地检索
	Model.prototype.localSearch = function(location,callBack){
		var self = this;
		var options = {
			onSearchComplete: function(results){
				// 判断状态是否正确
				if (local.getStatus() == BMAP_STATUS_SUCCESS){
					var s = [];
					for (var i = 0; i < results.getCurrentNumPois(); i ++){
						s.push(results.getPoi(i).title + ", " + results.getPoi(i).address);
					}
					if(callBack instanceof Function){
						callBack(s);
					}
				}
			}
		};
		var local = new BMap.LocalSearch(self.map, options);
		local.search(location);
	}
	
	
	return Model;
});