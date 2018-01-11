<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive"/> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel">
   <div class="x-panel-top" xid="top">
    <div component="$UI/system/components/justep/titleBar/titleBar" title="科普宣传" class="x-titlebar" xid="titleBar1">
     <div class="x-titlebar-left" xid="left1">
      <a component="$UI/system/components/justep/button/button" label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}" xid="backBtn" bind-click="backBtnClick">
       <i class="icon-chevron-left" xid="i1"></i>
       <span xid="span1"></span></a> </div> 
     <div class="x-titlebar-title" xid="title1">详情</div>
     <div class="x-titlebar-right reverse" xid="right1"></div></div> </div> 
   <div class="x-panel-content" xid="content">
    <iframe src="" xid="iframe1" style="width:821px;height:627px;"></iframe></div> </div></div>