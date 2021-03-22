sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller) {
	"use strict";
	return Controller.extend("testtest.controller.ui_table", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf testtest.view.ui_table
		 */
		onInit: function() {
			/*添加手动创建JS的例子
			也可以通过配置文件manifest进行配置
			*/
			var oModel = new sap.ui.model.json.JSONModel('model/suppliers.json');
			//getJSON IE8才有效
			sap.m.MessageBox.alert(oModel.getData().ID);
			this.getView().setModel(oModel);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf testtest.view.ui_table
		 */
		//	onBeforeRendering: function() {
		//S
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf testtest.view.ui_table
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf testtest.view.ui_table
		 */
		//	onExit: function() {
		//
		//	}

	});

});