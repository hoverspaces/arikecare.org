import React from "react";
import Activity from "@/components/pages/Activity";
import { activities } from "@/data/activities";

export default function Location(data: object) {
  return (
    <main>
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
