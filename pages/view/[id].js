import Head from "next/head";
import Axios from "axios";

import Item from "../../src/component/item";

const Post = ({ item, name }) => {
  return (
    <>
      {item ? (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경 입니다.
          <Item item={item} />
        </>
      ) : null}
    </>
  );
};

export default Post;

// 서버사이드 렌더링 (node)
export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const appUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(appUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
};

/**
 * Next js는 모든 페이지 사전 렌더링 (Pre-rendering)
 * 더 좋은 퍼포먼스
 * 검색엔진 최적화(SEO)
 *
 * 1. 정적 생성
 * 2. Server Side Rendering (SSR, Dynamic Rendering)
 *
 * 차이점은 언제 html 파일을 생성하는가
 *
 * [정적 생성]
 * - 프로젝트가 빌드하는 시점에 html 파일 생성
 * - 모든 요청에 재사용
 * - 퍼포먼스 이유로, next js는 정적 생성 권고
 * - 정적 생성된 페이지들은 CDN에 캐시
 * - getStaticProps / getStaticPaths
 *
 * [서버사이드 렌더링]은 매 요청마다 html을 생성
 * - 항상 최신 상태 유지
 * - getServerSideProps
 */
