import React from "react"
import { Form, Input, Button, message } from "antd"
import "./Auth.css"
import { connect } from "react-redux"
import {
  Signup as signupUser,
  GoogleLogin,
} from "../../../Redux/actions/AuthAction"

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
}

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
    password: "${label} is not a valid password!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
}
/* eslint-enable no-template-curly-in-string */

const Signup = ({ signupUser, signUp, setUser }) => {
  const onFinish = async (values) => {
    console.log(values)
    await signupUser(values)
  }

  React.useEffect(() => {
    if (signUp.error) {
      message.error(signUp.error)
    }
    if (signUp.success) {
      message.success("user successfully logged in")
    }
  }, [signUp, setUser])

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      style={{
        padding: "20px",
      }}
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button className="btn" htmlType="submit" loading={signUp.loading}>
          Sign up
        </Button>
      </Form.Item>
    </Form>
  )
}

const mapStateToProps = ({ siginUpReducer }) => {
  const { signUp } = siginUpReducer

  return { signUp }
}

export default connect(mapStateToProps, { signupUser, GoogleLogin })(Signup)
