import { Link } from "react-router";
import style from "./Home.module.css";
import { White_Button } from "../components/ui/white-button";
import { Blue_Button } from "../components/ui/blue-button";
import { Deal_component } from "../components/ui/deal_component";
import data from "../api/home.json";
import { Item } from "../components/ui/items";
import item from "../api/home2.json";
import services from "../api/services.json";
import flags from "../api/flags.json";

export function Home() {
  return (
    <>
      <main>
        <section className={style.hero_section}>
          <div className={style.box}>
            <Link className={style.link}>Automobiles</Link>
            <Link className={style.link}>Clothes and wear</Link>
            <Link className={style.link}>Home interiors</Link>
            <Link className={style.link}>Computer and tech</Link>
            <Link className={style.link}>Tools, equipments</Link>
            <Link className={style.link}>Sports and outdoor</Link>
            <Link className={style.link}>Animal and pets</Link>
            <Link className={style.link}>Machinery tools</Link>
            <Link className={style.link}>More category</Link>
          </div>
          <div className={style.box2}>
            <div className={style.text}>
              Latest trending <br />
              <span className={style.bold}>Electronic items</span>
            </div>
            <div className="btn">
              <Link className={style.link_btn}>
                <White_Button
                  to={"#"}
                  padding={"10.5px 16px"}
                  text={"Learn more"}
                  color={"#000"}
                />
              </Link>
            </div>
          </div>
          <div className={style.box0}>
            <div className={style.box3}>
              <div className={style.one}>
                <img
                  src="/public/images/Avatar.png"
                  alt="user_profile"
                  height={44}
                  width={44}
                />
                <p
                  style={{
                    width: "130px",
                    height: "38px",
                  }}
                >
                  Hello user,
                  <br />
                  Let's get started
                </p>
              </div>
              <Link className={style.link_btn2}>
                <Blue_Button to={"#"} padding={"7px 60px"} text={"Join now"} />
              </Link>

              <Link className={style.link_btn2}>
                <White_Button
                  to={"#"}
                  padding={"7px 71px"}
                  text={"Log in"}
                  color={"#0067FF"}
                />
              </Link>
            </div>
            <div className={style.box4} style={{ backgroundColor: "#F38332" }}>
              <p className={style.btext}>Get US $10 off with a new supplier</p>
            </div>
            <div className={style.box4} style={{ backgroundColor: "#55BDC3" }}>
              <p className={style.btext}>
                Send quotes with supplier preferences
              </p>
            </div>
          </div>
        </section>
        <section className={style.offer_section}>
          <div className={style.box1}>
            <div
              style={{ fontSize: "20px", fontWeight: "600", color: "#1C1C1C" }}
            >
              Deals and offers
            </div>
            <div style={{ color: "#8B96A5" }}>Hygiene equipments</div>
            <br />
            <img src="/public/images/time.png" alt="time" />
          </div>
          <div className={style.box2}>
            <Deal_component
              img={"/public/images/img_watch.png"}
              title={"Smart watches"}
              discount={"-25%"}
            />
            <Deal_component
              img={"/public/images/image 34.png"}
              title={"Laptops"}
              discount={"-15%"}
            />
            <Deal_component
              img={"/public/images/image 28.png"}
              title={"GoPros cameras"}
              discount={"-40%"}
            />
            <Deal_component
              img={"/public/images/image 29.png"}
              title={"Headphone"}
              discount={"-25%"}
            />
            <Deal_component
              img={"/public/images/image 23.png"}
              title={"Canon cameras"}
              discount={"-25%"}
            />
          </div>
        </section>
        <section className={style.Items}>
          <div className={style.box1}>
            <div
              style={{ fontSize: "20px", fontWeight: "600", color: "#1C1C1C" }}
            >
              Home and <br /> outdoor
            </div>
            <Link className={style.btn}>
              <White_Button
                to={"#"}
                padding={"10.5px 16px"}
                text={"Source now"}
                color={"#000"}
              />
            </Link>
          </div>
          <div className={style.data}>
            <ul className={style.list}>
              {data.map((item, index) => (
                <Item item={item} key={index} />
              ))}
            </ul>
          </div>
        </section>
        <section className={style.Items2}>
          <div className={style.box1}>
            <div
              style={{ fontSize: "20px", fontWeight: "600", color: "#1C1C1C" }}
            >
              Consumer <br />
              electronics and <br /> gadgets
            </div>
            <Link className={style.btn}>
              <White_Button
                to={"#"}
                padding={"10.5px 16px"}
                text={"Source now"}
                color={"#000"}
              />
            </Link>
          </div>
          <div className={style.data}>
            <ul className={style.list}>
              {data.map((item, index) => (
                <Item item={item} key={index} />
              ))}
            </ul>
          </div>
        </section>
        <section className={style.supplier}>
          <div className={style.left}>
            An easy way to send <br /> requests to all suppliers
            <br />
            <span className={style.L_span}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </span>
          </div>
          <div className={style.right}>
            <div className={style.text}>Send quote to suppliers</div>
            <input
              type="text"
              name="text"
              id={style.text}
              value="What item you need?"
              readOnly
            />
            <br />
            <textarea
              name="more_detail"
              id={style.detail}
              cols={30}
              rows={5}
              placeholder="Type more detail"
            ></textarea>
            <br />
            <input
              type="number"
              name="Quantity"
              id={style.Quantity}
              value=""
              placeholder="Quantity"
            />
            <select name="pics" id={style.pic}>
              <option value="pics" selected>
                pics
              </option>
            </select>
            <br />
            <Link to={"#"} id={style.btn}>
              <Blue_Button
                to={"#"}
                padding={"10.5px 16px"}
                text={"Send Inquiry"}
              />
            </Link>
          </div>
        </section>
        <section className={style.Recomendation}>
          <div className={style.text}>Recomended items</div>
          <div className={style.item_grid}>
            <ul className={style.grid}>
              {item.map((item, index) => (
                <Link id={style.link}>
                  <li key={index}>
                    <div className={style.grid_container}>
                      <div className={style.imgBox}>
                        <img src={item.img} alt="image" className={style.img} />
                      </div>
                      <div className={style.price}>{item.price}</div>
                      <div className={style.desc}>{item.description}</div>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </section>
        <section className={style.services}>
          <div
            style={{
              margin: "5px 0px 0px 0px",
              fontWeight: "600",
            }}
          >
            Our Extra Service
          </div>
          <div className={style.box}>
            <ul className={style.flex}>
              {services.map((item, index) => (
                <li key={index}>
                  <div className={style.container}>
                    <div className={style.imgBox}>
                      <img src={item.img} alt="image" className={style.img} />
                    </div>
                    <p className={style.text}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className={style.suppliers}>
          <div
            style={{
              fontWeight: 600,
              fontSize: "20px",
            }}
          >
            Supplier by region
          </div>
          <ul className={style.grid}>
            {flags.map((item, index) => (
              <li key={index}>
                <div className={style.container}>
                  <div className={style.ib}>
                    <img src={item.img} alt="flag" />
                  </div>
                  <div className={style.textbox}>
                    <p>{item.title}</p>
                    <p>{item.name}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
