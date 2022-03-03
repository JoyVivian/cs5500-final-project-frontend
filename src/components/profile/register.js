import {useState} from "react";
import * as service from "../../services/security-service";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [newUser, setNewUser] = useState({});
    const navigate = useNavigate();
    const register = () =>
        service.register(newUser)
            .then(() => navigate('/home'))
            .catch(e => alert(e));
    return (
        <div>
            <h1>Register</h1>
            <input className="mb-2 form-control"
                   onChange={(e) =>
                       setNewUser({...newUser, username: e.target.value})}
                   placeholder="username"/>
            <input className="mb-2 form-control"
                   onChange={(e) =>
                       setNewUser({...newUser, password: e.target.value})}
                   placeholder="password" type="password"/>
            <input className="mb-2 form-control"
                   onChange={(e) =>
                       setNewUser({...newUser, email: e.target.value})}
                   placeholder="email" type="email"/>
            <button onClick={register}
                    className="btn btn-primary mb-5">Register
            </button>
        </div>
    );
}
export default Register;