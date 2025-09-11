import './index.css';
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <h1 className="departure-mono text-2xl mb-4">
        Departure Mono Example
      </h1>

      <p className="jet-mono-regular text-lg mb-4">
        JetBrains Mono Example
      </p>

      <h1 className="text-3xl font-bold underline">Portfolio</h1>
    </Layout>
  );
}

export default App;
