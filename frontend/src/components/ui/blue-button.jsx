import { Link } from "react-router";

export function Blue_Button({ to, text, padding }) {
  return (
    <>
      <Link
        style={{
          padding: padding,
          backgroundImage: "linear-gradient(#127FFF, #0067FF)",
          color: "#fff",
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
