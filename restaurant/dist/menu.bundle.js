"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayMenu: () => (/* binding */ displayMenu)
/* harmony export */ });
/* harmony import */ var _assets_waffle_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/waffle.jpg */ "./src/assets/waffle.jpg");
/* harmony import */ var _assets_brownie_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/brownie.jpg */ "./src/assets/brownie.jpg");
/* harmony import */ var _assets_cookie_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/cookie.jpg */ "./src/assets/cookie.jpg");
/* harmony import */ var _assets_pie_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/pie.jpg */ "./src/assets/pie.jpg");




function displayMenu() {
  let content = document.querySelector("#content");

  // clear the child nodes
  content.replaceChildren([]);

  let d1 = createMenuItem("Pie", _assets_pie_jpg__WEBPACK_IMPORTED_MODULE_3__, "Apple pie with a nice flaky crust.")
  let d2 = createMenuItem("Brownie", _assets_brownie_jpg__WEBPACK_IMPORTED_MODULE_1__, "Chocolate brownies with a crispy outside and gooey inside.")
  let d3 = createMenuItem("Cookie", _assets_cookie_jpg__WEBPACK_IMPORTED_MODULE_2__, "Oatmeal raisin cookies that are better than chocolate chip cookies.")
  let d4 = createMenuItem("Waffle", _assets_waffle_jpg__WEBPACK_IMPORTED_MODULE_0__, "Waffles cooked to perfection.")

  content.appendChild(d1);
  content.appendChild(d2);
  content.appendChild(d3);
  content.appendChild(d4);
}

function createMenuItem(name, image, description) { 
  let div = document.createElement("div");
  div.className = "menu-item";
  
  let h2 = document.createElement("h2");
  h2.className = "name";
  h2.innerText = name; 

  let img = new Image();
  img.src = image;
  img.className = "image";

  let desP = document.createElement("p");
  desP.className = "description";
  desP.innerText = description;

  div.appendChild(h2);
  div.appendChild(img);
  div.appendChild(desP);
  
  return div;
}


/***/ }),

/***/ "./src/assets/brownie.jpg":
/*!********************************!*\
  !*** ./src/assets/brownie.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0ad3144cdf5f86d2e4f.jpg";

/***/ }),

/***/ "./src/assets/cookie.jpg":
/*!*******************************!*\
  !*** ./src/assets/cookie.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c739393d76bc3fa5074c.jpg";

/***/ }),

/***/ "./src/assets/pie.jpg":
/*!****************************!*\
  !*** ./src/assets/pie.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d5ed6dd7eccb815a032.jpg";

/***/ }),

/***/ "./src/assets/waffle.jpg":
/*!*******************************!*\
  !*** ./src/assets/waffle.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fe2fbe1ed7159a8a294.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRTtBQUNGO0FBQ047QUFDM0I7QUFDUDs7QUFFQTtBQUNBOztBQUVBLGlDQUFpQyw0Q0FBRztBQUNwQyxxQ0FBcUMsZ0RBQU87QUFDNUMsb0NBQW9DLCtDQUFNO0FBQzFDLG9DQUFvQywrQ0FBTTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2FmZmxlIGZyb20gJy4vYXNzZXRzL3dhZmZsZS5qcGcnXG5pbXBvcnQgQnJvd25pZSBmcm9tICcuL2Fzc2V0cy9icm93bmllLmpwZydcbmltcG9ydCBDb29raWUgZnJvbSAnLi9hc3NldHMvY29va2llLmpwZydcbmltcG9ydCBQaWUgZnJvbSAnLi9hc3NldHMvcGllLmpwZydcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TWVudSgpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgLy8gY2xlYXIgdGhlIGNoaWxkIG5vZGVzXG4gIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKFtdKTtcblxuICBsZXQgZDEgPSBjcmVhdGVNZW51SXRlbShcIlBpZVwiLCBQaWUsIFwiQXBwbGUgcGllIHdpdGggYSBuaWNlIGZsYWt5IGNydXN0LlwiKVxuICBsZXQgZDIgPSBjcmVhdGVNZW51SXRlbShcIkJyb3duaWVcIiwgQnJvd25pZSwgXCJDaG9jb2xhdGUgYnJvd25pZXMgd2l0aCBhIGNyaXNweSBvdXRzaWRlIGFuZCBnb29leSBpbnNpZGUuXCIpXG4gIGxldCBkMyA9IGNyZWF0ZU1lbnVJdGVtKFwiQ29va2llXCIsIENvb2tpZSwgXCJPYXRtZWFsIHJhaXNpbiBjb29raWVzIHRoYXQgYXJlIGJldHRlciB0aGFuIGNob2NvbGF0ZSBjaGlwIGNvb2tpZXMuXCIpXG4gIGxldCBkNCA9IGNyZWF0ZU1lbnVJdGVtKFwiV2FmZmxlXCIsIFdhZmZsZSwgXCJXYWZmbGVzIGNvb2tlZCB0byBwZXJmZWN0aW9uLlwiKVxuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZDEpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGQyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChkMyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZDQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBpbWFnZSwgZGVzY3JpcHRpb24pIHsgXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NOYW1lID0gXCJtZW51LWl0ZW1cIjtcbiAgXG4gIGxldCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDIuY2xhc3NOYW1lID0gXCJuYW1lXCI7XG4gIGgyLmlubmVyVGV4dCA9IG5hbWU7IFxuXG4gIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nLnNyYyA9IGltYWdlO1xuICBpbWcuY2xhc3NOYW1lID0gXCJpbWFnZVwiO1xuXG4gIGxldCBkZXNQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGRlc1AuY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNQLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xuXG4gIGRpdi5hcHBlbmRDaGlsZChoMik7XG4gIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZGVzUCk7XG4gIFxuICByZXR1cm4gZGl2O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9