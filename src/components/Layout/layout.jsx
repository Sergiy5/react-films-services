import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "components/Header/nav";
import Loader from "components/Loader/loader";



const Layout = () => {
    return (
      <>
        <Header />
        <Suspense fallback={<div><Loader /></div>}>
          <Outlet />
        </Suspense>
      </>
    );
}

export default Layout;