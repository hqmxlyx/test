sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/StandardListItem",
	"sap/m/Text",
	"sap/m/ColumnListItem"
], function(Controller, MessageBox, StandardListItem, Text, ColumnListItem) {
	"use strict";
	var oApp;

	return Controller.extend("testtest.controller.SmartTable3", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf testtest.view.SmartTable3
		 */
		onInit: function() {
			//链接为SEGE中测试的链接
			var url = "/sap/opu/odata/SAP/ZEMPPRO_SRV/";
			// var oModel = new sap.ui.model.odata.v2.ODataModel(url, {
			// 	json: true,
			// 	expand: "TOITEM"
			// });

			var oModel = new sap.ui.model.odata.v2.ODataModel(url, {
				json: true,
				expand: "TOITEM"
			});
			this.byId("tblUserData").setModel(oModel);
			//this.getView().setModel(oModel);
			this.model = oModel;
			oModel.setSizeLimit(10);
			oApp = this.byId("app");

			//   var	oModel = this.getOwnerComponent().getModel("zemployee");
			// this.byId("tblUserData").setModel(oModel);
		},
		onClick: function(oEvent) {
			this.model.getData();
		},
		onItemPress: function(oEvent) {
			var oTable = new sap.m.Table({
				//	id: "tabid",
				columns: [new sap.m.Column({
						header: new Text({
							text: "采购订单"
						})
					}),
					new sap.m.Column({
						header: new Text({
							text: "采购订单行项目"
						})
					}),
					new sap.m.Column({
						header: new Text({
							text: "工厂"
						})
					}),
					new sap.m.Column({
						header: new Text({
							text: "库存地点"
						})
					}),
					new sap.m.Column({
						header: new Text({
							text: "物料编号"
						})
					}),
					new sap.m.Column({
						header: new Text({
							text: "采购数量"
						})
					})
				],
				//headerToolbar: oHeaderToolbar,
				headerText: "Table Header",
				mode: "MultiSelect",
				alternateRowColors: true, //基偶行颜色
				autoPopinMode: true,
				growing: false
			});
			//	var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/SAP/ZEMPPRO_SRV/");

			//	oModel.setUseBatch(false);
			//oModel.setSizeLimit(999999);
			var oTemplate1 =
				new sap.m.ColumnListItem({
					cells: [new sap.m.Text({
							text: "{Ebeln}"
						}),
						new sap.m.Text({
							text: "{Ebelp}"
						}),
						new sap.m.Text({
							text: "{Werks}"
						}),
						new sap.m.Text({
							text: "{Lgort}"
						}),
						new sap.m.Text({
							text: "{Matnr}"
						}),
						new sap.m.Text({
							text: "{Menge}"
						})
					]
				});

			//--------------------通过OnInit 直接传递expand 参数一次加载数据后绑定（不能加上oTable.bindAggregation("items"，{}）不然重复绑定不显示）
			//方式一绑定模型
			//oTable.setModel(this.model);
			//方式二绑定模型
			var tabModel = oEvent.getSource().getBindingContext().getModel();
			oTable.setModel(tabModel);
			//----------------------------这种方式不行
			//绑定方式三
			//var oContext = oEvent.getSource().getBindingContext();
			//oTable.setBindingContext(oContext);
			//----------------------------这种方式不行
			var path = oEvent.getSource().getBindingContextPath();
			oTable.bindItems(path + '/TOITEM', oTemplate1);
			//--------------------通过OnInit 直接传递expand 参数一次加载数据后绑定	

			//--------------------通过再次绑定发送ODATA 请求绑定	
			// Bind the items and template
			// oTable.bindAggregation("items", {
			// 	//方式一直接通PATH访问
			// 	//path: "/ZTHEAD(Mandt='400',Ebeln='4500000146')/TOITEM",
			// 	//方式二要通过过滤访问这种方式不行
			// path: "/ZTHEAD",
			// filters: [new sap.ui.model.Filter("Mandt", sap.ui.model.FilterOperator.EQ, "400"),
			// 	new sap.ui.model.Filter("Ebeln", sap.ui.model.FilterOperator.EQ, "4500000146")
			// ],
			// parameters: {
			// 	expand: "TOITEM",
			// 	select: 'Mandt,Ebeln,TOITEM/Ebelp,TOITEM/Werks,TOITEM/Matnr'
			// 		//, custom: {
			// 		// 	para1: "400",
			// 		// 	para1: "4500000146"
			// 		// },
			// 		//这个过滤是针对行项目的过滤
			// 		// filters: [new sap.ui.model.Filter("Mandt", sap.ui.model.FilterOperator.EQ, "400"),
			// 		// 	new sap.ui.model.Filter("Ebeln", sap.ui.model.FilterOperator.EQ, "4500000146")
			// 		// ],
			// },

			// 	template: oTemplate1
			// });
			//--------------------通过再次绑定发送ODATA 请求绑定	

			var oPage = new sap.m.Page({
				//不加ID每次都会给Page创建创建一个ID放入APP中
				//	id: "page2",
				title: "title",
				content: [oTable, new sap.m.Button({
					text: "button",
					press: function(oEvent) {
						sap.m.MessageBox.alert("sadfadf");
					}.bind(this)
				})],
				showNavButton: true,
				navButtonPress: [this.onNavPress, this]
			});
			//oPage.setBindingContext(oContext);
			oApp.addPage(oPage);
			oApp.to(oPage);

		},
		onNavPress: function() {
			oApp.back();
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