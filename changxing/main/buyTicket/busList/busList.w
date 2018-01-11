<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="false" xid="listData" idColumn="id">
   <img align="middle" alt="" src="./images/reports.png" xid="image3"></img>
  <column label="id" name="id" type="String" xid="xid2"></column>
  <column label="车次编号" name="num" type="String" xid="xid1"></column>
  <column label="始发时间" name="start" type="String" xid="xid3"></column>
  <column label="价钱" name="cost" type="String" xid="xid4"></column>
  <column label="起点" name="startPosition" type="String" xid="xid5"></column>
  <column label="终点" name="endPosition" type="String" xid="xid6"></column>
  <column label="余票" name="leave" type="String" xid="xid7"></column>
  <data xid="default1">[{&quot;id&quot;:&quot;1&quot;,&quot;num&quot;:&quot;K78686&quot;,&quot;start&quot;:&quot;06:40&quot;,&quot;cost&quot;:&quot;35&quot;,&quot;startPosition&quot;:&quot;杭州&quot;,&quot;endPosition&quot;:&quot;南浔&quot;,&quot;leave&quot;:&quot;40张&quot;}]</data></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1" style="background:#e04e46;padding:0;overflow:hidden;" height="100">
  
  <div xid="div1" style="font-size:24px;color:#FFF;">
  <a bind-click="backBtnClick" class="btn btn-only-icon" component="$UI/system/components/justep/button/button" icon="icon-chevron-left" label="" onClick="{operation:'window.close'}" xid="backBtn" style="color:#fff;font-size:24px;">
    <i class="icon-chevron-left" xid="i1"></i>
    <span xid="span1"></span></a><span xid="span2" style="margin-left: 16%;"><![CDATA[]]></span>
  <img src="$UI/changxing/main/images/goes.png" alt="" xid="image4"></img><span xid="span3"><![CDATA[]]></span>
  </div><div xid="div2" style="overflow:hidden;"><div xid="pre" style="float:left;    font-size: 20px;color:#fff;" bind-click="preClick"><img src="$UI/changxing/main/images/left.png" alt="" xid="image1" style="width:25px;"></img><span xid="span6">前一天</span>
  </div>
  
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" style="width:36%;float:left;margin-left:4%;background-color: #fff;" format="yyyy-MM-dd" dataType="Date"></input>
  
  
  <div xid="aft" style="float:right; font-size: 20px;color:#fff;" bind-click="aftClick"><span xid="span7"><![CDATA[后一天]]></span>
  <img src="$UI/changxing/main/images/right.png" alt="" xid="image2" style="width:25px;"></img></div></div></div>
   <div class="x-panel-content" xid="content1" style="overflow:hidden;"><div xid="list6">
   <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="listData" autoLoad="true">
    <ul class="x-list-template" xid="listTemplateUl1">
     <li xid="li2" class="col-xs-12" style="padding:0;border-bottom:1px solid #eee;" bind-click="li2Click">
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
       <div xid="div10" style="line-height:2;padding-left:30px;width:100%;padding-bottom: 20px;">
        <div xid="div11">
         <span xid="span8" style="font-weight:900;font-size:18px;" bind-text='val("num")'><![CDATA[]]></span>
         <span xid="span12" style="margin-left:16%;font-size:16px;" bind-text='val("start")+"发车"'><![CDATA[]]></span><span xid="span17" bind-text='"￥"+val("cost")' style="float:right;padding-right:30px;color:orange;margin-top:3px;"><![CDATA[]]></span></div> 
        <div xid="div12">
         <span xid="span10" style="color:#fff;background:orange;padding:2px;border-radius:6px;"><![CDATA[起]]></span>
         <span xid="span10" bind-text='val("startPosition")' style="margin-left:14px;font-size:16px;"><![CDATA[]]></span>
         <div xid="div5" style="float:right;    padding-right: 30px;"><span xid="span11"><![CDATA[余票:]]></span><span xid="span18" bind-text='val("leave")'><![CDATA[]]></span></div>
         
  </div> 
        <div xid="div13">
         <span xid="span11" style="color:#fff;background:#47e197;padding:2px;border-radius:6px;"><![CDATA[终]]></span>
         <span xid="span12" bind-text='val("endPosition")' style="margin-left:14px;font-size:16px;"><![CDATA[]]></span>
         <span xid="span15" style="float:right;margin-right:20px;"><![CDATA[大型高一（50座）]]></span>
         </div> </div> </div> </li> </ul> </div> </div></div>
   </div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="passenger"></span>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver1" dismissible="false" style="z-index:9999;">
   <div class="x-popOver-overlay" xid="div9"></div>
   <div class="x-popOver-content" xid="div8">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon loading" label="button" xid="button1" icon="icon-loading-a" style="color:grey;font-size:30px;">
     <i xid="i4" class="icon-loading-a"></i>
     <span xid="span4"></span></a> </div> </div></div>