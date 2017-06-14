'use strict';

var shopTable = document.getElementById('shops');
function sumTotal(total, num) {
    return total + num;
}
var openHours = ['6am', '7am', '8am', '9am', '10am' ,'11am' ,'12pm' , '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var salmonStores = [];

function avgCustPerHour(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
}

function Store(location, minCustomers, maxCustomers, avgCookies) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.customerEachHour = [];
  this.cookiesEachHour = [];
  this.dailySales = 0;
  salmonStores.push(this);
}

Store.prototype.customersPerHour = function () {
  for (var i = 0; i < openHours.length; i++) {
    this.customerEachHour.push(avgCustPerHour(this.minCustomers, this.maxCustomers));
  }
  console.log(this.customerEachHour);
  return this.customerEachHour;
};

Store.prototype.cookiesPerHour = function () {
  for (var j=0; j < openHours.length; j++) {
  var avgCookiesPerHour = Math.ceil(this.customerEachHour[j] * this.avgCookies);
  this.cookiesEachHour.push(avgCookiesPerHour);
  this.dailySales += this.cookiesEachHour[j];
  }
  console.log(avgCookiesPerHour);
  return this.cookiesEachHour;
};
Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  for (var c = 0; c < openHours.length; c++) {
  var tdEl = document.createElement('td');
  tdEl.textContent = this.cookiesEachHour[c];
  trEl.appendChild(tdEl);
}
  shopTable.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = this.dailySales
  trEl.appendChild(tdEl)
  shopTable.appendChild(trEl);
};
function makeHeaders () {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  for (var b = 0; b < openHours.length; b++) {
  var thEl = document.createElement('th');
  thEl.textContent = openHours[b];
  trEl.appendChild(thEl);
}
  shopTable.appendChild(trEl);
  var thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
}

var pike = new Store('Pike Place', 23, 65, 6.3);
var seaTac = new Store('Seattle Airport', 3, 24, 1.2);
var seaCenter = new Store('Seattle Center', 11, 38, 1.2);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

pike.customersPerHour();
seaTac.customersPerHour();
seaCenter.customersPerHour();
capHill.customersPerHour();
alki.customersPerHour();

pike.cookiesPerHour();
seaTac.cookiesPerHour();
seaCenter.cookiesPerHour();
capHill.cookiesPerHour();
alki.cookiesPerHour();
//
makeHeaders();
pike.render();
seaTac.render();
seaCenter.render();
capHill.render();
alki.render();
// renderAllShops();
