import * as React from 'react'
import Layout from "./components/Layout";


interface Props {
  children: React.Node;
}

function App() {
  return (
    <>
      <Layout></Layout>
    </>
  );
}

export default App;
