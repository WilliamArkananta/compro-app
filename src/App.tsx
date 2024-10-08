import Navbar from "./component/nav/Navbar";
import About from "./pages/aboutSection/About";
import Hero from "./pages/heroSection/Hero";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <svg
        className="absolute top-0 -z-10"
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
    </>
  );
}
