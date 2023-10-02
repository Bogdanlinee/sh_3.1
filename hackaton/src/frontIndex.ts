enum ButtonType {
    minus = 'minus',
    plus = 'plus',
}

const plusButton = document.querySelector('.plusQty');
const minusButton = document.querySelector('.minusQty');

async function buttonAction(button: ButtonType) {
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
    }

    const request = await fetch('http://localhost:5000', options);
    const response = await request.json();

    if (button === 'plus') {
       plusButton.textContent = response.qty;
    }

    if (button === 'minus') {
       minusButton.textContent= response.qty;
    }
}