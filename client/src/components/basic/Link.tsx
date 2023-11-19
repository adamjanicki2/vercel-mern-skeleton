import { forwardRef } from "react";
import { Link as DOMLink, LinkProps } from "react-router-dom";
import "src/components/basic/link.css";

type DefaultLinkProps = LinkProps & {
  unstyled?: boolean;
};

const Link = forwardRef<HTMLAnchorElement, DefaultLinkProps>(
  ({ className = "", unstyled, ...props }, ref) => {
    const linkClass = `default-link ${unstyled ? "" : "link"} ${className}`;
    return <DOMLink {...props} ref={ref} className={linkClass} />;
  }
);

export default Link;
