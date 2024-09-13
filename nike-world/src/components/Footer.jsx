const Footer = ({ footerAPI }) => {
  return (
    <footer className="bg-theme text-white py-8 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {footerAPI.titles.map((titleItem, index) => (
            <div key={index}>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-white">
                {titleItem.title}
              </h3>
              <ul className="space-y-2">
                {footerAPI.links[index].map((linkItem, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm md:text-base"
                    >
                      {linkItem.link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 text-gray-400 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Nike, Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
