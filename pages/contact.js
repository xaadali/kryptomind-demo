import Navbar from "../components/Navbar/Navbar";
const contact = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container-fluid mt-5 contact-style" id="contactid">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <h1 className="text-center main-heading">Contact Us</h1>
            <p className="text-center sub-heading">
              We Will Be Happy to help you
            </p>
            <div className="row">
              <div className="col-md-6 col-12 mx-auto">
                <form id="login-form" action="/contact" method="post">
                  <div className="form-group">
                    <label for="username" className="text-info">
                      Name:
                    </label>
                    <br />
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      required
                      name="name"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="email" className="text-info">
                      Email Address
                    </label>
                    <br />
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      required
                      name="email"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="number" className="text-info">
                      Phone
                    </label>
                    <br />
                    <input
                      type="number"
                      id="number"
                      className="form-control"
                      required
                      name="phone"
                      placeholder="Enter your Phone"
                    />
                  </div>
                  <div className="form-group">
                    <label for="message" className="text-info">
                      Message
                    </label>
                    <br />
                    <input
                      type="text"
                      id="message"
                      className="form-control"
                      required
                      name="message"
                      placeholder="Enter your Email"
                    />
                  </div>

                  <button type="submit" className="btn-style btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
