sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("testtest.controller.table", {
		onInit: function() {
			/*当前控制器获取配置文件文件中定义的数据模型*/
			var oModel = this.getOwnerComponent().getModel("table");
			/*返回试图,绑定模型*/
			this.getView().setModel(oModel);

			var oModel2 = this.getOwnerComponent().getModel("zemployee");
			/*返回试图,绑定模型,setModel只能有一个默认的模型其他需要指定模型名称。不然再次指定会覆盖第一次的的指定
		     在试图中要通过{emp>Model}来访问
			*/
			this.getView().setModel(oModel2, "Emp");
		}
	});

});