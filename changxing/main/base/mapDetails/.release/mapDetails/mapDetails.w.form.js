define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
var __parent2=require('$model/UI2/system/lib/base/modelBase'); 
var __parent1=require('$model/UI2/eq_servicePlat_BeiJin/main/base/map/map'); 
var __parent0=require('$model/UI2/eq_servicePlat_BeiJin/main/base/mapDetails/mapDetails'); 
var __result = __parent2._extend(__parent1)._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='ciAvAvm';
	this._flag_='31251a5cd36ddedeeb98724ad51ce0eb';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"编号","name":"id","relation":"id","type":"String"},"lat":{"define":"lat","label":"纬度","name":"lat","relation":"lat","type":"String"},"location":{"define":"location","label":"位置","name":"location","relation":"location","type":"String"},"lon":{"define":"lon","label":"经度","name":"lon","relation":"lon","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","limit":20,"xid":"markerDetils"});
}}); 
return __result;});