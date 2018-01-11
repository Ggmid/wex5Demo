define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/changxing/main/buyTicket/busList/busList'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cQbaUje';
	this._flag_='b00f5a4a7d0e973e39fdf34a4a464b41';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"cost":{"define":"cost","label":"价钱","name":"cost","relation":"cost","type":"String"},"endPosition":{"define":"endPosition","label":"终点","name":"endPosition","relation":"endPosition","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"leave":{"define":"leave","label":"余票","name":"leave","relation":"leave","type":"String"},"num":{"define":"num","label":"车次编号","name":"num","relation":"num","type":"String"},"start":{"define":"start","label":"始发时间","name":"start","relation":"start","type":"String"},"startPosition":{"define":"startPosition","label":"起点","name":"startPosition","relation":"startPosition","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"num\":\"K78686\",\"start\":\"06:40\",\"cost\":\"35\",\"startPosition\":\"杭州\",\"endPosition\":\"南浔\",\"leave\":\"40张\"}]","limit":20,"xid":"listData"});
}}); 
return __result;});