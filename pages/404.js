import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Errorpage = () => {
  const Router = useRouter();
  const handleinput = () => {
    Router.push("/");
  };
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container-fluid mt-0 navbar-style py-3">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link href="/">
                <a className="navbar-brand" id="logo">
                  Xaad Ali
                </a>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link href="/">
                      <a className="nav-link">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link href="/about">
                      <a className="nav-link">About</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/gallery">
                      <a className="nav-link">Gallery</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/services">
                      <a className="nav-link">Services</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container" id="error">
        <h1 className="heads">404</h1>
        <h1>We are sorry page not found</h1>
        <Link href="/">
          <a className="btn btn-info text-white">Back To Home Page</a>
        </Link>
        <br />
        <button className="btn btn-success" onClick={handleinput}>
          Back To Home
        </button>
      </div>
    </>
  );
};

export default Errorpage;
