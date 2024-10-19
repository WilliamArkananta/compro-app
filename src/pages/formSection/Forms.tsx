import React from "react";
import CtaButton from "../../component/CtaButton";
import { motion } from "framer-motion";

const socialMedia = [
  {
    icon: "public/socmedIcon/Linkedin.svg",
    alt: "Linkedin",
    href: "https://www.linkedin.com/in/williamarkanantar/",
  },
  {
    icon: "/socmedIcon/Gmail.svg",
    alt: "Gmail",
    href: "mailto:wsereh@gmail.com",
  },
  {
    icon: "/socmedIcon/Dribbble.svg",
    alt: "Dribbble",
    href: "https://dribbble.com/search/shots/popular/mobile?q=home",
  },
  {
    icon: "/socmedIcon/Behance.svg",
    alt: "Behance",
    href: "https://www.behance.net/williamarkanan",
  },
];

const SocmedComponent: React.FC<{
  icon: string;
  alt: string;
  href: string;
}> = ({ icon, alt, href }) => {
  return (
    <motion.a
      href={href}
      className="p-4 justify-center items-center rounded-lg border border-solid border-[#989FE0] bg-glass-bg backdrop-blur-12"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileHover={{ backgroundColor: "#989FE0" }}
      whileTap={{
        background: "linear-gradient(142deg, #0575E6 18.43%, #021B79 86.59%)",
      }}
    >
      {typeof icon === "string" ? (
        <img src={icon} alt={alt} height={24} />
      ) : (
        icon
      )}
    </motion.a>
  );
};

const InputComponent: React.FC<{
  type: string;
  placeholder: string;
}> = ({ type, placeholder }) => {
  return (
    <div className="w-full rounded-lg bg-linear-accent p-1">
      <input
        className="flex h-full w-full items-center justify-center bg-background back p-4 rounded-[4px]"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

const TextareaComponent: React.FC<{
  placeholder: string;
}> = ({ placeholder }) => {
  return (
    <div className="w-full rounded-lg bg-linear-accent p-1">
      <textarea
        className="flex h-full w-full items-center justify-center bg-background back p-4 rounded-[4px]"
        placeholder={placeholder}
      />
    </div>
  );
};

const BackgroundSVG = () => (
  <svg
    className="absolute"
    style={{ top: "56px" }}
    width="562"
    height="562"
    viewBox="0 0 562 562"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_60_8257)">
      <rect
        x="17"
        y="12"
        width="512"
        height="512"
        rx="256"
        fill="url(#paint0_radial_60_8257)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_60_8257"
        x="0"
        y="0"
        width="562"
        height="562"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="8" dy="13" />
        <feGaussianBlur stdDeviation="12.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_60_8257"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_60_8257"
          result="shape"
        />
      </filter>
      <radialGradient
        id="paint0_radial_60_8257"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(184.424 104.672) rotate(51.4659) scale(437.228)"
      >
        <stop stop-color="#66CCFF" />
        <stop offset="0.355764" stop-color="#479AD1" />
        <stop offset="0.705" stop-color="#0B4E84" />
        <stop offset="1" stop-color="#003366" />
      </radialGradient>
    </defs>
  </svg>
);

const BackgroundImages = () => (
  <>
    <motion.img
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      //   className="absolute bottom-[70px]"
      src="public/background/circle.png"
      alt="Spinning circle"
    />
    <motion.img
      initial={{ rotate: 0 }}
      animate={{ rotate: -360 }}
      transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      className="absolute top-[100px] left-[430px]"
      src="public/background/square.png"
      alt="Spinning square"
    />
    {/* <motion.img
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="relative left-[-40px] top-[10px]"
      src="/rocket.png"
      alt="Floating rocket"
    /> */}
  </>
);

const Forms: React.FC = () => {
  return (
    <section className="flex w-full justify-center items-start gap-9 px-16">
      <div className="contact  flex flex-col items-start self-stretch gap-6">
        <h1 className="text-h1 text-content font-bold">
          Have a Project in Mind? Let’s Chat!
        </h1>
        <form
          className="flex flex-col items-start self-stretch gap-4"
          action=""
        >
          <InputComponent type="text" placeholder="Name" />
          <InputComponent type="email" placeholder="Email" />
          <TextareaComponent placeholder="Message" />
          <CtaButton isFullWidth type="submit" href="/">
            Send Message
          </CtaButton>
        </form>
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="215"
            height="1"
            viewBox="0 0 215 1"
            fill="none"
          >
            <path d="M0 0.5H214.5" stroke="black" />
          </svg>
          <p>or contact me via</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="215"
            height="1"
            viewBox="0 0 215 1"
            fill="none"
          >
            <path d="M0 0.5H214.5" stroke="black" />
          </svg>
        </div>
        <div className="flex justify-center items-center gap-4 self-stretch">
          {socialMedia.map((socmed, index) => (
            <SocmedComponent key={index} {...socmed} />
          ))}
        </div>
      </div>
      <div className="relative w-[538px] h-[637px]">
        <BackgroundSVG />
        <BackgroundImages />
      </div>
    </section>
  );
};

export default Forms;
