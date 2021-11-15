import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
const services = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container-fluid mt-5 service-style" id="serviceid">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <h1 className="text-center main-heading">Services</h1>
            <p className="text-center sub-heading">
              grow your BUSINESS with us
            </p>
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <div className="our-services settings">
                    <div className="icon">
                      <Image
                        src="/first.png"
                        width={50}
                        height={50}
                        alt="first Image"
                      ></Image>
                    </div>
                    <h4>Settings</h4>
                    <p>
                      Lorem Ipsum dolor sit amet, consectetur adipisicing elit
                      lorem Ipsum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="our-services speedup">
                    <div className="icon">
                      <Image src="/second.png" width={50} height={50} alt="" />
                    </div>
                    <h4>Privacy</h4>
                    <p>
                      Lorem Ipsum dolor sit amet, consectetur adipisicing elit
                      lorem Ipsum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="our-services privacy">
                    <div className="icon">
                      <Image src="/second.png" width={50} height={50} alt="" />
                    </div>
                    <h4>Privacy</h4>
                    <p>
                      Lorem Ipsum dolor sit amet, consectetur adipisicing elit
                      lorem Ipsum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="our-services backups">
                    <div className="icon">
                      <Image src="/forth.png" width={50} height={50} alt="" />
                    </div>
                    <h4>Backups</h4>
                    <p>
                      Lorem Ipsum dolor sit amet, consectetur adipisicing elit
                      lorem Ipsum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="our-services ssl">
                    <div className="icon">
                      <Image src="/five.png" width={50} height={50} alt="" />
                    </div>
                    <h4>SSL Secured</h4>
                    <p>
                      Lorem Ipsum dolor sit amet, consectetur adipisicing elit
                      lorem Ipsum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="our-services database">
                    <div className="icon">
                      <Image src="/six.png" width={50} height={50} alt="" />
                    </div>
                    <h4>Database</h4>
                    <p>
                      Lorem Ipsum dolor sit amet, consectetur adipisicing elit
                      lorem Ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
