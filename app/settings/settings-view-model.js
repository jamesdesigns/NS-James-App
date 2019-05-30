const observableModule = require("tns-core-modules/data/observable");

function SettingsViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        items: [
            {
                name: "Map",
                description: "Description for Item 1"
            },
            {
                name: "Delays",
                description: "Description for Item 2"
            },
            {
                name: "Privacy",
                description: "Description for Item 3"
            },
            {
                name: "Notifications",
                description: "Description for Item 4"
            },
            {
                name: "Feedback",
                description: "Description for Item 5"
            }
        ]

    });

    return viewModel;
}

module.exports = SettingsViewModel;
