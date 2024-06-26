
//Create connection
var connectionDeathlyHallow = new signalR.HubConnectionBuilder().withUrl("/Hubs/deathlyhallow").build();

//connect to methods that hub invokes aka recieve notifications from hub
connectionDeathlyHallow.on("updateDeathlyHallowCount", (cloak, stone, wand) => {
    var newCloakSpan = document.getElementById("cloakCounter");
    newCloakSpan.innerText = cloak.toString();

    var newStoneSpan = document.getElementById("stoneCounter");
    newStoneSpan.innerText = stone.toString();

    var newWandSpan = document.getElementById("wandCounter");
    newWandSpan.innerText = wand.toString();
});

//Start connection
function fulfield() {
    //do something on start
    console.log("Connection to User Hub Succesful");
}
function rejected() {
    //rejected logs
    console.log("You have been fucking rejected");
}
connectionDeathlyHallow.start().then(fulfield, rejected);