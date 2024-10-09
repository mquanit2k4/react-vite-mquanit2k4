import { Drawer } from "antd";

const ViewUserDetail = (props) => {
    const { isDetailOpen, setIsDetailOpen, dataDetail, setDataDetail } = props;
    return (
        <Drawer title="Chi tiết User" 
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