sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
  "use strict";

  return UIComponent.extend("my.sample.ui5.Component", {
    metadata: {
      manifest: "json",
    },

    init() {
      UIComponent.prototype.init.apply(this, arguments);

      const oRouter = this.getRouter();
      oRouter.initialize();
    },
  });
});
