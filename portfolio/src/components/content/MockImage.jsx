import { Link } from "react-router-dom";

function MockImage({ src, link = "/projects", alt, height, width }) {
  return (
    <div style={{ height, width }}  className="mt-4 overflow-hidden rounded-lg group relative">
      <Link to={link} className="block relative">
        <div className="rounded-lg overflow-hidden">
          <img
            style={{ height }}
            src={src}
            alt={alt}
            className="w-full object-cover cursor-pointer transition duration-300 group-hover:blur-sm"
          />
        </div>

        <div style={{height }} className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            className="px-4 py-2 text-sm uppercase tracking-widest font-[JetBrains_Mono] bg-[#ffbe66] text-black rounded-lg shadow-md"
          >
            Click to view
          </button>
        </div>
      </Link>
    </div>
  );
}

export default MockImage;
