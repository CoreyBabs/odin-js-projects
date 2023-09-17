"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayHome: () => (/* binding */ displayHome)
/* harmony export */ });
function displayHome() {
  let content = document.querySelector("#content");

  // clear the child nodes
  content.replaceChildren([]);

  let title = document.createElement("div");
  title.innerText = "Corey's Bakery";
  title.id = "title";

  let quote = document.createElement("div");
  quote.id = "quote";
  
  let review = document.createElement("p");
  review.id = "review";
  review.innerText = "Corey's Bakery has edible food. The desserts were ok and the sandwhich was edible. It was reasonbly priced though.";

  let customer = document.createElement("h4");
  customer.id = "customer";
  customer.innerText = "- Paid Customer";

  quote.appendChild(review);
  quote.appendChild(customer);

  let hours = document.createElement("div");
  hours.id = "hours";

  let h3 = document.createElement("h2");
  h3.innerText = "Hours";

  let hoursText = document.createElement("p");
  hoursText.innerText = "Open 10am-5pm Monday-Thursday";

  hours.appendChild(h3);
  hours.appendChild(hoursText);


  let loc = document.createElement("div");
  loc.id = "location";

  let lh3 = document.createElement("h2");
  lh3.innerText = "Location";

  let locText = document.createElement("p");
  locText.innerText = "1414 Penguin St, Antarctica";

  loc.appendChild(lh3);
  loc.appendChild(locText);

  content.appendChild(title);
  content.appendChild(quote);
  content.appendChild(hours);
  content.appendChild(loc);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGlzcGxheUhvbWUoKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIC8vIGNsZWFyIHRoZSBjaGlsZCBub2Rlc1xuICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbihbXSk7XG5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gXCJDb3JleSdzIEJha2VyeVwiO1xuICB0aXRsZS5pZCA9IFwidGl0bGVcIjtcblxuICBsZXQgcXVvdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBxdW90ZS5pZCA9IFwicXVvdGVcIjtcbiAgXG4gIGxldCByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcmV2aWV3LmlkID0gXCJyZXZpZXdcIjtcbiAgcmV2aWV3LmlubmVyVGV4dCA9IFwiQ29yZXkncyBCYWtlcnkgaGFzIGVkaWJsZSBmb29kLiBUaGUgZGVzc2VydHMgd2VyZSBvayBhbmQgdGhlIHNhbmR3aGljaCB3YXMgZWRpYmxlLiBJdCB3YXMgcmVhc29uYmx5IHByaWNlZCB0aG91Z2guXCI7XG5cbiAgbGV0IGN1c3RvbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjdXN0b21lci5pZCA9IFwiY3VzdG9tZXJcIjtcbiAgY3VzdG9tZXIuaW5uZXJUZXh0ID0gXCItIFBhaWQgQ3VzdG9tZXJcIjtcblxuICBxdW90ZS5hcHBlbmRDaGlsZChyZXZpZXcpO1xuICBxdW90ZS5hcHBlbmRDaGlsZChjdXN0b21lcik7XG5cbiAgbGV0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG91cnMuaWQgPSBcImhvdXJzXCI7XG5cbiAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoMy5pbm5lclRleHQgPSBcIkhvdXJzXCI7XG5cbiAgbGV0IGhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBob3Vyc1RleHQuaW5uZXJUZXh0ID0gXCJPcGVuIDEwYW0tNXBtIE1vbmRheS1UaHVyc2RheVwiO1xuXG4gIGhvdXJzLmFwcGVuZENoaWxkKGgzKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNUZXh0KTtcblxuXG4gIGxldCBsb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2MuaWQgPSBcImxvY2F0aW9uXCI7XG5cbiAgbGV0IGxoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgbGgzLmlubmVyVGV4dCA9IFwiTG9jYXRpb25cIjtcblxuICBsZXQgbG9jVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsb2NUZXh0LmlubmVyVGV4dCA9IFwiMTQxNCBQZW5ndWluIFN0LCBBbnRhcmN0aWNhXCI7XG5cbiAgbG9jLmFwcGVuZENoaWxkKGxoMyk7XG4gIGxvYy5hcHBlbmRDaGlsZChsb2NUZXh0KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChxdW90ZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGxvYyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=