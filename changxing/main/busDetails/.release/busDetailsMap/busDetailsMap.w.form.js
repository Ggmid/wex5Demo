define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
var __parent2=require('$model/UI2/system/lib/base/modelBase'); 
var __parent1=require('$model/UI2/changxing/main/base/map/map'); 
var __parent0=require('$model/UI2/changxing/main/busDetails/busDetailsMap'); 
var __result = __parent2._extend(__parent1)._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cUFF3yu';
	this._flag_='d80ccc43b202312542a1459e3b08509e';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"cost":{"define":"cost","label":"票价","name":"cost","relation":"cost","type":"String"},"end":{"define":"end","label":"终点","name":"end","relation":"end","type":"String"},"endTime":{"define":"endTime","label":"末班车时间","name":"endTime","relation":"endTime","type":"String"},"flag":{"define":"flag","label":"控制是否收藏","name":"flag","relation":"flag","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"line":{"define":"line","label":"路线","name":"line","relation":"line","type":"String"},"start":{"define":"start","label":"起点","name":"start","relation":"start","type":"String"},"startTime":{"define":"startTime","label":"首班车时间","name":"startTime","relation":"startTime","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[]","limit":20,"xid":"busData"});
 new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"cost":{"define":"cost","label":"票价","name":"cost","relation":"cost","type":"String"},"end":{"define":"end","label":"终点","name":"end","relation":"end","type":"String"},"endTime":{"define":"endTime","label":"末班车时间","name":"endTime","relation":"endTime","type":"String"},"flag":{"define":"flag","label":"控制是否收藏","name":"flag","relation":"flag","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"line":{"define":"line","label":"路线","name":"line","relation":"line","type":"String"},"start":{"define":"start","label":"起点","name":"start","relation":"start","type":"String"},"startTime":{"define":"startTime","label":"首班车时间","name":"startTime","relation":"startTime","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[]","limit":20,"xid":"listData"});
}}); 
return __result;});