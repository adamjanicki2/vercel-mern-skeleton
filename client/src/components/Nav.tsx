import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Box, TripleFade as Hamburger } from "@adamjanicki/ui";
import Link, { UnstyledLink } from "src/components/Link";
import "src/components/nav.css";

type NavlinkProps = {
  to: string;
  children: React.ReactNode;
};

export default function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const Navlink = (props: NavlinkProps) => (
    <li className="navlink-li">
      <Link className="navlink" onClick={closeMenu} {...props} />
    </li>
  );

  return (
    <nav className="flex items-center justify-between w-100 nav pv2 ph4">
      <Box
        layout={{ axis: "x", align: "center", justify: "between" }}
        className="bar-container"
      >
        <UnstyledLink className="nav-title" to="/">
          React Skeleton
        </UnstyledLink>
        <Box className="mobile">
          <Hamburger open={open} onClick={() => setOpen(!open)} />
        </Box>
      </Box>
      <ul
        className="flex items-center desktop link-container ma0"
        style={{ display: open ? "flex" : undefined }}
      >
        <Navlink to="/">Home</Navlink>
        <Navlink to="/about/">About</Navlink>
        <Navlink to="/api-test/">API Test</Navlink>
      </ul>
    </nav>
  );
}
