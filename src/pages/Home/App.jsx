import { useState } from "react";
import Register from "../../components/Register/Register";
import SignIn from "../../components/SignIn/SignIn";

function Home() {
  const [page, setPage] = useState(true);
  return (
    <>
      {page ? <SignIn setPage={setPage}/> : <Register setPage={setPage} />}
    </>
      );
}

export default Home;
