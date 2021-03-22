sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Dialog",
	"sap/m/Button",
	"sap/m/ButtonType",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/m/Text",
	"sap/m/Table",
	"sap/m/ColumnListItem",
	"sap/m/Column"
], function(Controller, Dialog, Button, ButtonType, List, StandardListItem, Text, Table, ColumnListItem, Column) {
	"use strict";

	return Controller.extend("testtest.controller.Dialog", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf testtest.view.Dialog
		 */
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel("model/table.json");
			this.getView().setModel(oModel);
		},
		onListDialog: function(oEvent) {

			if (!this.ListDialog) {
				this.ListDialog = new Dialog({
					title: "List Dialog",
					content: new List({
						items: {
							path: "/rows",
							template: new StandardListItem({
								title: "{field2}",
								counter: "{field1}"
							})
						}
					}),
					beginButton: new Button({
						type: ButtonType.Emphasized,
						text: "OK",
						press: function() {
							this.ListDialog.close();
						}.bind(this)
					}),
					endButton: new Button({
						text: "Close",
						press: function() {
							this.ListDialog.close();
						}.bind(this)
					})
				});

				// to get access to the controller's model
				this.getView().addDependent(this.oDefaultDialog);
			}

			this.oDefaultDialog.open();
		},

		onMsgDialog: function(oEvent) {
			if (!this.msgDialog) {
				this.msgDialog = new Dialog({
					title: "Message Dialog",
					beginButton: new Button({
						type: ButtonType.Emphasized,
						text: "OK",
						press: function() {
							this.msgDialog.close();
						}.bind(this)
					}),
					endButton: new Button({
						text: "Close",
						press: function() {
							this.msgDialog.close();
						}.bind(this)
					}),
					content: new Text({
						text: "This is Message Dialog"
					})
				});
				this.getView().addDependent(this.msgDialog);
			}
			this.msgDialog.open();
		},
		onTableDialog: function(oEvent) {
			if (!this.tableDialog) {

				var oColumnListItem = new ColumnListItem({
				    //type: "Navigation",
					cells: [new Text({
						text: "{field1}"
					}), new Text({
						text: "{field2}"
					}), new Text({
						text: "{field3}"
					})]
				});
				var oHeaderToolbar = new sap.m.Toolbar({
					content: [
						new sap.m.Title({
							text: "头部工具栏"
						})
					]
				});

				var oTable = new Table({
					columns: [new Column({
							header: new Text({
								text: "field1"
							})
						}),
						new Column({
							header: new Text({
								text: "field1"
							})
						}),
						new Column({
							header: new Text({
								text: "field1"
							})
						})
					],
					//headerToolbar: oHeaderToolbar,
					headerText: "Table Header",
					mode: "MultiSelect",
					alternateRowColors: true, //基偶行颜色
					autoPopinMode: true
				});

				oTable.bindItems("/rows", oColumnListItem);

				this.tableDialog = new Dialog({
					title: "Table Dialog",
					beginButton: new Button({
						type: ButtonType.Emphasized,
						text: "OK",
						press: function() {
							this.tableDialog.close();
						}.bind(this)
					}),
					endButton: new Button({
						text: "Close",
						press: function() {
							this.tableDialog.close();
						}.bind(this)
					}),
					content: oTable,
					resizable: true
				});
				this.getView().addDependent(this.tableDialog);
			}
			this.tableDialog.open();
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf testtest.view.Dialog
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf testtest.view.Dialog
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf testtest.view.Dialog
		 */
		//	onExit: function() {
		//
		//	}

	});

});