"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let defaultMinusValue = 0;
let defaultPlusValue = 0;
app.use(express_1.default.static('dist'));
app.use(express_1.default.json());
var ButtonType;
(function (ButtonType) {
    ButtonType["minus"] = "minus";
    ButtonType["plus"] = "plus";
})(ButtonType || (ButtonType = {}));
app.post('*', (req, res) => {
    const { button } = req.body;
    let newNumber = 0;
    if (button === 'plus') {
        defaultPlusValue += 1;
        newNumber = defaultPlusValue;
    }
    if (button === 'minus') {
        defaultMinusValue += 1;
        newNumber = defaultMinusValue;
    }
    res.status(200).json({ qty: newNumber });
});
app.listen(5000, () => {
    console.log('server is running');
});
