export default class Modal
{
    constructor(title, message, buttons, parameters) {
        this.title = title;
        this.message = message;
        this.buttons = buttons;
        this.parameters = parameters;
    }

    display() {
        let modal = this.createModal();
        if (undefined !== this.parameters.appendTo) {
            let element = document.querySelector(this.parameters.appendTo);
            if (element.length < 1) {
                console.error('Error: Could not find the element to append the modal');
                return false;
            } else {
                element.appendChild(modal);
            }
        } else {
            document.body.appendChild(modal);
        }
    }

    createModal() {
        let overlay = document.createElement('div');
        overlay.setAttribute('id', 'acmodal__overlay');

        let modal = document.createElement('div');
        modal.setAttribute('id', 'acmodal__modal');

        let title;

        if (undefined !== this.title) {
            title = document.createElement('h2');
            title.setAttribute('id', 'acmodal__modal__title');
            title.innerText = this.title;
        }

        let message = document.createElement('p');
        message.setAttribute('id', 'acmodal__modal__message');
        message.innerText = this.message;

        let buttons = document.createElement('div');
        buttons.setAttribute('id', 'acmodal__modal__actions');
        for (let i = 0 ; i < this.buttons.length ; i++) {
            let oneButton = document.createElement('button');
            let buttonClass = this.buttons[i].primary ? 'acmodal__button__primary' : 'acmodal__button__secondary';
            oneButton.classList.add('acmodal__button', buttonClass);
            oneButton.innerText = this.buttons[i].text;
            oneButton.addEventListener('click', () => {
                if (undefined !== this.buttons[i].callBackFunction) this.buttons[i].callBackFunction();
                overlay.remove();
            });
            buttons.appendChild(oneButton);
        }

        if (undefined !== this.title) modal.appendChild(title);
        modal.appendChild(message);
        modal.appendChild(buttons);
        overlay.appendChild(modal);

        return overlay;
    }
}