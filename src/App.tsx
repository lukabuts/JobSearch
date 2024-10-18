import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Job } from "./types/JobTypes";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import DetailedJob from "./pages/DetailedJob";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";

export const JobsContext = createContext<Job[]>([]);
export const IsLoadingContext = createContext<boolean>(false);

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [count, setCount] = useState<string>("50");
  const [geo, setGeo] = useState<string>("");
  const [industry, setIndustry] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [lastUpdate, setLastUpdate] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { pathname } = useLocation();
  function getData() {
    if (isNaN(Number(count))) {
      setErrorMsg("'count' parameter should be a number");
      return;
    }
    setIsLoading(true);
    const url = `https://jobicy.com/api/v2/remote-jobs?${
      count && Number(count) !== 50 ? `count=${count}` : ""
    }${geo ? `&geo=${geo}` : ""}${industry ? `&industry=${industry}` : ""}${
      tag ? `&tag=${tag}` : ""
    }`;
    console.log(url);

    axios
      .get(url)
      .then((res) => {
        if (!res.data.jobs && res.data.success === false) {
          setErrorMsg(res.data.error);
          return;
        } else if (res.data.jobs.success === false) {
          setErrorMsg(res.data.jobs.message);
          return;
        }

        setLastUpdate(res.data.lastUpdate);
        setJobs(res.data.jobs);

        errorMsg && setErrorMsg("");
      })
      .catch((err) => {
        console.error(err);
        setErrorMsg(String(err));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="max-w-5xl mx-auto p-2 pt-0">
      <Header />
      <JobsContext.Provider value={jobs}>
        <IsLoadingContext.Provider value={isLoading}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  getData={getData}
                  setCount={setCount}
                  setGeo={setGeo}
                  setIndustry={setIndustry}
                  setTag={setTag}
                  errorMsg={errorMsg}
                  lastUpdate={lastUpdate}
                  count={count}
                  geo={geo}
                  industry={industry}
                  tag={tag}
                />
              }
            />
            <Route path={"/jobs/:id"} element={<DetailedJob />} />

            <Route path="*" element={<NotFound page="Page" />} />
          </Routes>
        </IsLoadingContext.Provider>
      </JobsContext.Provider>
    </div>
  );
}

export default App;
