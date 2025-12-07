const Footer = () => {
  return (
    <footer className="max-w-7xl border border-[#2e1401]/10 mx-auto flex items-center px-7 md:px-10 h-24 md:h-24 bg-transparent">
      <div className="w-full flex flex-col md:flex-row items-center justify-between ">
        <div className="left-4  shrink-0">
          <img src="/Logo.svg" alt="" className="h-8 md:h-10 w-auto" />
        </div>

        <div className="mt-2.5 md:mt-0">
          <h3 className="text-[#2E1401]">
            Built by{" "}
            <a
              href="https://oluwatobii.xyz/"
              target="blank"
              className="text-[#2E1401]"
            >
              Coding Ninja 🥷🏾
            </a>
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
