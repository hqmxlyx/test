sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function(Controller, MessageToast, MessageBox) {
	"use strict";

	return Controller.extend("testtest.controller.input", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf testtest.view.input
		 */
		//	onInit: function() {
		//
		//	},

		onChange: function(oEvent) {
			MessageToast.show("Value changed to '" + oEvent.getParameter("value") + "'");
		},
		onSelectChange: function(oEvent) {
			MessageToast.show("下拉框值是" + oEvent.getParameter("selectedItem").getProperty("key") +
				oEvent.getParameter("selectedItem").getProperty("text") + "'");
		},
		onRadioSelectChange: function(oEvent) {
				//MessageToast.show("选择的复选框索引" + oEvent.getParameter("selectedIndex") + "'");
				MessageToast.show("选择的性别是"+
					oEvent.getSource().getProperty("text"));
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf testtest.view.input
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf testtest.view.input
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf testtest.view.input
		 */
		//	onExit: function() {
		//
		//	}

	});

});