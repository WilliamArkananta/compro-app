import CtaButton from "../../component/CtaButton";
import SlideUpText from "./SlideUpText";

export default function Hero() {
  return (
    <section className="flex justify-center items-center">
      <div className="relative h-[637px]">
        <svg
          style={{ top: "56px" }}
          className="absolute"
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
        <img
          className="absolute bottom-[70px] animate-[spin_10s_linear_infinite]"
          src="public/circle.png"
        />
        <img
          className="absolute top-[100px] left-[430px] animate-spin-slow"
          src="public/square.png"
        />
        <img
          className="relative left-[-40px] top-[10px] animate-floating"
          src="public/rocket.png"
        />
      </div>
      <div className="hero-text flex w-[564px] flex-col items-start gap-6 shrink-0">
        <div className="headline">
          <h1 className="text-h1 font-bold">Designing Highly</h1>
          <SlideUpText />
          <h1 className="text-h1 font-bold">Digital Experiences</h1>
        </div>
        <p className="self-stretch text-h4">
          I create user-centered UI/UX designs that solve problems and elevate
          brands.
        </p>
        <CtaButton href="#">Explore My Work!</CtaButton>
      </div>
      <img
        className="absolute top-[3rem] right-6 animate-spin-slow -z-10"
        src="public/triangle.png"
      />
      <img
        className="absolute top-[30rem] right-[7rem] animate-spin-slow -z-10"
        src="public/cross.png"
      />
    </section>
  );
}
