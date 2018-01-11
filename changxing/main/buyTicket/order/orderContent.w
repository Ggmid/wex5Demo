<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:14px;left:-5px;" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="false" xid="listData" idColumn="id">
   <img align="middle" alt="" src="./images/reports.png" xid="image3"></img>
  <column label="id" name="id" type="String" xid="xid2"></column>
  <column label="车次编号" name="num" type="String" xid="xid1"></column>
  <column label="始发时间" name="start" type="String" xid="xid3"></column>
  <column label="价钱" name="cost" type="String" xid="xid4"></column>
  <column label="起点" name="startPosition" type="String" xid="xid5"></column>
  <column label="终点" name="endPosition" type="String" xid="xid6"></column>
  <column label="余票" name="leave" type="String" xid="xid7"></column>
  <data xid="default1">[{&quot;id&quot;:&quot;1&quot;,&quot;num&quot;:&quot;K78686&quot;,&quot;start&quot;:&quot;06:40&quot;,&quot;cost&quot;:&quot;35&quot;,&quot;startPosition&quot;:&quot;杭州&quot;,&quot;endPosition&quot;:&quot;南浔&quot;,&quot;leave&quot;:&quot;40张&quot;}]</data>
  <column label="检票口" name="where" type="String" xid="xid8"></column>
  <column label="日期" name="time" type="String" xid="xid9"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1" style="background:#eee;">
   <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1" style="padding:0;background:#FFF;">
   <div class="x-col" xid="all" style="padding:0;height:50px;" bind-click="allClick" bind-css='$model.borRed.get()=="all"?"borRed":"normal"'><a component="$UI/system/components/justep/button/button" class="btn" label="全部" xid="button1" style="width:100%;border-radius: 0;height:100%;line-height:30px;color:black;">
   <i xid="i1"></i>
   <span xid="span1">全部</span></a></div>
   <div class="x-col" xid="suceess" style="padding:0;height:50px;" bind-click="suceessClick" bind-css='$model.borRed.get()=="suc"?"borRed":"normal"'><a component="$UI/system/components/justep/button/button" class="btn" label="支付成功" xid="button2" style="width:100%;    border-radius: 0;height:100%;line-height:30px;color:black;">
   <i xid="i2"></i>
   <span xid="span2">支付成功</span></a></div>
   <div class="x-col" xid="notGo" style="padding:0;height:50px;" bind-click="notGoClick" bind-css='$model.borRed.get()=="faile"?"borRed":"normal"'><a component="$UI/system/components/justep/button/button" class="btn" label="未出行" xid="button3" style="width:100%;    border-radius: 0;height:100%;line-height:30px;color:black;">
   <i xid="i3"></i>
   <span xid="span3">未出行</span></a></div></div>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="listData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div xid="div3" class="box"><div xid="div4" style="overflow:hidden;"><div xid="div8" style="float:left;"><span xid="span4" style="color:#9E8F8F;"><![CDATA[出发地]]></span><span xid="span5" bind-text='val("startPosition")' style="font-weight:900;"></span></div>
  
  <div xid="div9" style="float:right;"><span xid="span6" style="color:#9E8F8F;"><![CDATA[目的地]]></span><span xid="span7" bind-text='val("endPosition")' style="font-weight:900;"></span></div>
  
  </div>
  <div xid="div5" style="overflow:hidden;border-bottom:1px solid #eee;line-height:2;"><span xid="span8" bind-text='val("num")' style="font-size: 30px;color: red;float:left;"></span>
  <div xid="div10" style="float:right;margin-top:10px;"><span xid="span9" bind-text='val("time")'></span><span xid="span10" bind-text='val("start")'></span></div>
  
  </div>
  <div xid="div6" style="margin-top:30px"><span xid="span11" style="color:#9E8F8F;"><![CDATA[座位:]]></span>
  <span xid="span12" bind-text='val("leave")'></span>
  <span xid="span15" bind-text='"￥"+val("cost")' style="float:right;"></span></div>
  <div xid="div7" style="margin-top:8px;overflow:hidden;"><div xid="div11" style="float:left;margin-top:10px;"><span xid="span13" style="color:#9E8F8F;"><![CDATA[检票口:]]></span><span xid="span14" bind-text='val("where")'></span></div>
  
  <span xid="span16" style="float:right;" class="pay"><![CDATA[已支付]]></span>
  </div></div></li></ul> </div></div>
   </div>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver1" dismissible="false" style="z-index:9999;">
   <div class="x-popOver-overlay" xid="div12"></div>
   <div class="x-popOver-content" xid="div13">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon loading" label="button" xid="button4" icon="icon-loading-a" style="color:grey;font-size:30px;">
     <i xid="i4" class="icon-loading-a"></i>
     <span xid="span17"></span></a> </div> </div></div>