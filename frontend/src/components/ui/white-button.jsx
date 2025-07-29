import { Link } from "react-router";

export function White_Button({ to, text, padding, color }) {
  return (
    <>
      <Link
        style={{
          padding: padding,
          backgroundColor: "#fff",
          color: color,
          textDecoration: "none",
          borderRadius: "6px",
        }}
        to={to}
      >
        {text}
      </Link>
    </>
  );
}
