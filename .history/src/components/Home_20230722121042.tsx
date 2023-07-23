import UserAvatar from "./UserAvatar";
import PostBox from "./feed/PostBox";
import PostCard from "./feed/PostCard";
import Navbar from "./header/Navbar";
import Layout from "./layout/Layout";

const Home = () => {
  return (
    <div className="flex flex-col mt-5 h-screen px-5  space-y-5">
      <Layout>
        <main className="lg:mx-auto lg:w-1/3 space-y-5">
          <section className="post-area flex space-x-5">
          

            <PostBox />
          </section>
          <section className="space-y-5">
            <PostCard comments={[]} />
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
