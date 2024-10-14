import {  Button, Drawer, notification } from "antd";
import { useState } from "react";
import { handleUploadFile, updateUserAvatarAPI } from "../../services/api.service";

const ViewUserDetail = (props) => {
    const { isDetailOpen, setIsDetailOpen, dataDetail, setDataDetail, loadUser } = props;

    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return;
        }
        const file = event.target.files[0];
        if(file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));

        } 
        // I've kept this example simple by using the first image instead of multiple
        
    }
    const handleUpdateUserAvatar = async () => {
        // upload file
        const resUpload = await handleUploadFile(selectedFile, "avatar");
        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded;
            const resUpdateAvatar = await updateUserAvatarAPI(newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.phone);
            if (resUpdateAvatar.data) {
                setIsDetailOpen(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUser();
                notification.success({
                    message: "Upload avatar sucess",
                    description: "Cap nhat avatar thanh cong"
                })
            } else {
                notification.error({
                    message: "Error update user avatar",
                    description: JSON.stringify(resUpdateAvatar.message)
                })
            }
            console.log(">>> newAvatar: ", newAvatar)
        } else {
            //fail
            notification.error({
                message: "Upload avatar fail",
                description: JSON.stringify(resUpload.message)
            })
        }
        console.log(">>> resUpload: ", resUpload)
        // update user avatar
    }
    console.log(">>> check file: ", preview)
    return (
        <Drawer 
        width = {"40vw"}
        title="Chi tiết User" 
        onClose={() => {
            setIsDetailOpen(false);
            setDataDetail(null); }}
         open={isDetailOpen}   
        >
        {dataDetail ? 
        <>
            <p>Id: {dataDetail._id}</p>
            <br />
            <p>Full Name: {dataDetail.fullName}</p>
            <br />
            <p>Email: {dataDetail.email}</p>
            <br />
            <p>Phone: {dataDetail.phone}</p>
            <br />
            <p>Avatar:</p>
            <div style={{
                marginTop: "10px",
                height: "100px",
                width: "150px",
                border: "1px solid #ccc",
            }}>
                <img style={{ height: "100%", width: "100%", objectFit: "contain"}} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}></img>
            </div>
            <div>
                <label htmlFor="btnUpload" style={{
                    display: "block",
                    width: "fit-content",
                    marginTop: "15px",
                    padding: "5px 10px",
                    backgroundColor: "orange",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}
                >Upload Avatar</label>
                <input type='file' id="btnUpload" hidden onChange={(event) => handleOnChangeFile(event)}></input>
            </div>
            {preview  &&
            <>
            <div style={{
                marginTop: "10px",
                height: "100px",
                width: "150px",
                marginBottom: "15px",
            }}>
                <img style={{ height: "100%", width: "100%", objectFit: "contain"}} src={preview}></img>
            </div>
            <Button type="primary"
            onClick={() => handleUpdateUserAvatar()}>Save</Button>
            </>}
        </> 
            :
            <>
            <p>Không có dữ liệu</p>
            </>
        }
      </Drawer>
    );
}

export default ViewUserDetail;