<div 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns="http://www.w3.org/1999/xhtml" 
  component="$UI/system/components/justep/window/window" 
  xid="window" 
  extends="$UI/changxing/main/base/tpl/header.w" 
  __id="id_1" 
  design="device:m;" 
  class="window" >

    <div class="myMenu" xid="div11_10" xui:parent="title" xui:update-mode="insert" >
<a bind-click="button11Click" class="btn btn-default btn-only-icon" component="$UI/system/components/justep/button/button" label="button" style="font-size: 32px;color:#FFFFFF;padding: 0;background:#2fa4e7;border:none;" xid="button11_10" >
<i xid="i11_10" />
<span xid="span11_10" >


列表</span>
</a>
</div>
   <div xid="windowContainer1" src="$UI/changxing/main/busDetails/busDetailsMap.w"  xui:update-mode="merge"/>
   <a xid="button11" class="btn btn-default" label="列表" style="font-size: 18px;color:#FFFFFF;padding: 0;background:#2fa4e7;border:none;background:transparent;margin-top:12px;"  xui:update-mode="merge"/>
   <span xid="span11"  xui:update-mode="merge-and-replace">列表</span><xu:modifications>
  <xu:remove select="//*[@xid='button11']/@icon"/>
  <xu:remove select="//*[@xid='i11']/@class"/>
</xu:modifications>

</div>