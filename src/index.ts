// Task 1 ============================================================
//====================================================================

type DialogButtonType = 'Yes' | 'No';

interface FormButton {
    type: 'Add' | 'Remove' | 'Buy';
}

type AnyButtonType = DialogButtonType | FormButton['type'];


const a: AnyButtonType = "Add";

// Task 2 ============================================================
//====================================================================

type ConfirmationHandlingFormButton = {
    onConfirm: (param: DialogButtonType) => void
}

// Task 3 ============================================================
//====================================================================

function summ(a: SumType1) {
    if (!a) {
        return 2022;
    }

    const x = Object.keys(a).map((k) => {
        const elem = a[k];

        if (!elem || typeof elem === undefined) {
            return 2022;
        }

        if (typeof elem.cvalue === 'undefined') {
            return 2022
        }

        if (typeof elem.cvalue === 'object') {
            return summ(elem.cvalue);
        }

        if (typeof elem.cvalue === 'string') {
            return +elem.cvalue || 2022;
        }


        return elem.cvalue;
    });

    if (x.indexOf(2022) !== -1) {
        return 2022;
    }

    let sum = 0;

    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }

    return sum;
}

type SumType1 = {
    [a: string]: { cvalue: number | string | undefined | SumType1 } | undefined;
};

let result = summ({
    hello: {
        cvalue: 2
    },
    world: {
        cvalue: {
            yay: {
                cvalue: "2"
            }
        }
    }
});

// Task 4 ============================================================
//====================================================================

// Понятное дело для описания сигнатуры mapObject надо будет юзать
// 1) дженерики с несколькими параметрами-типами
// 2) такую штуку как Record (globalThis.Record, если быть точным ;) )


type ObjectType = string;

function mapObject<InputType, OutputType>(obj: Record<ObjectType, InputType>, transformer: (arg: InputType) => OutputType) {
    const resultArr: Record<ObjectType, OutputType> = {}

    for (const elem in obj) {
        resultArr[elem] = transformer(obj[elem]);
    }

    return resultArr;
}

const resultTask3 = mapObject(
        {"roma": 5, "vasya": 2},
        (x) => x > 2
    )
;

console.log(resultTask3);

















