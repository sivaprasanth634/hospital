import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from 'react-icons/bs';
const SocialsDiv = () => {
  return (
    <div className="flex gap-3 my-3 text-2xl ml-1">
      <a target="_blank" href="https://www.linkedin.com/in/vaigaivendhan/">
        <BsLinkedin />
      </a>
      <a target="_blank" href="https://github.com/vaigai138">
        <BsGithub />
      </a>
      <a target="_blank" href="https://www.facebook.com/">
        <BsFacebook />
      </a>
      <a target="_blank" href="https://www.instagram.com/kv_creationsofficial_">
        <BsInstagram />
      </a>
      <a target="_blank" href="https://twitter.com/">
        <BsTwitter />
      </a>
    </div>
  );
};

export default SocialsDiv;
