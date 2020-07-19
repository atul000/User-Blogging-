import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <div className="landing">
        <h1>Index</h1>

        <Link href="/signup">
          <a>signup</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Index;
