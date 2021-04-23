import SignInBtn from '../signin-btn/SignInBtn';
import './SBanner.css';
function SBanner() {
  return (
    <section className="site-banner">
      <section className="pt-4 pt-md-11">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 col-lg-5 order-md-2">


              <img src="img/banner/illustration-2.png" className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..." />

            </div>
            <div className="col-12 col-md-8 col-lg-7 order-md-1 mb-5" data-aos="fade-up">

              <h1 className="display-3 text-center text-md-left">
                Welcome to <span className="text-primary">F-Fit</span>, <br />
                  Break-Invest-Grow.
                </h1>

              <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
                The individual investor should act consistently as an investor and not as a speculator.
                </p>
              <div className="text-center text-md-left">
                <SignInBtn/>
              </div>

            </div>
          </div>
        </div>
        <br />
        <br />
      </section>

    </section>

  );
}

export default SBanner;