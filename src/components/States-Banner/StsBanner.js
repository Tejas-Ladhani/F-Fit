import './StsBanner.css';
function StsBanner() {

    return (
        <section className="pt-12 pt-md-13 bg-gray-200 StsBanner">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-12 col-md-7 col-lg-6 order-md-2">

                        {/* <!-- Heading --> */}
                        <h2>
                            Stay focused on your business. <br />
                            <span className="text-primary">Let us help you to handle your Portfolio</span>.
              </h2>

                        {/* <!-- Text --> */}
                        <p className="font-size-lg text-gray-700 mb-6">
                            You have a business to run. Stop worring about current value of your Portfolio. Let us do that for you.
              </p>


                    </div>
                    <div className="col-12 col-md-5 col-lg-6 order-md-1">

                        {/* <!-- Image --> */}
                        <img src="img/banner/illustration-8.png" alt="..." className="img-fluid mb-6 mb-md-0" />

                    </div>
                </div>
            </div>
        </section>

    );

}

export default StsBanner;