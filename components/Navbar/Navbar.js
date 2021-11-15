import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid mt-0 navbar-style py-3">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link href="/">
                <a className="navbar-brand" id="logo">
                  KryptoMind
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
                        Home <span className="sr-only"></span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link href="#aboutid">
                      <a className="nav-link">About</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#gallery-style">
                      <a className="nav-link">Gallery</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#serviceid">
                      <a className="nav-link">Services</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#contactid">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
