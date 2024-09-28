/*import React from "react";
import { Hero } from "../ui-components";
import { View } from "@aws-amplify/ui-react";

function index() {
  return (
    <View>
      <Hero />
    </View>
  );
}
export default index;
*/

import React, { useState, useEffect } from "react";
import { Testimonial } from "@/models";
import { useRouter } from "next/router";

import { Flex, View } from "@aws-amplify/ui-react";
import {
  Footer,
  Hero,
  Persuade,
  Testimonies,
  TestimonyCollection,
} from "../ui-components";
import Layout from "../components/layout";

import { DataStore } from "aws-amplify/datastore";
import { withAuthenticator } from "@aws-amplify/ui-react";

function index() {
  const router = useRouter();
  const [post, setPost] = useState();
  useEffect(() => {
    const getPosts = async () => {
      const data = await DataStore.query(Testimonial);
      console.log(data);
    };
    getPosts();
  }, []);
  DataStore;
  return (
    <Layout>
      <View marginBottom='135px'>
        <Hero
          handleClick={() => {
            router.push("/post");
          }}
        />
      </View>
      <View>
        <TestimonyCollection />
      </View>
      <Flex justifyContent={"center"}>
        <Persuade banner='https://i.imgur.com/MxbD3N4.png' />
      </Flex>
      <View marginTop='50px' marginBottom='50px'>
        <Footer />
      </View>
    </Layout>
  );
}
export default withAuthenticator(index);
