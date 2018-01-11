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
var __parent1=require('$model/UI2/eq_servicePlat_BeiJin/main/base/tpl/header'); 
var __parent0=require('$model/UI2/eq_servicePlat_BeiJin/main/search/search'); 
var __result = __parent2._extend(__parent1)._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cY3yYJj';
	this._flag_='3fc44664345e3f1bc534fce5350f300a';
	this.callParent(contextUrl);
}}); 
return __result;});