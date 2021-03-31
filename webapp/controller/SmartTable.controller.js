sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/ui/core/util/MockServer",
	"sap/m/MessageToast",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/core/syncStyleClass"
], function(Controller, ODataModel, MockServer, MessageToast, ResourceModel, syncStyleClass) {
	"use strict";

	return Controller.extend("testtest.controller.SmartTable", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf testtest.view.SmartTable
		 */
		onInit: function() {
			var oModel, oView, oTable;
			var oMockServer = new MockServer({
				rootUri: "localService.Employees/"
			});
			this._oMockServer = oMockServer;
			oMockServer.simulate(
				"localService/metadata2.xml",
				"localService/");

			oMockServer.start();
			oModel = new ODataModel("localService.Employees", true);
			oModel.setDefaultBindingMode("TwoWay");
			oView = this.getView();
			oView.setModel(oModel);

			oTable = this.getView().byId("tblUserData").getTable();
			oTable.setMode("MultiSelect");
			oTable.attachSelectionChange(this.onTableSelection, this);

			// this.oResouceModel = new ResourceModel({
			// 	bundleName: "sap.ui.comp.sample.smartmultiedit.messagebundle"
			// });
			// oView.setModel(this.oResouceModel, "@i18n");
		},
		onButton: function() {

		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf testtest.view.SmartTable
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf testtest.view.SmartTable
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf testtest.view.SmartTable
		 */
		//	onExit: function() {
		//
		//	}

	});

});