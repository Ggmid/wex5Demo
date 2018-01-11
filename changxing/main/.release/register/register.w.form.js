define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/eq_servicePlat_BeiJin/main/register'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c2YfYni';
	this._flag_='f52e8bf99856f8bf06777d9aa2fcda13';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"email":{"define":"email","label":"用户邮箱：","name":"email","relation":"email","type":"String"},"name":{"define":"name","label":"用户账号：","name":"name","relation":"name","type":"String"},"pwd":{"define":"pwd","label":"用户密码：","name":"pwd","relation":"pwd","type":"String"},"repwd":{"define":"repwd","label":"确认密码：","name":"repwd","relation":"repwd","type":"String"}},"directDelete":false,"events":{},"idColumn":"name","limit":20,"xid":"regData"});
}}); 
return __result;});