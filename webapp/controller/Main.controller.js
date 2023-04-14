sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("my.sample.ui5.controller.Main", {
      onSayHelloPressed() {
        const oResBundle = this.getOwnerComponent()
          .getModel("i18n")
          .getResourceBundle();

        MessageToast.show(oResBundle.getText("message.sayHello"));
      },
    });
  }
);
