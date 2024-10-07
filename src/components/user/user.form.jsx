import { Input, notification } from "antd";
import { Button, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = (props) => {
  const { loadUser } = props;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmitButton = async () => {
    const res = await createUserAPI(fullName, email, password, phoneNumber);
    if (res.data) {
      notification.success({
        message: "Create user",
        description: "Tao user thanh cong",
      });
      resetAndCloseModal();
      await loadUser();
    } else {
      notification.error({
        message: "Error create user",
        description: JSON.stringify(res.message),
      });
    }
  };
  const resetAndCloseModal = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
    setIsModalOpen(false);
  };
  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Table User</h3>
        <Button onClick={() => setIsModalOpen(true)} type="primary">
          Create User
        </Button>
      </div>
      <Modal
        title="Create User"
        open={isModalOpen}
        onOk={() => handleSubmitButton()}
        onCancel={() => resetAndCloseModal()}
        maskClosable={false}
        okText={"CREATE"}
      >
        <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
          <div>
            <span>Full Name</span>
            <Input
              value={fullName}
              onChange={(event) => {
                setFullName(event.target.value);
              }}
            />
          </div>
          <div>
            <span>Email</span>
            <Input
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <span>Password</span>
            <Input.Password
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div>
            <span>Phone Number</span>
            <Input
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserForm;
