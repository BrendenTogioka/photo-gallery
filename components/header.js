import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-[90px] px-6">
      <div className="">Photography Portfolio</div>
      <Link
        href="#"
        className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
      >
        Get In Touch
      </Link>
    </header>
  );
}
