const Modal = require('./modal').default;

export default class Alert extends Modal
{
    constructor(title, message, button, parameters) {

        let buttons = [
            {
                text: button.text,
                primary: true,
                callBackFunction: button.callBackFunction,
            },
        ];

        super(title, message, buttons, parameters);
    }

    display() {
        super.display();
    }
}