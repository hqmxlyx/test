sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/m/MessageToast"
], function(Controller) {
	"use strict";

	return Controller.extend("testtest.controller.SplitApp2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf testtest.view.SplitApp2
		 */
		//	onInit: function() {
		//
		//	},

		onItemPress: function(oEvent) {
			var oNav = oEvent.getParameter("listItem").getProperty("title");
			var oView = this.byId("splitApp");
			//to里面的参数是detial page 页面的ID
			oView.toDetail(this.createId(oNav));

		},
		onSelectChange: function(oEvent) {

				var oView = this.byId("splitApp");
				//----取数方法一
				// var index = oEvent.getParameter("selectedIndex");
				// switch (index) {
				// 	case 0:
				// 		//显示左边导航栏
				// 		oView.setMode("ShowHideMode");
				// 		break;
				// 	case 1:
				// 		//隐藏左边导航栏
				// 		oView.setMode("ShowHideMode");
				// 		break;
				// 	case 2:
				// 		sap.m.MessageToast.show("你点击的是最后的按键");
				// }
				//----取数方法二
				//头部加入客户数据
				var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();
				oView.setMode(sSplitAppMode);
			}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf testtest.view.SplitApp2
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf testtest.view.SplitApp2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf testtest.view.SplitApp2
		 */
		//	onExit: function() {
		//
		//	}

	});

});