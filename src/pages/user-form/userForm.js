import './userForm.scss'
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useSignUpForm from '../../hooks/useSignUpForm';
import * as actionCreators from '../../store/actions/actionCreators';
import formImg from '../../assets/download (1).png'


const UserForm = () => {
    const dispatch = useDispatch();
    const notify = () => toast("Your Order Is Submitted");

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

    const saveHandler = (e) => {
        e.preventDefault();
        let userInfo = {
            address: inputs.address,
            phone: inputs.phone,
            email: inputs.email
        }

        axios.post('https://users-fe644.firebaseio.com/users.json', userInfo).then(res => {
            dispatch(actionCreators.emptyCart())
            notify();
        })
    }

    return (
        <div className="form-container">
            <ToastContainer />
            <div className="form-container-image">
                <img src={formImg} alt="shop now" />
            </div>
            <form className="form-container-user">
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
                    onClick={(e) => saveHandler(e)}
                    disabled={!checkFormValidation()}
                    type="submit"
                    className={checkFormValidation() ? "btn btn-primary" : "btn btn-primary disabled"}>Submit</button>
            </form>

        </div>
    )
}
export default UserForm;