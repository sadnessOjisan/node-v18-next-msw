import { GetServerSideProps } from "next";
import { FunctionComponent } from "react";

interface Props {
  data: {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
  };
}

const Index: FunctionComponent<Props> = ({ data }) => {
  return <div>{JSON.stringify(data)}</div>;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty"
  );
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
};

export default Index;
