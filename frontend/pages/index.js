import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <h1>Index</h1>
      <Link href="/signup">
        <a>signup</a>
      </Link>
    </Layout>
  );
};

export default Index;
