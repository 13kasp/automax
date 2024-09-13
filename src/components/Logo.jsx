import { Link } from "react-router-dom";

export default function Logo({ className = "h-12", onClick = null }) {
  return (
    <Link to="/">
      <img
        src="../../../images/logo.webp"
        alt="logo"
        className={className}
        onClick={onClick}
      />
    </Link>
  );
}
