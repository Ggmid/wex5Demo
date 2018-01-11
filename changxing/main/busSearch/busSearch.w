<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;" xmlns:xui="http://www.justep.com/xui">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="false" xid="listData" idColumn="id">
   <img align="middle" alt="" src="./images/reports.png" xid="image3"></img>
  <column label="id" name="id" type="String" xid="xid2"></column>
  <column label="路线" name="line" type="String" xid="xid1"></column>
  <column label="起点" name="start" type="String" xid="xid3"></column>
  <column label="终点" name="end" type="String" xid="xid4"></column>
  <column label="首班车时间" name="startTime" type="String" xid="xid5"></column>
  <column label="末班车时间" name="endTime" type="String" xid="xid6"></column>
  <column label="票价" name="cost" type="String" xid="xid7"></column>
  <data xid="default1">[]</data>
  <column label="控制是否收藏" name="flag" type="String" xid="xid8"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel">
   <div class="x-panel-top" xid="top">
    <div component="$UI/system/components/justep/titleBar/titleBar" title="科普宣传" class="x-titlebar" xid="title" style="background:#e04e46;">
     <div class="x-titlebar-left" xid="left1">
      <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="backBtnClick" xid="backBtn" bind-click="backBtnClick">
       <i class="icon-chevron-left" xid="i1"></i>
       <span xid="span2"></span></a> </div> 
     <div class="x-titlebar-title" xid="title1">科普宣传</div>
     <div class="x-titlebar-right reverse" xid="right1"></div></div> </div> 
   <div class="x-panel-content" xid="content" _xid="C79269497AD000011AEC826110801095" style="bottom: 0px;">
    <div xid="myBus"><div xid="div1" style="height:80px;background:#F5EFEF;"><input class="form-control" component="$UI/system/components/justep/input/input" placeholder="请输入地址..." style="width: 94% !important;margin-left: 3%;border-radius: 25px;border-color: #c9c9c9;margin-top: 1px;float: left;margin-top: 20px;height:42px;" xid="suggestId" placeHolder="请输入线路..."></input>
  <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-only-icon" label="button" xid="search" icon="round round-update" style="background: none;border: none;    position: absolute;    right: 20px;top: 23px;color: #B39D9D;" bind-click="searchClick">
   <i xid="i2" class="round round-update"></i>
   <span xid="span1"></span></a></div><div xid="div2">
  <div xid="list6">
   <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="listData" autoLoad="true">
    
    <ul class="x-list-template" xid="listTemplateUl1">
     <li xid="li2" class="col-xs-12" style="padding:0;border-bottom:1px solid #eee;" bind-click="li2Click">
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
       <div xid="div10" style="line-height:2;padding-left:30px;">
   <div xid="div11">
    <span xid="span8" bind-text='val("line")' style="font-weight:900;font-size:16px;"></span>
    <span xid="span9" style="    border: 1px solid orange;padding: 5px 15px;    border-radius: 10px;color: orange;margin-left:20px;">实时公交</span></div> 
   <div xid="div12">
    <span xid="span10" bind-text='val("start")'></span>
    <span xid="span4"><![CDATA[----]]></span><span xid="span11" bind-text='val("end")'></span>
  <img alt="" style="position:absolute;right:20px;bottom:20px;" xid="collect" bind-click="collectClick" src="$UI/changxing/main/images/five.png" bind-attr-src='val("flag")?require.toUrl("./images/fivec.png"):require.toUrl("./images/five.png")'></img></div> 
   <div xid="div13">
    <span xid="span5" style="color:#fff;background:#47e197;padding:2px;border-radius:6px;"><![CDATA[首]]></span><span xid="span12" bind-text='val("startTime")'></span>
    <span xid="span15" style="color:#fff;background:#fd7d44;padding:2px;border-radius:6px;    margin-left: 15px;"><![CDATA[末]]></span><span xid="span13" bind-text='val("endTime")'></span>
    <span xid="span16" style="    margin-left: 15px;"><![CDATA[票价:]]></span><span xid="span14" bind-text='val("cost")'></span>
  
  </div> </div></div> </li> </ul> </div> </div></div></div>
  <div xid="myCollect"></div><div class="btn-group btn-group-justified" role="group" xid="busGroup" style="position:fixed;bottom:0;height:80px;background:#F5EFEF;">
   <div class="btn-group" role="group" xid="div4" style="border:none;">
    <button bind-click="preBtnClick" class="btn" style="color:#000;background:none;" type="button" xid="preBtn">
     <img alt="" xid="image4" bind-attr-src='$model.collectImg.get()=="bus"?require.toUrl("./images/linec.png"):require.toUrl("./images/line.png")'></img>
     <span style="display:block;" xid="span6" bind-css='$model.collectImg.get()=="bus"?"red":"normal"'><![CDATA[路线查询]]></span></button> </div> 
   <div class="btn-group" role="group" xid="div5" style="border:none;">
    <button bind-click="afterBtnClick" class="btn" style="color:#000;background:none;" type="button" xid="afterBtn">
     <img alt="" xid="image2" bind-attr-src='$model.collectImg.get()=="collect"?require.toUrl("./images/fivec.png"):require.toUrl("./images/five.png")'></img>
     <span style="display:block;" xid="span7" bind-css='$model.collectImg.get()=="collect"?"red":"normal"'><![CDATA[我的收藏]]></span></button> </div> </div>
  </div> </div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" forceRefreshOnOpen="true"></span></div>