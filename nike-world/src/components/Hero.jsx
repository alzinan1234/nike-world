import Navbar from "./NavBar";
import Clips from "./utils/clips";

const Hero = ({
  heroapi: {
    btntext = "Shop Now",
    img = "",
    sociallinks = [],
    subtitle = "",
    videos = [],
    title = "",
  } = {},
}) => {
  return (
    <div className="relative h-auto w-full flex flex-col">
      {/* Background Theme */}
      <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-full absolute top-0 left-0 right-0 opacity-100 z-10"></div>

      {/* Content Section */}
      <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
        <div className="grid items-center justify-items-center mt-28 md:mt-24 text-center space-y-6">
          {/* Title */}
          <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-bold">
            {title || "Default Title"}
          </h1>

          {/* Subtitle */}
          <h2 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-extrabold text-slate-200 drop-shadow-md">
            {subtitle || "Default Subtitle"}
          </h2>

          {/* Button */}
          <button
            type="button"
            className="bg-slate-300 text-black py-2 px-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            {btntext}
          </button>

          {/* Clips Section */}
          <div className="absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto grid gap-5 md:gap-3 sm:left-0 sm:top-[20vh]">
            {videos && videos.length > 0 ? (
              videos.map((val, i) => (
                <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
              ))
            ) : (
              <p>No videos available</p>
            )}
          </div>

          {/* Social Links Section */}
          <div className="absolute top-[33vh] lg:top-[27vh] right-0 gap-3 md:gap-3 sm:right-0 sm:top-[20vh]">
            {sociallinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all"
              >
                <img
                  src={link.icon}
                  alt={`social-icon-${i}`}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-8">
          <img
            className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] transitions-theme -rotate-[25deg] hover:rotate-0 transition-transform cursor-pointer object-contain"
            src={img || "default-image.jpg"}
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
