define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
var __parent2=require('$model/UI2/system/lib/base/modelBase'); 
var __parent1=require('$model/UI2/changxing/main/base/map/map'); 
var __parent0=require('$model/UI2/changxing/main/gas/gasMap'); 
var __result = __parent2._extend(__parent1)._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cEbauyi';
	this._flag_='e3f7d1b6073cc2187c2f367ec8a8f507';
	this.callParent(contextUrl);
}}); 
return __result;});