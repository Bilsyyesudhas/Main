import React from 'react'
import {
  LoginWrapper,
  LoginFormWrapper,
  LoginTitle,
} from './Styled'
import LoginImage from '../../../Assets/Images/login.jpg'
import { Form, Input } from 'antd'
import { CustomLabel } from '../../../Components/CommonStyle'
import Button from '../../../Components/Form/Button'
import Flex from '../../../Components/Flex'
import { useState } from 'react';
import "./Login.css"; // Import your CSS file
import { useNavigate } from'react-router';
import logo from "../../images/vle_logo.png"; // Import your logo image
import c3 from "../../images/brush.png";
import c1 from "../../images/cosmetic_tools.png";
import c2 from "../../images/spanner.png";
import c4 from "../../images/tools.png";
export const Login = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Get the history object from useHistory

  // Event handler to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here, e.g., send the credentials to the server for validation
    // For the sake of example, let's assume a valid username and password
    if (username === "9898979796" && password === "suseeclouds") {
      // Navigate to the Home page after successful login
      navigate("/*");
    } else {
      // Handle invalid credentials, show an error message, etc.
      console.log("Invalid credentials");
    }
  };



  return (
//     <LoginWrapper  options={{headerShown:(false),}}>
//       <img src={LoginImage} alt="LoginImage" />
//       <LoginFormWrapper>
//         <LoginTitle>login</LoginTitle>

//         <Form
//           name="basic"
//           labelCol={{
//             span: 24,
//           }}
//           wrapperCol={{
//             span: 24,
//           }}
//           onFinish={onFinish}
//           onFinishFailed={onFinishFailed}
//           autoComplete="off"
//         >
//           <Form.Item
//             label={<CustomLabel>Username</CustomLabel>}
//             name="username"
//             rules={[
//               {
//                 required: true,
//                 message: 'Please input your username!',
//               },
//             ]}
//           >
//             <Input placeholder='Enter Name' size='large' />
//           </Form.Item>

//           <Form.Item
//             label={<CustomLabel>Password</CustomLabel>}
//             name="password"
//             rules={[
//               {
//                 required: true,
//                 message: 'Please input your password!',
//               },
//             ]}
//           >
//             <Input.Password placeholder='Enter Password' size='large' />
//           </Form.Item>

//           <Flex W_100 center gap={'20px'} style={{ marginTop: '20px' }}>
//             <Button.Primary text={'Save'} htmlType={'submit'} />
//             <Button.Danger text={'Cancel'} htmlType={'reset'} />
//           </Flex>
//         </Form>
//       </LoginFormWrapper>
//     </LoginWrapper>
//   )
// }

<div className="login-container ">
<div className="login-box">
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      marginTop: "-20px",
      marginRight: "-20px",
      marginLeft: "-20px",
      justifyContent: "space-between",
    }}
  >
    <img src={c1} alt="c1" style={{ width: "100px", height: "100px" }} />
    <img src={c2} alt="c2" style={{ width: "100px", height: "100px" }} />
  </div>
  <div style={{ height: "400px" }}>
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <p style={{ justifyContent: "center", display: "flex" }}>
      Your Home Services Expert
    </p>
    {/* Your login form elements will go here */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
      <div style={{marginTop:'20px'}}>
        <Input
          name={"Phone number"}
          placeholder={"Enter Phone number"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          rules={[
            {
              required: true,
              message: "Please enter Category Name!",
            },
          ]}
        />
        </div>
        <div style={{marginTop:'20px'}}>
        <Input
          name={"name"}
          type="password"
          value={password}
          placeholder={"Enter Password"}
          onChange={(e) => setPassword(e.target.value)}
          rules={[
            {
              required: true,
              message: "Please enter Category Name!",
            },
          ]}
        />
</div>
<div style={{display:'flex',justifyContent:"center",marginTop:'20px'}}>
        <Button.Success text={"Submit"} htmlType="submit" />
        </div>
      </form>
    </div>
  </div>

  <div
    style={{
      display: "flex",
      flexDirection: "row",
      marginBottom: "-20px",
      marginRight: "-20px",
      marginLeft: "-20px",
      justifyContent: "space-between",
    }}
  >
    <img src={c3} alt="c3" style={{ width: "100px", height: "100px" }} />
    <img src={c4} alt="c4" style={{ width: "100px", height: "100px" }} />
  </div>
</div>
</div>
);
};

