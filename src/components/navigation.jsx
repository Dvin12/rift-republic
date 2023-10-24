import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Navigation() {
  return (
    <nav>
      <NavMobile />
      <NavDesktop />
    </nav>
  );
}
