import express from 'express';

const app = express();
let defaultMinusValue = 0;
let defaultPlusValue = 0;

app.use(express.static('dist'));
app.use(express.json());

enum ButtonType {
    minus = 'minus',
    plus = 'plus'
}

app.post('*', (req, res) => {
    const {button}: { button: ButtonType } = req.body;
    let newNumber = 0;

    if (button === 'plus') {
        defaultPlusValue += 1;
        newNumber = defaultPlusValue;
    }

    if (button === 'minus') {
        defaultMinusValue += 1;
        newNumber = defaultMinusValue;
    }
    res.status(200).json({qty: newNumber});
})


app.listen(5000, () => {
    console.log('server is running');
})