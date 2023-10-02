"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ButtonType;
(function (ButtonType) {
    ButtonType["minus"] = "minus";
    ButtonType["plus"] = "plus";
})(ButtonType || (ButtonType = {}));
const plusButton = document.querySelector('.plusQty');
const minusButton = document.querySelector('.minusQty');
function buttonAction(button) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!plusButton || !minusButton) {
            return;
        }
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                button,
            })
        };
        const request = yield fetch('http://localhost:5000', options);
        const response = yield request.json();
        if (button === 'plus') {
            plusButton.textContent = response.qty;
        }
        if (button === 'minus') {
            minusButton.textContent = response.qty;
        }
    });
}
