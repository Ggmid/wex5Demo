define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/messageDialog/messageDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/changxing/main/buyTicket/payfor/payfor'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cyMFNJj';
	this._flag_='7a0c6dd36a907149cbbbd6d0e338b785';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"cost":{"define":"cost","label":"票价","name":"cost","relation":"cost","type":"String"},"endPosition":{"define":"endPosition","label":"终点站","name":"endPosition","relation":"endPosition","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"leave":{"define":"leave","label":"余票数","name":"leave","relation":"leave","type":"String"},"num":{"define":"num","label":"订单号","name":"num","relation":"num","type":"String"},"start":{"define":"start","label":"始发站","name":"start","relation":"start","type":"String"},"time":{"define":"time","label":"出发时间","name":"time","relation":"time","type":"String"},"where":{"define":"where","label":"检票口","name":"where","relation":"where","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"start\":\"杭州\",\"end \":\"南浔\",\"time\":\"06:40\",\"cost\":\"35元\",\"leave\":\"44张\",\"num\":\"3456789\",\"where\":\"21B\"}]","limit":20,"xid":"data1"});
}}); 
return __result;});