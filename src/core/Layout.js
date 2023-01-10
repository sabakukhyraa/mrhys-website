import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({ pageContent }) {
  return (
    <div>
      <Navbar />
      {pageContent}
      <Footer />
    </div>
  );
}
