const Confirm = require('./confirm').default;
const Alert = require('./alert').default;

export default class acModal
{
    static confirm(parameters) {
        if (parameters.message === undefined) {
            console.error('Error: could not instantiate without message');
            return false;
        }

        let message = parameters.message;
        let title = parameters.title;
        let success = {
            text: undefined === parameters.successText ? 'OK' : parameters.successText,
            callBackFunction: parameters.successCallBack,
        };
        let cancel = {
            text: undefined === parameters.cancelText ? 'Cancel' : parameters.cancelText,
            callBackFunction: parameters.cancelCallBack,
        };

        let params = {
            appendTo: parameters.appendTo,
        };

        let confirm = new Confirm(title, message, success, cancel, params);
        confirm.display();
    }

    static alert(parameters) {
        if (parameters.message === undefined) {
            console.error('Error: could not instantiate without message');
            return false;
        }
        let message = parameters.message;
        let title = parameters.title;
        let button = {
            text: undefined === parameters.buttonText ? 'OK' : parameters.buttonText,
            callBackFunction: parameters.buttonCallBack,
        };

        let params = {
            appendTo: parameters.appendTo,
        };

        let alert = new Alert(title, message, button, params);
        alert.display();
    }
}

