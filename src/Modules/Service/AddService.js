import React from "react";
import { Form, Col, Radio,Checkbox, Upload } from "antd";
import { Row } from '../../Components/Row'
import { useForm } from "antd/es/form/Form";
import Input from "../../Components/Form/Input";
import { UploadFile } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { FormTitle } from "../../Components/FormTitle";
import { Fragment } from "react";
import CustomCard from "../../Components/CustomCard";
import Flex from "../../Components/Flex";
import Button from "../../Components/Form/Button";
import { useState } from "react";

export const AddService = () => {
const [form] = useForm();
// eslint-disable-next-line no-unused-vars
const { Dragger } = Upload;

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

const [value, setValue] = useState(1);

const onChange = (e) => {
console.log("radio checked", e.target.value);
setValue(e.target.value);
};

const onRest = () => {
form.resetFields();
};

// eslint-disable-next-line no-unused-vars
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
return (
<Fragment>
<FormTitle title={"Add Service"}  />
<CustomCard>
<Form
form={form}
name="Add Service"
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
placeholder={" Name"}
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
{/* <Col span={24}>
<Upload
name={"image"}
rules={[
{
required: true,
message: "Please enter order number!",
},
]}
/>
</Col> */}

<Col span={24} >
<Input
label={"orderNumber*"}
name={"orderNumber"}
placeholder={"orderNumber"}
rules={[
{
required: true,
message: "Please enter order number!",
},
]}
/>
</Col>


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
<Button.Primary text={"Submit"} htmlType="submit" />

</Flex>
</Row>
</Form>
</CustomCard>
</Fragment>
);
};