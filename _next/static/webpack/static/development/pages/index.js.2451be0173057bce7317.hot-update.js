webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/info */ "./components/info.js");


var _jsxFileName = "/Users/grant.custer/Sites/constraint-systems/diptych/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


var fs = 16;
var lh = 1.5;
var rlh = fs * lh; // measured

var cr = 8.4 / 21;
var ch = cr * rlh;
var mfs = 14;
var mrlh = mfs * lh;

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  // from https://codepen.io/peterhry/pen/AGIEa
  // modified to respect line breaks
  var ogx = x;
  var ogy = y;
  var paragraphs = text.split('\n');
  var height = 0;

  for (var p = 0; p < paragraphs.length; p++) {
    var _text = paragraphs[p];

    var words = _text.split(' '),
        line = '',
        lineCount = 0,
        i,
        test,
        metrics;

    for (i = 0; i < words.length; i++) {
      test = words[i];
      metrics = context.measureText(test);

      while (metrics.width >= maxWidth) {
        // Determine how much of the word will fit
        test = test.substring(0, test.length - 1);
        metrics = context.measureText(test);
      }

      if (words[i] != test) {
        words.splice(i + 1, 0, words[i].substr(test.length));
        words[i] = test;
      }

      test = line + words[i] + ' ';
      metrics = context.measureText(test);

      if (metrics.width >= maxWidth && i > 0) {
        context.fillText(line, x, y);
        line = words[i] + ' ';
        y += lineHeight;
        lineCount++;
      } else {
        line = test;
      }
    }

    context.fillText(line, x, y);
    y += lineHeight;
    height += lineHeight;
  } // context.fillStyle = 'red';
  // context.fillRect(ogx, ogy, maxWidth, height);


  return height;
}

var images = [['beach.jpg', 'by José Duarte', 'https://unsplash.com/photos/DuholBfUUCY'], // [
//   'illustration.jpg',
//   'by Rockwell Kent',
//   'https://www.apollo-magazine.com/herman-melville-moby-dick-artists-illustrators/',
// ],
['peck.jpg', 'from Moby Dick (1956 film)', 'https://en.wikipedia.org/wiki/Moby_Dick_(1956_film)'], ['whale-jump.jpg', 'by Thomas Kelley', 'https://unsplash.com/photos/t20pc32VbrU'], ['whale-tail.jpg', 'by Iswanto Arif', 'https://unsplash.com/photos/VziuvwpGatM']];
var plain_text = "CHAPTER 1. Loomings.\n\nCall me Ishmael. Some years ago \u2014 never mind how long precisely \u2014 having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people\u2019s hats off \u2014 then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball.  With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.\n\nThere now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs \u2014 commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.";
var short_text = "CHAPTER 1. Loomings.\n\nCall me Ishmael. Some years ago \u2014 never mind how long precisely \u2014 having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation.";

