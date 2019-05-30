const AlertsViewModel = require("./alerts-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new AlertsViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
