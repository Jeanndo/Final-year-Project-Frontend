import React from "react"
import { Link } from "react-router-dom"
import classes from "./Navigator.module.css"
import Login from "./Auth/Login"
import { Avatar, Modal } from "antd"
import { UserOutlined } from "@ant-design/icons"
import Signup from "./Auth/Signup"
import { connect } from "react-redux"
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min"
import { Logout as Siginout } from "../Redux/actions/AuthAction"

const Navigator = ({ Siginout, logout }) => {
  const history = useHistory()
  const Location = useLocation()

  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [isModalVisible1, setIsModalVisible1] = React.useState(false)
  const [customAuth, setCustomAuth] = React.useState(false)

  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  )

  const handleLogout = async () => {
    await Siginout()
    localStorage.clear()
    history.push("/")
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleClick = () => {
    setIsModalVisible(true)
  }

  const handleOk1 = () => {
    setIsModalVisible1(false)
  }

  const handleCancel1 = () => {
    setIsModalVisible1(false)
  }

  const handleClick1 = () => {
    setIsModalVisible1(true)
  }

  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")))
  }, [Location])

  return (
    <React.Fragment>
      <div className={classes.Nav__container}>
        <>
          <Modal
            title="Create Account"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            width={700}
          >
            <Signup
              setUser={setUser}
              setIsModalVisible={setIsModalVisible}
              setCustomAuth={setCustomAuth}
            />
          </Modal>
          <Modal
            title="Login"
            visible={isModalVisible1}
            onOk={handleOk1}
            onCancel={handleCancel1}
            footer={null}
            width={900}
          >
            <Login
              setUser={setUser}
              setIsModalVisible1={setIsModalVisible1}
              setCustomAuth={setCustomAuth}
            />
          </Modal>
        </>

        <nav>
          <h1 className={classes.heading__primary}>Loan Approval Prediction</h1>
          <ul className={classes.lst}>
            <li>
              <Link to="/home"> Form</Link>
            </li>
            {user ? (
              <>
                <li>
                  {customAuth ? (
                    <Avatar
                      size={45}
                      icon={<UserOutlined />}
                      className={classes.avatar}
                    />
                  ) : (
                    <Avatar
                      size={45}
                      src={user?.photoURL}
                      className={classes.avatar}
                    />
                  )}
                </li>
                <li>
                  <span>
                    {customAuth
                      ? user?.email?.split("@")[0]
                      : user?.displayName?.split(" ")[0]}
                  </span>
                </li>
                <li>
                  <button className={classes.Logout} onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button className={classes.Logout} onClick={handleClick1}>
                    Login
                  </button>
                </li>
                <li>
                  <button className={classes.Logout} onClick={handleClick}>
                    Sign up
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = ({ LogoutReducer }) => {
  const { logout } = { LogoutReducer }
  return { logout }
}
export default connect(mapStateToProps, { Siginout })(Navigator)
