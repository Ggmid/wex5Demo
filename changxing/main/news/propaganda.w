<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;"
  xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:48px;left:173px;height:auto;"
    onParamsReceive="modelParamsReceive"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="listData" idColumn="id">
   <img align="middle" alt="" src="./images/reports.png" xid="image3"></img>
   <column label="标题" name="title" type="String" xid="xid1"></column>
   <column label="id" name="id" type="String" xid="xid2"></column>
   <data xid="default1">[{&quot;title&quot;:&quot;浙江检察率先开展未检业务集中办理&quot;,&quot;id&quot;:&quot;1&quot;},{&quot;title&quot;:&quot;李克强会见法国总统马克龙&quot;,&quot;id&quot;:&quot;2&quot;},{&quot;title&quot;:&quot;322国道景宁段改建工程PPP招标公告&quot;,&quot;id&quot;:&quot;3&quot;},{&quot;title&quot;:&quot;探路\&quot;一车一档\&quot;共建共治共享&quot;,&quot;id&quot;:&quot;4&quot;},{&quot;title&quot;:&quot;金华高速路况&quot;,&quot;id&quot;:&quot;5&quot;},{&quot;title&quot;:&quot;我省统一乡失业保险政策&quot;,&quot;id&quot;:&quot;6&quot;},{&quot;title&quot;:&quot;建设项目环境保护有新规&quot;,&quot;id&quot;:&quot;7&quot;},{&quot;title&quot;:&quot;浙江“大气十条”考核，优！&quot;,&quot;id&quot;:&quot;8&quot;},{&quot;title&quot;:&quot;我省优化“五水共治”等年终考核&quot;,&quot;id&quot;:&quot;9&quot;}]</data></div></div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog"
    style="top:13px;left:32px;" forceRefreshOnOpen="true"/>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel"> 
    <div class="x-panel-top" xid="top"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="科普宣传"
        class="x-titlebar" xid="title" style="background:#e04e46;"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="backBtnClick"
            xid="backBtn" bind-click="backBtnClick"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">科普宣传</div>  
        <div class="x-titlebar-right reverse"/> 
      </div> 
    </div>  
    <div class="x-panel-content  x-scroll-view" xid="content" _xid="C79269497AD000011AEC826110801095"
      style="bottom: 0px;"> 
        
       
    
  <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView2" onPullDown="scrollView2PullDown" onPullUp="scrollView2PullUp" autoAppend="true" autoPullUp="true">
   <div class="x-content-center x-pull-down container" xid="div5">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i2"></i>
    <span class="x-pull-down-label" xid="span3">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div6">
     <div component="$UI/system/components/justep/panel/panel" class="x-panel" xid="panel3">
   <div component="$UI/system/components/justep/list/list" class="x-list" xid="list" data="listData">
     <ul class="x-list-template" xid="listTemplateUl">
      <li xid="li" style="border-bottom: 1px solid #f4f4f4;" bind-click="liClick">
       <div component="$UI/system/components/justep/row/row" class="x-row" xid="newRow">
        <div class="col-xs-12" xid="col6">
         <div style="line-height:3" xid="div34">
          <span xid="span1" style="display:block;float:left;background:#eee;border-radius:10px;height:10px;width:10px;margin-top:15px;"></span><span xid="news1" bind-text='val("title")' style="float:left;color:grey;margin-left:15px;"></span>
  </div> 
         </div> </div> </li> </ul> </div></div></div> 
   <div class="x-content-center x-pull-up" xid="div7">
    <span class="x-pull-up-label" xid="span4">加载更多...</span></div> </div></div> 
  </div> 
</div>
