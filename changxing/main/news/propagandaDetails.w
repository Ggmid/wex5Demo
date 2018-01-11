<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"
    onParamsReceive="modelParamsReceive"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="listData" idColumn="proId"> 
      <column label="proId" name="proId" type="String" xid="xid1"></column>
  <column label="标题" name="title" type="String" xid="xid3"></column>
  <column label="发布时间" name="time" type="String" xid="xid5"></column>
  <img align="middle" alt="" src="./images/report.png" xid="image3"></img>
  <column label="内容" name="content" type="String" xid="xid8"></column>
  <data xid="default1">[]</data></div>
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog"
    style="top:11px;left:36px;" forceRefreshOnOpen="true"/>
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel"> 
    <div class="x-panel-top" xid="top"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="科普宣传" class="x-titlebar" xid="titleBar" style="background:#e04e46;">
   <div class="x-titlebar-left" xid="left1">
    <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="backBtnClick" xid="backBtn" bind-click="backBtnClick">
     <i class="icon-chevron-left" xid="i1"></i>
     <span xid="span1"></span></a> </div> 
   <div class="x-titlebar-title" xid="title1">科普宣传</div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div></div>  
    <div class="x-panel-content" xid="content">
      <div component="$UI/system/components/justep/list/list" class="x-list"
        xid="titleList" data="listData"> 
        <ul class="x-list-template" xid="titleListTemplateUl" style="padding:10px"> 
          <li xid="titleLi" style="line-height:1.5;padding:0 1%;border-bottom: 1px solid #f4f4f4;">
   <h3 xid="header" bind-text='val("title")' style="text-shadow:5px 2px 6px #000;color:#686b70;text-align:center;">h3</h3>
  </li>
  <li style="margin-top:10px;" xid="li1">
   <div xid="div1" style="margin-top:10px;text-align:center;"><span xid="span5"><![CDATA[发布时间：]]></span><span xid="time" bind-text='val("time")'></span></div><div xid="title" bind-text='val("title")' style="font-weight: bold;margin-left:1%;text-align:center;margin-top:10px;"></div>
  
  <div xid="contents" bind-text=' val("content")' style="text-align: center;padding:5%;text-indent:2em;"></div></li></ul> 
      </div>
    </div> 
  </div> 
</div>
