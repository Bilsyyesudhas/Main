import React from "react";
import { Form, Col, Radio,Checkbox, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { Row } from "../../Components/Row";
import { useForm } from "antd/es/form/Form";
import Input from "../../Components/Form/Input";

import { FormTitle } from "../../Components/FormTitle";
import { Fragment } from "react";
import CustomCard from "../../Components/CustomCard";
import Flex from "../../Components/Flex";
import Button from "../../Components/Form/Button";
import { useState } from "react";

export const AddServiceCenter = () => {





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
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };






  const [selectedValues, setSelectedValues] = useState([]);

  const allOptions = ["AC Repair Service", "Air Cooler Service", "Refrigerator Service", "Washing Machine Service"
  , "(RO) Water purifier Service","Water Heater or Geyser Service","Microwave Repair","Painting","Water Proofing","Home Cleaning","Bathroom Cleaning",
  "Kitchen Cleaning","Pest Control","Electrician","Plumber","Carpenter","LED (or) LCD TV","Computer Service","Laptop Service",
  "Printer","DTH Service","CCTV Installation","CCTV Service","Inverter Installation","Inverter Service","Marriage Function",
  "Birthday Function","Other","Home Shifting","Others","Women Saloon & spa","Men saloon & spa","Tailoring","Aari work","Car Repair",
  "Car Wash","Car Puncher","Other Services","Home Interior","AC Full Service","Dry Cleaning","Juicer , Mixer , Grinder Fault Rectification","Desktop Computer Service","Customer Relationship management","GST Billing Software Offline","GST Billing Software Online","Website Designing","E-Commerce with Mobile Application"];

  const onSelectAll = (e) => {
    setSelectedValues(e.target.checked ? allOptions : []);
  };

























  return (
    <Fragment>
      <FormTitle title={"Add Service Centre"} />
      <CustomCard>
        <Form
          form={form}
          name="Add Service Centre"
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

            <Col span={24} >
<div className="custom-file">
    
<Upload {...uploadProps}>
<Button icon={<InboxOutlined />}>Choose file</Button>
</Upload>
</div>
</Col>

            <Col span={24} >
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
name={"name"}
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
name={"name"}
placeholder={"Address"}
rules={[
{
required: true,
message: "Please enter Address!",
},
]}
/>
</Col>
<Col span={12}>
<Input
label={"City*"}
name={"name"}
placeholder={"City"}
rules={[
{
required: true,
message: "Please enter City!",
},
]}
/>
</Col>
<Col span={12}>
<Input
label={"District*"}
name={"name"}
placeholder={"District"}
rules={[
{
required: true,
message: "Please enter District!",
},
]}
/>
</Col>
<Col span={12}>
<Input
label={"State*"}
name={"name"}
placeholder={"State"}
rules={[
{
required: true,
message: "Please enter State!",
},
]}
/>
</Col>
<Col span={12}>
<Input
label={"Pin Code*"}
name={"name"}
placeholder={"Pin Code"}
rules={[
{
required: true,
message: "Please enter Pin Code!",
},
]}
/>
</Col>





<Col span={24}>
              <Checkbox.Group
                style={{
                  width: "100%",
                }}
                value={selectedValues}
                onChange={onChange}
              >
                <Row style={{  width: "100%" }}>
                  {/* <Col span={6}>
          <Checkbox value="selectAll" onChange={onSelectAll}>
            Select All
          </Checkbox>
        </Col> */}
                  {allOptions.map((option) => (
                    <Col span={6} key={option}>
                      <Checkbox value={option}>{option}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </Col>


















            {/* ADD MULTIPLE SELECT HERE */}
            <Col></Col>

<Col span={24}>
              <h1 style={{ fontWeight: 600, fontSize: 18, opacity: 0.8 }}>
                Status
              </h1>
              <Radio.Group onChange={onChange} value={value} name="status">
                <Radio value={1}>Enable</Radio>
                <Radio value={2}>Disabled</Radio>
              </Radio.Group>
            </Col>

            <Flex W_100 end gap={"20px"}>
              <Button.Success text={"submit"} htmlType="submit" />
             
            </Flex>
          </Row>
        </Form>
      </CustomCard>
    </Fragment>
  );
};
