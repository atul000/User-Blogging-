import Layout from "../../../components/Layout";
import Link from "next/link";
import Admin from "../../../components/auth/Admin";
import BlogRead from "../../../components/crud/BlogRead";

const Blogs = () => {
  return (
    <Layout>
      <Admin>
        <div className="container">
          <div className="row">
            <div className="col-md-12 pt-4 pb-5">
              <h2>Manage Blog</h2>
            </div>

            <div className="col-md-12">
              <BlogRead />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Blogs;
