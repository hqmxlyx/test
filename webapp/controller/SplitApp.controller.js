sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/base/Log"
], function(Controller, MessageToast, Log) {
	"use strict";

	return Controller.extend("testtest.controller.SplitApp", {

		onListItemPress: function(oEvent) {
			var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
			this.byId("SplitAppDemo").toDetail(this.createId(sToPageId));
		}

	});

});