const validator = (form) => {
    const texts = form.querySelectorAll('[type="text"], textarea'),
        emails = form.querySelectorAll('[type="email"]');

    const response = {
        result: false,
        errors: []
    };

    const regEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    texts.forEach(item => {
        if (!item.value) {
            response.errors.push({
                message: `The ${item.getAttribute('name')} field is required`,
                elem: item
            });
        }
    });

    emails.forEach(item => {
        if (!item.value) {
            response.errors.push({
                message: `The ${item.getAttribute('name')} field is required`,
                elem: item
            });
        }
        else if (!regEmail.test(item.value)) {
            response.errors.push({
                message: `${item.getAttribute('name')} is invalid`,
                elem: item
            });
        }
    });

    if (response.errors != '') {
        return response;
    }
    else {
        return { result: true }
    }


};

export default validator;