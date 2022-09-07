

//save erea
var west_bank = document.getElementById("west_bank");
var south = document.getElementById("south");
var jerusalem = document.getElementById("jerusalem");
var center = document.getElementById("center");
var haifa_district = document.getElementById("haifa_district");
var northern = document.getElementById("northern");

// save haifa_card
var haifa_card = document.querySelector(".haifa_card");
var northern_card = document.querySelector(".northern_card");
var south_card = document.querySelector(".south_card");


// show and hide cards function
west_bank.addEventListener("click", ()=> {
    document.querySelector(".no_project_alert").innerHTML = "אין מידע";
    haifa_card.style.display = "none";
    northern_card.style.display = "none";
    south_card.style.display = "none";
})

jerusalem.addEventListener("click", ()=> {
    document.querySelector(".no_project_alert").innerHTML = "אין מידע";
    haifa_card.style.display = "none";
    northern_card.style.display = "none";
    south_card.style.display = "none";
})

center.addEventListener("click", ()=> {
    document.querySelector(".no_project_alert").innerHTML = "אין מידע";
    haifa_card.style.display = "none";
    northern_card.style.display = "none";
    south_card.style.display = "none";
})

south.addEventListener("click", ()=> {
    document.querySelector(".no_project_alert").innerHTML = "מחוז דרום";
    haifa_card.style.display = "none";
    northern_card.style.display = "none";
    south_card.style.display = "block";
})

south.addEventListener("click", ()=> {
    document.querySelector(".no_project_alert").innerHTML = "מחוז דרום";
    haifa_card.style.display = "none";
    northern_card.style.display = "none";
    south_card.style.display = "block";
})

haifa_district.addEventListener("click", ()=> {
    document.querySelector(".no_project_alert").innerHTML = "מחוז חיפה";
    haifa_card.style.display = "block";
    northern_card.style.display = "none";
    south_card.style.display = "none";
})

northern.addEventListener("click", ()=> {
    document.querySelector(".no_project_alert").innerHTML = "מחוז חיפה";
    haifa_card.style.display = "none";
    northern_card.style.display = "block";
    south_card.style.display = "none";
})