"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayContacts: () => (/* binding */ displayContacts)
/* harmony export */ });
/* harmony import */ var _assets_chef_penguin_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/chef penguin.jpg */ "./src/assets/chef penguin.jpg");
/* harmony import */ var _assets_duck_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/duck.jpg */ "./src/assets/duck.jpg");
/* harmony import */ var _assets_akita_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/akita.jpg */ "./src/assets/akita.jpg");



function displayContacts() {
  let content = document.querySelector("#content");

  // clear the child nodes
  content.replaceChildren([]);

  let d1 = createDiv("Corey", _assets_chef_penguin_jpg__WEBPACK_IMPORTED_MODULE_0__, "Chef", "111-123-456", "penguin@penguin.com")
  let d2 = createDiv("Goose", _assets_duck_jpg__WEBPACK_IMPORTED_MODULE_1__, "Assistant", "111-123-457", "goose@penguin.com")
  let d3 = createDiv("Bella", _assets_akita_jpg__WEBPACK_IMPORTED_MODULE_2__, "Taste Tester", "111-123-458", "bella@penguin.com")

  content.appendChild(d1);
  content.appendChild(d2);
  content.appendChild(d3);
}

function createDiv(name, image, role, number, email) {
  let div = document.createElement("div");
  div.className = "contact";
  
  let h2 = document.createElement("h2");
  h2.className = "name";
  h2.innerText = name; 

  let img = new Image();
  img.src = image;
  img.className = "image";

  let roleP = document.createElement("p");
  roleP.className = "role";
  roleP.innerText = role;


  let numP = document.createElement("p");
  numP.className = "number";
  numP.innerText = number;

  let emailP = document.createElement("p");
  emailP.className = "email";
  emailP.innerText = email;

  div.appendChild(h2);
  div.appendChild(img);
  div.appendChild(roleP);
  div.appendChild(numP);
  div.appendChild(emailP);

  return div;
}


/***/ }),

/***/ "./src/assets/akita.jpg":
/*!******************************!*\
  !*** ./src/assets/akita.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8069c1d4cbfed03d955c.jpg";

/***/ }),

/***/ "./src/assets/chef penguin.jpg":
/*!*************************************!*\
  !*** ./src/assets/chef penguin.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8dc607ed1f4515c4c550.jpg";

/***/ }),

/***/ "./src/assets/duck.jpg":
/*!*****************************!*\
  !*** ./src/assets/duck.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03c0587081e6ccfe84bb.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNYO0FBQ0E7QUFDOUI7QUFDUDs7QUFFQTtBQUNBOztBQUVBLDhCQUE4QixxREFBTztBQUNyQyw4QkFBOEIsNkNBQUk7QUFDbEMsOEJBQThCLDhDQUFHOztBQUVqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGVuZ3VpbiBmcm9tICcuL2Fzc2V0cy9jaGVmIHBlbmd1aW4uanBnJztcbmltcG9ydCBEdWNrIGZyb20gJy4vYXNzZXRzL2R1Y2suanBnJztcbmltcG9ydCBEb2cgZnJvbSAnLi9hc3NldHMvYWtpdGEuanBnJztcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGFjdHMoKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIC8vIGNsZWFyIHRoZSBjaGlsZCBub2Rlc1xuICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbihbXSk7XG5cbiAgbGV0IGQxID0gY3JlYXRlRGl2KFwiQ29yZXlcIiwgUGVuZ3VpbiwgXCJDaGVmXCIsIFwiMTExLTEyMy00NTZcIiwgXCJwZW5ndWluQHBlbmd1aW4uY29tXCIpXG4gIGxldCBkMiA9IGNyZWF0ZURpdihcIkdvb3NlXCIsIER1Y2ssIFwiQXNzaXN0YW50XCIsIFwiMTExLTEyMy00NTdcIiwgXCJnb29zZUBwZW5ndWluLmNvbVwiKVxuICBsZXQgZDMgPSBjcmVhdGVEaXYoXCJCZWxsYVwiLCBEb2csIFwiVGFzdGUgVGVzdGVyXCIsIFwiMTExLTEyMy00NThcIiwgXCJiZWxsYUBwZW5ndWluLmNvbVwiKVxuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZDEpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGQyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChkMyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpdihuYW1lLCBpbWFnZSwgcm9sZSwgbnVtYmVyLCBlbWFpbCkge1xuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTmFtZSA9IFwiY29udGFjdFwiO1xuICBcbiAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoMi5jbGFzc05hbWUgPSBcIm5hbWVcIjtcbiAgaDIuaW5uZXJUZXh0ID0gbmFtZTsgXG5cbiAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcuc3JjID0gaW1hZ2U7XG4gIGltZy5jbGFzc05hbWUgPSBcImltYWdlXCI7XG5cbiAgbGV0IHJvbGVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHJvbGVQLmNsYXNzTmFtZSA9IFwicm9sZVwiO1xuICByb2xlUC5pbm5lclRleHQgPSByb2xlO1xuXG5cbiAgbGV0IG51bVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbnVtUC5jbGFzc05hbWUgPSBcIm51bWJlclwiO1xuICBudW1QLmlubmVyVGV4dCA9IG51bWJlcjtcblxuICBsZXQgZW1haWxQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVtYWlsUC5jbGFzc05hbWUgPSBcImVtYWlsXCI7XG4gIGVtYWlsUC5pbm5lclRleHQgPSBlbWFpbDtcblxuICBkaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgZGl2LmFwcGVuZENoaWxkKHJvbGVQKTtcbiAgZGl2LmFwcGVuZENoaWxkKG51bVApO1xuICBkaXYuYXBwZW5kQ2hpbGQoZW1haWxQKTtcblxuICByZXR1cm4gZGl2O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9