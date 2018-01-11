<div 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns="http://www.w3.org/1999/xhtml" 
  component="$UI/system/components/justep/window/window" 
  xid="window" 
  extends="$UI/changxing/main/base/map/map.w" 
  __id="id_1" 
  design="device:m;" 
  class="window" >

  <div xid="lineImg" xui:update-mode="delete"/>
  <div xid="heatImg" xui:update-mode="delete"/>
  <div xid="trafficImg" xui:update-mode="delete"/>
  <div xid="reportImg" xui:update-mode="delete"/>
  <div xid="popOver1" xui:update-mode="delete"/>
    <div class="detailPan" dir="ltr" style="width:100%;z-index:1300;overflow:hidden;" xid="infoDetails" xui:parent="window" xui:update-mode="insert" >
<div class="x-list" component="$UI/system/components/justep/list/list" data="busData" xid="list51_5" >
<ul class="x-list-template" xid="listTemplateUl21_5" >
<li bind-click="li2Click" class="col-xs-12" style="padding:0;border-bottom:1px solid #eee;" xid="li2" >
<div class="x-row" component="$UI/system/components/justep/row/row" xid="row2" >
<div style="line-height:3;padding-left:30px;" xid="div10" >
<div xid="div12" >
<span bind-text="val(&quot;start&quot;)" xid="span10" />
<span xid="span4" >


----</span>
<span bind-text="val(&quot;end&quot;)" xid="span11" />
</div>
<div xid="div13" >
<span style="color:#fff;background:#47e197;padding:2px;border-radius:6px;" xid="span5" >


首</span>
<span bind-text="val(&quot;startTime&quot;)" xid="span12" />
<span style="color:#fff;background:#fd7d44;padding:2px;border-radius:6px;    margin-left: 15px;" xid="span15" >


末</span>
<span bind-text="val(&quot;endTime&quot;)" xid="span13" />
<span style="    margin-left: 15px;" xid="span16" >


票价:</span>
<span bind-text="val(&quot;cost&quot;)" xid="span14" />
</div>
</div>
</div>
</li>
</ul>
</div>
</div>
    <div bind-css="$model.showList.get()?&quot;show&quot;:&quot;hide&quot;" class="hide" style="background:#fff;position:absolute;z-index:1400;height:100%;width:100%;" xid="div3_9" xui:parent="window" xui:update-mode="insert" >
<div style="height:120px;" xid="list6" >
<div autoLoad="true" class="x-list" component="$UI/system/components/justep/list/list" data="listData" xid="list1" >
<ul class="x-list-template" xid="listTemplateUl1" >
<li bind-click="li2Click" class="col-xs-12" style="padding:0;border-bottom:1px solid #eee;" xid="li11_1" >
<div class="x-row" component="$UI/system/components/justep/row/row" xid="row11_1" >
<div style="line-height:2;padding-left:30px;" xid="col11_1" >
<div xid="div11" >
<span bind-text="val(&quot;line&quot;)" style="font-weight:900;font-size:16px;" xid="span8" />
<span style="    border: 1px solid orange;padding: 5px 15px;    border-radius: 10px;color: orange;margin-left:20px;" xid="span9" >
实时公交</span>
</div>
<div xid="div41_1" >
<span bind-text="val(&quot;start&quot;)" xid="span71_1" />
<span xid="span12_1" >
----</span>
<span bind-text="val(&quot;end&quot;)" xid="span91_1" />
</div>
<div xid="div51_1" >
<span style="color:#fff;background:#47e197;padding:2px;border-radius:6px;" xid="span21_1" >
首</span>
<span bind-text="val(&quot;startTime&quot;)" xid="span81_1" />
<span style="color:#fff;background:#fd7d44;padding:2px;border-radius:6px;    margin-left: 15px;" xid="span61_1" >
末</span>
<span bind-text="val(&quot;endTime&quot;)" xid="span41_1" />
<span style="    margin-left: 15px;" xid="span51_1" >
票价:</span>
<span bind-text="val(&quot;cost&quot;)" xid="span31_1" />
</div>
<div xid="div71_1" >
<span xid="span13_1" >
<![CDATA[发车间隔:]]>
</span>
<span xid="span101_1" >
<![CDATA[约20分钟/趟]]>
</span>
</div>
</div>
</div>
</li>
</ul>
</div>
</div>
<div style="height:20px;background:#eee;" xid="div8_1" />
<div xid="busLine" />
</div>
    <div autoLoad="false" component="$UI/system/components/justep/data/data" idColumn="id" xid="busData" xui:parent="model" xui:update-mode="insert" >
<img align="middle" alt="" src="./images/reports.png" xid="image3" />
<column label="id" name="id" type="String" xid="xid2" />
<column label="路线" name="line" type="String" xid="xid1" />
<column label="起点" name="start" type="String" xid="xid3" />
<column label="终点" name="end" type="String" xid="xid4" />
<column label="首班车时间" name="startTime" type="String" xid="xid5" />
<column label="末班车时间" name="endTime" type="String" xid="xid6" />
<column label="票价" name="cost" type="String" xid="xid7" />
<data xid="default1" >


[]</data>
<column label="控制是否收藏" name="flag" type="String" xid="xid8" />
</div>
    <div autoLoad="false" component="$UI/system/components/justep/data/data" idColumn="id" xid="listData" xui:parent="model" xui:update-mode="insert" >
<img align="middle" alt="" src="./images/reports.png" xid="image11_1" />
<column label="id" name="id" type="String" xid="column21_1" />
<column label="路线" name="line" type="String" xid="column11_1" />
<column label="起点" name="start" type="String" xid="column31_1" />
<column label="终点" name="end" type="String" xid="column41_1" />
<column label="首班车时间" name="startTime" type="String" xid="column51_1" />
<column label="末班车时间" name="endTime" type="String" xid="column61_1" />
<column label="票价" name="cost" type="String" xid="column71_1" />
<data xid="default11_1" >
[]</data>
<column label="控制是否收藏" name="flag" type="String" xid="column81_1" />
</div>

</div>