import React from "react";
import { Form, Col, Radio, Checkbox } from "antd";
import { Row } from "../../Components/Row";
import { useForm } from "antd/es/form/Form";
import Input from "../../Components/Form/Input";
import Upload from "../../Components/Form/Upload";
import { FormTitle } from "../../Components/FormTitle";
import { Fragment } from "react";
import CustomCard from "../../Components/CustomCard";
import Flex from "../../Components/Flex";
import Button from "../../Components/Form/Button";
import { useState } from "react";
import myImage from "../../Components/images/avatar-1.jpg";
import { EditProfile } from "./EditProfile";
import { ChangePassword } from "./Changepassword";
import { Table } from "antd";
import { Modal } from "../../Components/Modal";
export const Profile = () => {
  const [form] = useForm();

  const [value, setValue] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onRest = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    console.log("success", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    setOpenModal(true);
  };
  const handleOk = () => {
    setOpenModal(false);
  };
  const handleclick = () => {
    setOpenModal(false);
  };
  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleProfile = () => {
    setModalTitle("Edit Profile");
    setModalContent(<EditProfile handleOk={handleOk}/>);
    showModal();
  };
  const handlePassword = () => {
    setModalTitle("Change Password");
    setModalContent(<ChangePassword handleclick={handleclick}/>);
    showModal();
  };

  const dataSource = [
    {
      key: "1",
      label: "Name",
      value: "admin",
    },
    {
      key: "2",
      label: "Email",
      value: "admin@gmail.com",
    },
    {
      key: "3",
      label: "Phone",
      value: "9876540321",
    },
    {
      key: "4",
      label: "Address",
      value: "",
    },
    {
      key: "5",
      label: "City",
      value: "",
    },
    {
      key: "6",
      label: "District",
      value: "",
    },
    {
      key: "7",
      label: "State",
      value: "",
    },
    {
      key: "8",
      label: "Pin Code",
      value: "321654",
    },
    {
      key: "9",
      label: "Service Centre",
      value: "Default",
    },
  ];
  const columns = [
    {
      title: "Label",
      dataIndex: "label",
      key: "label",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
  ];

  return (
    <Fragment>
      <FormTitle title={"Profile"} />

     
      <div
        style={{
          width: "60%",
          padding: "50px",
          marginLeft: "250px",
          backgroundColor: "white",
        }}
      >
        <Col
          span={24}
          style={{ justifyContent: "center", display: "flex", padding: "10px" }}
        >
          <img
            src={myImage}
            style={{ width: "200px", height: "200px" }}
            alt=" Profile"
          />
        </Col>
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
        <Flex W_100 end gap={"20px"} style={{ padding: "10px" }}>
          <Button.Primary text={"Edit Profile"} onClick={handleProfile} />
          <Button.Primary text={"Change Password"} onClick={handlePassword} />
        </Flex>
        <Modal
          isVisible={openModal}
          handleCancel={handleCancel}
          handleOk={handleOk}
          modalTitle={modalTitle}
          modalContent={modalContent}
          width={600}
        />
      </div>
    </Fragment>
  );
};