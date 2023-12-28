import { useState } from "react";
import { FromRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";
import { UserSlice, loginUser, registerUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

interface State {
  name: string;
  email: string;
  password: string;
  isMember: boolean;
}

const initialState: State = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register: React.FC = () => {
  const [values, setValues] = useState<State>(initialState);
  const { user, isLoading } = useSelector((store: UserSlice) => store.user);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    return null;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password } = values;
    if (!email || !password || (!values.isMember && !name)) {
      toast.error("Please fill out all fields");
      return;
    }
    if (values.isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form onSubmit={handleSubmit} className="form">
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* Name */}
        {!values.isMember && (
          <FromRow
            type={"text"}
            name={"name"}
            value={values.name}
            handleChange={handleChange}
            labelText={"name"}
          />
        )}

        {/* Email */}
        <FromRow
          type={"email"}
          name={"email"}
          value={values.email}
          handleChange={handleChange}
          labelText={"email"}
        />
        {/* Password */}
        <FromRow
          type={"password"}
          name={"password"}
          value={values.password}
          handleChange={handleChange}
          labelText={"password"}
        />

        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
