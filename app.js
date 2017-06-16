'use strict';

var shopTable = document.getElementById('shops');
function sumTotal(total, num) {
    return total + num;
}
var openHours = ['6am', '7am', '8am', '9am', '10am' ,'11am' ,'12pm' , '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var salmonStores = [];
var formBody = document.getElementById('newlocationform')

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
  this.cookiesPerHour();
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
  this.customersPerHour();
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
};

function makeFooter () {
  var allTotal = 0;
  var hourlyTotal = 0;
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Totals Each Hour';
  trEl.appendChild(thEl);
  shopTable.appendChild(trEl)
  for (var i = 0; i < openHours.length; i++) {
    hourlyTotal = 0;
    for (var j = 0; j < salmonStores.length; j++) {
      hourlyTotal += salmonStores[j].cookiesEachHour[i];
      allTotal += salmonStores[j].cookiesEachHour[i];
  }
  var thEl = document.createElement('th');
  thEl.textContent = hourlyTotal;
  trEl.appendChild(thEl);
}
  var thEl = document.createElement('th')
  thEl.textContent = allTotal;
  trEl.appendChild(thEl)
  shopTable.appendChild(trEl);
};

function renderTable () {
  makeHeaders();
  for (var i = 0; i < salmonStores.length; i++) {
    salmonStores[i].render();
  }
  makeFooter();
}

function handleUserSubmission(event) {
  event.preventDefault();
  var locationRemark = event.target.Location.value;
  var minCusRemark = parseInt(event.target.MinCus.value);
  var maxCusRemark = parseInt(event.target.MaxCus.value);
  var avgCkyRemark = parseFloat(event.target.AvgCookie.value);
  var formStore = new Store(locationRemark, minCusRemark, maxCusRemark, avgCkyRemark);
  shopTable.innerHTML='';
  renderTable();
}
new Store('Pike Place', 23, 65, 6.3);
new Store('Seattle Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 1.2);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
renderTable();
formBody.addEventListener('submit', handleUserSubmission);
