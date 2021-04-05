import './SBanner.css';
function SBanner() {
  return (
    <section className="site-banner">
      <section className="pt-4 pt-md-11">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 col-lg-6 order-md-2">


              <img src="img/banner/illustration-2.png" className="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0" alt="..." />

            </div>
            <div className="col-12 col-md-7 col-lg-6 order-md-1" data-aos="fade-up">

              <h1 className="display-3 text-center text-md-left">
                Welcome to <span className="text-primary">F-Fit</span>, <br />
                  Invest anywhere.
                </h1>

              <p className="lead text-center text-md-left text-muted mb-6 mb-lg-8">
                The individual investor should act consistently as an investor and not as a speculator.
                </p>
              <div className="text-center text-md-left">
                <a href="#" className="btn btn-primary shadow mr-1">
                  Sign Up
                  </a>
                <a href="#" className="btn btn-primary ">
                  Login
                  </a>
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