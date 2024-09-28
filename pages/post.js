import React from "react";
import { Heading, Text, View } from "@aws-amplify/ui-react";
import Layout from "../components/layout";
import { Footer, StoryCollection } from "../ui-components";
function Post() {
  return (
    <Layout handleClick={() => {}} authText='Sign Out'>
      <View marginTop='50px' marginBottom='30px'>
        <Heading level={2}>Welcome to our backstage</Heading>
        <Text marginTop='20px'>
          Discover stories,thinking, and expertise from writers on any top{" "}
        </Text>
      </View>
      <StoryCollection />
      <View marginTop='50px' marginBottom='50px'>
        <Footer />
      </View>
    </Layout>
  );
}
export default Post;
