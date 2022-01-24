import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Employee.scss";
import Arrow from "../Components/Arrow";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Employee() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [hours, setHours] = useState("");
  const [region, setRegion] = useState("");
  const [list, setList] = useState([]);
  const [supervisor, setSupervisor] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [showcust, setShowcust] = useState(true);
  const [showadd, setShowadd] = useState(true);
  const [showsup, setShowsup] = useState(true);
  const [showdri, setShowdri] = useState(true);
  const [showsup_add, setShowsup_add] = useState(true);

  const deletedata = (name) => {
    Axios.delete(`http://localhost:3001/api/employee/delete/${name}`);
  };

  const submitDetails = () => {
    Axios.post("http://localhost:3001/api/employee/insert", {
      Name: name,
      Phone: phone,
      Hours: hours,
      Region: region,
      Id: id,
    });
    if (!name) {
      alert("This field cannot be empty");
    }
    alert("Employee data updated");
  };
  const submitsup = () => {
    alert("SUpervisor cannot be added");
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/api/employee").then((response) => {
      setList(response.data);
    });

    Axios.get("http://localhost:3001/api/employee/supervisor").then(
      (response) => {
        setSupervisor(response.data);
      }
    );
    Axios.get("")
    

    Axios.get("http://localhost:3001/api/employee/driver").then((response) => {
      setDrivers(response.data);
    });
  });

  let sup = (
    <div className="cust_add">
      <div>
        <CancelIcon
          onClick={() => {
            setShowsup_add(!showsup_add);
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
        placeholder="Enter Supervisor's Name"
        type="text"
        name="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>

      <button onClick={submitsup}>ADD</button>
    </div>
  );

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
        placeholder="Enter Hours Worked"
        type="text"
        name="Hours"
        onChange={(e) => {
          setHours(e.target.value);
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
          <th>ID</th>
          <th>NAME</th>
          <th>REGION</th>
          <th>PHONE</th>
          <th>HOURS WORKED</th>
          <th>DELETE</th>
        </tr>
        {list.map((val) => {
          return (
            <tr>
              <td key={val.empId}>{val.empId}</td>
              <td key={val.empId}>{val.empName}</td>
              <td key={val.empId}>{val.empRegion}</td>
              <td key={val.empId}>{val.empPhone}</td>
              <td key={val.empId}>{val.empHours_worked}</td>
              <td>
                <DeleteForeverIcon
                  onClick={() => {
                    deletedata(val.empName);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );

  let supervisor_1 = (
    <div>
      <div>
        <CancelIcon
          onClick={() => {
            setShowsup(!showsup);
            console.log(showcust);
          }}
        />
      </div>
      <table className="cust_table">
        <tr>
          <th>ID</th>
          <th>SALARY</th>
        </tr>
        {supervisor.map((val) => {
          return (
            <tr>
              <td key={val.empId}>{val.empId}</td>
              <td key={val.empId}>{val.salary}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );

  let driver_1 = (
    <div>
      <div>
        <CancelIcon
          onClick={() => {
            setShowdri(!showdri);
            console.log(showcust);
          }}
        />
      </div>
      <table className="cust_table">
        <tr>
          <th>ID</th>
          <th>LICENSE NO</th>
          <th>WAGE</th>
          <th>SUPERVISOR_ID</th>
        </tr>
        {drivers.map((val) => {
          return (
            <tr>
              <td key={val.empId}>{val.empId}</td>
              <td key={val.empId}>{val.licenseNo}</td>
              <td key={val.empId}>{val.wage}</td>
              <td key={val.empId}>{val.supervisorId}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );

  if (showsup_add) {
    sup = (
      <div className="cust_hide">
        <h1>ADD SUPERVISOR</h1>
        <div
          onClick={() => {
            setShowsup_add(!showdri);
          }}
        >
          <Arrow />
        </div>
      </div>
    );
  }

  if (showdri) {
    driver_1 = (
      <div className="cust_hide">
        <h1>DRIVERS</h1>
        <div
          onClick={() => {
            setShowdri(!showdri);
          }}
        >
          <Arrow />
        </div>
      </div>
    );
  }

  if (showsup) {
    supervisor_1 = (
      <div className="cust_hide">
        <h1>SUPERVISOR</h1>
        <div
          onClick={() => {
            setShowsup(!showsup);
          }}
        >
          <Arrow />
        </div>
      </div>
    );
  }

  if (showcust) {
    table = (
      <div className="cust_hide">
        <h1>EMPLOYEE DATA</h1>
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
  return (
    <div className="employee">
      <div className="cust_img">
        <img
          src="https://restaurant.opentable.com/news/wp-content/uploads/sites/100/2017/08/First-Untitled-2.jpeg"
          // src="https://fruition-design.co.uk/wordpress/wp-content/uploads/2018/05/devon-design-agency-interior-graphic-web-digital-inspirational-creative-attract-customers-bar-restaurant.jpg"
          alt=""
        ></img>
      </div>
      <div className="cust_greet">
        <h1>EMPLOYEES</h1>
      </div>
      {table}
      {add}
      {supervisor_1}
      {driver_1}
      {sup}
    </div>
  );
}

export default Employee;
