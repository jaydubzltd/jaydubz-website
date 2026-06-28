import { FaInstagram, FaTiktok, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Socials() {
  return (
    <section className="socials">
      <a href="https://instagram.com/jaydubz999" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>

      <a href="https://x.com/jaydubz911" target="_blank" rel="noreferrer">
        <FaXTwitter />
      </a>

      <a href="https://tiktok.com/@jaydubz999" target="_blank" rel="noreferrer">
        <FaTiktok />
      </a>

      <a href="https://t.me/JayDubz" target="_blank" rel="noreferrer">
        <FaTelegramPlane />
      </a>
    </section>
  );
}