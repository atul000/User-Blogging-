import React, { useState } from "react";
import Router, { withRouter } from "next/router";
import { router } from "next/router";
import NProgress from "nprogress";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Search from "./blog/Search";
import ".././node_modules/nprogress/nprogress.css";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = ({ router }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hideSearchBar = () => {
    if (
      router.pathname === "/signin" ||
      router.pathname === "/signup" ||
      router.pathname === "/"
    ) {
      return null;
    } else {
      return <Search />;
    }
  };

  const toggle = () => setIsOpen(!isOpen);
  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink style={{ cursor: "pointer" }} className="font-weight-bold">
            {APP_NAME}
          </NavLink>
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <React.Fragment>
              <NavItem>
                <Link href="/blogs">
                  <NavLink style={{ cursor: "pointer" }}>Blogs</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>

            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link href="/signin">
                    <NavLink style={{ cursor: "pointer" }}>Signin</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/signup">
                    <NavLink style={{ cursor: "pointer" }}>Signup</NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}

            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link href="/user">
                  <NavLink style={{ cursor: "pointer" }}>
                    {`${isAuth().name}'s Dashboard`}
                  </NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <Link href="/admin">
                  <NavLink style={{ cursor: "pointer" }}>
                    {`${isAuth().name}'s Dashboard`}
                  </NavLink>
                </Link>
              </NavItem>
            )}
            {isAuth() && (
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => signout(() => Router.push(`/signin`))}
                >
                  Signout
                </NavLink>
              </NavItem>
            )}
            <NavItem>
              <Link href="/user/crud/blog">
                <NavLink
                  className="btn btn-primary text-light"
                  style={{ cursor: "pointer" }}
                >
                  Create Blog
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {hideSearchBar()}
    </React.Fragment>
  );
};

export default withRouter(Header);
