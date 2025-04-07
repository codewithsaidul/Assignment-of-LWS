import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchJobName, sortByPrice } from "../feature/filter/jobsFilter";
import { fetchJobs } from "../feature/jobs/jobsSlice";
import AviableJob from "./AviableJob";

const AllAviableJobs = () => {
  const { jobs } = useSelector((state) => state.jobs);
  const { searchQuery, allJobs, sortOption } = useSelector((state) => state.jobsFilter);
  const [searchName, setSearchName] = useState("");
  const [sortValue, setSortValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(searchJobName(searchName));
  }, [dispatch, searchName]);

  useEffect(() => {
    dispatch(sortByPrice(sortValue));
  }, [dispatch, sortValue]);

  const filterJobs = (jobs) => {
    let filteredJobs = jobs;

    // ============ filter by job title =================
    filteredJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // ============== filter by job type ==================
    if (allJobs !== "all") {
      filteredJobs = jobs.filter((job) => job.type === allJobs);
    }

    // ===================== filter by price ==================
    if (sortOption === "asc") {
      filteredJobs = [...filteredJobs].sort((a, b) => a.salary - b.salary)
    } else if (sortOption === "desc") {
      filteredJobs = [...filteredJobs].sort((a, b) => b.salary - a.salary)
    } else {
      return filteredJobs
    }

    return filteredJobs;
  };

  // const filterJobType = (jobs) => {
  //     return jobs.filter(job => job.type === allJobs)
  // }

  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <div className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        {/* ===================== All Aviable Jobs Header ================ */}
        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
          <h1 className="lws-section-title">All Available Jobs</h1>
          <div className="flex gap-4">
            <div className="search-field group flex-1">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon group-focus-within:text-blue-500"
              />
              <input
                type="text"
                placeholder="Search Job"
                className="search-input"
                id="lws-searchJob"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
              />
            </div>
            <select
              value={sortValue}
              onChange={(e) => setSortValue(e.target.value)}
              id="lws-sort"
              name="sort"
              autoComplete="sort"
              className="flex-1"
            >
              <option value="">Default</option>
              <option value="asc">Salary (Low to High)</option>
              <option value="desc">Salary (High to Low)</option>
            </select>
          </div>
        </div>

        {/* ===================== All Aviable Jobs Container ================ */}
        <div className="jobs-list">
          {filterJobs(jobs)?.map((job) => (
            <AviableJob key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAviableJobs;
