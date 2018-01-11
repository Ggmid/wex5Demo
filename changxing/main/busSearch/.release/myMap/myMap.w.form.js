define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
var __parent2=require('$model/UI2/system/lib/base/modelBase'); 
var __parent1=require('$model/UI2/eq_servicePlat_BeiJin/main/base/map/map'); 
var __parent0=require('$model/UI2/eq_servicePlat_BeiJin/main/search/myMap'); 
var __result = __parent2._extend(__parent1)._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cAve2Ev';
	this._flag_='599d1e776e5c2e1a1db81c749e35194c';
	this.callParent(contextUrl);
}}); 
return __result;});