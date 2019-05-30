const observableModule = require("tns-core-modules/data/observable");

function HomeItemsViewModel() {
    const viewModel = observableModule.fromObject({
        items: [
            {
                name: "Provo",
                description: "Description for Item 1"
            },
            {
                name: "Orem Central",
                description: "Description for Item 2"
            },
            {
                name: "American Fork",
                description: "Description for Item 3"
            },
            {
                name: "Lehi",
                description: "Description for Item 4"
            },
            {
                name: "Draper",
                description: "Description for Item 5"
            },
            {
                name: "South Jordan",
                description: "Description for Item 6"
            },
            {
                name: "Murray",
                description: "Description for Item 7"
            },
            {
                name: "Salt Lake",
                description: "Description for Item 8"
            },
            {
                name: "North Temple",
                description: "Description for Item 9"
            },
            {
                name: "Woods Cross",
                description: "Description for Item 10"
            },
            {
                name: "Farmington",
                description: "Description for Item 11"
            },
            {
                name: "Layton",
                description: "Description for Item 12"
            },
            {
                name: "Clearfield",
                description: "Description for Item 12"
            },
            {
                name: "Roy",
                description: "Description for Item 12"
            },
            {
                name: "Ogden",
                description: "Description for Item 12"
            }
        ]
    });

    return viewModel;
}

module.exports = HomeItemsViewModel;
