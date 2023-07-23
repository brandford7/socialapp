import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout children={undefined}>
        {" "}
        <Navbar />
        <main className="lg:mx-auto">
          <section className="post-area flex space-x-5">
            <UserAvatar name="Brand" />
            <PostBox />
          </section>
          <section>
            <PostCard />
          </section>
        </main>
      </Layout>
    </>
  );
}

export default App;
