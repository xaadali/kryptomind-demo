import { useRouter } from "next/router";

const blog1 = () => {
  const GetRouter = useRouter();
  const Getuserstring = GetRouter.query.new;
  return (
    <div>
      <h1>welcome to our new blog 2 {Getuserstring}</h1>
    </div>
  );
};

export default blog1;
