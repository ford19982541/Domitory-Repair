import React from "react";
import { Layout, Text, Spinner } from "@ui-kitten/components";
export function Loading({ loading }) {
  if (!loading) {
    return <Layout />;
  }

  return (
    <Layout >
      <Layout >
        <Spinner status='danger' />
        <Text >Loading...</Text>
      </Layout>
    </Layout>
  );
}
