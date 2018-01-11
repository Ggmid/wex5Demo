define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/windowContainer/windowContainer');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent2=require('$model/UI2/system/lib/base/modelBase'); 
var __parent1=require('$model/UI2/changxing/main/base/tpl/header'); 
var __parent0=require('$model/UI2/changxing/main/busDetails/busDetails'); 
var __result = __parent2._extend(__parent1)._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cEb2AFf';
	this._flag_='ffdd300b86625b991dffec901a3f608e';
	this.callParent(contextUrl);
}}); 
return __result;});