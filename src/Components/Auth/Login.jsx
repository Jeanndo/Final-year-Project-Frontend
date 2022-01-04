import React from "react"
import { Form, Input, Button } from "antd"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { message } from "antd"
import "./Auth.css"
import { Login as signIn, GoogleLogin } from "../../Redux/actions/AuthAction"

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
    password: "${label} is not a valid password!",
  },
}
/* eslint-enable no-template-curly-in-string */

const LoginUser = ({
  signIn,
  login,
  GoogleLogin,
  google,
  setUser,
  setIsModalVisible1,
  setCustomAuth,
}) => {
  const history = useHistory()
  const onFinish = async (values) => {
    console.log(values)
    await signIn(values)
  }
  const handleGoogle = async () => {
    await GoogleLogin()
  }

  React.useEffect(() => {
    if (login.error) {
      message.error(login.error)
    }
    if (login.success) {
      message.success("user successfully logged in")
      setUser(JSON.parse(localStorage.getItem("profile")))
      setIsModalVisible1(false)
      setCustomAuth(true)
      history.push("/home")
    }
    if (google.error) {
      message.error(google.error)
    }
    if (google.success) {
      message.success("user successfully logged in")
      setUser(JSON.parse(localStorage.getItem("profile")))
      setIsModalVisible1(false)
      setCustomAuth(false)
      history.push("/home")
    }
  }, [login, google, history, setUser, setIsModalVisible1, setCustomAuth])

  console.log("logged in user", login.message)
  console.log("googel user", google.message)

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
        <Button className="btn" htmlType="submit" loading={login.loading}>
          Login
        </Button>
      </Form.Item>
      <div className="Login-with-google">
        <Button className="btn" onClick={handleGoogle} loading={google.loading}>
          Google Login
        </Button>
      </div>
    </Form>
  )
}
const mapStateToProps = ({ loginReducer, googleReducer }) => {
  const { login } = loginReducer
  const { google } = googleReducer
  return { login, google }
}
export default connect(mapStateToProps, { signIn, GoogleLogin })(LoginUser)
