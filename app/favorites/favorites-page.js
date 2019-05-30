const FavoritesViewModel = require("./map-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new FavoritesViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
