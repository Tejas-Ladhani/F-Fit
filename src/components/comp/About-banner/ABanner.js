import './ABanner.css';
function ABanner() {
  return (
    <section className="pt-8 pt-md-11 bg-gradient-light-white abanner">
      <div className="container">

        <div className="row align-items-center">
          <div className="col-12 col-md-7 col-lg-6" data-aos="fade-right">

            {/* <!-- Heading --> */}
            <h2>
              F-Fit will help you to <br />
              <span className="text-primary">maintain & build your Portfolio</span>.
                </h2>

            {/* <!-- Text --> */}
            <p className="font-size-lg text-muted mb-6">

            </p>

            {/* <!-- List --> */}
            <div className="d-flex">

              {/* <!-- Icon --> */}
              <div className="icon text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h24v24H0z" />
                    <path
                      d="M12 8H8a4 4 0 00-4 4v1a3 3 0 003 3v2a5 5 0 01-5-5v-1a6 6 0 016-6h4V4.728a.5.5 0 01.8-.4l2.856 2.133a.5.5 0 01-.001.802l-2.857 2.121A.5.5 0 0112 8.983V8z"
                      fill="#335EEA" />
                    <path
                      d="M12.058 16H16a4 4 0 004-4v-1a3 3 0 00-3-3V6a5 5 0 015 5v1a6 6 0 01-6 6h-3.942v.983a.5.5 0 01-.798.401l-2.857-2.12a.5.5 0 010-.803l2.856-2.134a.5.5 0 01.8.401V16z"
                      fill="#335EEA" opacity=".3" />
                  </g>
                </svg>
              </div>

              <div className="ml-5">

                {/* <!-- Heading --> */}
                <h4 className="mb-1">
                  Visualize your Portfolio
                    </h4>

                {/* <!-- Text --> */}
                <p className="text-muted mb-6">
                  Beautiful graphs will help you to visulaize your Portfolio.
                    </p>

              </div>

            </div>
            <div className="d-flex">

              {/* <!-- Icon --> */}
              <div className="icon text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h24v24H0z" />
                    <path
                      d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z"
                      fill="#335EEA" />
                    <rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2"
                      height="16" rx="1" />
                  </g>
                </svg>
              </div>

              <div className="ml-5">

                {/* <!-- Heading --> */}
                <h4 className="mb-1">
                  Deep understanding of Finance
                    </h4>

                {/* <!-- Text --> */}
                <p className="text-muted mb-6 mb-md-0">
                  Learn about some new types of investments and keep up with your future
                    </p>

              </div>

            </div>

          </div>
          <div className="col-12 col-md-5 col-lg-6">

            <div className="w-md-150 w-lg-130 position-relative" data-aos="fade-left">
              {/* <!-- Image --> */}
              <div className="img-skewed img-skewed-left">
                {/* <!-- Image --> */}
                <img src="img/banner/dashkit.jpg" className="screenshot img-fluid img-skewed-item" alt="..." />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

  );

}

export default ABanner;