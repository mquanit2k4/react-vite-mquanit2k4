import { useEffect, useState } from "react";
import { Input, notification } from "antd";
import { Modal } from "antd";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } =
    props;

  useEffect(() => {
    console.log(">>> check dataUpdate props: ", dataUpdate);
    if (dataUpdate) {
      setId(dataUpdate._id);
      setFullName(dataUpdate.fullName);
      setPhone(dataUpdate.phone);
    }
  }, [dataUpdate]);
  const handleSubmitButton = async () => {
    const res = await updateUserAPI(id, fullName, phone);
    if (res.data) {
      notification.success({
        message: "Update user",
        description: "Cap nhat user thanh cong",
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
    setId("");
    setFullName("");
    setPhone("");
    setIsModalUpdateOpen(false);
    setDataUpdate(null);
  };

  return (
    <Modal
      title="Update User"
      open={isModalUpdateOpen}
      onOk={() => handleSubmitButton()}
      onCancel={() => resetAndCloseModal()}
      maskClosable={false}
      okText={"SAVE"}
    >
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>Id</span>
          <Input value={id} disabled />
        </div>
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
          <span>Phone Number</span>
          <Input
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </div>
      </div>
    </Modal>
  );
};
export default UpdateUserModal;
