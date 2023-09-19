import React from "react";
import { Table } from "../../Components/Table";
import { EyeOutlined } from "@ant-design/icons";
import { useState } from "react";
import { FormTitle } from "../../Components/FormTitle";
import Flex from "../../Components/Flex";
import { Row } from "antd";
import Button from "../../Components/Form/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom/dist";

export const Agrosmart = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      image: 32,
      status: "10 Downing Street",
      order: "kwhdhu",
    },
    {
      key: "2",
      name: "John",
      image: 42,
      status: "10 Downing Street",
      order: "qqqq",
    },
  ];

  // const handleClick = () => {
  //   navigate("/add_srequest");
  // };

  const columns = [
    {
      title: "S.No",
      render: (value, item, index) => index + 1,
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Requests",
      dataIndex: "Requests",
    },
    {
      title: "Created At",
      dataIndex: "createdat",
    },
    
  ];

  return (
    <>
      <h4>Agro smart</h4>
      <div style={{ backgroundColor: "white",padding:'30px' }}>
        {/* <div style={{FlexDirection:'row',display:"flex"}}>
        
          <div style={{flex:0.5}}>
           
          </div>
          <div  style={{flex:0.5,right:0}}>
           
          </div>
        </div> */}
        
          <Flex spaceBetween>
            <p style={{Left:"10px"}}> Services Table</p>
            {/* <div style={{Right:"10px"}}>
              <Button.Default
                text={"ADD"}
                icon={<AiOutlinePlus />}
                onClick={handleClick}
              />
            </div> */}
          </Flex>
          <hr style={{ margin:"10px 0px"}}/>
      
        <Flex spaceBetween>
          <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
            <p>Show</p>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">10</option>
              <option value="option1">40</option>
              <option value="option2">20</option>
              <option value="option3">30</option>
            </select>
            <p>entries</p>
          </div>
          <div>
            Search
            <input type="text" name="" id="" />
          </div>
        </Flex>
        <div style={{height:'20px'}}>

        </div>
        <Table columns={columns} data={dataSource} />
      </div>
    </>
  );
};
