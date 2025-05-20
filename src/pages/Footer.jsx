const Footer = () => {
  return (
    <footer className="py-4">
      <div className="max-w-screen-xl mx-auto flex w-full justify-center p-6">
        <span className="text-sm text-slate-400 dark:text-blue-600 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/luqmanherifa"
            target="_blank"
            className="hover:text-white hover:underline dark:hover:text-blue-800"
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
