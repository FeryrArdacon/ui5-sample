sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("my.sample.ui5.controller.App", {
      onInit() {
        this._initModels();
      },

      _initModels() {
        this.getView().setModel(
          new JSONModel({
            busy: false,
          }),
          "appVM"
        );
      },
    });
  }
);
