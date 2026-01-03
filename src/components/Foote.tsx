const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Nitya Mahata
        </p>

        <div className="flex gap-6 text-sm">
          <a className="hover:text-primary" href="https://github.com/NityaMahata/"  target="_blank">GitHub</a>
          <a className="hover:text-primary" href="https://linkedin.com/in/nitya-mahata-04104695"  target="_blank">LinkedIn</a>
          <a className="hover:text-primary" href="mailto:nitya040590@gmail.com"  target="_blank">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
