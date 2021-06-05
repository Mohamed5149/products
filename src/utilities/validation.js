import validator from 'validator';

const validate = (id, value) => {
    switch (id) {
        case 'address':
            return (!validator.isEmpty(value) && value.length <= 20)
        case 'email':
            return (validator.isEmail(value))
        case 'phone':
            return (validator.isMobilePhone(value))
        default:
            break;
    }
}

export default validate;