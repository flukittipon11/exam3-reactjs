import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../components/RobotWalkScreen.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RobotWalkScreen() {
  const [input, setinput] = useState("");
  const [xAxis, setxAxis] = useState(0);
  const [yAxis, setyAxis] = useState(0);

  // fuction
  function robotwalk() {
    let movement = input;
    let direction = "up";
    let x = 0;
    let y = 0;
    // let current = x,y

    for (let i = 0; i < movement.length; i++) {
      if (movement[i] == "W") {
        if (direction == "up") {
          y += 1;

          //   current = x, y;
        } else if (direction == "left") {
          x -= 1;
          //   current = x, y;
        } else if (direction == "right") {
          x += 1;
          //   current = x, y;
        } else if (direction == "down") {
          y -= 1;
          //   current = x, y;
        }
      } else if (movement[i] == "L") {
        if (direction == "up") {
          direction = "left";
        } else if (direction == "left") {
          direction = "down";
        } else if (direction == "down") {
          direction = "right";
        } else if (direction == "right") {
          direction = "up";
        }
      } else if (movement[i] == "R") {
        if (direction == "left") {
          direction = "up";
        } else if (direction == "up") {
          direction = "right";
        } else if (direction == "right") {
          direction = "down";
        } else if (direction == "down") {
          direction = "left";
        }
      }
    }
    setxAxis(x);
    setyAxis(y);
    toast.success(" 🥲 ตารางยังไม่ขยับนะครับบ  ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log("(" + x + "," + y + ")");
  }

  const someFunction = (children) => {
    if (children[6]) {
      return { color: "green" };
    } else {
      return { color: "#000" };
    }
  };
  //   create table

  const loopCreateTable = () => {
    document.write("<table>");
    let i = 1;
    let nameArr = [];
    for (let j = 1; j < 82; j++) {
      nameArr.push((nameArr[j] = "box" + j));
    }
    for (var a = 1; a < 10; a++) {
      document.write("<tr>");
      for (let b = 1; b < 10; b++) {
        let nameID = nameArr[i];
        document.write("<td id=" + nameID + ">" + nameID + "</td>");
        i++;
      }
      document.write("</tr>");
    }
    document.write("</table");
  };
  const createTable = () => {
    let table = [];
    let count = 1;
    let nameArr = [];
    // Outer loop to create parent
    for (let j = 1; j < 82; j++) {
      nameArr.push((nameArr[j] = "box" + j));
    }
    for (let i = 0; i < 9; i++) {
      let children = [];
      //Inner loop to create childrenƒ
      for (let j = 0; j < 9; j++) {
        let boxname = nameArr[count];
        children.push(<td id={boxname} className="border-table"></td>);
        ++count;
      }
      //Create the parent and add the children
      table.push(<tr className="border-table">{children}</tr>);
    }

    return table;
  };
  console.log(input);

  return (
    <div className="App-header">
      <div className="header-robot">
        <h2>Robot walk</h2>
      </div>
      <div className="container-main">
        <div className="box-input">
          <Form.Label htmlFor="inputPassword5">คำสั่งการเดินของหุ่น</Form.Label>
          <Form.Control
            type="text"
            className="mb-3"
            onChange={(e) => setinput(e.target.value)}
          />
          <Button onClick={robotwalk}>คำนวณ</Button>
        </div>
        <div className="box-result">
          <p>ตำแหน่งปัจจุบัน</p>
          <p>
            ({xAxis},{yAxis})
          </p>
          <table>{createTable()}</table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
