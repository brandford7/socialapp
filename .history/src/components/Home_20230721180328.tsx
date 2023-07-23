import React from 'react'

const Home = () => {
  return (
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
  );
}

export default Home