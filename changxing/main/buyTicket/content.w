<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;" xmlns:xui="http://www.justep.com/xui">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive"/> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-content" xid="content1"><div xid="div1" class="container"><div xid="div2"><span xid="span1"><![CDATA[出发地]]></span>
  <span xid="span2" style="float:right"><![CDATA[目的地]]></span></div>
  <div xid="div3" style="overflow:hidden;border-bottom:1px solid #eee;"><input component="$UI/system/components/justep/input/input" xid="startPosition" style="border: none;background-color: transparent;font-size: 20px;width: 32%;float:left;outline:none;line-height:3;font-weight:900;"></input>
  <img src="$UI/changxing/main/images/change.png" alt="" xid="change" style="float:left;    margin: 0% 0 0 13%;" bind-click="changeClick"></img><input component="$UI/system/components/justep/input/input" xid="endPosition" style="border: none;background-color: transparent;font-size: 20px;width: 32%;float:right;outline:none;line-height:3;font-weight:900;text-align:right;"></input>
  </div>
  <div xid="div6" style="margin-top:15px;"><span xid="span8"><![CDATA[出发时间]]></span></div>
  <div xid="div7" style="margin-top:20px"><input component="$UI/system/components/justep/input/input" xid="input5" format="yyyy-MM-dd" dataType="Date" style="background-color:#fff;" class="form-control clearfix" bind-value="justep.Date.toString(new Date(),'yyyy-MM-dd')"></input></div>
  <a component="$UI/system/components/justep/button/button" class="btn btn-warning" label="开始查询" xid="lineSearch" style="margin-top:20px;width:90%;margin-left:15px;" bind-click="lineSearchClick">
   <i xid="i1"></i>
   <span xid="span9">开始查询</span></a></div></div>
   <div class="x-panel-bottom" xid="bottom1"><div class="btn-group btn-group-justified" role="group" xid="busGroup" style="position:fixed;bottom:0;height:80px;background:#F3EDED;">
   <div class="btn-group" role="group" xid="div4" style="border:none;">
    <button bind-click="preBtnClick" class="btn" style="color:#000;background:none;outline:none;" type="button" xid="preBtn">
     <img alt="" xid="image4" bind-attr-src='$model.orderImg.get()=="consult"?require.toUrl("./images/consultc.png"):require.toUrl("./images/consult.png")'></img>
     <span style="display:block;" xid="span6" bind-css='$model.orderImg.get()=="consult"?"red":"normal"'><![CDATA[班次查询]]></span></button> </div> 
   <div class="btn-group" role="group" xid="div5" style="border:none;">
    <button bind-click="afterBtnClick" class="btn" style="color:#000;background:none;outline:none;" type="button" xid="afterBtn">
     <img alt="" xid="image2" bind-attr-src='$model.orderImg.get()=="order"?require.toUrl("./images/orderc.png"):require.toUrl("./images/order.png")'></img>
     <span style="display:block;" xid="span7" bind-css='$model.orderImg.get()=="order"?"red":"normal"'><![CDATA[我的订单]]></span></button> </div> </div></div></div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="busList" xui:parent="window" xui:update-mode="insert"></span></div>