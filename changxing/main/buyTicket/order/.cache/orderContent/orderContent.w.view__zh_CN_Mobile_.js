window.__justep.__ResourceEngine.loadCss([{url: '/v_2df89437f6b44938adf34f47113c4ce2l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_0dc7a8fd413f4a08bc86839951f7c3f0l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_a69aab6338ad4c24bce0682f25e8ee7al_zh_CNs_d_m/system/core.min.js','/v_9e0d5dd8482a4a7dbf75fd10af20dc4al_zh_CNs_d_m/system/common.min.js','/v_9ac9b3dd65fd4f559f6758a3bf35e3bfl_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/popOver/popOver');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/changxing/main/buyTicket/order/orderContent'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cQFvmyi';
	this._flag_='446b1a4af64bc18c58508475949b790f';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"cost":{"define":"cost","label":"价钱","name":"cost","relation":"cost","type":"String"},"endPosition":{"define":"endPosition","label":"终点","name":"endPosition","relation":"endPosition","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"leave":{"define":"leave","label":"余票","name":"leave","relation":"leave","type":"String"},"num":{"define":"num","label":"车次编号","name":"num","relation":"num","type":"String"},"start":{"define":"start","label":"始发时间","name":"start","relation":"start","type":"String"},"startPosition":{"define":"startPosition","label":"起点","name":"startPosition","relation":"startPosition","type":"String"},"time":{"define":"time","label":"日期","name":"time","relation":"time","type":"String"},"where":{"define":"where","label":"检票口","name":"where","relation":"where","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"num\":\"K78686\",\"start\":\"06:40\",\"cost\":\"35\",\"startPosition\":\"杭州\",\"endPosition\":\"南浔\",\"leave\":\"40张\"}]","limit":20,"xid":"listData"});
}}); 
return __result;});
