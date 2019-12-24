const Modal = require('./modal').default;

export default class Confirm extends Modal
{
    constructor(title, message, success, cancel, parameters) {

        let buttons = [
            {
                text: cancel.text,
                primary: false,
                callBackFunction: cancel.callBackFunction,
            },
            {
                text: success.text,
                primary: true,
                callBackFunction: success.callBackFunction,
            },
        ];

        super(title, message, buttons, parameters);
    }

    display() {
        super.display();
    }
}