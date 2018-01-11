define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Utils = require("./common/Utils");
	var vesion = "1.0.0";
	require('http://api.map.baidu.com/api?v=2.0&ak=o9pzum8sF8s3wqodZnt9S5OsKlLdjOil&callback=_baiduInit');
	require("cordova!cordova-open"); 
	require("cordova!cordova-plugin-file"); 
	require("cordova!cordova-plugin-file-transfer"); 
	require("cordova!cordova-plugin-screen-orientation"); 
	var Model = function() {
		this.callParent();
		this.serverUrl = "http://113.209.232.163/";
		//this.serverUrl = "http://101.68.64.166:28186/";
		//this.serverUrl = "http://192.168.0.111:8080/";
		this.projectName = "refuge.app/";
		this.downUrl = "http://101.68.64.166:10088/appDownload/app.apk";
		this.filePath = "file:///storage/emulated/0/app.apk";
		this.pageIndex = 1;
	};

	// 初始化
	Model.prototype.modelParamsReceive = function(event) {
		var flag = Utils.getLocalStorage("LOGINSTORE.FLAG");
		$("#me").hide();
		$("#heat").show();
	};
	Model.prototype.propagandaData = function(){
		var self = this;
		var sdata = {};
		Utils.ajax({
			type : "post",
			url : "app/propaganda/list",
			data : {
				filter : JSON.stringify(sdata),
				pageIndex : self.pageIndex,
				pageSize : 10
			},
			fnSuccess : function(data) {
				var proList = data.data.data;
				var proItem = [];
				var length;
				if (proList.length > 4) {
					length = 4;
				} else {
					length = proList.length
				}
				for (var i = 0; i < length; i++) {
					var date = new Date(proList[i].pushTime);
					proList[i].pushTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
					proItem.push(proList[i]);

				}
				self.comp("listData").loadData(proItem);
			}
		})
	};


	// 路线查询
	Model.prototype.busClick = function(event) {
		this.comp("windowDialog").open({
			src : require.toUrl("./busSearch/busSearch.w"),
			params : {
				title : "路线查询"
			}
		});
	};
	// 汽车购票
	Model.prototype.buyClick = function(event) {
		this.comp("windowDialog").open({
			src : require.toUrl("./buyTicket/buyTicket.w"),
			params : {
				title : "汽车购票"
			}
		});
	};
	//新闻详情
	Model.prototype.li2Click = function(event) {
		this.comp("windowDialog").open({
			src : require.toUrl("news/propagandaDetails.w"),
			params : {
				title : "新闻详情",
				header : event.bindingContext.$object.val("title")
			}
		});
	};
	//更多
	Model.prototype.moreClick = function(event){
		this.comp("windowDialog").open({
			src : require.toUrl("news/propaganda.w"),
			params : {
				title : "最新资讯"
			}
		});
	};
	//加油站
	Model.prototype.driverClick = function(event){
		this.comp("windowDialog").open({
			src : require.toUrl("gas/gas.w"),
			params : {
				title : "驾校"
			}
		});
	};
	
	//驾校
	Model.prototype.gasClick = function(event){
		this.comp("windowDialog").open({
			src : require.toUrl("gas/gas.w"),
			params : {
				title : "加油站"
			}
		});
	};
	
	//修理厂
	Model.prototype.fixedClick = function(event){
		this.comp("windowDialog").open({
			src : require.toUrl("gas/gas.w"),
			params : {
				title : "修理厂"
			}
		});
	};
	
	//施工
	Model.prototype.buildClick = function(event){
		this.comp("windowDialog").open({
			src : require.toUrl("build/build.w"),
			params : {
				title : "施工"
			}
		});
	};
	Model.prototype.modelModelConstruct = function(event) {
		var self = this;
		Utils.setServerUrl(this.serverUrl);
		Utils.setProjectName(this.projectName);
		//Utils.setDebuger();
		Utils.setPublish();
		//window.screen.lockOrientation('portrait');
		this.addBackListener();
		//this.propagandaData();
		/*setTimeout(function(){
			self.checkVersion();
		},500);	*/
	};
	
	Model.prototype.windowDialogClose = function(event){
			
	};
	
	Model.prototype.addBackListener = function(){
		var exitDtd = $.Deferred();		if(this.attached === true){
			exitDtd.reject();
		}else{
			this.attached = true;
			document.addEventListener("deviceready", function() {
				window.currentDialog = window.currentDialog || [];
				var exitAppTicker = 0;
				var listener = function(){
					if(window.currentDialog.length>0){
						if($('html').hasClass("x-focus-in")){
							$('html').removeClass("x-focus-in");
						}else{
							if(window.currentDialog[window.currentDialog.length-1] && Utils.heatmapFlag){
								window.currentDialog[window.currentDialog.length-1].getElementByXid("backBtn").click();
								//Utils.heatmapFlag = false;
							}	
						}
					}else{
						if(exitAppTicker === 0){
							exitAppTicker++;
							var msg = $('<div style="display: none;z-index:99999;position: fixed;width: 100%;bottom: 25px;text-align: center;"><span style="font-size:18px;border-radius: 3px;padding: 7px;background-color: #383838;color: #F0F0F0;">再按一次退出应用</span></div>').appendTo('body');
							msg.fadeIn(400).delay(2000).fadeOut(400,function(){
								exitAppTicker = 0;
								msg.remove();
							});
						}else if(exitAppTicker == 1){
							exitDtd.resolve();
							navigator.app.exitApp();
						}	
					}
				};
				document.addEventListener('backbutton', listener, false);
				$(window).on('beforeunload', function(){
					document.removeEventListener('backbutton', listener, false);
			    });
	        }, false);
		}
	};
	Model.prototype.checkVersion=function(){
		var self = this;
		var sdata = {};
		Utils.ajax({
			type : "post",
			url:"app/getVersion",
			data : {
				filter : JSON.stringify(sdata)
			},
			fnSuccess:function(res){
				var version = res.data || ["-1"];
				if(version !== vesion){
					self.comp("versionMessage").set({
						message:"当前版本:"+vesion+"<br/>发现新版本:"+version+"<br/>请更新版本"
					});
					self.comp("versionMessage").show();
				}
			}
		});
	};
	Model.prototype.start = function(){};
	Model.prototype.versionMessageOK = function(event){
		this.downLoadFile();
	};
	Model.prototype.downLoadFile = function() {
		var self = this;
		var uri = encodeURI(this.downUrl); // 下载地址 
		var fileTransfer = new FileTransfer(); 
		var filePath = self.filePath; // 下载路径,数据库保存文件名 
		var process = $(self.getElementByXid("progress"));
		fileTransfer.onprogress = function(progressEvent){
			var percentProgress = parseInt((progressEvent.loaded / progressEvent.total) * 100)+"%"; // 获取已下载和总大小的百分比 	
			process.find(".progress-bar").css("width",percentProgress);
			process.find("span").html(percentProgress);
		};
		this.comp("procrssPopu").show();
		fileTransfer.download(uri, filePath,function(entry){
			// 下载完成后调用方法 
			self.open(filePath);
		}, function(error) { 
			// 出错回调函数 
		},{ 
			headers : { 
			"Authorization" : "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA==" 
			} 
		});
	};
	Model.prototype.open = function(filePath){
		var localUrl = filePath;
		var open = cordova.plugins.disusered.open;
	    function success() {
	    }
	    function error(code) {
	        if (code === 1) {
	            justep.Util.hint('文件下载失败，请重新下载！');
	        } else {
	            justep.Util.hint('未知错误，请联系管理员！');
	        }
    }
	    open(localUrl, success, error);
	};
	
	
	
	
	return Model;
});