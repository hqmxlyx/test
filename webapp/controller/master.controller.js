sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller) {
	"use strict";

	return Controller.extend("testtest.controller.master", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf testtest.view.master
		 */
		onInit: function() {
			var oModule = this.getOwnerComponent().getModel("zemployee");
			this.getView().setModel(oModule);

		},
		onPressNavigation: function(oEvent) {
			sap.m.MessageBox.alert("asdfad");
			var app = this.getId("");
			var detial = new sap.ui.XMLView();
			app.to(detial);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf testtest.view.master
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf testtest.view.master
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf testtest.view.master
		 */
		//	onExit: function() {
		//
		//	}

	});

});