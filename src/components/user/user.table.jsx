import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useState } from 'react';

const UserTable = () => {

    const [dataUser, setDataUser] = useState([
        {_id:"1", fullName: "John Brown", email:"hn"},
        {_id:"2", fullName: "Jim Green", email:"hcm"},
    ]);
    const columns = [
        {
          title: 'ID',
          dataIndex: '_id',

        },
        {
          title: 'Full Name',
          dataIndex: 'fullName',

        },
        {
          title: 'Email',
          dataIndex: 'email',

        }
      ];
      // const data = [
      //   {
      //     key: '1',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York No. 1 Lake Park',
      //     tags: ['nice', 'developer'],
      //   },
      //   {
      //     key: '2',
      //     name: 'Jim Green',
      //     age: 42,
      //     address: 'London No. 1 Lake Park',
      //     tags: ['loser'],
      //   },
      //   {
      //     key: '3',
      //     name: 'Joe Black',
      //     age: 32,
      //     address: 'Sydney No. 1 Lake Park',
      //     tags: ['cool', 'teacher'],
      //   },
      // ];
    const loadUser = async () => {
      const res = await fetchAllUserAPI();
   
    }
    loadUser();
    return (
        <Table columns={columns} dataSource={dataUser} />
    )
}

export default UserTable;