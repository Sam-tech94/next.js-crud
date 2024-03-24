import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 px-8 py-3 flex justify-between items-center">
      <Link className="text-white font-bold" href="/">Coding</Link>
      <Link className="bg-white p-2" href="/addTopic">Add Topic</Link>
    </nav>
  );
};

export default Navbar;