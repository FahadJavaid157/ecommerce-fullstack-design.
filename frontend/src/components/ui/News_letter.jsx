import { HiOutlineMail } from "react-icons/hi";
import "./styles.css";
import { Blue_Button } from "./blue-button";
export function Newsletter() {
  return (
    <>
      <div className="container">
        <div className="box">
          <p
            style={{
              fontSize: "20px",
              fontWeight: "600",
              textAlign: "center",
              width: "300px",
              position: "relative",
              left: "30px",
            }}
            className="text1"
          >
            Subcribe to our Newsletter
          </p>
          <p style={{}} className="text1">
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>
          <br />
          <div className="email">
            <HiOutlineMail
              style={{
                position: "relative",
                left: "30px",
                top: "-3px",
                zIndex: "100",
                color: "#8B96A5",
              }}
            />
            <input
              type="text"
              id="text"
              placeholder="Email"
              style={{
                color: "#8B96A5",
                padding: "8px 0px 8px 20px",
                fontSize: "16px",
              }}
            />
            <div style={{ position: "relative", top: "-4px" }}>
              <Blue_Button
                to={"#"}
                text={"Subscribe"}
                padding={"10.5px 16px"}
                style={{}}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
