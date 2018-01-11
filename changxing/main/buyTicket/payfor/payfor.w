<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" onParamsReceive="modelParamsReceive"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id"><column label="id" name="id" type="String" xid="xid1"></column>
  <column label="始发站" name="start" type="String" xid="xid2"></column>
  <column label="终点站" name="endPosition" type="String" xid="xid3"></column>
  <column label="出发时间" name="time" type="String" xid="xid4"></column>
  <column label="票价" name="cost" type="String" xid="xid5"></column>
  <column label="余票数" name="leave" type="String" xid="xid6"></column>
  <column label="订单号" name="num" type="String" xid="xid7"></column>
  <column label="检票口" name="where" type="String" xid="xid8"></column>
  <data xid="default1">[{&quot;id&quot;:&quot;1&quot;,&quot;start&quot;:&quot;杭州&quot;,&quot;end &quot;:&quot;南浔&quot;,&quot;time&quot;:&quot;06:40&quot;,&quot;cost&quot;:&quot;35元&quot;,&quot;leave&quot;:&quot;44张&quot;,&quot;num&quot;:&quot;3456789&quot;,&quot;where&quot;:&quot;21B&quot;}]</data></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div xid="top1" style="background:#e04e46;padding:0 20px;overflow:hidden;" class="x-panel-top" height="100">
    <a bind-click="backBtnClick" class="btn btn-only-icon" component="$UI/system/components/justep/button/button" icon="icon-chevron-left" label="" onClick="{operation:'window.close'}" xid="backBtn" style="color:#fff;font-size:24px;position:absolute;">
      <i class="icon-chevron-left" xid="i1"></i>
      <span xid="span1"></span></a><div xid="div1" style="font-size:18px;color:#FFF;text-align:center;margin-top:12px;">
      
     
     
     <span xid="span4"><![CDATA[填写订单]]></span></div> 
    <div xid="div2" style="text-align:center;color:#fff;font-size:16px;margin-top:10px;"><span xid="span2">南浔</span><img src="$UI/changxing/main/images/goes.png" alt="" xid="image4"></img><span xid="span3">杭州</span></div>
  <div xid="div3" style="text-align:center;color:#fff;"><span xid="span5"><![CDATA[2017-06-01]]></span>
  <span xid="span6" style="margin-left:15px;"><![CDATA[06:40发车]]></span></div></div> 
   <div class="x-panel-content" xid="content1" style="padding-bottom:30px;">
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4" style="color:#f36a00;padding-left:15px;padding-right:15px;line-height:3;border-bottom:1px solid #eee;"><img src="$UI/changxing/main/images/warn.png" alt="" xid="image1" style="width:30px;"></img>
  <span xid="span7" style="font-weight:900;font-size:16px;margin-left:5px;"><![CDATA[售票、取票、退改签说明 >]]></span>
  <span xid="span8" style="font-weight:900;font-size:16px;float:right;"><![CDATA[￥35]]></span></div>
   </div>
  <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="data1" style="padding-left:15px;padding-right:15px;">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1" style="border-bottom:1px solid #eee;padding-left:10px;"><div bind-css=" " class="x-label-edit" component="$UI/system/components/justep/labelEdit/labelEdit" xid="start">
   <label class="x-label" xid="label71"><![CDATA[始发站：]]></label>
   <div bind-text=' val("start")' class="x-output x-edit" component="$UI/system/components/justep/output/output" xid="output41"></div></div>
  <div bind-css=" " class="x-label-edit" component="$UI/system/components/justep/labelEdit/labelEdit" xid="end">
   <label class="x-label" xid="label72"><![CDATA[终点站：]]></label>
   <div class="x-output x-edit" component="$UI/system/components/justep/output/output" xid="output42" bind-text=' val("endPosition")'></div></div>
  <div bind-css=" " class="x-label-edit " component="$UI/system/components/justep/labelEdit/labelEdit" xid="time">
   <label class="x-label" xid="label73"><![CDATA[发车时间：]]></label>
   <div bind-text=' val("time")' class="x-output x-edit" component="$UI/system/components/justep/output/output" xid="output43"></div></div>
  <div bind-css=" " class="x-label-edit " component="$UI/system/components/justep/labelEdit/labelEdit" xid="cost">
   <label class="x-label" xid="label74"><![CDATA[票价：]]></label>
   <div class="x-output x-edit" component="$UI/system/components/justep/output/output" xid="output44" bind-text=' val("cost")'></div></div>
  <div bind-css=" " class="x-label-edit" component="$UI/system/components/justep/labelEdit/labelEdit" xid="where">
   <label class="x-label" xid="label75"><![CDATA[检票口：]]></label>
   <div class="x-output x-edit" component="$UI/system/components/justep/output/output" xid="output45" bind-text=' val("where")'></div></div>
  <div bind-css=" " class="x-label-edit" component="$UI/system/components/justep/labelEdit/labelEdit" xid="leave">
   <label class="x-label" xid="label76"><![CDATA[余票数：]]></label>
   <div class="x-output x-edit" component="$UI/system/components/justep/output/output" xid="output46" bind-text=' val("leave")'></div></div>
  <div bind-css=" " class="x-label-edit" component="$UI/system/components/justep/labelEdit/labelEdit" xid="num">
   <label class="x-label" xid="label77"><![CDATA[订单号：]]></label>
   <div class="x-output x-edit" component="$UI/system/components/justep/output/output" xid="output47" bind-text=' val("num")'></div></div></li></ul> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3" style="padding-left:15px;padding-right:15px;">
   <div class="x-col" xid="col9" style="border-bottom:1px solid #eee;"><div xid="div4" style="text-align:center;"><span xid="span9" style="text-align:center;"><![CDATA[席位已锁定，请您在15分钟内进行支付，否则本次订单将取消！]]></span></div>
  <div xid="div5" style="margin-top:10px;"><span xid="span10"><![CDATA[请选择支付方式]]></span></div></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4" style="padding-left:15px;padding-right:15px;">
   <div class="x-col" xid="col10" style="border-bottom:1px solid #eee;line-height:4;"><img src="$UI/changxing/main/images/card.png" alt="" xid="image2" style="width:30px;"></img>
  <span xid="span11"><![CDATA[银联支付]]></span>
  <input type="checkbox" value="" name="" xid="checkbox1" style="float:right;width: 24px;height:18px;margin-top:17px;" checked="true"></input>
  </div>
   </div>
  
  <div xid="div7"><a component="$UI/system/components/justep/button/button" class="btn btn-warning" label="确认支付" xid="pay" style="width:80%; margin-left: 10%;margin-top:20px;" bind-click="payClick">
   <i xid="i3"></i>
   <span xid="span16">确认支付</span></a></div></div> </div>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="popOver1" dismissible="false" style="z-index:9999;">
   <div class="x-popOver-overlay" xid="div9"></div>
   <div class="x-popOver-content" xid="div8">
    <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon loading" label="button" xid="button1" icon="icon-loading-a" style="color:grey;font-size:30px;">
     <i xid="i4" class="icon-loading-a"></i>
     <span xid="span17"></span></a> </div> </div>
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="orderWin"></span>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="paySuceess" message="支付成功！" title="提示" onOK="paySuceessOK"></span></div>