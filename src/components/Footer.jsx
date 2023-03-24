import { github_logo, dribble, linkedin } from "../assets";
const Footer = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/mohammad-ali-zsg/", "_blank");
  };

  const handleDribbleClick = () => {
    window.open("https://dribbble.com/mza97", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/MohammadAliYT", "_blank");
  };
  return (
    <div className="w-screen flex justify-center py-5 bg-[#1d1836] h-15 space-between">
      <div className="space-x-10 flex">
        <img
          src={github_logo}
          onClick={handleGithubClick}
          alt="logo"
          className="w-9 h-9 object-contain cursor-pointer hover:bg-white-100 p-1 rounded-lg"
        />
        <img
          src={dribble}
          alt="logo"
          onClick={handleDribbleClick}
          className="w-24 h-9 object-contain cursor-pointer hover:bg-white-100 rounded-lg"
        />
        <img
          src={linkedin}
          onClick={handleLinkedInClick}
          alt="logo"
          className="w-9 h-9 object-contain cursor-pointer hover:bg-white-100 px-1.5 py-1 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Footer;
