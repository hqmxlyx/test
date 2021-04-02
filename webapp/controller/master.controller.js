sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/ui/core/mvc/XMLView",
	"sap/m/Button"
], function(Controller) {
	"use strict";
	var oApp;
	return Controller.extend("testtest.controller.master", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf testtest.view.master
		 */
		onInit: function() {
			var oModule = this.getOwnerComponent().getModel("zemployee");
			this.getView().setModel(oModule);
			oApp = this.byId("masterapp");
		},
		onPressNavigation: function(oEvent) {
			var flay;
			var oView = new sap.ui.core.mvc.XMLView({
				viewName: "testtest.view.detial",
				controllerName: "testtest.controller.master"
			});
			oView.byId("detailBut").attachPress(function(oEvFent) {
				//oApp.back();
				//oApp.addPage(this.byId("__list3"));
				oApp.to(this.byId("__list3"));
			//	flay = "X";
			}.bind(this), this.listenButton());
			oApp.addPage(oView);
			var oContext = oEvent.getSource().getBindingContext();
			oView.setBindingContext(oContext);
			oApp.to(oView);
			// var oContext = oEvent.getSource().getBindingContext();
			//	 var oDetailPage = oApp.getPage("detial");
			//	 oDetailPage.setBindingContext(oContext);

		},
		onNavPress: function() {
		
			oApp.back();
		},
		listenButton: function() {
			sap.m.MessageBox.alert("asdasdf");
			//	this.byId("masterapp").to(this.byId("__list3"));
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