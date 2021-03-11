import { Table } from "antd";
import { useEffect, useState } from "react";

const columns = [
  {
    title: "Наименование",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Бренд",
    dataIndex: "brand",
    key: "brand",
  },
  {
    title: "Цена",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Позиция",
    dataIndex: "position",
    key: "position",
  },
];

// Convert responce from server to a table format:
const prepareDataForTable = (raw) => {

  // Go through the 'list' array and create a new array with the required fields, reassigning the old ones:
  return raw.list.map((item) => {
    const { id, name, price, classes, uposition } = item.uproduct;
    return {
      key: id,
      name,
      price,
      brand: classes.brand,
      position: uposition,
    };
  });
};

const ShopTable = () => {
  const [products, setProducts] = useState(null);
  useEffect(
    () =>
      fetch(
        "https://looks.umastyle.club/custapi/allrest/fashion/listfashionprod?fashionId=659"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProducts(prepareDataForTable(data));
        }),
    []
  );
  console.log("++++++++++++");
  console.log("PRODUCTS", products);
  return <Table columns={columns} dataSource={products} />;
};

export default ShopTable;
