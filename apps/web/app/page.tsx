"use client";

import React from "react";

import Layout from "./layout";

class Helloworld {
  constructor(private readonly text: any) {}
  public getText() {
    return this.text;
  }
}

const Page: React.FC = () => {
  const [data, setData] = React.useState<Helloworld>(new Helloworld("hello"));

  React.useEffect(() => {
    let ello = { hhel: "dfs" };
    setData(new Helloworld(ello));
  }, []);

  return (
    <Layout>
      <div>
        <h1>Welcome to the Page!</h1>
        {data ? (
          <div>
            <p>Data fetched from API:</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </Layout>
  );
};

export default Page;
