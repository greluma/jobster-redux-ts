import { useState } from "react";
import { FromRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";

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
  // console.log(values);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    return null;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password } = values;
    if (!email || !password || (!values.isMember && !name)) {
      // console.log("Please fill out all fields");
      toast.error("Please fill out all fields");
    } else {
      toast.success(`${values.isMember ? "Login" : "Register"} Success`);
    }
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

        <button type="submit" className="btn btn-block">
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
