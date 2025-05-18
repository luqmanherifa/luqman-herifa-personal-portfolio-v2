import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    document.title = "Luqman Footer";
  }, []);

  return (
    <footer className="py-4">
      <div className="max-w-screen-xl mx-auto flex w-full justify-center p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-slate-400 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/luqmanherifa"
            target="_blank"
            className="hover:text-white hover:underline"
            rel="noreferrer"
          >
            Luqman Herifa
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
