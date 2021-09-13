import React, { lazy, useEffect } from "react";
import Head from "../Helper/Head";
import useFetch from "../../hooks/useFetch";
import { STATS_GET } from "../../api/api";

import Loading from "../../components/Loading/Loading";
import { Error } from "../../components/Error/Error";

const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, error, request, loading } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (!data) return null;

  return (
    <React.Suspense fallback={<div />}>
      <Head title="Estatísticas" />
      <UserStatsGraphs data={data} />
    </React.Suspense>
  );
};

export default UserStats;
