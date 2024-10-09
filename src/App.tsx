import Navbar from "./component/nav/Navbar";
import About from "./pages/aboutSection/About";
import Hero from "./pages/heroSection/Hero";
import Tools from "./pages/toolsSection/Tools";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tools />
      <div className="vector">
        <svg
          className="absolute top-1 -z-10"
          xmlns="http://www.w3.org/2000/svg"
          width="305"
          height="611"
          viewBox="0 0 305 611"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.3226 -22.7962C84.4288 -16.1508 151.554 6.21933 201.853 55.504C252.69 105.315 274.549 172.729 285.628 243.035C299.547 331.364 325.693 429.211 272.01 500.722C214.223 577.703 107.846 627.225 14.3226 604.447C-72.4712 583.308 -86.4624 469.412 -142.428 399.785C-187.163 344.131 -263.352 313.277 -276.181 243.035C-290.848 162.729 -272.708 71.3387 -212.483 16.229C-153.65 -37.6077 -65.0696 -30.3218 14.3226 -22.7962Z"
            fill="#003366"
            fill-opacity="0.05"
          />
        </svg>
        <svg
          className="absolute top-[20rem] right-0 -z-10"
          xmlns="http://www.w3.org/2000/svg"
          width="412"
          height="590"
          viewBox="0 0 412 590"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M285.513 3.18548C366.752 -10.1706 450.592 19.4383 512.335 73.8998C577.903 131.734 634.608 214.09 622.831 300.723C611.695 382.643 522.084 420.967 458.048 473.258C404.127 517.29 354.091 564.201 285.513 576.174C201.08 590.915 99.7641 607.671 39.9873 546.248C-19.5998 485.019 0.475182 384.458 17.4465 300.723C30.7904 234.885 77.7754 187.859 122.74 137.95C171.755 83.5467 213.255 15.0648 285.513 3.18548Z"
            fill="#003366"
            fill-opacity="0.05"
          />
        </svg>
        <svg
          className="absolute top-[50rem] left-0 -z-10"
          xmlns="http://www.w3.org/2000/svg"
          width="459"
          height="602"
          viewBox="0 0 459 602"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M125.099 11.5229C208.447 2.2452 300.298 -17.5573 366.015 34.5412C436.042 90.0572 459.554 186.106 458.025 275.457C456.523 363.261 420.652 446.825 357.908 508.266C295.82 569.065 211.913 605.291 125.099 601.47C41.5991 597.795 -36.5154 554.414 -88.079 488.635C-134.544 429.36 -134.264 350.677 -130.46 275.457C-126.913 205.319 -116.407 133.255 -67.5553 82.8031C-18.0401 31.6651 54.3539 19.3977 125.099 11.5229Z"
            fill="#003366"
            fill-opacity="0.05"
          />
        </svg>
        <svg
          className="absolute top-[72rem] right-0 -z-10"
          xmlns="http://www.w3.org/2000/svg"
          width="347"
          height="546"
          viewBox="0 0 347 546"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M271.131 21.707C350.668 16.4141 442.384 -27.2534 501.116 26.6418C560.209 80.8684 522.413 176.562 527.134 256.626C532.413 346.158 593.456 452.114 529.937 515.431C466.415 578.751 359.785 525.413 271.131 511.816C202.335 501.264 131.824 494.32 81.1576 446.6C29.0644 397.536 2.25156 328.157 0.183694 256.626C-1.94914 182.848 14.0802 103.692 69.8468 55.3414C123.277 9.01588 200.571 26.4026 271.131 21.707Z"
            fill="#003366"
            fill-opacity="0.05"
          />
        </svg>
        <img
          className="absolute top-[95rem] left-0 -z-10"
          src="public/background/Jajargenjang.png"
          alt=""
        />
        <img
          className="absolute top-[112rem] right-0 -z-10"
          src="public/background/Ring.png"
          alt=""
        />
      </div>
    </>
  );
}
