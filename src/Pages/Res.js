import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Res.scss";
import Arrow from "../Components/Arrow";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Res() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState("");
  const [list, setList] = useState([]);
  const [showcust, setShowcust] = useState(true);
  const [showorder, setShoworder] = useState(true);
  const [showrev, setShowrev] = useState(true);
  const [showadd, setShowadd] = useState(true);
  let rev = (
    <div>
      <p>926</p>
    </div>
  );

  if (showrev) {
    rev = (
      <div>
        <p></p>
      </div>
    );
  }

  let orderline = (
    <div>
      <div>
        <CancelIcon
          onClick={() => {
            setShoworder(!showorder);
          }}
        />
      </div>
      <table className="cust_table">
        <tr>
          <th>ID</th>
          <th>Odered Item</th>
          <th>Price</th>
          <th>Time Taken(In Minutes)</th>
        </tr>

        <tr>
          <td>1</td>
          <td>Pizaa</td>
          <td>150</td>
          <td>30</td>
        </tr>
        <tr>
          <td>2</td>
          <td>French Fries</td>
          <td>99</td>
          <td>15</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Burger</td>
          <td>299</td>
          <td>45</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Milk-Shake</td>
          <td>199</td>
          <td>10</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Pasta</td>
          <td>179</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Maximum Time Taken</td>
          <td>45</td>
        </tr>
        <tr>
          <td>
            <button
              onClick={() => {
                setShowrev(!showrev);
                console.log(showrev);
              }}
            >
              Click To See Total Revenue
            </button>
          </td>
          <td>{rev}</td>
        </tr>
      </table>
    </div>
  );

  // const deletedata = (name) => {
  //   Axios.delete(`http://localhost:3001/api/customer/delete/${name}`);
  // };

  // const submitDetails = () => {
  //   Axios.post("http://localhost:3001/api/insert", {
  //     Name: name,
  //     Phone: phone,
  //     Address: address,
  //     Region: region,
  //     Id: id,
  //   });

  //   setList([
  //     ...list,
  //     {
  //       cName: name,
  //       cPhone: phone,
  //       cAddress: address,
  //       cRegion: region,
  //       cId: id,
  //     },
  //   ]);
  // };

  // let add = (
  //   <div className="cust_add">
  //     <div>
  //       <CancelIcon
  //         onClick={() => {
  //           setShowadd(!showadd);
  //           console.log(showadd);
  //         }}
  //       />
  //     </div>
  //     <input
  //       placeholder="Enter ID"
  //       type="text"
  //       name="Id"
  //       onChange={(e) => {
  //         setId(e.target.value);
  //       }}
  //     ></input>
  //     <input
  //       placeholder="Enter Name"
  //       type="text"
  //       name="Name"
  //       onChange={(e) => {
  //         setName(e.target.value);
  //       }}
  //     ></input>
  //     <input
  //       placeholder="Enter Phone"
  //       type="text"
  //       name="Phone"
  //       onChange={(e) => {
  //         setPhone(e.target.value);
  //       }}
  //     ></input>
  //     <input
  //       placeholder="Enter Address"
  //       type="text"
  //       name="Address"
  //       onChange={(e) => {
  //         setAddress(e.target.value);
  //       }}
  //     ></input>
  //     <input
  //       placeholder="Enter Region"
  //       type="text"
  //       name="Region"
  //       onChange={(e) => {
  //         setRegion(e.target.value);
  //       }}
  //     ></input>

  //     <button onClick={submitDetails}>ADD</button>
  //   </div>
  // );

  let table = (
    <div>
      <div>
        <CancelIcon
          onClick={() => {
            setShowcust(!showcust);
            console.log(showcust);
          }}
        />
      </div>
      <table className="cust_table">
        <tr>
          <th>NAME</th>
          <th>PRICE</th>
        </tr>
        {list.map((val) => {
          return (
            <tr>
              <td key={val.rId}>{val.itemName}</td>
              <td key={val.rId}>{val.itemPrice}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );

  if (showcust) {
    table = (
      <div className="cust_hide">
        <h1>MENU</h1>
        <div
          onClick={() => {
            setShowcust(!showcust);
            console.log(showcust);
          }}
        >
          <Arrow />
        </div>
      </div>
    );
  }

  if (showorder) {
    orderline = (
      <div className="cust_hide">
        <h1>ORDERLINE</h1>
        <div
          onClick={() => {
            setShoworder(!showorder);
          }}
        >
          <Arrow />
        </div>
      </div>
    );
  }

  // if (showadd) {
  //   add = (
  //     <div className="cust_hide">
  //       <h1>ADD DATA</h1>
  //       <div
  //         onClick={() => {
  //           setShowadd(!showadd);
  //           console.log(showadd);
  //         }}
  //       >
  //         <Arrow />
  //       </div>
  //     </div>
  //   );
  // }
  useEffect(() => {
    Axios.get("http://localhost:3001/api/res").then((response) => {
      setList(response.data);
    });
  });
  return (
    <div className="res">
      <div className="cust_img">
        <img
          // src="https://www.cogneesol.com/blog/wp-content/uploads/2018/03/Restaurant-Business.jpg"
          src="https://fruition-design.co.uk/wordpress/wp-content/uploads/2018/05/devon-design-agency-interior-graphic-web-digital-inspirational-creative-attract-customers-bar-restaurant.jpg"
          alt=""
        ></img>
      </div>
      <div className="cust_greet">
        <h1>MENU ITEM</h1>
      </div>
      {table}
      {orderline}
      {/* {add} */}
    </div>
  );
}

export default Res;
