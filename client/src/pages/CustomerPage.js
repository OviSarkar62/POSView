import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
const CutomerPage = () => {
  const [billsData, setBillsData] = useState([]);
  const dispatch = useDispatch();
  const getAllBills = async () => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      const { data } = await axios.get("/api/bills/get-bills");
      setBillsData(data);
      dispatch({ type: "HIDE_LOADING" });
      console.log(data);
    } catch (error) {
      dispatch({ type: "HIDE_LOADING" });
      console.log(error);
    }
  };
  //useEffect
  useEffect(() => {
    getAllBills();
    //eslint-disable-next-line
  }, []);

  const columns = [
    { title: "ID", dataIndex: "_id" },
    { title: "Cutomer Name", dataIndex: "customerName"},
    { title: "Contact No", dataIndex: "customerNumber" },
    { title: "Total Amount", dataIndex: "totalAmount" },
  ];

  return (
    <DefaultLayout>
      <h1>Cutomer Page</h1>
      <Table
        columns={columns}
        dataSource={billsData}
        bordered
        pagination={false}
      />
    </DefaultLayout>
  );
};

export default CutomerPage;