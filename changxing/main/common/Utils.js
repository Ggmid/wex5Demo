define(function(require){
	var $ = require("jquery");
	var MD5 = require('$UI/system/lib/base/md5');
	var Observable = require("$UI/system/lib/base/observable");
	require("cordova!com.justep.cordova.plugin.weixin.v3");
	var observable = new Observable();
	var serverUrl = "";
	var marker = null;
	var projectPrefix="/pf.web.runtime/";
	var projectName = "";//项目名称
	//正则验证
	var REGCACHE={
			PHONE: /^1[34578][0-9]{9}/,
			EMAIL:/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/
	};
	var md5 = new MD5();
	//模式类型
	var MODULETOTALTYPE={
		DEBUGER:"1",
		PUBLISH:"2"
	};
	var ModuleType = MODULETOTALTYPE.PUBLISH;//系统默认发布模式
	var sessionStorage = window.sessionStorage;//缓存sessionStorage对象
	var localStorage = window.localStorage;//缓存localStorage对象
	var STORAGETYPE={
			JSON:"json",
			ARRAY:"array",
			STRING:"string"
	};
	var _myselfEncrypt = function(value,key){
		
	} 
	var _tplFuncStorageType = function(type,value,isSet,cx){
		type = type.toLowerCase();
		var _value = value;
		switch(type){
			case STORAGETYPE.JSON:
				if(isSet){_value = cx.JSONToString(value);}else{_value = cx.StringToJson(value);}
				break; 
			case STORAGETYPE.ARRAY:
				if(isSet){_value = cx.ArrayToString(value);}else{_value = cx.StringToArray(value);}
				break;
			case STORAGETYPE.STRING:
				break;
			default:
				throw Error(type+"，类型不存在");
		}
		return _value;
	};
	var TYPES = {  
		    'undefined'        : 'undefined',  
		    'number'           : 'number',  
		    'boolean'          : 'boolean',  
		    'string'           : 'string',  
		    '[object Function]': 'function',  
		    '[object RegExp]'  : 'regexp',  
		    '[object Array]'   : 'array',  
		    '[object Date]'    : 'date'
		};
	var AJAXTYPE={
			AJAX:"1",//ajax方法
			GET:"2",//get方法
			POST:"3"//post
	};
	var TOSTRING = Object.prototype.toString;  
	var _setAjaxInit = function(type,config,context,popOver){
		context = context || this;
		config.url = config.url || "";
		config.data = config.data || {};//传送后台数据
		config.contentType="application/json;charset=utf-8";
		config.dataType = config.dataType || "json";//ajax返回数据格式
		if(config.url === "" || !context.isString(config.url)){
			throw new Error("url 不能为空,并且类型需string");
		}
		config.url = projectPrefix+projectName+config.url;//添加前缀
		if(ModuleType === MODULETOTALTYPE.DEBUGER){
			config.jsonp = "callback";
			config.url = serverUrl+config.url;
			config.jsonpCallback= "success_jsonpCallback";
			config.dataType='JSONP';
		}
		switch(type){
			case AJAXTYPE.AJAX:
				//todo ajax type
				config.success = function(data){
					if(!context.judge(data,popOver)){return;}
					if(context.isFunction(config.fnSuccess)){
						config.fnSuccess(data);
					}
				};
				config.error = function(xhr,status,error){
					if(context.isFunction(config.fnError)){
						config.fnError(status,xhr);
					}
				};
				break;
			case AJAXTYPE.GET://get
				config.data = {params:JSON.stringify(config.data),_v: ("" + Math.random() ).replace( /\D/g, "" )}; 
			case AJAXTYPE.POST://post
				//todo post
				config.fn=function(data,status,xhr){
					if(!context.judge(data,popOver)){return;}
					if(status === "success"){
						if(context.isFunction(config.fnSuccess)){
							config.fnSuccess(data);
						}
					}else{
						if(context.isFunction(config.fnError)){
							config.fnError(status,xhr);
						}
					}
				};
				break;
		}
		if(config.type=="get" || ModuleType === MODULETOTALTYPE.DEBUGER){
			config.data = {params:JSON.stringify(config.data),_v: ("" + Math.random() ).replace( /\D/g, "" )}; 
		}else{
			config.data = JSON.stringify({params:config.data,_v: ("" + Math.random() ).replace( /\D/g, "" )}); 
		}
//		console.log(config)
		return config;
	};
	var Util={
			num:0,
			arr:[],
			heatmapFlag:false,
			judge:function(data,popOver){
				if(popOver){
					popOver.hide();
				}
				if(data.flag == "false"){
					justep.Util.hint(data.message,{type:"warning"});
					return false;
				}else if(data.flag == "error"){
					justep.Util.hint("服务器维护中,请稍后再试...",{type:"warning"});
					return false;
				}
				return true;
			},
			setProjectName:function(name){
				projectName = name;
			},
			setDebuger:function(){
				ModuleType = MODULETOTALTYPE.DEBUGER;
				return this;
			},
			setPublish:function(){
				ModuleType = MODULETOTALTYPE.PUBLISH;
				return this;
			},
			setServerUrl:function(url){
				serverUrl = url;
			},
			type:function(o) {  
			    return TYPES[typeof o] || TYPES[TOSTRING.call(o)] || (o ? 'object' : 'null');  
			},
			isNull:function(n){
				return this.type(n) === 'null'; 
			},
			isRegExp:function(reg){
				return this.type(reg) === 'regexp'; 
			},
			isUndefined:function(u){
				return this.type(u) === 'undefined';
			},
			isFunction:function(f){
				return this.type(f) === 'function'; 
			},
			isString:function(s){
				return this.type(s) === 'string';
			},
			isNumber:function(n){
				return this.type(n) === 'number';
			},
			isBoolean:function(b){
				return this.type(b) === 'boolean';
			},
			isArray:function(a){
				return this.type(a) === 'array';
			},
			isDate:function(d){
				return this.type(d) === 'date';
			},
			setProjectPrefix:function(prefix){
				projectPrefix = prefix;
			},
			ajax:function(config,popOver){
				config = config ||{};
				config.type = config.type || "get";
				var initConfig=_setAjaxInit(AJAXTYPE.AJAX,config,this,popOver);
				$.ajax(initConfig);
				return this;
			},
			get:function(config,popOver){
				config = config ||{};
				config.type = "get";
				var initConfig=_setAjaxInit(AJAXTYPE.GET,config,this,popOver);
				$.get(initConfig.url,initConfig.data,config.fn,initConfig.dataType);
				return this;
			},
			post:function(config,popOver){
				config = config ||{};
				config.type = "post";
				var initConfig=_setAjaxInit(AJAXTYPE.POST,config,this,popOver);
				$.post(initConfig.url,initConfig.data,config.fn,initConfig.dataType);
				return this;
			},
			register:function(type,fn,cxt){
				cxt = cxt || this;
				if(!this.isString(type)){
					throw new Error("type 类型必须为String");
				}
				if(!this.isFunction(fn)){
					throw new Error("fn 类型必须为function");
				}
				observable.on(type, fn,cxt);
				return this;
			},
			unRegister:function(type,fn,cxt){
				cxt = cxt || this;
				observable.un(type,fn,cxt);
				return this;
			},
			target:function(type,options){
				if(!this.isString(type)){
					throw new Error("type 类型必须为String");
				}
				observable.fireEvent(type, options);
			},
			hasListener:function(type){
				return observable.hasListener(type);
			},
			//MD5 加密
			encryption:function(plainText){
				return md5.hex_md5_salt(plainText);
			},
			setSessionStorage:function(key,value,type){
				type = type || "string";
				var _value=_tplFuncStorageType(type,value,true,this);
				sessionStorage[key] = _value;
				sessionStorage[key+"_type"] = type;
				return this;
			},
			getSessionStorage:function(key){
				var type = sessionStorage[key+"_type"] || "string";
				var value = sessionStorage[key];
				return _tplFuncStorageType(type,value,false,this);
			},
			deleteSessionStorage:function(key){
				if(this.getSessionStorage(key)){
					delete sessionStorage[key];
					delete sessionStorage[key+"_type"];
				}
			},
			setLocalStorage:function(key,value,type){
				type = type || "string";
				var _value=_tplFuncStorageType(type,value,true,this);
				localStorage[key] = _value;
				localStorage[key+"_type"] = type;
				return this;
			},
			getLocalStorage:function(key){
				var type = localStorage[key+"_type"] || "string";
				var value = localStorage[key];
				return _tplFuncStorageType(type,value,false,this);
			},
			deleteLocalStorage:function(key){
				if(this.getLocalStorage(key)){
					delete localStorage[key];
					delete localStorage[key+"_type"];
				}
			},
			ArrayToString:function(a){
				if(!this.isArray(a)){
					throw new Error("参数不是一个数组");
				}
				return a.join("-");
			},
			StringToArray:function(s){
				if(!this.isString(s)){
					throw new Error("类型必须是一个string");
				}
				return s.split("-");
			},
			JSONToString:function(json){
				return JSON.stringify(json);
			},
			StringToJson:function(s){
				if(!this.isString(s)){
					throw new Error("类型必须是一个string");
				}
				return JSON.parse(s);
			},
			checkEmpty:function(str){
				return $.trim(str) === "";
			},
			checkPhone:function(phone){
				return REGCACHE.PHONE.test(phone);
			},
			checkEmail:function(email){
				return REGCACHE.EMAIL.test(email);
			},
			checkIdentityCode:function(){
				
			},
			eachModelData:function(data,callBack){
				var lRow = data.getLastRow(), row;
				data.first();
				do {
					row = data.getCurrentRow();
					if(this.isFunction(callBack)){
						var result = callBack(row);
						if(this.isBoolean(result) && !result){
							break;
						}
					}
					data.next();
				} while (lRow != row);
			},
			interval:function(time){
				var times = setInterval(function(){
					Util.getCurrentPosition();
				},time);
				return times;
			},
			shareWeixinContact : function(str) {
				function success(result) {
				}
				function error(result) {
				}
				navigator.weixin.share({
					message : {
						title : "应急避难公共服务APP",
						description : "大爱无疆，守护生命，温暖上线！",
						mediaTagName : "Media Tag Name(optional)",
						thumb : "http://wex5.com/cn/wp-content/uploads/2015/03/wen-xin-2.png",
						media : {
							// type : weixin.Type.WEBPAGE, // webpage
							webpageUrl : "http://113.209.232.163//pf.web.runtime/refuge.app/appClient/share.html"+str
						}
					},
					scene : navigator.weixin.Scene.SESSION
				}, success, error);
			},
			shareWeixinTimeLine : function(str) {
				function success(result) {
				}
				function error(result) {
				}
				navigator.weixin.share({
					message : {
						title : "应急避难公共服务APP",
						description : "大爱无疆，守护生命，温暖上线！",
						mediaTagName : "Media Tag Name(optional)",
						thumb : "http://wex5.com/cn/wp-content/uploads/2015/03/wen-xin-2.png",
						media : {
							// type : weixin.Type.WEBPAGE, // webpage
							webpageUrl : "http://113.209.232.163//pf.web.runtime/refuge.app/appClient/share.html"+str
						}
					},
					scene : navigator.weixin.Scene.TIMELINE
				}, success, error);
			},
			getUrlVars: function(){
		        var vars = [], hash;
		        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		        for(var i = 0; i < hashes.length; i++)
		        {
		            hash = hashes[i].split('=');
		            vars.push(hash[0]);
		            vars[hash[0]] = hash[1];
		        }
		        return vars;
		    },
		    getUrlVar: function(name){
		        return Util.getUrlVars()[name];
		    },
		    getByPath:function(obj,path){
		        try{
		            var props = path.split(".");
		            var ret = obj;
		            for(var i=0;i<props.length;i++){
		                ret=ret[props[i]];
		            }
		            return ret?ret:"-";
		        }catch(e){
		            return "-";
		        }

		    }

	};
	return Util;
});