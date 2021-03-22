sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/core/Fragment',
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller, Fragment) {
	"use strict";

	return Controller.extend("testtest.controller.SelectTable", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf testtest.view.SelectTable
		 */
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel("model/table.json");
			var oModel2 = new sap.ui.model.json.JSONModel('model/suppliers.json');
			//sap.m.MessageBox.alert(oModel2.getData().ID);
			this.getView().setModel(oModel);
			this.getView().setModel(oModel2, "model2");
			oModel.setData(false);
			this.model = oModel;
		},
		onClick: function() {
			if (!this._oDialog) {
				Fragment.load({
					name: "testtest.view.fragment.SelectTableDialog",
					controller: this
				}).then(function(oDialog) {
					this._oDialog = oDialog;
					//下面语句必须在这个地方编写
					//这这句换显示最左边的复选框
					this._oDialog.setMultiSelect(true);
					//这句话一定要放在open方法前，不然数据无法显示
					this._oDialog.showClearButton = true;
					//记住选择及属性，不设置后续拿不到选择的字段
					this._oDialog.setRememberSelections(true);
					this.getView().addDependent(this._oDialog);
					this._oDialog.open();
				}.bind(this));
			} else {
				//这句话一定要放在open方法前，不然数据无法显示
				this.getView().addDependent(this._oDialog);
				this._oDialog.open();
			}
		},
		handleClose: function(oEvent) {
			//获取JSON全部数据
			var jsondata = this.model.getData().rows;
			jsondata.map(function(obj) {
				
			});
			// var oBinding = oEvent.getSource().getBinding("items");
			// oBinding.filter([]);
			var aContexts = oEvent.getParameter("selectedContexts");
			if (aContexts && aContexts.length) {
				sap.m.MessageToast.show("你选择的数据是ID" + aContexts.map(function(oContext) {
					return oContext.getObject().field1;
				}).join(", "));
			}
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf testtest.view.SelectTable
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf testtest.view.SelectTable
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf testtest.view.SelectTable
		 */
		//	onExit: function() {
		//
		//	}

	});

});