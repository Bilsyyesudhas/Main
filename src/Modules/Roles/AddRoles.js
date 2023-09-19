import React from "react";
import { Form, Col, Radio,Checkbox } from "antd";
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

export const AddRoles = () => {
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

  const allOptions = ["List Admin","Create Admin","Show Admin","Edit Admin","Delete Admin","List Role","Create Role","Show Role","Edit Role","Delete Role","List User","Create User","Show User","Edit User","Delete User","List Category","Create Category","Show Category","Edit Category","Delete Category","List Service","Create Service","Show Service","Edit Service","Delete Service","List Service Centre","Create Service Centre","Show Service Centre","Edit Service Centre","Delete Service Centre"];

  const onSelectAll = (e) => {
    setSelectedValues(e.target.checked ? allOptions : []);
  };


  return (
    <Fragment>
      <FormTitle title={"Add Role"} />
      <CustomCard>
        <Form
          form={form}
          name="Add Role"
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
