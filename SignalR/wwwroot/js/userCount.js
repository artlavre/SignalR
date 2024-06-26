
//Create connection
var connectionUserCount = new signalR.HubConnectionBuilder().withUrl("/Hubs/userCount", signalR.HttpTransportType.WebSockets).build();

//connect to methods that hub invokes aka recieve notifications from hub
connectionUserCount.on("updateTotalViews", (value) => {
    var newCountSpan = document.getElementById("totalViewsCounter");
    if (newCountSpan) {
        newCountSpan.innerText = value.toString();
    } else {
        console.log("Element not found: totalViewsCounter");
    }
});

connectionUserCount.on("updateTotalUsers", (value) => {
    var newCountSpan = document.getElementById("totalUsersCounter");
    newCountSpan.innerText = value.toString();
});

//Invoke hub methods aka send notification to hub
function newWindowLoadedOnClient() {
    console.log("loaded");
    connectionUserCount.invoke("NewWindowLoaded", "Artem").then((value) => console.log(value));
}


//Start connection
function fulfield() {
    //do something on start
    console.log("Connection to User Hub Succesful");
    console.log("Lol");
    //Invoke Method
    newWindowLoadedOnClient();
}
function rejected() {
    //rejected logs
    console.log("You have been fucking rejected");
}

connectionUserCount.start().then(fulfield, rejected);