import { NextPage } from "next";
import Footer from "./Footer";
import Header from "./Header";

const Layout: NextPage<any> = ({ children }: any) => {
  return (
    <>
      <Header />
        { children }
      <Footer />
    </>
  )
}

export default Layout;