var present = parseFloat(prompt("Enter Present bill: "));
var previous = parseFloat(prompt("Enter previous bill: "));
var previousMonth = parseFloat(prompt("Enter Previous month bill: "));
document.getElementById('presentUnite').innerHTML = present;
document.getElementById('previousUnite').innerHTML = previous;
var total = present - previous;
document.getElementById('totalUnite').innerHTML = total + " " + "Unit";

if (total > 0) {
let u1 = (total < 75 && total > 0) ?  total : 75;
var tu = u1 * 4.19;
document.getElementById('unitRate1').innerHTML = u1 + " *" + " 4.00" + " = " + u1 * 4.19 + "Taka";
}
if (total > 75) {
let u2 = (total > 75 && total < 200) ? (total - 75) : 125;
var tu = tu + (u2 * 5.72);

document.getElementById('unitRate2').innerHTML = u2 + " *" + " 5.52" + " = " + u2 * 5.72 + "Taka";
}
if (total > 200) {
let u3 = (total > 200 && total < 300) ? (total - 200) : 100;
var tu = tu + (u3 * 6.00);

document.getElementById('unitRate3').innerHTML = u3 + " *" + " 6.00" + " = " + u3 * 6 + "Taka";
}
if (total > 300) {

let u4 = (total > 300 && total < 400) ? (total - 300) : 100;
var tu = tu + (u4 * 6.34 );

document.getElementById('unitRate4').innerHTML = u4 + " *" + " 6.34" + " = " + u4 * 6.34 + "Taka";
}
if (total > 400) {
let u5 = (total > 400 && total < 600) ? (total - 400) : 200;
var tu = tu + (u5 * 9.98);

document.getElementById('unitRate5').innerHTML = u5 + " *" + " 9.98" + " = " + u5 * 9.98 + "Taka";
}
if (total > 600) {
let u6 = (total > 600 ) ? (total - 600) : "Ivilited Number";
var tu = tu + (u6 * 11.46);

document.getElementById('unitRate6').innerHTML = u6 + " *" + " 11.46" + " = " + u6 * 11.46 + "Taka";
}
if (total > 0) {
document.getElementById('unitRate7').innerHTML =  "Total : " + tu + " TAKA";
}

document.getElementById('tUsed').innerHTML = total + " " + " " + " Unit";
document.getElementById('charge').innerHTML = tu + " " + " " + " TAKA";
document.getElementById('demandc').innerHTML = "60" + " " + " " + " TAKA";
let dcharge = tu + 60;
let vat = (dcharge / 100) * 5;

document.getElementById('vate').innerHTML = "5% vat  : " + " " + vat + " " + " TAKA";
document.getElementById('metarc').innerHTML = "10" + " " + " " + " TAKA";
var metar = vat + dcharge + 10;
if  (previousMonth > 0){
    document.getElementById('Previousb').innerHTML = previousMonth + " " + " " + " TAKA";
    let prevat = (previousMonth / 100 ) * 5;
    document.getElementById('preevat').innerHTML = prevat + " " + " " + " TAKA";

    var prebil = previousMonth + prevat;
    metar = metar + prebil;

}

document.getElementById('totalb').innerHTML = metar + " " + " " + " TAKA";
let letbil = (metar / 100) * 5;
let letb = letbil + metar;

document.getElementById('leteb').innerHTML = "5% vat : " + letb + " " + " " + " TAKA";
