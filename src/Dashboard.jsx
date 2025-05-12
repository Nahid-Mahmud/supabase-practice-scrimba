import { useEffect } from "react";
import supabase from "./supabase-client";

function Dashboard() {
  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    // const { data, error }
    const response = await supabase
      .from("sales_deals")
      .select(
        `
    name,
    value
    `
      )
      .order("value", { ascending: false })
      .limit(1);
    console.log(response);
  };

  //   {
  //     "error": null,
  //     "data": [
  //         {
  //             "name": "Kim",
  //             "value": 7000
  //         }
  //     ],
  //     "count": null,
  //     "status": 200,
  //     "statusText": ""
  // }

  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <h2>Total Sales This Quarter ($)</h2>
      </div>
    </div>
  );
}

export default Dashboard;
