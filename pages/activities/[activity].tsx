import React from "react";
import Head from "next/head";

import Activity from "@/components/pages/Activity";
import { activities } from "@/data/activities";

export default function ActivityPage(data: any) {
  return (
    <main>
      <Head>
        <title>arike - {data.label}</title>
        <link rel="icon" href="/logo favicon.ico" />
      </Head>
      <Activity data={data} />
    </main>
  );
}

export async function getStaticPaths() {
  const paths = activities.map((activity: any) => {
    return { params: { activity: activity.link } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  return {
    props: activities.find(
      (activity: any) => activity.link === params.activity
    ),
  };
}
