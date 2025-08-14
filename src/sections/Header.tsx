import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10" >
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur items-center">
        {/* ✅ Logo - direct path from public folder */}
        <a href="#top" className="flex items-center px-3">
          <Image
            src="/UEM2.png" // ✅ use relative path from public/
            alt="Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
        </a>

        {/* ✅ Nav Links */}
        <a href="#home" className="nav-item">Home</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#about" className="nav-item">About</a>
        <a
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
