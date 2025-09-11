import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="layout min-h-screen flex flex-col bg-[#0c0c0c] text-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
