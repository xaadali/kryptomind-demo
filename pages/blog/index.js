const index = () => {
  return (
    <>
      <div class="container-fluid mt-0 navbar-style py-3">
        <div class="row">
          <div class="col-md-10 col-12 mx-auto">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="/" id="logo">
                Xaad Ali
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">
                      Home <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="#aboutid">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Gallery
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#serviceid">
                      Services
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#contactid">
                      Contact
                    </a>
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

export default index;
