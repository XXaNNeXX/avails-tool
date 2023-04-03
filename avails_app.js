"use strict";

const avails_de_q1_cpc_desk = [
    30000,
    13000,
    2500,
    1000,
    13000,
    3000,
    8500,
    15000,
    5000,
    15000,
    15000,
    5000,
    500,
    50,
    2000,
    100000,
    6000
];
const avails_de_q1_cpc_mob = [
    40000,
    15000,
    1500,
    1000,
    60000,
    15000,
    5500,
    20000,
    5500,
    30000,
    40000,
    8000,
    1500,
    100,
    12000,
    35000,
    20000
];

const booked_de_q1_cpc_desk = [
    20463,
    54180,
    9203,
    0,
    12058,
    9746,
    4694,
    26427,
    0,
    8232,
    0,
    0,
    0,
    0,
    0,
    59595,
    10000
]

function calc() {
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "automotive") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[0] + avails_de_q1_cpc_mob[0]) - booked_de_q1_cpc_desk[0])/1000)*1000;
    }
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "business") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[1] + avails_de_q1_cpc_mob[1]) - booked_de_q1_cpc_desk[1])/1000)*1000;
    }
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "careers") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[2] + avails_de_q1_cpc_mob[2]) - booked_de_q1_cpc_desk[2])/1000)*1000;
    }
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "education") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[3] + avails_de_q1_cpc_mob[3]) - booked_de_q1_cpc_desk[3])/1000)*1000;
    }
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "entertainment") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[4] + avails_de_q1_cpc_mob[4]) - booked_de_q1_cpc_desk[4])/1000)*1000;
    }
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "family") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[5] + avails_de_q1_cpc_mob[5]) - booked_de_q1_cpc_desk[5])/1000)*1000;
    }
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "finance") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[6] + avails_de_q1_cpc_mob[6]) - booked_de_q1_cpc_desk[6])/1000)*1000;
    }
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "food") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[7] + avails_de_q1_cpc_mob[7]) - booked_de_q1_cpc_desk[7])/1000)*1000;
    }
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "health") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[8] + avails_de_q1_cpc_mob[8]) - booked_de_q1_cpc_desk[8])/1000)*1000;
    }
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "home") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[9] + avails_de_q1_cpc_mob[9]) - booked_de_q1_cpc_desk[9])/1000)*1000;
    }
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "lifestyle") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[10] + avails_de_q1_cpc_mob[10]) - booked_de_q1_cpc_desk[10])/1000)*1000;
    }
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "news") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[11] + avails_de_q1_cpc_mob[11]) - booked_de_q1_cpc_desk[11])/1000)*1000;
    }
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "science") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[12] + avails_de_q1_cpc_mob[12]) - booked_de_q1_cpc_desk[12])/100)*100;
    }
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "seasonal") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[13] + avails_de_q1_cpc_mob[13]) - booked_de_q1_cpc_desk[13])/100)*100;
    }
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "sports") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[14] + avails_de_q1_cpc_mob[14]) - booked_de_q1_cpc_desk[14])/1000)*1000;
    }
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "technology") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[15] + avails_de_q1_cpc_mob[15]) - booked_de_q1_cpc_desk[15])/1000)*1000;
    }
    if (document.getElementById("de") && document.getElementById("cpc") && document.getElementById("desktop") && document.getElementById("q1") && document.getElementById("category").value == "travel") {
        document.getElementById("demo").innerHTML = Math.round(((avails_de_q1_cpc_desk[16] + avails_de_q1_cpc_mob[16]) - booked_de_q1_cpc_desk[16])/1000)*1000;
    }
    if (document.getElementById("demo").innerHTML < 0) {
        document.getElementById("addition").innerHTML = "This category is overbooked!";
    }
}