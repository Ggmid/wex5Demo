<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;" xmlns:xui="http://www.justep.com/xui">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:97px;left:245px;height:auto;" onParamsReceive="modelParamsReceive"/> 
<div xid="baiduMap" style="height:100%;width:100%;position: absolute;"></div>
  <img src="$UI/eq_servicePlat_BeiJin/main/images/line_2.png" style="position:absolute;position:absolute;z-index:1200;bottom:60px;right:20px;top:auto;left:auto;width:60px;" xid="lineImg" bind-click="lineClick"></img><img bind-click="heatImgClick" style="position: absolute;top: 122px;right: 20px;" xid="heatImg" xui:parent="window" xui:update-mode="insert" bind-attr-src='$model.heatIcon.get()?require.toUrl("./images/heatCheck_ico.png"):require.toUrl("./images/heat_ico.png")'></img><img bind-click="trafficImgClick" style="position: absolute;top: 161px;right: 20px;" xid="trafficImg" xui:parent="window" xui:update-mode="insert" bind-attr-src='$model.upLoadIocn.get()?require.toUrl("./images/trafficOn_ico.png"):require.toUrl("./images/traffic_ico.png")'></img><img bind-click="reportImgClick" style="height: 32px;position: absolute;right: 20px;top:82px;" xid="reportImg" xui:parent="window" xui:update-mode="insert" src="$UI/eq_servicePlat_BeiJin/main/images/report_ico.png" class="hide"></img><span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1" forceRefreshOnOpen="true"></span>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver1" dismissible="false" style="z-index:9999;">
   <div class="x-popOver-overlay" xid="div1"></div>
   <div class="x-popOver-content" xid="div2"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon loading" label="button" xid="button1" icon="icon-loading-a">
   <i xid="i1" class="icon-loading-a"></i>
   <span xid="span1"></span></a></div></div>
  </div>