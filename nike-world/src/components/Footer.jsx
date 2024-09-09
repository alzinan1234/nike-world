const Footer = ({ footerAPI }) => {
  return (
    <footer className="bg-theme text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerAPI.titles.map((titleItem, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 text-black">
                {titleItem.title}
              </h3>
              <ul className="space-y-2 text-gray-800">
                {footerAPI.links[index].map((linkItem, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-800 hover:text-white transition-colors duration-300"
                    >
                      {linkItem.link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 text-gray-900 text-sm">
          &copy; {new Date().getFullYear()} Nike, Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
