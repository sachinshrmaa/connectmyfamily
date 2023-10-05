import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t-[1px]">
      <div className="grid lg:grid-cols-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-2 py-1 flex flex-col justify-between">
          <p id="logo">Connect my Family</p>

          <div>
            <p>An open source project</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
