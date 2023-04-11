import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-10 flex justify-between items-center h-[90px] px-10">
      <span className="text-lg uppercase font-medium">
        Photography Portfolio
      </span>
      <Link
        href="#"
        className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
      >
        Get In Touch
      </Link>
    </header>
  );
}
