import { useRouter } from "next/router";

const index = () => {
  const Router = useRouter();
  const Getnumber = Router.query.pageNo;
  console.log(Getnumber, Router);
  return (
    <div>
      <h1>inner {Getnumber}blog</h1>
    </div>
  );
};

export default index;
