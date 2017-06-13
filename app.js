'use strict';

function sumTotal(total, num) {
    return total + num;
}
var openHours = ['6am', '7am', '8am', '9am', '10am' ,'11am' ,'12pm' , '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var pikeAndFirst = {
    location: 'Pike and 1st',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    customerEachHour: [],
    cookiesEachHour: [],
    customersPerHour: function () {
      for (var i = 0; i < openHours.length; i++) {
        var avgCustPerHour = Math.floor(Math.random () * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      console.log(avgCustPerHour);
      this.customerEachHour.push(avgCustPerHour);
    }
  },
    cookiesPerHour: function () {
      for (var j=0; j < openHours.length; j++) {
      var avgCookiesPerHour = Math.ceil(this.customerEachHour[j] * this.avgCookies);
      console.log(avgCookiesPerHour);
      this.cookiesEachHour.push(avgCookiesPerHour);
    }
  },
  render: function() {
    var ulEl = document.getElementById('locationPike')
    ulEl.textContent = this.location;
    for (var f = 0; f < openHours.length; f++) {
      var liEl = document.createElement('li');
      liEl.textContent = openHours[f] + ' : ' + ' ' + this.cookiesEachHour[f] + ' cookies sold per hour.';
      ulEl.appendChild(liEl)[f];
    }
    liEl.textContent = 'Total' + ':' + this.cookiesEachHour.reduce(sumTotal);
  }
};
pikeAndFirst.customersPerHour();
pikeAndFirst.cookiesPerHour();
pikeAndFirst.render();


var seaTac = {
    location: 'SeaTac Airport',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    customerEachHour: [],
    cookiesEachHour: [],
    customersPerHour: function () {
      for (var i = 0; i < openHours.length; i++) {
        var avgCustPerHour = Math.floor(Math.random () * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      console.log(avgCustPerHour);
      this.customerEachHour.push(avgCustPerHour);
    }
  },
    cookiesPerHour: function () {
      for (var j=0; j < openHours.length; j++) {
      var avgCookiesPerHour = Math.ceil(this.customerEachHour[j] * this.avgCookies);
      console.log(avgCookiesPerHour);
      this.cookiesEachHour.push(avgCookiesPerHour);
    }
  },
  render: function() {
    var ulEl = document.getElementById('locationSeaTac')
    ulEl.textContent = this.location;
    for (var f = 0; f < openHours.length; f++) {
      var liEl = document.createElement('li');
      liEl.textContent = openHours[f] + ' : ' + ' ' + this.cookiesEachHour[f] + ' cookies sold per hour.';
      ulEl.appendChild(liEl)[f];
    }
    liEl.textContent = 'Total' + ':' + this.cookiesEachHour.reduce(sumTotal);
  }
};
seaTac.customersPerHour();
seaTac.cookiesPerHour();
seaTac.render();

var seaCenter = {
    location: 'Seattle Center',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 1.2,
    customerEachHour: [],
    cookiesEachHour: [],
    customersPerHour: function () {
      for (var i = 0; i < openHours.length; i++) {
        var avgCustPerHour = Math.floor(Math.random () * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      console.log(avgCustPerHour);
      this.customerEachHour.push(avgCustPerHour);
    }
  },
    cookiesPerHour: function () {
      for (var j=0; j < openHours.length; j++) {
      var avgCookiesPerHour = Math.ceil(this.customerEachHour[j] * this.avgCookies);
      console.log(avgCookiesPerHour);
      this.cookiesEachHour.push(avgCookiesPerHour);
    }
  },
  render: function() {
    var ulEl = document.getElementById('locationSeaCenter')
    ulEl.textContent = this.location;
    for (var f = 0; f < openHours.length; f++) {
      var liEl = document.createElement('li');
      liEl.textContent = openHours[f] + ' : ' + ' ' + this.cookiesEachHour[f] + ' cookies sold per hour.';
      ulEl.appendChild(liEl)[f];
    }
    liEl.textContent = 'Total' + ':' + this.cookiesEachHour.reduce(sumTotal);
  }
};
seaCenter.customersPerHour();
seaCenter.cookiesPerHour();
seaCenter.render();

var capHill = {
    location: 'Capitol Hill',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
    customerEachHour: [],
    cookiesEachHour: [],
    customersPerHour: function () {
      for (var i = 0; i < openHours.length; i++) {
        var avgCustPerHour = Math.floor(Math.random () * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      console.log(avgCustPerHour);
      this.customerEachHour.push(avgCustPerHour);
    }
  },
    cookiesPerHour: function () {
      for (var j=0; j < openHours.length; j++) {
      var avgCookiesPerHour = Math.ceil(this.customerEachHour[j] * this.avgCookies);
      console.log(avgCookiesPerHour);
      this.cookiesEachHour.push(avgCookiesPerHour);
    }
  },
  render: function() {
    var ulEl = document.getElementById('locationCapHill')
    ulEl.textContent = this.location;
    for (var f = 0; f < openHours.length; f++) {
      var liEl = document.createElement('li');
      liEl.textContent = openHours[f] + ' : ' + ' ' + this.cookiesEachHour[f] + ' cookies sold per hour.';
      ulEl.appendChild(liEl)[f];
    }
    liEl.textContent = 'Total' + ':' + this.cookiesEachHour.reduce(sumTotal);
  }
};
capHill.customersPerHour();
capHill.cookiesPerHour();
capHill.render();

var alki = {
    location: 'Alki',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
    customerEachHour: [],
    cookiesEachHour: [],
    customersPerHour: function () {
      for (var i = 0; i < openHours.length; i++) {
        var avgCustPerHour = Math.floor(Math.random () * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
      console.log(avgCustPerHour);
      this.customerEachHour.push(avgCustPerHour);
    }
  },
    cookiesPerHour: function () {
      for (var j=0; j < openHours.length; j++) {
      var avgCookiesPerHour = Math.ceil(this.customerEachHour[j] * this.avgCookies);
      console.log(avgCookiesPerHour);
      this.cookiesEachHour.push(avgCookiesPerHour);
    }
  },
  render: function() {
    var ulEl = document.getElementById('locationAlki')
    ulEl.textContent = this.location;
    for (var f = 0; f < openHours.length; f++) {
      var liEl = document.createElement('li');
      liEl.textContent = openHours[f] + ' : ' + ' ' + this.cookiesEachHour[f] + ' cookies sold per hour.';
      ulEl.appendChild(liEl)[f];
    }
    liEl.textContent = 'Total' + ':' + this.cookiesEachHour.reduce(sumTotal);
  }
};
alki.customersPerHour();
alki.cookiesPerHour();
alki.render();
