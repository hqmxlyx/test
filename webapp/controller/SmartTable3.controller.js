sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("testtest.controller.SmartTable3", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf testtest.view.SmartTable3
		 */
		onInit: function() {
			//链接为SEGE中测试的链接
			var url = "/sap/opu/odata/SAP/ZEMPPRO_SRV/";
			var oModel = new sap.ui.model.odata.v2.ODataModel(url, {
				json: true
			});
			this.byId("tblUserData").setModel(oModel);
			this.model =  oModel;
			
		 //   var	oModel = this.getOwnerComponent().getModel("zemployee");
			// this.byId("tblUserData").setModel(oModel);
		},
		onClick:function(oEvent){
			this.model.getData();
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf testtest.view.SmartTable3
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf testtest.view.SmartTable3
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf testtest.view.SmartTable3
		 */
		//	onExit: function() {
		//
		//	}

	});

});