/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/landing/landing.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/landing/landing.js":
/*!********************************!*\
  !*** ./src/landing/landing.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function landingHtml() {\n  // naviagator\n  const wrapperNavigation = document.createElement('div');\n  wrapperNavigation.setAttribute('class', 'navigation');\n  document.body.appendChild(wrapperNavigation);\n\n  const wrapperButtons = wrapperNavigation.cloneNode(false);\n  const wrapperLogo = document.createElement('div');\n  const logo = document.createElement('h1');\n  wrapperButtons.setAttribute('class', 'wrapperButtons');\n  wrapperLogo.setAttribute('class', 'wrapperLogo');\n  logo.setAttribute('class', 'logo');\n  logo.textContent = 'MY PISKEL';\n  wrapperLogo.append(logo);\n  wrapperNavigation.append(wrapperLogo);\n  wrapperNavigation.append(wrapperButtons);\n\n  const buttonCreate = document.createElement('a');\n  const buttonLog = document.createElement('a');\n  buttonCreate.setAttribute('class', 'button create');\n  buttonCreate.setAttribute('href', './src/app.html');\n  buttonCreate.textContent = 'Create Sprite';\n  buttonLog.setAttribute('class', 'button log');\n  buttonLog.textContent = 'Sign in';\n  wrapperButtons.append(buttonCreate);\n  wrapperButtons.append(buttonLog);\n\n  // main\n  const wrapperMain = document.createElement('div');\n  wrapperMain.setAttribute('class', 'main-wrapper-landing');\n  const wrapperH1 = document.createElement('h1');\n  wrapperH1.textContent = 'My Piskel is a free online editor for animated sprites & pixel art';\n  const wrapperH2 = document.createElement('h2');\n  wrapperH2.textContent = 'Create animations in your browser.';\n  wrapperMain.append(wrapperH1);\n  wrapperMain.append(wrapperH2);\n\n  const divWrapperCreate = document.createElement('div');\n  divWrapperCreate.setAttribute('class', 'wrapper-create');\n  const aCreate = document.createElement('a');\n  aCreate.setAttribute('class', 'main-create');\n  aCreate.setAttribute('href', './src/app.html');\n  aCreate.textContent = 'Create Sprite';\n  divWrapperCreate.append(aCreate);\n  wrapperMain.append(divWrapperCreate);\n\n  const divWrapperImg = document.createElement('div');\n  divWrapperImg.setAttribute('class', 'wrapper-img');\n\n  const imgForOneImg = document.createElement('img');\n  const imgForTwoImg = document.createElement('img');\n  imgForOneImg.setAttribute('src', './src/image/view1.png');\n  imgForOneImg.setAttribute('class', 'one-view');\n  imgForTwoImg.setAttribute('src', './src/image/view2.png');\n  imgForTwoImg.setAttribute('class', 'two-view');\n\n  divWrapperImg.append(imgForOneImg);\n  divWrapperImg.append(imgForTwoImg);\n  wrapperMain.append(divWrapperImg);\n\n  const wrapperFunctions = document.createElement('div');\n  wrapperFunctions.setAttribute('class', 'wrapper-functions');\n\n  // first feat\n  const oneFunction = document.createElement('div');\n  oneFunction.setAttribute('class', 'function');\n  const oneimg = document.createElement('img');\n  const onewrapper = document.createElement('div');\n  oneimg.setAttribute('class', 'one-img');\n  oneimg.setAttribute('src', './src/image/feature-live-preview.gif');\n  onewrapper.setAttribute('class', 'one-wrapper');\n  const oneH4 = document.createElement('h2');\n  const oneP = document.createElement('p');\n  oneH4.textContent = 'Live preview';\n  oneP.textContent = 'Check a preview of your animation in real time as you draw. Adjust the frame delay on the fly.';\n\n  // second feat\n  const twoFunction = document.createElement('div');\n  twoFunction.setAttribute('class', 'function');\n  const twoimg = document.createElement('img');\n  const twowrapper = document.createElement('div');\n  twoimg.setAttribute('class', 'two-img');\n  twoimg.setAttribute('src', './src/image/Megaman moving.gif');\n  twowrapper.setAttribute('class', 'two-wrapper');\n  const twoH4 = document.createElement('h2');\n  const twoP = document.createElement('p');\n  twoH4.textContent = 'Export to GIF, aPNG...';\n  twoP.textContent = 'Several export modes supported. Animated GIFs or aPNG.';\n\n  // three feat\n  const threeFunction = document.createElement('div');\n  threeFunction.setAttribute('class', 'function');\n  const threeimg = document.createElement('img');\n  const threewrapper = document.createElement('div');\n  threeimg.setAttribute('class', 'three-img');\n  threeimg.setAttribute('src', './src/image/Panda.gif');\n  threewrapper.setAttribute('class', 'three-wrapper');\n  const threeH4 = document.createElement('h2');\n  const threeP = document.createElement('p');\n  threeH4.textContent = 'Use of a convenient interface';\n  threeP.textContent = 'Any work with colors, frames, tools etc..';\n\n  // four feat\n  const fourFunction = document.createElement('div');\n  fourFunction.setAttribute('class', 'function');\n  const fourimg = document.createElement('img');\n  const fourwrapper = document.createElement('div');\n  fourimg.setAttribute('class', 'four-img');\n  fourimg.setAttribute('src', './src/image/llama.gif');\n  fourwrapper.setAttribute('class', 'four-wrapper');\n  const fourH4 = document.createElement('h2');\n  const fourP = document.createElement('p');\n  fourH4.textContent = 'Live preview';\n  fourP.textContent = 'Check a preview of your animation in real time as you draw. Adjust the frame delay on the fly.';\n\n  onewrapper.append(oneH4);\n  onewrapper.append(oneP);\n  oneFunction.append(oneimg);\n  oneFunction.append(onewrapper);\n\n  twowrapper.append(twoH4);\n  twowrapper.append(twoP);\n  twoFunction.append(twoimg);\n  twoFunction.append(twowrapper);\n\n  threewrapper.append(threeH4);\n  threewrapper.append(threeP);\n  threeFunction.append(threeimg);\n  threeFunction.append(threewrapper);\n\n  fourwrapper.append(fourH4);\n  fourwrapper.append(fourP);\n  fourFunction.append(fourimg);\n  fourFunction.append(fourwrapper);\n\n  wrapperFunctions.append(oneFunction);\n  wrapperFunctions.append(twoFunction);\n  wrapperFunctions.append(threeFunction);\n  wrapperFunctions.append(fourFunction);\n\n  wrapperMain.append(wrapperFunctions);\n  document.body.appendChild(wrapperMain);\n\n  // footer\n  const footer = document.createElement('div');\n  footer.setAttribute('class', 'footer');\n  document.body.appendChild(footer);\n\n  const footerItems = document.createElement('div');\n  footerItems.setAttribute('class', 'footerItems');\n\n  const itemGit = document.createElement('div');\n  itemGit.setAttribute('class', 'github');\n\n  const imgGit = document.createElement('img');\n  const spanGit = document.createElement('span');\n  const aGit = document.createElement('a');\n  aGit.setAttribute('href', 'https://github.com/mrINEX');\n  imgGit.setAttribute('src', './src/image/github-logo.png');\n  aGit.textContent = 'GitHub';\n\n  itemGit.append(imgGit);\n  itemGit.append(spanGit);\n  spanGit.append(aGit);\n  footerItems.append(itemGit);\n  footer.append(footerItems);\n  return 'done';\n}\nlandingHtml();\n\nmodule.exports = {\n  landingHtml,\n}\n\n//# sourceURL=webpack:///./src/landing/landing.js?");

/***/ })

/******/ });