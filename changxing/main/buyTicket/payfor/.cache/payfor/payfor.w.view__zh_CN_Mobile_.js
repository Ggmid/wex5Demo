window.__justep.__ResourceEngine.loadCss([{url: '/v_e26688c9c8be41788bd0db46b7442cc6l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_3702478006134af1bbb683e44f8e3f6dl_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_1a980bd44fad4599a4e86dc95a9acbd6l_zh_CNs_d_m/system/core.min.js','/v_d6b19e6282ce4076b5297cb124fb5b29l_zh_CNs_d_m/system/common.min.js','/v_3f3a82f260c14ac3831611d265d5e571l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
