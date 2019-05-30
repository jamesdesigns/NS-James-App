const MapViewModel = require("./map-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new MapViewModel();
}

exports.onNavigatingTo = onNavigatingTo;


const observable = require("tns-core-modules/data/observable");
// Our new Observable view model for data binding
const viewmodel = new observable.Observable({});

// Page loaded
function pageLoaded(args) {
    const page = args.object;

    // viewmodel.set("htmlString", '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1811.0544770232307!2d-111.72737077485088!3d40.28077557778239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd8d914f2073bd270!2sOrem+Central+Station+(Bay+E)!5e0!3m2!1sen!2sus!4v1559171201236!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>');

    viewmodel.set("htmlString", "<iframe src='https://www.google.com/maps/d/u/0/embed?mid=15JbG9g4IoSecZQzuj-RWFb_KakUaZ9xf' width='370' height='850' frameborder='0' style='border:0' allowfullscreen></iframe>");

    page.bindingContext = viewmodel;
}
exports.pageLoaded = pageLoaded;
