/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlIb21lKCkge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAvLyBjbGVhciB0aGUgY2hpbGQgbm9kZXNcbiAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oW10pO1xuXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmlubmVyVGV4dCA9IFwiQ29yZXkncyBCYWtlcnlcIjtcbiAgdGl0bGUuaWQgPSBcInRpdGxlXCI7XG5cbiAgbGV0IHF1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcXVvdGUuaWQgPSBcInF1b3RlXCI7XG4gIFxuICBsZXQgcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJldmlldy5pZCA9IFwicmV2aWV3XCI7XG4gIHJldmlldy5pbm5lclRleHQgPSBcIkNvcmV5J3MgQmFrZXJ5IGhhcyBlZGlibGUgZm9vZC4gVGhlIGRlc3NlcnRzIHdlcmUgb2sgYW5kIHRoZSBzYW5kd2hpY2ggd2FzIGVkaWJsZS4gSXQgd2FzIHJlYXNvbmJseSBwcmljZWQgdGhvdWdoLlwiO1xuXG4gIGxldCBjdXN0b21lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgY3VzdG9tZXIuaWQgPSBcImN1c3RvbWVyXCI7XG4gIGN1c3RvbWVyLmlubmVyVGV4dCA9IFwiLSBQYWlkIEN1c3RvbWVyXCI7XG5cbiAgcXVvdGUuYXBwZW5kQ2hpbGQocmV2aWV3KTtcbiAgcXVvdGUuYXBwZW5kQ2hpbGQoY3VzdG9tZXIpO1xuXG4gIGxldCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvdXJzLmlkID0gXCJob3Vyc1wiO1xuXG4gIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDMuaW5uZXJUZXh0ID0gXCJIb3Vyc1wiO1xuXG4gIGxldCBob3Vyc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaG91cnNUZXh0LmlubmVyVGV4dCA9IFwiT3BlbiAxMGFtLTVwbSBNb25kYXktVGh1cnNkYXlcIjtcblxuICBob3Vycy5hcHBlbmRDaGlsZChoMyk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzVGV4dCk7XG5cblxuICBsZXQgbG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9jLmlkID0gXCJsb2NhdGlvblwiO1xuXG4gIGxldCBsaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGxoMy5pbm5lclRleHQgPSBcIkxvY2F0aW9uXCI7XG5cbiAgbGV0IGxvY1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbG9jVGV4dC5pbm5lclRleHQgPSBcIjE0MTQgUGVuZ3VpbiBTdCwgQW50YXJjdGljYVwiO1xuXG4gIGxvYy5hcHBlbmRDaGlsZChsaDMpO1xuICBsb2MuYXBwZW5kQ2hpbGQobG9jVGV4dCk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocXVvdGUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChsb2MpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9