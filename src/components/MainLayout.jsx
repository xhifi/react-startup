import Navigation from "./Navigation";
import Footer from "./Footer";

export default function MainLayout(props) {
  return (
    <div>
      <Navigation
        data={[
          { name: "Home", path: "/" },
          { name: "About", path: "about" },
          { name: "Blog", path: "/blog" },
          { name: "Contact", path: "contact" },
          { name: "Google", path: "https://www.google.com" },
        ]}
      />
      {props.children}
      <Footer data={["Home", "About", "Blog"]} />
    </div>
  );
}
