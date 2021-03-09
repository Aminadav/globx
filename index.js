"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.NewStore = void 0;
//@ts-check
var react_1 = require("react");
var lodash_isequal_1 = require("lodash.isequal");
var lodash_clonedeep_1 = require("lodash.clonedeep");
function NewStore(state, persistentProvider) {
    //@ts-ignore
    var Store = state;
    var prevPersistented = __assign({}, ((Store === null || Store === void 0 ? void 0 : Store.persistent) || {}));
    var callbacks = {};
    var callbacksNextAvailableKey = 0;
    function updateStoreNow() {
        scheduled = false;
        for (var i in callbacks) {
            callbacks[i]();
        }
        if (Store.persistent) {
            if (!persistentProvider) {
                throw new Error('cannot use persistent without persistent provider');
            }
            for (var _i = 0, _a = Object.keys(Store.persistent); _i < _a.length; _i++) {
                var key = _a[_i];
                var val = Store.persistent[key];
                // console.log({key,val:JSON.stringify(val),prev:prevPersistented[key]})
                if (JSON.stringify(val) != prevPersistented[key]) {
                    persistentProvider.setKey(key, val);
                    prevPersistented[key] = JSON.stringify(val);
                    // console.log({prevPersistented})
                }
            }
        }
    }
    var scheduled = false;
    function Schedule() {
        if (scheduled)
            return;
        scheduled = true;
        setTimeout(updateStoreNow, 0);
    }
    /**
     * @example useRerenderIfChange((store) => [store.scale, store.othervalue])
     * @param callback {(store:Store)=>void}
     */
    Store.useRerenderIfChange = function (callback) {
        var _a = react_1.useState(0), _ = _a[0], setMeToRerender = _a[1];
        var callbacksKeyRef = react_1.useRef(callbacksNextAvailableKey++);
        /** The array from the user. Cloned so new changes will not be there */
        var lastValueRef = react_1.useRef(lodash_clonedeep_1["default"](callback(Store)));
        react_1.useEffect(function () {
            // When object mount, add a function to the callbacks, to change if the value changes
            // it will trigged by the "updateStore below"
            callbacks[callbacksKeyRef.current] = function () {
                var currentValue = callback(Store); // The new array of values calculated from the store
                if (!lodash_isequal_1["default"](currentValue, lastValueRef.current)) {
                    lastValueRef.current = lodash_clonedeep_1["default"](currentValue); // Update the old array.
                    setMeToRerender(function (prev) { return prev + 1; }); // Rerender the objects
                }
            };
            return function () {
                // When object unmount we don't need this callback any more.
                delete callbacks[callbacksKeyRef.current];
            };
        }, []);
        return lastValueRef.current;
    };
    Store.updateStore = function () {
        Schedule();
    };
    return Store;
}
exports.NewStore = NewStore;
