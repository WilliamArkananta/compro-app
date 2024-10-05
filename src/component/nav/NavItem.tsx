interface Props {
  children: String;
  href: string;
}

export default function NavItem({ children, href }: Props) {
  return (
    <li>
      <a
        href={href}
        className="relative z-10 px-3 py-1 rounded-full overflow-hidden group active:text-background"
      >
        <span className="relative z-10 text-body">{children}</span>
        <span className="absolute opacity-15 active:opacity-100 bottom-0 left-1/2 w-0 h-0 bg-accent-primary active:bg-accent-secondary rounded-full transition-all duration-500 ease-out group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:scale-150 group-active:w-full group-active:h-full group-active:left-0 group-active:scale-150"></span>
      </a>
    </li>
  );
}
