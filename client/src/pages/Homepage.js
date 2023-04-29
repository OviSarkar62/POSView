import { Col, Row } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import ItemList from "../components/ItemList";

const Homepage = () => {
  const [itemsData, setItemsData] = useState([]);

  //useEffect
  useEffect(() => {
    const getAllItems = async () => {
      try {
        const { data } = await axios.get("/api/items/get-item");
        setItemsData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllItems();
  }, []);
  return (
    <DefaultLayout>
      <Row>
        {itemsData.map((item)=>(
          <Col xs={24} lg={6} md={12} sm={6}>
            <ItemList item={item}/>
          </Col>
        ))}
      </Row>
    </DefaultLayout>
  )
}

export default Homepage;