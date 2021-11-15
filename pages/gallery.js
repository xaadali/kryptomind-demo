import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
const gallery = () => {
  return (
    <div className="container gallery-style" id="gallery-style">
      {/* <Navbar /> */}
      <h1 className="text-center main-heading">Gallery</h1>
      <Image
        src="https://images.pexels.com/photos/9023667/pexels-photo-9023667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        width={300}
        height={400}
      />
      <Image
        src="https://images.pexels.com/photos/9406935/pexels-photo-9406935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        width={300}
        height={400}
      />
      <Image
        src="https://cdn2.vectorstock.com/i/1000x1000/07/91/one-page-website-flat-ui-ux-design-template-vector-5440791.jpg"
        width={300}
        height={400}
      />
      {/* <Image src="/social-media.png" width="500" height="400" /> */}
    </div>
  );
};

export default gallery;
