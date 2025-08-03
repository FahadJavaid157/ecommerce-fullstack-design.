import "./styles.css";
export function Deal_component({ img, title, discount }) {
  return (
    <>
      <div
        style={{
          height: "238px",
          width: "192px",
          borderLeft: "1px solid #DEE2E7",
        }}
        className="deal_box"
      >
        <div
          style={{
            height: "140px",
            width: "140px",
            margin: "8px auto",
          }}
        >
          <img
            src={img}
            alt="image"
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
          <br />
        </div>
        <div style={{ marginTop: "12px", textAlign: "center" }}>{title}</div>
        <div
          style={{
            width: "61px",
            height: "28px",
            borderRadius: "29px",
            margin: "7px auto 0px",
            backgroundColor: "#FFE3E3",
            fontSize: "14px",
            color: "#EB001B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {discount}
        </div>
      </div>
    </>
  );
}
