import SlideListArea from "./SlideListArea";

export default function Home() {
  return (
    <div>
      <div
        className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50"
        style={{ backgroundColor: "#FBCFE8" }}
      >
        <a className="btn btn-ghost text-xl">S</a>
      </div>

      <SlideListArea />
    </div>
  );
}
