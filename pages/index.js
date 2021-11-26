import Head from "next/head";
import Axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "../src/component/ItemList";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = () => {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      setIsloading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Home | NextJS</title>
        <meta name="description" content="Nextjs tutorial."></meta>
      </Head>
      {isLoading ? (
        <div style={{ padding: "40vh 0" }}>
          <Loader inline="centered" active>
            Loading...
          </Loader>
        </div>
      ) : (
        <>
          <Header style={{ marginTop: 20 }} as="h3">
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header style={{ marginTop: 20 }} as="h3">
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
    </div>
  );
}
