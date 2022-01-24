import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Customers.scss";
import Arrow from "../Components/Arrow";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Customers() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState("");
  const [list, setList] = useState([]);
  const [showcust, setShowcust] = useState(true);
  const [showadd, setShowadd] = useState(true);

  const deletedata = (name) => {
    Axios.delete(`http://localhost:3001/api/customer/delete/${name}`);
    alert("DELETED!!!");
  };

  const submitDetails = () => {
    Axios.post("http://localhost:3001/api/insert", {
      Name: name,
      Phone: phone,
      Address: address,
      Region: region,
      Id: id,
    });

    setList([
      ...list,
      {
        cName: name,
        cPhone: phone,
        cAddress: address,
        cRegion: region,
        cId: id,
      },
    ]);
    alert("Customer Data Added  ");
  };

  let add = (
    <div className="cust_add">
      <div>
        <CancelIcon
          onClick={() => {
            setShowadd(!showadd);
            console.log(showadd);
          }}
        />
      </div>
      <input
        placeholder="Enter ID"
        type="text"
        name="Id"
        onChange={(e) => {
          setId(e.target.value);
        }}
      ></input>
      <input
        placeholder="Enter Name"
        type="text"
        name="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        placeholder="Enter Phone"
        type="text"
        name="Phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      ></input>
      <input
        placeholder="Enter Address"
        type="text"
        name="Address"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      ></input>
      <input
        placeholder="Enter Region"
        type="text"
        name="Region"
        onChange={(e) => {
          setRegion(e.target.value);
        }}
      ></input>

      <button onClick={submitDetails}>ADD</button>
    </div>
  );

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
          <th>PHONE</th>
          <th>ADDRESS</th>
          <th>REGION</th>
          <th>DELETE</th>
        </tr>
        {list.map((val) => {
          return (
            <tr>
              <td key={val.cId}>{val.cName}</td>
              <td key={val.cId}>{val.cPhone}</td>
              <td key={val.cId}>{val.cAddress}</td>
              <td key={val.cId}>{val.cRegion}</td>
              <td>
                <DeleteForeverIcon
                  onClick={() => {
                    deletedata(val.cName);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );

  if (showcust) {
    table = (
      <div className="cust_hide">
        <h1>CUSTOMER DATA</h1>
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

  if (showadd) {
    add = (
      <div className="cust_hide">
        <h1>ADD DATA</h1>
        <div
          onClick={() => {
            setShowadd(!showadd);
            console.log(showadd);
          }}
        >
          <Arrow />
        </div>
      </div>
    );
  }
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setList(response.data);
    });
  });
  return (
    <div className="customer">
      <div className="cust_img">
        <img
          src="https://www.cogneesol.com/blog/wp-content/uploads/2018/03/Restaurant-Business.jpg"
          // src="https://fruition-design.co.uk/wordpress/wp-content/uploads/2018/05/devon-design-agency-interior-graphic-web-digital-inspirational-creative-attract-customers-bar-restaurant.jpg"
          alt=""
        ></img>
      </div>
      <div className="cust_greet">
        <h1>CUSTOMERS</h1>
      </div>
      {table}
      {add}
    </div>
  );
}

export default Customers;

{
  /* <div className="cust_greet">
        <h1>CUSTOMERS</h1>
      </div>
      <div className="cust_img">
        <img
          src="https://depressioncure.net/wp-content/uploads/2019/12/food-wallpaper-and-pics-1.jpeg"
          alt=""
        />
      </div>

      <table className="cust_table">
        <tr>
          <th>NAME</th>
          <th>PHONE</th>
          <th>ADDRESS</th>
          <th>REGION</th>
        </tr>
        {list.map((val) => {
          return (
            <tr>
              <td>{val.cName}</td>
              <td>{val.cPhone}</td>
              <td>{val.cAddress}</td>
              <td>{val.cRegion}</td>
            </tr>
          );
        })}
      </table> */
}
