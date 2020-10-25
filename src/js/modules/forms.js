import { removeClass, removeSelector } from "./utils";
import validator from "./validator";

const forms = () => {
    const form = document.querySelector('form'),
        inputs = form.querySelectorAll('[type="text"], [type="email"], textarea');

    const message = {
        loading: 'Loading...',
        success: 'Thanks! We will contact you soon!',
        failure: 'Something went wrong...'
    };

    function clearInputs() {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    async function postData(url, data) {
        let response = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await response.text();
    };

    form.addEventListener('submit', e => {
        e.preventDefault();

        removeClass('form__input--error');
        removeSelector('.form__error', form);

        const validate = validator(form);

        if (validate.result) {
            const formData = new FormData(form);

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('form__status');
            form.appendChild(statusMessage);

            statusMessage.textContent = message.loading;

            postData('server.php', formData)
                .then(text => {
                    console.log(text);
                    statusMessage.textContent = message.success;
                })
                .catch(err => {
                    console.log(err);
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                })
        } else {
            validate.errors.forEach(({ elem, message }) => {
                const div = document.createElement('div');
                div.classList.add('form__error');
                div.textContent = message;

                elem.classList.add('form__input--error');
                elem.parentNode.append(div);
            });
        }
    });
};

export default forms;