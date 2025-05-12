import supabase from "./supabase-client";
import { useEffect } from "react";

function Dashboard() {
 const [metrics, setMetrics] = useState([]); // Step 1: Import useState and create a new state variable

  /** 
Challenge: 
* 1. Import useState and create a new state variable, 'me trics', with a
	   corresponding setter function, and initialise it as an empty array.
* 2. Use the try...catch syntax in the 'fetchMetrics' function and execute 
		 the Supabase request.
* 3. If there's an 'error', throws this error.
* 4. After this if statement, log the 'data' variable to the console and 
	   use the setter function to store the 'data' variable in the 'metrics' state.
* 5. Catch the 'error' and log it to the console with a custom message.
* 6. Save (Cmd/Ctrl + s).
*/
  useEffect(() => {
    fetchMetrics();
  }, []);

  async function fetchMetrics() {
    // const { data, error } = await supabase.from("sales_deals").select(
    //   `
    //     name,
    //     value.sum()
    //     `
    // );

    try {
      const { data, error } = await supabase
        .from("sales_deals")
        .select("name, value.sum()");

      if (error) throw error;

      console.log(data); // Log the data to the console
      setMetrics(data); // Set the metrics state with the fetched data
    } catch (error) {
      console.error("Error fetching metrics:", error);
    }

  }

  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <h2>Total Sales This Quarter ($)</h2>
      </div>
    </div>
  );
}

export default Dashboard;
