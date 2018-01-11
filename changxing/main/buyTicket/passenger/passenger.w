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

    <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="payfor" xui:parent="window" xui:update-mode="insert" />
   <div xid="windowContainer1" src="$UI/changxing/main/buyTicket/passenger/passContent.w"  xui:update-mode="merge"/>
   <a xid="button11" class="btn" label="完成" style="font-size: 18px;color:#FFFFFF;padding: 0;border:none;margin-top:12px;"  xui:update-mode="merge"/>
   <span xid="span11"  xui:update-mode="merge-and-replace">完成</span><xu:modifications>
  <xu:remove select="//*[@xid='button11']/@icon"/>
  <xu:remove select="//*[@xid='i11']/@class"/>
</xu:modifications>

</div>