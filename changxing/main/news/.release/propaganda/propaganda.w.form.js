define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/changxing/main/news/propaganda'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cIB7fmu';
	this._flag_='664a49886efb831f808ddd003bfb7935';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"title":{"define":"title","label":"标题","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"title\":\"浙江检察率先开展未检业务集中办理\",\"id\":\"1\"},{\"title\":\"李克强会见法国总统马克龙\",\"id\":\"2\"},{\"title\":\"322国道景宁段改建工程PPP招标公告\",\"id\":\"3\"},{\"title\":\"探路\\\"一车一档\\\"共建共治共享\",\"id\":\"4\"},{\"title\":\"金华高速路况\",\"id\":\"5\"},{\"title\":\"我省统一乡失业保险政策\",\"id\":\"6\"},{\"title\":\"建设项目环境保护有新规\",\"id\":\"7\"},{\"title\":\"浙江“大气十条”考核，优！\",\"id\":\"8\"},{\"title\":\"我省优化“五水共治”等年终考核\",\"id\":\"9\"}]","limit":20,"xid":"listData"});
}}); 
return __result;});