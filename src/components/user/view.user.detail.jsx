import { Button, Drawer } from "antd";

const ViewUserDetail = (props) => {
    const { isDetailOpen, setIsDetailOpen, dataDetail, setDataDetail } = props;
    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            return;
        }

        // I've kept this example simple by using the first image instead of multiple
        handleOnChangeFile(event.target.files[0])
    }
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
                <img height={100} width={150} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}></img>
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
                <input type='file' id="btnUpload" hidden onChange={handleOnChangeFile}></input>
            </div>
            {/* <Button type='primary'>Upload Avatar</Button> */}
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