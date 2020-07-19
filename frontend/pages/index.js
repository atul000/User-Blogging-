import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <div className="landing">
        <h1
          style={{
            paddingTop: "12%",
            fontFamily: "Optima, sans-serif",
            fontSize: "55px",
          }}
          className="text-center"
        >
          Multi User Blogging Network
        </h1>
        <br />
        <p className="text-center font-italic" style={{ fontSize: "22px" }}>
          In a World of Technology, People Make the Difference.
        </p>
        <div
          className="text-center font-weight-bold"
          style={{ fontSize: "20px" }}
        >
          Made with{" "}
          <i
            style={{ color: "red", alignItems: "center" }}
            className="fas fa-heart fa-2x"
          />{" "}
          by Atul
        </div>
        <br />
        <div className="buttons text-center">
          <a href="/signup" className="btn btn-primary mr-2">
            Sign Up
          </a>
          <a href="/signin" className="btn btn-light">
            Login
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
