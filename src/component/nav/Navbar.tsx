import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav className="border-b bg-glass-bg backdrop-blur-6">
      <ul className="flex justify-center p-6 gap-[4.5rem] items-center">
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Project</NavItem>
        <li>
          <a
            href="#"
            className="text-h4 font-medium px-6 py-3 transition-all duration-200 ease-in-out hover:opacity-60"
          >
            WILLIAM.
          </a>
        </li>
        <NavItem href="#">Contact</NavItem>
        <NavItem href="#">Resume</NavItem>
      </ul>
    </nav>
  );
}
