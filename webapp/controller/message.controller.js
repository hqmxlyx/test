sap.ui.define([
	"sap/ui/core/mvc/Controller",
	//sap.ui.define 里面要添加该类，不然系统无法加载该类
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller) {
	"use strict";

	return Controller.extend("testtest.controller.message", {
		onClickAlert: function(oEvent) {
			var oText = oEvent.getSource().getText();
			sap.m.MessageBox.alert(oText);
		},
		onClickConfirm: function(oEvent) {
			var oText = oEvent.getSource().getText();
			sap.m.MessageBox.confirm(oText, {
				onClose: function(OEvent) {
					sap.m.MessageBox.alert("点击的按键是" + OEvent);
				}
			});
		},
		onClickInformation: function(oEvent) {
			var oText = oEvent.getSource().getText();
			sap.m.MessageBox.information(oText, {
				onClose: function(OEvent) {
					sap.m.MessageBox.alert("点击的按键是" + OEvent);
				}
			});
		},
		onClickSuccess: function(oEvent) {
			var oText = oEvent.getSource().getText();
			sap.m.MessageBox.success(oText);
		},
		onClickWarning: function(oEvent) {
			var oText = oEvent.getSource().getText();
			sap.m.MessageBox.warning(oText);
		},
		onClickShow: function(oEvent) {
			var oText = oEvent.getSource().getText();
			sap.m.MessageBox.show(oText);
		},
		onClickError: function(oEvent) {
			var oText = oEvent.getSource().getText();
			sap.m.MessageBox.error(oText);
		},
		onClickToast: function(oEvent) {
			var oText = oEvent.getSource().getText();
			sap.m.MessageToast.show(oText);
		}
	});
});