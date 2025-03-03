import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50"
        style={{ backgroundColor: "#FBCFE8" }}
      >
        <a className="btn btn-ghost text-xl">S</a>
      </div>
      <div className="w-screen h-[calc(100vh-4rem)] mt-16 relative">
        <Image
          src="/first-pic.JPG"
          alt="Profile image"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </div>
  );
}
