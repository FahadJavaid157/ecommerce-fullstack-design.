import "./styles.css";
export function Item({ item }) {
  const { Title, img, price } = item;
  return (
    <>
      <li>
        <div style={{}} className="Item_box">
          <div>{Title}</div>
          <div style={{ color: "#8B96A5" }}>
            From <br /> {price}
          </div>
          <div style={{}} className="pic">
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
