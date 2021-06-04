import validator from 'validator';

const validate = (id, value) => {
    switch (id) {
        case 'name':
            return (!validator.isEmpty(value) && value.length <= 10)
        case 'length':
            return (!validator.isEmpty(value) && value.length <= 10)
        case 'width':
            return (!validator.isEmpty(value) && value.length <= 10)
        case 'height':
            return (!validator.isEmpty(value) && value.length <= 10)
        case 'address':
            return (!validator.isEmpty(value) && value.length <= 20)
        case 'email':
            return (validator.isEmail(value))
        case 'password':
            return (!validator.isEmpty(value))
        case 'phone':
            return (validator.isMobilePhone(value))
        case 'status':
            return (isNaN(value))
        case 'role':
            return (isNaN(value))
        default:
            break;
    }
}

export default validate;