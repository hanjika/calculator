// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cSv3F":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "21352e468b7fb9b3";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3auaO":[function(require,module,exports) {
var _calculator = require("./calculator");
var _history = require("./history");
var _theme = require("./theme");
/* HEADER */ const header = document.createElement("header");
document.querySelector("body").insertBefore(header, document.querySelector("main"));
// button to change background
const bgButton = document.createElement("button");
bgButton.innerHTML = "Change<br>Theme";
header.appendChild(bgButton);
bgButton.classList.add("background-button");
bgButton.setAttribute("id", "white");
bgButton.addEventListener("click", _theme.changeBackground);
/* CALCULATOR */ const calc = document.createElement("section");
document.querySelector("main").appendChild(calc);
calc.classList.add("calculator");
// display
const display = document.createElement("div");
calc.appendChild(display);
display.setAttribute("id", "display");
display.innerText = "";
// buttons
const buttonArray = [
    "C",
    "DEL",
    "MOD",
    "(",
    ")",
    "÷",
    "+",
    "-",
    "×",
    7,
    8,
    9,
    4,
    5,
    6,
    1,
    2,
    3,
    ".",
    0,
    "=", 
];
const allBtns = document.createElement("div");
calc.appendChild(allBtns);
allBtns.classList.add("all-buttons");
for (const elem of buttonArray){
    const button = document.createElement("button");
    allBtns.appendChild(button);
    button.setAttribute("id", "white");
    button.innerText = elem;
    button.addEventListener("click", _calculator.buttonClick);
}
document.addEventListener("keypress", _calculator.pressKey);
document.addEventListener("keyup", _calculator.backspace);
/* HISTORY */ const historySection = document.createElement("section");
document.querySelector("main").appendChild(historySection);
historySection.classList.add("history");
const historyTitle = document.createElement("h2");
historySection.appendChild(historyTitle);
historyTitle.innerText = "History";
const historyData = document.createElement("p");
historySection.appendChild(historyData);
historyData.setAttribute("id", "history");
historyData.innerText = "";
const historyBtn = document.createElement("button");
historySection.appendChild(historyBtn);
historyBtn.innerText = "Clear";
historyBtn.classList.add("refresh");
historyBtn.setAttribute("id", "white");
historyBtn.addEventListener("click", _history.deleteHistory);

},{"./calculator":"dU9Mz","./history":"a4dHX","./theme":"6WRXe"}],"dU9Mz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* USE CALCULATOR - KEY PRESS, BUTTON CLICKS, INPUT AND DISPLAY */ parcelHelpers.export(exports, "pressKey", ()=>pressKey
);
parcelHelpers.export(exports, "backspace", ()=>backspace
);
parcelHelpers.export(exports, "buttonClick", ()=>buttonClick
);
var _history = require("./history");
//------ FUNCTIONS ------------
let str = "";
let wasEqual = false;
function pressKey(e) {
    let value = "";
    if (e.keyCode >= 48 && e.keyCode <= 57) value = e.keyCode - 48;
    else if (e.keyCode === 47) value = "÷";
    else if (e.keyCode === 42) value = "×";
    else if (e.keyCode === 43) value = "+";
    else if (e.keyCode === 45) value = "-";
    else if (e.keyCode === 46) value = ".";
    else if (e.keyCode === 13 || e.keyCode === 61) value = "=";
    else if (e.keyCode === 40) value = "(";
    else if (e.keyCode === 41) value = ")";
    if (value !== "") processInput(value);
}
function backspace(e) {
    let value = "";
    if (e.keyCode === 8) value = "DEL";
    if (value !== "") processInput(value);
}
function buttonClick(e) {
    const value = e.target.innerText;
    processInput(value);
}
function processInput(value) {
    const lastVal = display.innerText[display.innerText.length - 1];
    if (isNaN(value)) {
        if (value === "C") {
            display.innerText = display.innerText.replace(display.innerText, "");
            str = str.toString().replace(str, "");
            wasEqual = false;
        } else if (value === "=") {
            const result = computeResult(str);
            display.innerText = deleteDisplayRow(display.innerText);
            _history.getHistory(str, result);
            str = result;
            display.innerText += "\n=" + result;
            wasEqual = true;
        } else if (value === "DEL") {
            display.innerText = display.innerText.slice(0, -1);
            str = str.slice(0, -1);
        } else if (value === "√") {
            display.innerText += value;
            str += "Math.sqrt";
        } else if (value === "(") {
            display.innerText += value;
            str += value;
        } else if (!isNaN(lastVal) || lastVal === ")") {
            if (value === "÷") {
                display.innerText += value;
                str += "/";
            } else if (value === "×") {
                display.innerText += value;
                str += "*";
            } else if (value === "MOD") {
                display.innerText += value;
                str += "%";
            } else {
                display.innerText += value;
                str += value;
            }
            if (wasEqual === true) wasEqual = false;
        }
    } else if (wasEqual === false) {
        display.innerText += value;
        str += value;
    }
}
function deleteDisplayRow(str) {
    const lines = str.split("=");
    if (lines[1]) {
        lines.splice(0, 1);
        return lines;
    } else return str;
}
/* COMPUTE RESULT */ function computeResult(str) {
    return Function('return ' + str)();
}

},{"./history":"a4dHX","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a4dHX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* HISTORY FUNCTIONS - ADD TO HISTORY AND DELETE HISTORY */ parcelHelpers.export(exports, "getHistory", ()=>getHistory
);
parcelHelpers.export(exports, "deleteHistory", ()=>deleteHistory
);
function getHistory(str, result) {
    for(let i = 0; i < str.length; i++){
        if (str[i] === "*") document.getElementById("history").innerText += "×";
        else if (str[i] === "/") document.getElementById("history").innerText += "÷";
        else if (str[i] === "%") document.getElementById("history").innerText += " mod ";
        else document.getElementById("history").innerText += str[i];
    }
    document.getElementById("history").innerText += " = " + result + "\n";
}
function deleteHistory() {
    document.getElementById("history").innerText = "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6WRXe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "changeBackground", ()=>changeBackground
);
var _whitebgJpg = require("../Images/whitebg.jpg");
var _whitebgJpgDefault = parcelHelpers.interopDefault(_whitebgJpg);
var _blacksomecolourJpg = require("../Images/blacksomecolour.jpg");
var _blacksomecolourJpgDefault = parcelHelpers.interopDefault(_blacksomecolourJpg);
var _mintPng = require("../Images/mint.png");
var _mintPngDefault = parcelHelpers.interopDefault(_mintPng);
const backgrounds = [_whitebgJpgDefault.default, _blacksomecolourJpgDefault.default, _mintPngDefault.default];
function changeBackground(e) {
    const button = document.querySelector(".background-button");
    const display = document.querySelector("#display");
    const history = document.querySelector(".history");
    const btns = document.querySelectorAll("button");
    if (button.getAttribute("id") === "white") {
        button.removeAttribute("id", "white");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        for (let elem of btns)elem.setAttribute("id", "white2");
        button.setAttribute("id", "white2");
    } else if (button.getAttribute("id") === "white2") {
        button.removeAttribute("id", "white2");
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        display.style.backgroundColor = "#003566";
        history.style.backgroundColor = "#003566";
        for (let elem of btns)elem.setAttribute("id", "black");
        button.setAttribute("id", "black");
    } else if (button.getAttribute("id") === "black") {
        button.removeAttribute("id", "black");
        document.body.style.color = "white";
        display.style.backgroundColor = "#453a6f";
        history.style.backgroundColor = "#453a6f";
        for (let elem of btns)elem.setAttribute("id", "black2");
        button.setAttribute("id", "black2");
    } else if (button.getAttribute("id") === "black2") {
        button.removeAttribute("id", "black2");
        document.body.style.backgroundImage = "url(" + _whitebgJpgDefault.default + ")";
        document.body.style.color = "black";
        display.style.backgroundColor = "black";
        history.style.backgroundColor = "white";
        for (let elem of btns)elem.setAttribute("id", "img1");
        button.setAttribute("id", "img1");
    } else if (button.getAttribute("id") === "img1") {
        button.removeAttribute("id", "img1");
        document.body.style.backgroundImage = "url(" + _blacksomecolourJpgDefault.default + ")";
        document.body.style.color = "black";
        display.style.backgroundColor = "white";
        display.style.color = "black";
        history.style.backgroundColor = "white";
        for (let elem of btns)elem.setAttribute("id", "img2");
        button.setAttribute("id", "img2");
    } else if (button.getAttribute("id") === "img2") {
        button.removeAttribute("id", "img2");
        document.body.style.backgroundImage = "url(" + _mintPngDefault.default + ")";
        document.body.style.color = "#E55D4D";
        display.style.backgroundColor = "black";
        display.style.color = "white";
        history.style.backgroundColor = "white";
        for (let elem of btns)elem.setAttribute("id", "img3");
        button.setAttribute("id", "img3");
    } else if (button.getAttribute("id") === "img3") {
        button.removeAttribute("id", "img3");
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        for (let elem of btns)elem.setAttribute("id", "white");
        button.setAttribute("id", "white");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../Images/blacksomecolour.jpg":"ghHKe","../Images/mint.png":"gpDnl","../Images/whitebg.jpg":"hY9Uh"}],"ghHKe":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "blacksomecolour.61a460cc.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gpDnl":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "mint.61fa5983.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"hY9Uh":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2QLmQ') + "whitebg.629df4cd.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}]},["cSv3F","3auaO"], "3auaO", "parcelRequireff1f")

//# sourceMappingURL=index.8b7fb9b3.js.map
