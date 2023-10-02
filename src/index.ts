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