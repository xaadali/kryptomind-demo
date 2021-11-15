import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
const about = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container-fluid mt-5 about-style" id="aboutid">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <h1 className="text-center main-heading">About Us</h1>
            <p className="text-center sub-heading">
              grow your BUSINESS with us
            </p>
            <div className="row">
              <div className="col-md-6 col-12 hero-text">
                <figure>
                  <Image
                    src="/about.svg"
                    width="500%"
                    height="500%"
                    alt="herosection_img"
                  />
                </figure>
              </div>

              <div className="col-md-6 col-12 hero-text d-flex justify-content-center align-items-start flex-column">
                <h2>WE ARE THE PROFESSIONALL DEVELOPERS</h2>
                <p>
                  Welcome to , <span>KryptoMind. </span>
                  We are a top team of indefatigable blockchain developers. Over
                  the years, we have chiseled our expertise in blockchain
                  development. Our talented developers paved their way from
                  early bird in blockchain revolution to masters in
                  cryptocurrencies, consensus algorithms, individual nodes, and
                  blockchain architectures. Our forte lies in assisting the
                  amazing companies with business-ready blockchain solution
                </p>
                <button className="btn-style btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
