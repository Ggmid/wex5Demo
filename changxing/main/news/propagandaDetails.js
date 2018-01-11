define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var Utils = require("../common/Utils");
	require("$UI/system/lib/cordova/cordova");
	require("cordova!com.phonegap.plugins.videoplayer");
	var Model = function() {
		this.callParent();
		//window.currentDialog.push(this);
	};

	Model.prototype.backBtnClick = function(event) {
		this.owner.close();
		window.currentDialog.pop();
		this.mySelfClose();
	};

	Model.prototype.modelParamsReceive = function(event) {
		var self = this;
		var title = event.params.title;
		var header = event.params.header;
	    this.comp("titleBar").set({
			title:title
		});
		this.setContent(header);
	};
	Model.prototype.setContent = function(header){
		var proList = [];
		var proItem = {};
		proItem.title = header;
		proItem.time = "2018年01月04号18:20";
		proItem.content = "岁末年初之际，开发区工业经济战线传出“好声音”：经统计部门逐级审定，上年度累计41家企业实现“小升规”，超额完成区下达任务，其中木业企业占比40%，为传统产业转型发展、经济稳步增长注入了新动能。企业上规数较2016年增加近一倍，得益于全区工业经济“双千”和木业转型升级深入推进。去年10月以来，开发区把木业整治作为重中之重的工作来抓，组建领导班子，自加压力，锁定302家木业企业，通过扶持单独升规、入园联合上规等方式，加大政策激励，分类推进木业企业提档升级。湖州木蕴木业有限公司就是开发区推动企业上规发展的一个典型。在去年木业行业专项整治中，该公司加大技改投入，加快转型升级，不仅改善车间环境，还改进了生产流程。去年8月，企业销售收入就达到2000万元，顺利跻身“规上阵容”。新的一年，企业发展信心强足，定下了更高的目标，计划冲刺5000万元。“事实上，部分企业存在着销售不入库的情况，一直停留在‘规下’行列，企业主以为得到了‘实惠’，但对企业长远发展和全区工业经济而言，这样的行为并不可行。”开发区管委会副主任刘晓芬介绍，通过“小升规”扩面行动，如今，越来越多的企业意识到新发展理念的必要性，纷纷引入现代化的流水线，希望在同质化竞争中占据优势地位。除了推动面广量大的木业企业进入规上，开发区还重点锁定新投产项目，把解决工业企业存在的困难和问题作为总抓手，加强分类指导，强化政策引导，通过用地指标、亩均产值倒逼企业挖潜实力，推进了一批新近投产项目提前“上规入库”。浙江艾荣达健康科技有限公司去年8月正式投产，10月实现“升规”，不到半年时间，产值就突破了1亿元。像艾荣达一样，开发区不断提升服务质量，推动在建项目加快投产速度，6个项目实现上规发展，成为经济增长的“大块头”。借助全区政策激励东风，积极培育企业上规入库，已成为开发区壮大工业经济的有效途径。据统计，新增41家规模以上企业，开发区至少新增产值8.2亿元。";
		proList.push(proItem);
		this.comp("listData").loadData(proList);
	}
	return Model;
});