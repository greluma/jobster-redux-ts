import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              Job <span>Tracking</span> App
            </h1>
            <p>
              Keep track of your job applications with Jobster and never miss an
              opportunity.
              <br />
              Jobster is a free and open source job tracking app that helps you
              stay organized and focused on your job hunt.
            </p>
            <button className="btn btn-hero">Login/Register</button>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};
export default Landing;
