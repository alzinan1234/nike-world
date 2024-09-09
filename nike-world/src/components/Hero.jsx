import Navbar from "./NavBar";
import Clips from "./utils/clips";

const Hero = ({
  heroapi: {
    btntext = "Default Text",
    img = "",
    sociallinks = [],
    subtitle = "",
    videos = [],
    title = "",
  } = {},
}) => {
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        {/* Background Theme */}
        <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"></div>

        {/* Content Section */}
        <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
          <div className="grid items-center justify-items-center mt-28 md:mt-24 text-center">
            {/* Title */}
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-bold">
              {title || "Default Title"}
            </h1>

            {/* Subtitle */}
            <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-extrabold filter drop-shadow-md text-slate-200">
              {subtitle || "Default Subtitle"}
            </h1>

            {/* Button */}
            <button
              type="button"
              className="button-theme bg-slate-300 shadow-slate-200 rounded-xl my-5"
            >
              {btntext || "Shop Now"}
            </button>

            {/* Clips Section */}
            <div className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto">
              {videos && videos.length > 0 ? (
                videos.map((val, i) => (
                  <Clips key={i} imgsrc={val.imgsrc} clip={val.clip} />
                ))
              ) : (
                <p>No videos available</p>
              )}
            </div>

            {/* Social Links Section (if needed) */}
            <div className="grid items-center  md:gap-3 absolute top-[33vh] lg:top-[27vh] right-0 gap-3">
              {sociallinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
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
              className="w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill"
              src={img || "default-image.jpg"}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
