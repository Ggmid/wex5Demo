<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window" xmlns:xui="http://www.justep.com/xui">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;" onParamsReceive="modelParamsReceive"> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1" style="background:#e04e46;"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="title" bind-css='$model.color.get()?"red":"blue"' style="background:#e04e46;">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn" bind-click="backBtnClick"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title"></div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/windowContainer/windowContainer" class="x-window-container" xid="windowContainer1"></div></div>
  <div xid="div11" xui:parent="panel1" xui:update-mode="insert" class="myMenu hide" bind-css='$model.showMenuIcon.get()?"show":"hide";'>
   <a class="btn btn-default btn-only-icon" component="$UI/system/components/justep/button/button" icon="linear linear-sad" label="button" style="font-size: 32px;color:#FFFFFF;padding: 0;background:#2fa4e7;border:none;" xid="button11" bind-click="button11Click">
    <i class="linear linear-sad" xid="i11"></i>
    <span xid="span11"></span></a> </div></div> 
</div>