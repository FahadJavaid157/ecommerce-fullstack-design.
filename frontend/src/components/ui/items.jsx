export function Item({ item }) {
  const { Title, img, price } = item;
  return (
    <>
      <li>
        <div
          style={{
            width: "170px",
            height: "127px",
            borderLeft: "1px solid #DEE2E7",
            borderBottom: "1px solid #DEE2E7",
            padding: "16px 0px 0px 20px",
          }}
        >
          <div>{Title}</div>
          <div style={{ color: "#8B96A5" }}>
            From <br /> {price}
          </div>
          <div
            style={{
              height: "82px",
              width: "82px",
              position: "relative",
              top: "-30px",
              left: "60px",
            }}
          >
            <img
              src={img}
              alt="image"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </li>
    </>
  );
}
