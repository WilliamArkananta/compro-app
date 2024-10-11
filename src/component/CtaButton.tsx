interface Props {
  children: String;
  href: string;
}

export default function CtaButton({ children, href }: Props) {
  return (
    <a
      href={href}
      className="relative inline-flex py-4 px-6 justify-center items-center rounded-2xl overflow-hidden text-background transition-colors ease-in-out duration-300 before:absolute before:inset-0 before:bg-linear-main before:transition-opacity before:duration-300 before:opacity-100 hover:before:opacity-0 after:absolute after:inset-0 after:bg-button-hover after:transition-opacity after:duration-300 after:opacity-0 hover:after:opacity-100"
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}
