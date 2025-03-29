//pages/page.tsx
//fdafd
"use client";

import React from "react";

import Layout from "./layout";

const Page: React.FC = () => {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    setData("Hello world");
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
