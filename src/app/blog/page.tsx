import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";

const Blog = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "green",
          }}
        >
          coming soon....
        </h2>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