var Home = function Home(img) {
  var _ref;

  var rref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var targetref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var wwref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var containerref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var readoutref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var tref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var imgref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var dref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var textarearef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(plain_text),
      text = _useState[0],
      setText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      help = _useState2[0],
      setHelp = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('default'),
      mode = _useState3[0],
      setMode = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(images[Math.floor(Math.random() * (images.length - 1))]),
      default_image = _useState4[0];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      kickoff = _useState5[0],
      setKickoff = _useState5[1];

  function respond() {
    var dpr = window.devicePixelRatio || 1;
    var aw = tref.current.offsetWidth * dpr;
    var ah = tref.current.offsetHeight * dpr;
    var area = aw * ah;
    var img = imgref.current;
    var iw = img.width;
    var ih = img.height;
    var ratio = iw / ih;
    var sw = Math.floor(Math.sqrt(area * ratio));
    var sh = Math.floor(area / sw);
    var source = document.createElement('canvas');
    source.width = sw * dpr;
    source.height = sh * dpr;
    var stx = source.getContext('2d');
    stx.drawImage(img, 0, 0, sw, sh);
    var pixels = stx.getImageData(0, 0, sw, sh);
    var r = rref.current;
    var rtx = r.getContext('2d');
    var new_pixels = rtx.createImageData(aw, ah);
    new_pixels.data.set(pixels.data);
    r.width = wwref.current * dpr;
    r.height = ah + rlh * 2;
    r.style.width = aw / dpr + 'px';
    r.style.height = ah / dpr + 'px';
    rtx.fillStyle = 'white';
    rtx.fillRect(0, 0, r.width, r.height);
    rtx.putImageData(new_pixels, ch * 2, rlh); // rtx.imageSmoothingEnabled = false;

    rtx.font = "".concat(fs, "px/").concat(lh, " custom");
    rtx.textBaseline = 'middle';
    rtx.fillStyle = 'black';
    var height = wrapText(rtx, text, r.width - ch * 2 - aw, rlh + rlh / 2 + 2, aw + ch / 2, fs * lh);
    readoutref.current.innerHTML = "width: ".concat(wwref.current, "  image: ").concat(iw, "x").concat(ih, " (").concat(Math.round(iw / ih * 1000) / 1000, ")  source: ").concat(sw, "x").concat(sh, "  target: ").concat(aw, "x").concat(ah, " (").concat(Math.round(aw / ah * 1000) / 1000, ")"); // {
    //   let d = dref.current;
    //   d.width = aw * 2;
    //   d.height = ah * 2;
    //   d.style.width = aw + 'px';
    //   d.style.height = ah + 'px';
    //   let dtx = d.getContext('2d');
    //   dtx.font = `${fs}px/${lh} custom`;
    //   dtx.textBaseline = 'middle';
    //   dtx.scale(2, 2);
    //   dtx.fillStyle = 'white';
    //   dtx.fillRect(0, 0, aw, ah);
    //   dtx.fillStyle = 'black';
    //   let height = wrapText(
    //     dtx,
    //     text,
    //     0,
    //     rlh + rlh / 2 + 2,
    //     aw + ch / 2,
    //     fs * lh
    //   );
    //   d.style.display = 'none';
    //   rtx.fillStyle = 'white';
    //   rtx.fillRect(0, 0, aw, ah);
    //   rtx.drawImage(d, 0, 0, aw * 2, ah * 2, 0, 0, aw, ah);
    // }
  }

  function initImage(src, callback) {
    var img = new Image();

    img.onload = function () {
      imgref.current = img;
      respond();
    };

    img.src = src;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setSize(window.innerWidth);
    initImage(default_image[0]);
  }, [kickoff]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (window.innerWidth < 600) {
      setText(short_text);
    }

    setTimeout(function () {
      setKickoff(true);
    }, 0);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (imgref.current !== null) respond();
  }, [text]);

  function keyAction(e) {
    var key = e.key.toLowerCase();
    var shift = e.shiftKey;
    var inc = 1;
    if (shift) inc = 10;

    if (key === 'h' || key === 'arrowleft') {
      var next = wwref.current - inc;
      if (next < 10) next = 10;
      setSize(next);
      respond();
    } else if (key === 'l' || key === 'arrowright') {
      var _next = wwref.current + inc;

      setSize(_next);
      respond();
    } else if (key === 'o') {
      var handleChange = function handleChange(e) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(this.files), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (item.type.indexOf('image') < 0) {
              continue;
            }

            var src = URL.createObjectURL(item);
            initImage(src);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.removeEventListener('change', handleChange);
      };

      var input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.dispatchEvent(new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window
      }));
      input.addEventListener('change', handleChange);
    } else if (key === 'w') {
      var link = document.createElement('a');

      var revokeURL = function revokeURL() {
        var me = this;
        requestAnimationFrame(function () {
          URL.revokeObjectURL(me.href);
          me.href = null;
        });
        this.removeEventListener('click', revokeURL);
      };

      rref.current.toBlob(function (blob) {
        link.setAttribute('download', "diptych-".concat(new Date().toISOString().slice(0, -4).replace(/-/g, '').replace(/:/g, '').replace(/_/g, '').replace(/\./g, ''), "Z.png"));
        link.setAttribute('href', URL.createObjectURL(blob));
        link.addEventListener('click', revokeURL);
        link.dispatchEvent(new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window
        }));
      });
    } else if (key === 'e') {
      textarearef.current.focus();
      var t = textarearef.current;
      t.selectionStart = t.selectionEnd = t.value.length;
      e.preventDefault();
    } else if (key === '?') {
      setHelp(function (prevState) {
        return !prevState;
      });
    }
  }

  function clickKey(key) {
    keyAction({
      key: key
    });
  }

  function setSize(width) {
    wwref.current = width;
    containerref.current.style.width = width + 'px';
  }

  function onPaste(e) {
    e.preventDefault();
    e.stopPropagation();
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(e.clipboardData.items), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;

        if (item.type.indexOf('image') < 0) {
          continue;
        }

        var file = item.getAsFile();
        var src = URL.createObjectURL(file);
        initImage(src);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  function onDrag(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    var file = e.dataTransfer.files[0];
    var filename = file.path ? file.path : file.name ? file.name : '';
    var src = URL.createObjectURL(file);
    initImage(src);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    window.addEventListener('keydown', keyAction);
    window.addEventListener('paste', onPaste, false);
    window.addEventListener('dragover', onDrag, false);
    window.addEventListener('drop', onDrop, false);
    return function () {
      window.removeEventListener('keydown', keyAction);
      window.removeEventListener('paste', onPaste);
      window.removeEventListener('dragover', onDrag, false);
      window.removeEventListener('drop', onDrop, false);
    };
  }, [text]);
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, __jsx("div", {
    ref: containerref,
    style: {
      display: 'grid',
      // gridTemplateColumns: `repeat(2, ${68 * ch}px)`,
      gridTemplateColumns: "repeat(2, 1fr)",
      paddingLeft: '2ch',
      paddingRight: '2ch',
      paddingTop: rlh,
      paddingBottom: rlh,
      gridColumnGap: '3ch',
      // width: ch * (68 * 2 + 2 * 2 + 3),
      // background: 'green',
      background: 'white'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, __jsx("canvas", {
    style: (_ref = {
      position: 'absolute'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "position", 'absolute'), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "left", 0), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "top", 0), _ref),
    ref: rref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }), __jsx("canvas", {
    ref: dref,
    style: {
      position: 'fixed',
      left: 0,
      top: 0
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'relative'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, __jsx("div", {
    ref: tref,
    style: {
      position: 'relative',
      whiteSpace: 'pre-wrap',
      pointerEvents: 'none',
      background: 'white' // background: 'rgba(0,255,0,0.2)',

    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }, text, "\u200B"), __jsx("textarea", {
    ref: textarearef,
    style: {
      display: 'block',
      fontSize: 'inherit',
      fontFamily: 'inherit',
      lineHeight: 'inherit',
      border: 'none',
      padding: 0,
      margin: 0,
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      resize: 'none'
    },
    onPaste: function onPaste(e) {
      e.stopPropagation();
    },
    onFocus: function onFocus(e) {
      setMode('editing');
    },
    onBlur: function onBlur(e) {
      setMode('default');
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Escape') e.target.blur();
      if (e.shiftKey && e.key === 'Enter') e.target.blur();
      e.stopPropagation();
    },
    onChange: function onChange(e) {
      setText(e.target.value);
    },
    value: text,
    spellCheck: "false",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }))), __jsx("div", {
    style: {
      paddingLeft: '2ch',
      paddingRight: '2ch',
      paddingTop: rlh / 2,
      paddingBottom: rlh / 2,
      whiteSpace: 'pre-wrap',
      fontFamily: 'customono',
      fontSize: mfs,
      lineHeight: lh
    },
    ref: readoutref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'fixed',
      right: '2ch',
      bottom: '2ch',
      paddingLeft: '1ch',
      paddingRight: '1ch',
      paddingTop: rlh / 2,
      paddingBottom: rlh / 2
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }), __jsx("div", {
    style: {
      fontFamily: 'customono',
      fontSize: mfs,
      lineHeight: lh
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([["1263658118", [fs, lh, rlh]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474
    },
    __self: this
  }, __jsx(_components_info__WEBPACK_IMPORTED_MODULE_4__["default"], {
    rlh: mrlh,
    help: help,
    mode: mode,
    clickKey: clickKey,
    image_info: default_image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1263658118",
    dynamic: [fs, lh, rlh],
    __self: this
  }, "@font-face{font-family:'custom';src:url('/IBMPlexSans-Regular.woff2') format('woff2'), url('/IBMPlexSans-Regular.woff') format('woff');}@font-face{font-family:'customono';src:url('/IBMPlexMono-Regular.woff2') format('woff2'), url('/IBMPlexMono-Regular.woff') format('woff');}*{box-sizing:border-box;}html{font-family:'custom',sans-serif;font-size:".concat(fs, "px;line-height:").concat(lh, ";background:#ddd;}body{margin:0;padding:0;}canvas{display:block;}h1,h2,h3,h4,h5,h6{margin:0;font-size:inherit;line-height:inherit;font-weight:normal;}p{margin:0;margin-top:").concat(rlh, "px;}img{display:block;width:100%;}a{color:inherit;}textarea{background:white;}textarea:focus{background:#efefef;outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFudC5jdXN0ZXIvU2l0ZXMvY29uc3RyYWludC1zeXN0ZW1zL2RpcHR5Y2gvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbWV5QixBQUdnQyxBQUtHLEFBS0YsQUFHVyxBQU14QixBQUlLLEFBUUwsQUFNQSxBQUlLLEFBSUEsQUFHRyxBQUdFLFNBL0JULEFBWVEsQUFNd0IsS0FkNUMsQUFrQmEsQUFJYixHQUdBLEVBNUJBLEFBK0JlLEVBbERvQyxDQVNuRCxFQUptRCxDQW9DbkQsRUFWc0IsS0FuQnFCLEFBdUMzQyxlQW5CcUIsSUFLckIsZUFKQSxPQXBCMkMseUNBQ3pCLFVBYmxCLEdBS0EsR0FTQSIsImZpbGUiOiIvVXNlcnMvZ3JhbnQuY3VzdGVyL1NpdGVzL2NvbnN0cmFpbnQtc3lzdGVtcy9kaXB0eWNoL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5mbyBmcm9tICcuLi9jb21wb25lbnRzL2luZm8nO1xuXG5sZXQgZnMgPSAxNjtcbmxldCBsaCA9IDEuNTtcbmxldCBybGggPSBmcyAqIGxoO1xuLy8gbWVhc3VyZWRcbmxldCBjciA9IDguNCAvIDIxO1xubGV0IGNoID0gY3IgKiBybGg7XG5cbmxldCBtZnMgPSAxNDtcbmxldCBtcmxoID0gbWZzICogbGg7XG5cbmZ1bmN0aW9uIHdyYXBUZXh0KGNvbnRleHQsIHRleHQsIHgsIHksIG1heFdpZHRoLCBsaW5lSGVpZ2h0KSB7XG4gIC8vIGZyb20gaHR0cHM6Ly9jb2RlcGVuLmlvL3BldGVyaHJ5L3Blbi9BR0lFYVxuICAvLyBtb2RpZmllZCB0byByZXNwZWN0IGxpbmUgYnJlYWtzXG4gIGxldCBvZ3ggPSB4O1xuICBsZXQgb2d5ID0geTtcbiAgbGV0IHBhcmFncmFwaHMgPSB0ZXh0LnNwbGl0KCdcXG4nKTtcbiAgbGV0IGhlaWdodCA9IDA7XG4gIGZvciAobGV0IHAgPSAwOyBwIDwgcGFyYWdyYXBocy5sZW5ndGg7IHArKykge1xuICAgIGxldCB0ZXh0ID0gcGFyYWdyYXBoc1twXTtcbiAgICB2YXIgd29yZHMgPSB0ZXh0LnNwbGl0KCcgJyksXG4gICAgICBsaW5lID0gJycsXG4gICAgICBsaW5lQ291bnQgPSAwLFxuICAgICAgaSxcbiAgICAgIHRlc3QsXG4gICAgICBtZXRyaWNzO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0ZXN0ID0gd29yZHNbaV07XG4gICAgICBtZXRyaWNzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXN0KTtcbiAgICAgIHdoaWxlIChtZXRyaWNzLndpZHRoID49IG1heFdpZHRoKSB7XG4gICAgICAgIC8vIERldGVybWluZSBob3cgbXVjaCBvZiB0aGUgd29yZCB3aWxsIGZpdFxuICAgICAgICB0ZXN0ID0gdGVzdC5zdWJzdHJpbmcoMCwgdGVzdC5sZW5ndGggLSAxKTtcbiAgICAgICAgbWV0cmljcyA9IGNvbnRleHQubWVhc3VyZVRleHQodGVzdCk7XG4gICAgICB9XG4gICAgICBpZiAod29yZHNbaV0gIT0gdGVzdCkge1xuICAgICAgICB3b3Jkcy5zcGxpY2UoaSArIDEsIDAsIHdvcmRzW2ldLnN1YnN0cih0ZXN0Lmxlbmd0aCkpO1xuICAgICAgICB3b3Jkc1tpXSA9IHRlc3Q7XG4gICAgICB9XG5cbiAgICAgIHRlc3QgPSBsaW5lICsgd29yZHNbaV0gKyAnICc7XG4gICAgICBtZXRyaWNzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXN0KTtcblxuICAgICAgaWYgKG1ldHJpY3Mud2lkdGggPj0gbWF4V2lkdGggJiYgaSA+IDApIHtcbiAgICAgICAgY29udGV4dC5maWxsVGV4dChsaW5lLCB4LCB5KTtcbiAgICAgICAgbGluZSA9IHdvcmRzW2ldICsgJyAnO1xuICAgICAgICB5ICs9IGxpbmVIZWlnaHQ7XG4gICAgICAgIGxpbmVDb3VudCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGluZSA9IHRlc3Q7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnRleHQuZmlsbFRleHQobGluZSwgeCwgeSk7XG4gICAgeSArPSBsaW5lSGVpZ2h0O1xuICAgIGhlaWdodCArPSBsaW5lSGVpZ2h0O1xuICB9XG4gIC8vIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JlZCc7XG4gIC8vIGNvbnRleHQuZmlsbFJlY3Qob2d4LCBvZ3ksIG1heFdpZHRoLCBoZWlnaHQpO1xuICByZXR1cm4gaGVpZ2h0O1xufVxuXG5sZXQgaW1hZ2VzID0gW1xuICBbJ2JlYWNoLmpwZycsICdieSBKb3PDqSBEdWFydGUnLCAnaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL0R1aG9sQmZVVUNZJ10sXG4gIC8vIFtcbiAgLy8gICAnaWxsdXN0cmF0aW9uLmpwZycsXG4gIC8vICAgJ2J5IFJvY2t3ZWxsIEtlbnQnLFxuICAvLyAgICdodHRwczovL3d3dy5hcG9sbG8tbWFnYXppbmUuY29tL2hlcm1hbi1tZWx2aWxsZS1tb2J5LWRpY2stYXJ0aXN0cy1pbGx1c3RyYXRvcnMvJyxcbiAgLy8gXSxcbiAgW1xuICAgICdwZWNrLmpwZycsXG4gICAgJ2Zyb20gTW9ieSBEaWNrICgxOTU2IGZpbG0pJyxcbiAgICAnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTW9ieV9EaWNrXygxOTU2X2ZpbG0pJyxcbiAgXSxcbiAgW1xuICAgICd3aGFsZS1qdW1wLmpwZycsXG4gICAgJ2J5IFRob21hcyBLZWxsZXknLFxuICAgICdodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvdDIwcGMzMlZiclUnLFxuICBdLFxuICBbXG4gICAgJ3doYWxlLXRhaWwuanBnJyxcbiAgICAnYnkgSXN3YW50byBBcmlmJyxcbiAgICAnaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL1Z6aXV2d3BHYXRNJyxcbiAgXSxcbl07XG5sZXQgcGxhaW5fdGV4dCA9IGBDSEFQVEVSIDEuIExvb21pbmdzLlxuXG5DYWxsIG1lIElzaG1hZWwuIFNvbWUgeWVhcnMgYWdvIOKAlCBuZXZlciBtaW5kIGhvdyBsb25nIHByZWNpc2VseSDigJQgaGF2aW5nIGxpdHRsZSBvciBubyBtb25leSBpbiBteSBwdXJzZSwgYW5kIG5vdGhpbmcgcGFydGljdWxhciB0byBpbnRlcmVzdCBtZSBvbiBzaG9yZSwgSSB0aG91Z2h0IEkgd291bGQgc2FpbCBhYm91dCBhIGxpdHRsZSBhbmQgc2VlIHRoZSB3YXRlcnkgcGFydCBvZiB0aGUgd29ybGQuIEl0IGlzIGEgd2F5IEkgaGF2ZSBvZiBkcml2aW5nIG9mZiB0aGUgc3BsZWVuIGFuZCByZWd1bGF0aW5nIHRoZSBjaXJjdWxhdGlvbi4gV2hlbmV2ZXIgSSBmaW5kIG15c2VsZiBncm93aW5nIGdyaW0gYWJvdXQgdGhlIG1vdXRoOyB3aGVuZXZlciBpdCBpcyBhIGRhbXAsIGRyaXp6bHkgTm92ZW1iZXIgaW4gbXkgc291bDsgd2hlbmV2ZXIgSSBmaW5kIG15c2VsZiBpbnZvbHVudGFyaWx5IHBhdXNpbmcgYmVmb3JlIGNvZmZpbiB3YXJlaG91c2VzLCBhbmQgYnJpbmdpbmcgdXAgdGhlIHJlYXIgb2YgZXZlcnkgZnVuZXJhbCBJIG1lZXQ7IGFuZCBlc3BlY2lhbGx5IHdoZW5ldmVyIG15IGh5cG9zIGdldCBzdWNoIGFuIHVwcGVyIGhhbmQgb2YgbWUsIHRoYXQgaXQgcmVxdWlyZXMgYSBzdHJvbmcgbW9yYWwgcHJpbmNpcGxlIHRvIHByZXZlbnQgbWUgZnJvbSBkZWxpYmVyYXRlbHkgc3RlcHBpbmcgaW50byB0aGUgc3RyZWV0LCBhbmQgbWV0aG9kaWNhbGx5IGtub2NraW5nIHBlb3BsZeKAmXMgaGF0cyBvZmYg4oCUIHRoZW4sIEkgYWNjb3VudCBpdCBoaWdoIHRpbWUgdG8gZ2V0IHRvIHNlYSBhcyBzb29uIGFzIEkgY2FuLiBUaGlzIGlzIG15IHN1YnN0aXR1dGUgZm9yIHBpc3RvbCBhbmQgYmFsbC4gIFdpdGggYSBwaGlsb3NvcGhpY2FsIGZsb3VyaXNoIENhdG8gdGhyb3dzIGhpbXNlbGYgdXBvbiBoaXMgc3dvcmQ7IEkgcXVpZXRseSB0YWtlIHRvIHRoZSBzaGlwLiBUaGVyZSBpcyBub3RoaW5nIHN1cnByaXNpbmcgaW4gdGhpcy4gSWYgdGhleSBidXQga25ldyBpdCwgYWxtb3N0IGFsbCBtZW4gaW4gdGhlaXIgZGVncmVlLCBzb21lIHRpbWUgb3Igb3RoZXIsIGNoZXJpc2ggdmVyeSBuZWFybHkgdGhlIHNhbWUgZmVlbGluZ3MgdG93YXJkcyB0aGUgb2NlYW4gd2l0aCBtZS5cblxuVGhlcmUgbm93IGlzIHlvdXIgaW5zdWxhciBjaXR5IG9mIHRoZSBNYW5oYXR0b2VzLCBiZWx0ZWQgcm91bmQgYnkgd2hhcnZlcyBhcyBJbmRpYW4gaXNsZXMgYnkgY29yYWwgcmVlZnMg4oCUIGNvbW1lcmNlIHN1cnJvdW5kcyBpdCB3aXRoIGhlciBzdXJmLiBSaWdodCBhbmQgbGVmdCwgdGhlIHN0cmVldHMgdGFrZSB5b3Ugd2F0ZXJ3YXJkLiBJdHMgZXh0cmVtZSBkb3dudG93biBpcyB0aGUgYmF0dGVyeSwgd2hlcmUgdGhhdCBub2JsZSBtb2xlIGlzIHdhc2hlZCBieSB3YXZlcywgYW5kIGNvb2xlZCBieSBicmVlemVzLCB3aGljaCBhIGZldyBob3VycyBwcmV2aW91cyB3ZXJlIG91dCBvZiBzaWdodCBvZiBsYW5kLiBMb29rIGF0IHRoZSBjcm93ZHMgb2Ygd2F0ZXItZ2F6ZXJzIHRoZXJlLmA7XG5cbmxldCBzaG9ydF90ZXh0ID0gYENIQVBURVIgMS4gTG9vbWluZ3MuXG5cbkNhbGwgbWUgSXNobWFlbC4gU29tZSB5ZWFycyBhZ28g4oCUIG5ldmVyIG1pbmQgaG93IGxvbmcgcHJlY2lzZWx5IOKAlCBoYXZpbmcgbGl0dGxlIG9yIG5vIG1vbmV5IGluIG15IHB1cnNlLCBhbmQgbm90aGluZyBwYXJ0aWN1bGFyIHRvIGludGVyZXN0IG1lIG9uIHNob3JlLCBJIHRob3VnaHQgSSB3b3VsZCBzYWlsIGFib3V0IGEgbGl0dGxlIGFuZCBzZWUgdGhlIHdhdGVyeSBwYXJ0IG9mIHRoZSB3b3JsZC4gSXQgaXMgYSB3YXkgSSBoYXZlIG9mIGRyaXZpbmcgb2ZmIHRoZSBzcGxlZW4gYW5kIHJlZ3VsYXRpbmcgdGhlIGNpcmN1bGF0aW9uLmA7XG5cbmNvbnN0IEhvbWUgPSBpbWcgPT4ge1xuICBsZXQgcnJlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHRhcmdldHJlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHd3cmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgY29udGFpbmVycmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgcmVhZG91dHJlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IHRyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBpbWdyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBkcmVmID0gdXNlUmVmKG51bGwpO1xuICBsZXQgdGV4dGFyZWFyZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShwbGFpbl90ZXh0KTtcbiAgbGV0IFtoZWxwLCBzZXRIZWxwXSA9IHVzZVN0YXRlKHRydWUpO1xuICBsZXQgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGUoJ2RlZmF1bHQnKTtcbiAgbGV0IFtkZWZhdWx0X2ltYWdlXSA9IHVzZVN0YXRlKFxuICAgIGltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaW1hZ2VzLmxlbmd0aCAtIDEpKV1cbiAgKTtcbiAgbGV0IFtraWNrb2ZmLCBzZXRLaWNrb2ZmXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBmdW5jdGlvbiByZXNwb25kKCkge1xuICAgIGxldCBkcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuXG4gICAgbGV0IGF3ID0gdHJlZi5jdXJyZW50Lm9mZnNldFdpZHRoICogZHByO1xuICAgIGxldCBhaCA9IHRyZWYuY3VycmVudC5vZmZzZXRIZWlnaHQgKiBkcHI7XG4gICAgbGV0IGFyZWEgPSBhdyAqIGFoO1xuXG4gICAgbGV0IGltZyA9IGltZ3JlZi5jdXJyZW50O1xuICAgIGxldCBpdyA9IGltZy53aWR0aDtcbiAgICBsZXQgaWggPSBpbWcuaGVpZ2h0O1xuXG4gICAgbGV0IHJhdGlvID0gaXcgLyBpaDtcbiAgICBsZXQgc3cgPSBNYXRoLmZsb29yKE1hdGguc3FydChhcmVhICogcmF0aW8pKTtcbiAgICBsZXQgc2ggPSBNYXRoLmZsb29yKGFyZWEgLyBzdyk7XG5cbiAgICBsZXQgc291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgc291cmNlLndpZHRoID0gc3cgKiBkcHI7XG4gICAgc291cmNlLmhlaWdodCA9IHNoICogZHByO1xuICAgIGxldCBzdHggPSBzb3VyY2UuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBzdHguZHJhd0ltYWdlKGltZywgMCwgMCwgc3csIHNoKTtcblxuICAgIGxldCBwaXhlbHMgPSBzdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHN3LCBzaCk7XG5cbiAgICBsZXQgciA9IHJyZWYuY3VycmVudDtcbiAgICBsZXQgcnR4ID0gci5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGxldCBuZXdfcGl4ZWxzID0gcnR4LmNyZWF0ZUltYWdlRGF0YShhdywgYWgpO1xuICAgIG5ld19waXhlbHMuZGF0YS5zZXQocGl4ZWxzLmRhdGEpO1xuICAgIHIud2lkdGggPSB3d3JlZi5jdXJyZW50ICogZHByO1xuICAgIHIuaGVpZ2h0ID0gYWggKyBybGggKiAyO1xuICAgIHIuc3R5bGUud2lkdGggPSBhdyAvIGRwciArICdweCc7XG4gICAgci5zdHlsZS5oZWlnaHQgPSBhaCAvIGRwciArICdweCc7XG5cbiAgICBydHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICBydHguZmlsbFJlY3QoMCwgMCwgci53aWR0aCwgci5oZWlnaHQpO1xuICAgIHJ0eC5wdXRJbWFnZURhdGEobmV3X3BpeGVscywgY2ggKiAyLCBybGgpO1xuXG4gICAgLy8gcnR4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgcnR4LmZvbnQgPSBgJHtmc31weC8ke2xofSBjdXN0b21gO1xuICAgIHJ0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBydHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBsZXQgaGVpZ2h0ID0gd3JhcFRleHQoXG4gICAgICBydHgsXG4gICAgICB0ZXh0LFxuICAgICAgci53aWR0aCAtIGNoICogMiAtIGF3LFxuICAgICAgcmxoICsgcmxoIC8gMiArIDIsXG4gICAgICBhdyArIGNoIC8gMixcbiAgICAgIGZzICogbGhcbiAgICApO1xuXG4gICAgcmVhZG91dHJlZi5jdXJyZW50LmlubmVySFRNTCA9IGB3aWR0aDogJHtcbiAgICAgIHd3cmVmLmN1cnJlbnRcbiAgICB9ICBpbWFnZTogJHtpd314JHtpaH0gKCR7TWF0aC5yb3VuZCgoaXcgLyBpaCkgKiAxMDAwKSAvXG4gICAgICAxMDAwfSkgIHNvdXJjZTogJHtzd314JHtzaH0gIHRhcmdldDogJHthd314JHthaH0gKCR7TWF0aC5yb3VuZChcbiAgICAgIChhdyAvIGFoKSAqIDEwMDBcbiAgICApIC8gMTAwMH0pYDtcblxuICAgIC8vIHtcbiAgICAvLyAgIGxldCBkID0gZHJlZi5jdXJyZW50O1xuICAgIC8vICAgZC53aWR0aCA9IGF3ICogMjtcbiAgICAvLyAgIGQuaGVpZ2h0ID0gYWggKiAyO1xuICAgIC8vICAgZC5zdHlsZS53aWR0aCA9IGF3ICsgJ3B4JztcbiAgICAvLyAgIGQuc3R5bGUuaGVpZ2h0ID0gYWggKyAncHgnO1xuICAgIC8vICAgbGV0IGR0eCA9IGQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAvLyAgIGR0eC5mb250ID0gYCR7ZnN9cHgvJHtsaH0gY3VzdG9tYDtcbiAgICAvLyAgIGR0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICAvLyAgIGR0eC5zY2FsZSgyLCAyKTtcbiAgICAvLyAgIGR0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIC8vICAgZHR4LmZpbGxSZWN0KDAsIDAsIGF3LCBhaCk7XG4gICAgLy8gICBkdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAvLyAgIGxldCBoZWlnaHQgPSB3cmFwVGV4dChcbiAgICAvLyAgICAgZHR4LFxuICAgIC8vICAgICB0ZXh0LFxuICAgIC8vICAgICAwLFxuICAgIC8vICAgICBybGggKyBybGggLyAyICsgMixcbiAgICAvLyAgICAgYXcgKyBjaCAvIDIsXG4gICAgLy8gICAgIGZzICogbGhcbiAgICAvLyAgICk7XG4gICAgLy8gICBkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgLy8gICBydHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAvLyAgIHJ0eC5maWxsUmVjdCgwLCAwLCBhdywgYWgpO1xuICAgIC8vICAgcnR4LmRyYXdJbWFnZShkLCAwLCAwLCBhdyAqIDIsIGFoICogMiwgMCwgMCwgYXcsIGFoKTtcbiAgICAvLyB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0SW1hZ2Uoc3JjLCBjYWxsYmFjaykge1xuICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgaW1ncmVmLmN1cnJlbnQgPSBpbWc7XG4gICAgICByZXNwb25kKCk7XG4gICAgfTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICBpbml0SW1hZ2UoZGVmYXVsdF9pbWFnZVswXSk7XG4gIH0sIFtraWNrb2ZmXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA2MDApIHtcbiAgICAgIHNldFRleHQoc2hvcnRfdGV4dCk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0S2lja29mZih0cnVlKTtcbiAgICB9LCAwKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGltZ3JlZi5jdXJyZW50ICE9PSBudWxsKSByZXNwb25kKCk7XG4gIH0sIFt0ZXh0XSk7XG5cbiAgZnVuY3Rpb24ga2V5QWN0aW9uKGUpIHtcbiAgICBsZXQga2V5ID0gZS5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgc2hpZnQgPSBlLnNoaWZ0S2V5O1xuICAgIGxldCBpbmMgPSAxO1xuICAgIGlmIChzaGlmdCkgaW5jID0gMTA7XG4gICAgaWYgKGtleSA9PT0gJ2gnIHx8IGtleSA9PT0gJ2Fycm93bGVmdCcpIHtcbiAgICAgIGxldCBuZXh0ID0gd3dyZWYuY3VycmVudCAtIGluYztcbiAgICAgIGlmIChuZXh0IDwgMTApIG5leHQgPSAxMDtcbiAgICAgIHNldFNpemUobmV4dCk7XG4gICAgICByZXNwb25kKCk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdsJyB8fCBrZXkgPT09ICdhcnJvd3JpZ2h0Jykge1xuICAgICAgbGV0IG5leHQgPSB3d3JlZi5jdXJyZW50ICsgaW5jO1xuICAgICAgc2V0U2l6ZShuZXh0KTtcbiAgICAgIHJlc3BvbmQoKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ28nKSB7XG4gICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2ZpbGUnKTtcbiAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBNb3VzZUV2ZW50KGBjbGlja2AsIHtcbiAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgdmlldzogd2luZG93LFxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuZmlsZXMpIHtcbiAgICAgICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoaXRlbSk7XG4gICAgICAgICAgaW5pdEltYWdlKHNyYyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVDaGFuZ2UpO1xuICAgICAgfVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlQ2hhbmdlKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3cnKSB7XG4gICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICAgICAgdmFyIHJldm9rZVVSTCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChtZS5ocmVmKTtcbiAgICAgICAgICBtZS5ocmVmID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXZva2VVUkwpO1xuICAgICAgfTtcblxuICAgICAgcnJlZi5jdXJyZW50LnRvQmxvYihmdW5jdGlvbihibG9iKSB7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdkb3dubG9hZCcsXG4gICAgICAgICAgYGRpcHR5Y2gtJHtuZXcgRGF0ZSgpXG4gICAgICAgICAgICAudG9JU09TdHJpbmcoKVxuICAgICAgICAgICAgLnNsaWNlKDAsIC00KVxuICAgICAgICAgICAgLnJlcGxhY2UoLy0vZywgJycpXG4gICAgICAgICAgICAucmVwbGFjZSgvOi9nLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9fL2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJyl9Wi5wbmdgXG4gICAgICAgICk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXZva2VVUkwpO1xuICAgICAgICBsaW5rLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IE1vdXNlRXZlbnQoYGNsaWNrYCwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICB2aWV3OiB3aW5kb3csXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnZScpIHtcbiAgICAgIHRleHRhcmVhcmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIGxldCB0ID0gdGV4dGFyZWFyZWYuY3VycmVudDtcbiAgICAgIHQuc2VsZWN0aW9uU3RhcnQgPSB0LnNlbGVjdGlvbkVuZCA9IHQudmFsdWUubGVuZ3RoO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnPycpIHtcbiAgICAgIHNldEhlbHAocHJldlN0YXRlID0+IHtcbiAgICAgICAgcmV0dXJuICFwcmV2U3RhdGU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGlja0tleShrZXkpIHtcbiAgICBrZXlBY3Rpb24oeyBrZXk6IGtleSB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFNpemUod2lkdGgpIHtcbiAgICB3d3JlZi5jdXJyZW50ID0gd2lkdGg7XG4gICAgY29udGFpbmVycmVmLmN1cnJlbnQuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gIH1cblxuICBmdW5jdGlvbiBvblBhc3RlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZS5jbGlwYm9hcmREYXRhLml0ZW1zKSB7XG4gICAgICBpZiAoaXRlbS50eXBlLmluZGV4T2YoJ2ltYWdlJykgPCAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgbGV0IGZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICBpbml0SW1hZ2Uoc3JjKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyYWcoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XG4gIH1cblxuICBmdW5jdGlvbiBvbkRyb3AoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBmaWxlID0gZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF07XG4gICAgbGV0IGZpbGVuYW1lID0gZmlsZS5wYXRoID8gZmlsZS5wYXRoIDogZmlsZS5uYW1lID8gZmlsZS5uYW1lIDogJyc7XG4gICAgbGV0IHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgaW5pdEltYWdlKHNyYyk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5QWN0aW9uKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCBvblBhc3RlLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgb25EcmFnLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3AsIGZhbHNlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlBY3Rpb24pO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgb25QYXN0ZSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWcsIGZhbHNlKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgb25Ecm9wLCBmYWxzZSk7XG4gICAgfTtcbiAgfSwgW3RleHRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17Y29udGFpbmVycmVmfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgICAvLyBncmlkVGVtcGxhdGVDb2x1bW5zOiBgcmVwZWF0KDIsICR7NjggKiBjaH1weClgLFxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IGByZXBlYXQoMiwgMWZyKWAsXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6ICcyY2gnLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogJzJjaCcsXG4gICAgICAgICAgcGFkZGluZ1RvcDogcmxoLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206IHJsaCxcbiAgICAgICAgICBncmlkQ29sdW1uR2FwOiAnM2NoJyxcbiAgICAgICAgICAvLyB3aWR0aDogY2ggKiAoNjggKiAyICsgMiAqIDIgKyAzKSxcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAnZ3JlZW4nLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICByZWY9e3JyZWZ9XG4gICAgICAgIC8+XG4gICAgICAgIDxjYW52YXNcbiAgICAgICAgICByZWY9e2RyZWZ9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgLz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICByZWY9e3RyZWZ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyxcbiAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAncmdiYSgwLDI1NSwwLDAuMiknLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGV4dH3igItcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHJlZj17dGV4dGFyZWFyZWZ9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgICAgICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6ICdpbmhlcml0JyxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgIHJlc2l6ZTogJ25vbmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uUGFzdGU9e2UgPT4ge1xuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uRm9jdXM9e2UgPT4ge1xuICAgICAgICAgICAgICBzZXRNb2RlKCdlZGl0aW5nJyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25CbHVyPXtlID0+IHtcbiAgICAgICAgICAgICAgc2V0TW9kZSgnZGVmYXVsdCcpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIGUudGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkgJiYgZS5rZXkgPT09ICdFbnRlcicpIGUudGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgIHNldFRleHQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZ0xlZnQ6ICcyY2gnLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogJzJjaCcsXG4gICAgICAgICAgcGFkZGluZ1RvcDogcmxoIC8gMixcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBybGggLyAyLFxuICAgICAgICAgIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcsXG4gICAgICAgICAgZm9udEZhbWlseTogJ2N1c3RvbW9ubycsXG4gICAgICAgICAgZm9udFNpemU6IG1mcyxcbiAgICAgICAgICBsaW5lSGVpZ2h0OiBsaCxcbiAgICAgICAgfX1cbiAgICAgICAgcmVmPXtyZWFkb3V0cmVmfVxuICAgICAgLz5cblxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgIHJpZ2h0OiAnMmNoJyxcbiAgICAgICAgICBib3R0b206ICcyY2gnLFxuICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMWNoJyxcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxY2gnLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IHJsaCAvIDIsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogcmxoIC8gMixcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogJ2N1c3RvbW9ubycsIGZvbnRTaXplOiBtZnMsIGxpbmVIZWlnaHQ6IGxoIH19PlxuICAgICAgICA8SW5mb1xuICAgICAgICAgIHJsaD17bXJsaH1cbiAgICAgICAgICBoZWxwPXtoZWxwfVxuICAgICAgICAgIG1vZGU9e21vZGV9XG4gICAgICAgICAgY2xpY2tLZXk9e2NsaWNrS2V5fVxuICAgICAgICAgIGltYWdlX2luZm89e2RlZmF1bHRfaW1hZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdjdXN0b20nO1xuICAgICAgICAgIHNyYzogdXJsKCcvSUJNUGxleFNhbnMtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgIHVybCgnL0lCTVBsZXhTYW5zLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tb25vJztcbiAgICAgICAgICBzcmM6IHVybCgnL0lCTVBsZXhNb25vLVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXG4gICAgICAgICAgICB1cmwoJy9JQk1QbGV4TW9uby1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgfVxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6ICR7ZnN9cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6ICR7bGh9O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgIH1cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgY2FudmFzIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBoMSxcbiAgICAgICAgaDIsXG4gICAgICAgIGgzLFxuICAgICAgICBoNCxcbiAgICAgICAgaDUsXG4gICAgICAgIGg2IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6ICR7cmxofXB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dGFyZWEge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIHRleHRhcmVhOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/grant.custer/Sites/constraint-systems/diptych/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.2451be0173057bce7317.hot-update.js.map