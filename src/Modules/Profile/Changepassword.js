// // PopupLogin.js
// import React, { useState } from "react";
// import "../Profile/profile.css"; // Apply your styles here
// import { Form, Col, Radio,Checkbox, Upload } from "antd";
// import { Row } from '../../Components/Row'
// import { useForm } from "antd/es/form/Form";
// import Input from "../../Components/Form/Input";
// import { UploadFile } from "antd";
// import { InboxOutlined } from "@ant-design/icons";
// import { FormTitle } from "../../Components/FormTitle";
// import { Fragment } from "react";
// import CustomCard from "../../Components/CustomCard";
// import Flex from "../../Components/Flex";
// import Button from "../../Components/Form/Button";

// export const ChangePassword = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openPopup = () => {
//     setIsOpen(true);
//   };

//   const closePopup = () => {
//     setIsOpen(false);
//   };





//   const [form] = useForm();
//   // eslint-disable-next-line no-unused-vars
//   const { Dragger } = Upload;
  
//   const uploadProps = {
//   name: "file",
//   multiple: false,
//   action: "https://www.example.com/upload", // Replace with your backend API endpoint
//   onChange(info) {
//   const { status } = info.file;
//   if (status === "done") {
//   console.log(`${info.file.name} file uploaded successfully.`);
//   } else if (status === "error") {
//   console.log(`${info.file.name} file upload failed.`);
//   }
//   },
//   };
  
//   const [value, setValue] = useState(1);
  
//   const onChange = (e) => {
//   console.log("radio checked", e.target.value);
//   setValue(e.target.value);
//   };
  
//   const onRest = () => {
//   form.resetFields();
//   };
  
//   // eslint-disable-next-line no-unused-vars
//   const statusOptions = [
//   {
//   label: "Enable",
//   value: "enable",
//   },
//   {
//   label: "Disable",
//   value: "disable",
//   },
//   ];
//   const onFinish = (values) => {
//   console.log("success", values);
//   };
  
//   const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
//   };
  





//   return (
//     <div>
//       <button onClick={openPopup} style={{backgroundColor:'green',color:'white',padding:'5px'}}>Change Password</button>
//       {isOpen && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close-button" onClick={closePopup}>
//               &times;
//             </span>
//             <h2>Change Password</h2>
// <hr />
//             <Form
// form={form}
// name=""
// labelCol={{
// span: 24,
// }}
// wrapperCol={{
// span: 24,
// }}
// onFinish={onFinish}
// onFinishFailed={onFinishFailed}
// autoComplete="off"
// >
// <Row gutter={[24, 24]}>
// <Col span={24}>
// <Input
// label={"Current Password"}
// name={"Current Password"}
// placeholder={"Enter Current Password"}
// rules={[
// {
// required: true,
// message: "Please enter Current Password!",
// },
// ]}
// />
// </Col>


// <Col span={24}>
// <Input
// label={"New Password"}
// name={"New Password"}
// placeholder={"Enter New Password"}
// rules={[
// {
// required: true,
// message: "Please enter New Password!",
// },
// ]}
// />
// </Col>
// <Col span={24}>
// <Input
// label={"Confirm New Password"}
// name={"Confirm New Password"}
// placeholder={"Enter Confirm New Password"}
// rules={[
// {
// required: true,
// message: "Please enter Confirm New Password!",
// },
// ]}
// />
// </Col>


// <Flex W_100 end gap={"20px"}>
// <Button.Primary text={"Submit"} htmlType="submit" />

// </Flex>
// </Row>
// </Form>



            
          
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


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

export const ChangePassword = ({ handleclick }) => {
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
    if (handleclick) {
      handleclick();
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
            label={"Current Password"}
            name={"Current Password"}
            placeholder={"Enter current password"}
            rules={[
              {
                required: true,
                message: "Please enter password!",
              },
            ]}
          />
        </Col>

        

        <Col span={24}>
          <Input
            label={"New password*"}
            name={"New password"}
            placeholder={"New password"}
            rules={[
              {
                required: true,
                message: "Please enter New password",
              },
            ]}
          />
        </Col>
        <Col span={24}>
          <Input
            label={"Confirm New password"}
            name={"phone"}
            placeholder={"Confirm New password"}
            rules={[
              {
                required: true,
                message: "Please enter New password!",
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