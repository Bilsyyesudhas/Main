import React, { useState } from "react";
import "../Profile/profile.css"; // Apply your styles here
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
import { InboxOutlined } from "@ant-design/icons";
import { useEffect, useRef } from "react";

export const EditProfile = ({ handleOk }) => {
  const [form] = useForm();

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onRest = () => {
    form.resetFields();
  };

  const statusOptions = [
    {
      label: "Enable",
      value: "enable",
    },
    {
      label: "Disable",
      value: "disable",
    },
  ];
  const onFinish = (values) => {
    console.log("success", values);
    if (handleOk) {
      handleOk();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const uploadProps = {
    name: "file",
    multiple: false,
    action: "https://www.example.com/upload", // Replace with your backend API endpoint
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        console.log(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
  };

  const comp = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <Form
      form={form}
      name="AddAdmin"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Input
            label={"Name*"}
            name={"name"}
            placeholder={"Enter Category Name"}
            rules={[
              {
                required: true,
                message: "Please enter Category Name!",
              },
            ]}
          />
        </Col>

        <Col span={24}>
          <Button icon={<InboxOutlined />}>Choose file</Button>
        </Col>

        <Col span={24}>
          <Input
            label={"Email*"}
            name={"Email"}
            placeholder={"Email"}
            rules={[
              {
                required: true,
                message: "Please enter Email!",
              },
            ]}
          />
        </Col>
        <Col span={24}>
          <Input
            label={"Phone*"}
            name={"phone"}
            placeholder={"Phone number"}
            rules={[
              {
                required: true,
                message: "Please enter Phone Number!",
              },
            ]}
          />
        </Col>
        <Col span={24}>
          <Input
            label={"Address*"}
            name={"addesss"}
            placeholder={"Address"}
            rules={[
              {
                required: true,
                message: "Please enter Address!",
              },
            ]}
          />
        </Col>
        <Col span={24}>
          <Input
            label={"City*"}
            name={"city"}
            placeholder={"City"}
            rules={[
              {
                required: true,
                message: "Please enter City!",
              },
            ]}
          />
        </Col>

        <Col span={24}>
          <Input
            label={"Pin Code*"}
            name={"pin"}
            placeholder={"Pin Code"}
            rules={[
              {
                required: true,
                message: "Please enter Pin Code!",
              },
            ]}
          />
        </Col>

        <Flex W_100 end gap={"20px"}>
          <Button.Success text={"submit"} htmlType="submit" />
        </Flex>
      </Row>
    </Form>
  );
};