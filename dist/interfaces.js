"use strict";
var tlou = {
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: function (title) {
        console.log("Singular games to " + title + ": Uncharted, A Plague Tale, Metro");
    },
};
console.log(tlou.title);
tlou.getSimilars(tlou.title);
