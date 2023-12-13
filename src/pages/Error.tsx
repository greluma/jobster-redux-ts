import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Sorry, the page you tried cannot be found</h3>
        <p>You may have mistyped the address or the page may have moved.</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
