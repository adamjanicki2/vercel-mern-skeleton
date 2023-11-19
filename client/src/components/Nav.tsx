import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import "src/components/nav.css";
import Link from "src/components/basic/Link";

type NavlinkProps = {
  to: string;
  children: React.ReactNode;
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const Navlink = (props: NavlinkProps) => (
    <li className="navlink-li">
      <Link unstyled className="navlink" onClick={closeMenu} {...props} />
    </li>
  );

  return (
    <>
      <nav
        className={`flex items-center justify-between w-100 bg-near-black white nav pv2 ph4`}
      >
        <div className="flex items-center justify-between bar-container">
          <Link className="nav-title" to="/" unstyled>
            Skeleton
          </Link>
          <div className="mobile">
            <Hamburger
              toggled={open}
              onToggle={() => setOpen(!open)}
              direction="left"
              size={24}
              duration={0.3}
            />
          </div>
        </div>
        <ul
          className={`flex items-center desktop link-container`}
          style={{ display: open ? "flex" : undefined }}
        >
          <Navlink to="/">Home</Navlink>
          <Navlink to="/about/">About</Navlink>
        </ul>
      </nav>
      <div className="nav-padding" />
    </>
  );
};

export default Nav;
