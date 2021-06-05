import useSignUpForm from '../../hooks/useSignUpForm'

const UserForm = () => {
    const { handleInputChange, inputs } = useSignUpForm(
        {
            address: '',
            addressIsValid: false,
            addressIsTouched: false,
            phone: '',
            phoneIsValid: false,
            phoneIsTouched: false,
            email: '',
            emailIsValid: false,
            emailIsTouched: false
        }
    )

    const checkFormValidation = () => {
        return inputs.addressIsValid && inputs.phoneIsValid && inputs.emailIsValid;
    }

    return (
        <form>
            <div className="form-group">
                <input
                    name="address"
                    className="form-control"
                    id="exampleInputAddress"
                    aria-describedby="addressHelp"
                    placeholder="Enter Address"
                    value={inputs.address}
                    onChange={(e) => handleInputChange(e)}
                />
                {
                    !inputs.addressIsValid && inputs.addressIsTouched &&
                    <small id="addressHelp" className="form-text text-muted">Address must not exceed 20 characters !</small>
                }
            </div>
            <div className="form-group">
                <input
                    name="phone"
                    className="form-control"
                    id="exampleInputPhone"
                    aria-describedby="phoneHelp"
                    placeholder="Enter Phone"
                    value={inputs.phone}
                    onChange={(e) => handleInputChange(e)}
                />
                {
                    !inputs.phoneIsValid && inputs.phoneIsTouched &&
                    <small id="phoneHelp" className="form-text text-muted">Phone no is not valid !</small>
                }
            </div>
            <div className="form-group">
                <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email"
                    value={inputs.email}
                    onChange={(e) => handleInputChange(e)}
                />
                {
                    !inputs.emailIsValid && inputs.emailIsTouched &&
                    <small id="emailHelp" className="form-text text-muted">Emaill is not valid !</small>
                }
            </div>
            <button
                disabled={!checkFormValidation()}
                type="submit"
                className={checkFormValidation() ? "btn btn-primary" : "btn btn-primary disabled"}>Submit</button>
        </form>
    )
}
export default UserForm;