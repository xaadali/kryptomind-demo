import Navbar from "../components/Navbar/Navbar";
import Gallery from "./gallery";
import Sevices from "./services";
import About from "./about";
import Contact from "./contact";
import Image from "next/image";
const index = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto mt-5">
            <div className="row">
              <div className="col-md-6 col-12 hero-text order-md-0 order-1 d-flex justify-content-center align-items-start flex-column">
                <h1>WE WILL HELP YOU</h1>
                <h1>GROW YOUR BUSINESS</h1>
                <p>
                  We Are The Team Of <span>Professional Developers</span>{" "}
                </p>
                <button className="btn-style  btn-primary">Read More</button>
              </div>

              <div className="col-md-6 col-12 hero-text order-md-1 order-0">
                <figure>
                  <Image
                    src="/growth.svg"
                    width="500%"
                    height="500%"
                    alt="herosection_img"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Sevices />
      <Gallery />
      <Contact />
    </>
  );
};

export default index;
