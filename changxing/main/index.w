<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;" style="width: 100%; height: 100%;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:9px;left:90px;height:auto;"
    onModelConstruct="modelModelConstruct" onParamsReceive="modelParamsReceive"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="listData" idColumn="id"> 
      <img align="middle" alt="" src="./images/reports.png" xid="image3"></img>
  <column label="标题" name="title" type="String" xid="xid1"></column>
  <column label="id" name="id" type="String" xid="xid2"></column>
  <data xid="default1">[{&quot;title&quot;:&quot;浙江检察率先开展未检业务集中办理&quot;,&quot;id&quot;:&quot;1&quot;},{&quot;title&quot;:&quot;李克强会见法国总统马克龙&quot;,&quot;id&quot;:&quot;2&quot;},{&quot;title&quot;:&quot;322国道景宁段改建工程PPP招标公告&quot;,&quot;id&quot;:&quot;3&quot;},{&quot;title&quot;:&quot;探路“一车一档”共建共治共享&quot;,&quot;id&quot;:&quot;4&quot;},{&quot;title&quot;:&quot;金华高速路况&quot;,&quot;id&quot;:&quot;5&quot;},{&quot;title&quot;:&quot;我省统一城乡失业保险政策&quot;,&quot;id&quot;:&quot;6&quot;}]</data></div> 
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog"
    style="top:76px;left:27px;" forceRefreshOnOpen="true" onClose="windowDialogClose"/>  
  <div class="x-scroll-content" xid="content"> 
    <div class="list-group" xid="listGroup"> 
      <div xid="index1" style="width:100%;background-image:url(./images/vbanner.png);background-position:center;background-size:cover;padding:10px 0px 20px 0px;height:150px;"
        align="center"> 
        <div xid="div10" style="position:absolute;left:20px;top:120px;display:none;"><img src="$UI/changxing/main/images/personal.png" alt="" xid="image1" style="width:20px;vertical-align:bottom;"></img><span xid="span3" style="color:white;margin-left:5px;"><![CDATA[测试用户]]></span>
  </div></div>  
      <div xid="list3"> 
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="list4"> 
          <div class="x-col" xid="col4" style="text-align:center;"> 
            <div xid="div29"> 
              <img src="$UI/changxing/main/images/bus.png" alt="" xid="bus" align="middle" dir="ltr" style="width:60px;height:60px;" bind-click="busClick" /> 
            </div>  
            <div style="line-height:2" xid="div30">公交查询</div> 
          </div>
          <div class="x-col" xid="col2" style="text-align:center;"> 
            <div xid="div27"> 
              <img src="$UI/changxing/main/images/carBuy.png" alt="" xid="car" align="middle" dir="ltr" style="width:60px;height:60px;" bind-click="buyClick" /> 
            </div>  
            <div style="line-height:2" xid="div28">汽车购票</div> 
          </div><div class="x-col" xid="col3" style="text-align:center;"> 
            <div xid="div25"> 
              <img src="$UI/changxing/main/images/gas.png" alt="" xid="gas" align="middle"
                dir="ltr" style="width:60px;height:60px;" bind-click="gasClick"/> 
            </div>  
            <div style="line-height:2" xid="div26">加油站</div> 
          </div>  
           
        </div>  
        <div component="$UI/system/components/justep/row/row" class="x-row"
          xid="row4"> 
          <div class="x-col" xid="col9" style="text-align:center;"> 
            <div xid="div5"> 
              <img src="$UI/changxing/main/images/driver.png" alt="" xid="driver" align="middle"
                dir="ltr" style="width:60px;height:60px;" bind-click="driverClick"/> 
            </div>  
            <div style="line-height:2" xid="div6">驾校</div> 
          </div>  
          <div class="x-col" xid="col15" style="text-align:center;"> 
            <div xid="div1"> 
              <img src="$UI/changxing/main/images/fixed.png" alt="" xid="fixed" align="middle"
                dir="ltr" style="width:60px;height:60px;" bind-click="fixedClick"/> 
            </div>  
            <div style="line-height:2" xid="div2">修理厂</div> 
          </div>  
          <div id="heat" class="x-col" xid="col13" style="text-align:center;"> 
            <div xid="div3"> 
              <img src="$UI/changxing/main/images/build.png" alt="" xid="build" align="middle"
                dir="ltr" style="width:60px;height:60px;" bind-click="buildClick"/> 
            </div>  
            <div style="line-height:2" xid="div4">施工</div> 
          </div>  
          </div> 
      </div>  
      <div style="height:10px;background-color:#ebebeb"/>  
       
    <div xid="list6">
   <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="listData">
    <div class="x-col" xid="col14" style="border-bottom:1px solid #eee;">
     <span style="border-left: 3px solid #ff0000;padding-left: 5px;margin-left: 5px;font-weight:900;font-size:16px" xid="span5"><![CDATA[最新资讯]]></span>
  <span xid="more" style="float:right;padding-right:10px;" bind-click="moreClick"><![CDATA[更多>>]]></span></div> 
    <ul class="x-list-template" xid="listTemplateUl1" style="display:inline-block;">
     <li xid="li2" dir="rtl" class="col-xs-12" style="padding:0" bind-click="li2Click">
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
       <div class="x-col" xid="col12">
        
  <span xid="span7" style="display:block;float:left;background:#eee;border-radius:10px;height:10px;width:10px;margin-top:5px;"></span><div xid="div11" bind-text=' val("title")' style="float:left;color:grey;margin-left:15px;"></div>
  </div> </div> </li> </ul> </div> </div></div> 
  </div> 
<span component="$UI/system/components/justep/messageDialog/messageDialog" xid="versionMessage" onOK="versionMessageOK" style="top:118px;left:-4px;"></span>
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver" direction="auto" xid="procrssPopu" dismissible="false">
   <div class="x-popOver-overlay" xid="div9"></div>
   <div class="x-popOver-content" xid="div8" style="background-color:#FFFFFF;height:200px;width:200px;">
    <div class="progress barStyle" component="$UI/system/components/bootstrap/progress/progress" xid="progress" valuenow="0">
     <div class="progress-bar progress-bar-success" role="progressbar" xid="progressBar1">
      <span xid="span1">0%</span></div> </div> </div> </div></div>
