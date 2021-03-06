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
			var oModule = new sap.ui.model.json.JSONModel("model/table.json");
			this.getView().setModel(oModule);
			oApp = this.byId("masterapp");

		},

		onPressNavigation: function(oEvent) {
			var oView = new sap.ui.core.mvc.XMLView({
				viewName: "testtest.view.detial",
				controllerName: "testtest.controller.master"
			});

			var oPage = new sap.m.Page({
				//不加ID每次都会给Page创建创建一个ID放入APP中
				//	id: "page2",
				title: "title",
				content: [oView],
				showNavButton: true,
				navButtonPress: [this.onNavPress, this]
			});

			oApp.addPage(oPage);
			oApp.to(oPage);
			var oContext = oEvent.getSource().getBindingContext();
			oPage.setBindingContext(oContext);

			var table = oView.byId("__table0");
			var path = oEvent.getSource().getBindingContextPath();
			table.bindItems(path + "/table", oView.byId("__item0"));
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