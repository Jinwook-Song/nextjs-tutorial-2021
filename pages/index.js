import Head from "next/head";
import Axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "../src/component/ItemList";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>Home | NextJS</title>
        <meta name="description" content="Nextjs tutorial."></meta>
      </Head>
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
    </div>
  );
}

// pre-rendering (static)
export const getStaticProps = async () => {
  const apiURL = process.env.apiUrl;
  const res = await Axios(apiURL);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
};
