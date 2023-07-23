import Navbar from "./components/header/Navbar";
import Layout from "./components/Layout/Layout";
import PostCard from "./components/Post/PostCard";
import PostBox from "./components/Post/PostBox";
import UserAvatar from "./components/UserAvatar";

function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <main className="lg:mx-auto lg:w-1/3 space-y-5">
          <section className="post-area flex space-x-5">
            <UserAvatar name="Brand" />

            <PostBox />
          </section>
          <section className="space-y-5">
            <PostCard />
          </section>
        </main>
      </Layout>
    </>
  );
}

export default App;
