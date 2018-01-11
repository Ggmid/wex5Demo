<div 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns="http://www.w3.org/1999/xhtml" 
  component="$UI/system/components/justep/window/window" 
  xid="window" 
  extends="$UI/eq_servicePlat_BeiJin/main/base/map/map.w" 
  __id="id_1" 
  design="device:m;" 
  class="window" >

    <div bind-css="$model.markerDel.get()?&quot;show&quot;:&quot;hide&quot;" class="detailPan" dir="ltr" style="width:100%;z-index:1300;overflow:auto;" xid="infoDetails" xui:parent="window" xui:update-mode="insert" >
<div class="x-list" component="$UI/system/components/justep/list/list" data="markerDetils" xid="list5_4" >
<ul class="x-list-template" xid="listTemplateUl2_4" >
<li xid="li4_4" >
<a bind-click="closeClick" class="btn btn-default btn-only-icon btn_style" component="$UI/system/components/justep/button/button" icon="linear linear-fileadd" label="button" xid="close" >
<i class="linear linear-fileadd" xid="i1_4" />
<span xid="span1_4" />
</a>
<div bind-css=" " bind-visible="val(&quot;resourceName&quot;)!=undefined" class="x-label-edit x-label30" component="$UI/system/components/justep/labelEdit/labelEdit" xid="name" >
<label class="x-label" xid="label7_4" >
<![CDATA[名称：]]>
</label>
<div bind-text=" val(&quot;resourceName&quot;)" class="x-output x-edit" component="$UI/system/components/justep/output/output" xid="output4_4" />
</div>
<div bind-visible="val(&quot;lon&quot;)!=undefined" class="x-label-edit x-label30" component="$UI/system/components/justep/labelEdit/labelEdit" xid="lon" >
<label class="x-label" xid="label8_4" >
<![CDATA[经度：]]>
</label>
<div bind-text=" val(&quot;lon&quot;)" class="x-output x-edit" component="$UI/system/components/justep/output/output" xid="output5_4" />
</div>
<div bind-visible=" val(&quot;lat&quot;)!=undefined" class="x-label-edit x-label30" component="$UI/system/components/justep/labelEdit/labelEdit" xid="lat" >
<label class="x-label" xid="label31_5" >
<![CDATA[纬度：]]>
</label>
<div bind-text=" val(&quot;lat&quot;)" class="x-output x-edit" component="$UI/system/components/justep/output/output" xid="output31_5" />
</div>
<div bind-visible=" val(&quot;location&quot;)!=undefined" class="x-label-edit x-label30" component="$UI/system/components/justep/labelEdit/labelEdit" xid="location" >
<label class="x-label" xid="label9_4" >
<![CDATA[位置：]]>
</label>
<div bind-text=" val(&quot;location&quot;)" class="x-output x-edit" component="$UI/system/components/justep/output/output" xid="output6_4" />
</div>
<div bind-visible=" val(&quot;saturation&quot;)!=undefined" class="x-label-edit x-label30" component="$UI/system/components/justep/labelEdit/labelEdit" xid="saturation" >
<label class="x-label" xid="label11_5" >
<![CDATA[饱和度：]]>
</label>
<div bind-text=" val(&quot;saturation&quot;)" class="x-output x-edit" component="$UI/system/components/justep/output/output" xid="output11_5" />
</div>
<div bind-visible=" val(&quot;havenType&quot;)!=undefined" class="x-label-edit x-label30" component="$UI/system/components/justep/labelEdit/labelEdit" xid="havenType" >
<label class="x-label" xid="label21_5" >
<![CDATA[资源类型：]]>
</label>
<div bind-text=" val(&quot;havenType&quot;)" class="x-output x-edit" component="$UI/system/components/justep/output/output" xid="output21_5" />
</div>
<div bind-visible=" val(&quot;createuser&quot;)!=undefined" class="x-label-edit x-label30" component="$UI/system/components/justep/labelEdit/labelEdit" xid="createuser" >
<label class="x-label" xid="label41_5" >
<![CDATA[上报人：]]>
</label>
<div bind-text=" val(&quot;createuser&quot;)" class="x-output x-edit" component="$UI/system/components/justep/output/output" xid="output41_5" />
</div>
<div bind-visible=" val(&quot;createtime&quot;)!=undefined" class="x-label-edit x-label30" component="$UI/system/components/justep/labelEdit/labelEdit" xid="createtime" >
<label class="x-label" xid="label51_5" >
<![CDATA[上报时间：]]>
</label>
<div bind-text=" val(&quot;createtime&quot;)" class="x-output x-edit" component="$UI/system/components/justep/output/output" xid="output51_5" />
</div>
<div bind-visible="val(&quot;content&quot;)!=undefined" class="x-label-edit x-label30" component="$UI/system/components/justep/labelEdit/labelEdit" xid="content" >
<label class="x-label" xid="label61_5" >
<![CDATA[上报内容：]]>
</label>
<div bind-text=" val(&quot;content&quot;)" class="x-output x-edit" component="$UI/system/components/justep/output/output" xid="output61_5" />
</div>
</li>
</ul>
</div>
</div>
    <div autoLoad="true" component="$UI/system/components/justep/data/data" idColumn="id" xid="markerDetils" xui:parent="model" xui:update-mode="insert" >
<column label="编号" name="id" type="String" xid="xid122111_5" />
<column label="经度" name="lon" type="String" xid="xid222111_5" />
<column label="纬度" name="lat" type="String" xid="xid322111_5" />
<column label="位置" name="location" type="String" xid="xid422111_5" />
<column label="资源名称" name="resourceName" type="String" xid="xid11_5" />
<column label="饱和度" name="saturation" type="String" xid="xid21_5" />
<column label="资源类型" name="havenType" type="String" xid="xid31_5" />
<column label="上报人" name="createuser" type="String" xid="xid4_5" />
<column label="上报时间" name="createtime" type="String" xid="xid5_5" />
<column label="上报内容" name="content" type="String" xid="xid6_5" />
</div>

</div>