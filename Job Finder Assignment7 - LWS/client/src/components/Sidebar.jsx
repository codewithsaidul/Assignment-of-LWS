import {
  faBriefcase,
  faFileCirclePlus,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { jobType } from "../feature/filter/jobsFilter";
const Sidebar = () => {
  const dispatch = useDispatch()

  const handleFilter = (type) => {
    dispatch(jobType(type))
  }


  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li className="main-menu menu-active" id="lws-alljobs-menu">
            <Link to="/" onClick={() => handleFilter("all")}>
              <FontAwesomeIcon icon={faBriefcase} />
              <span> All Available Jobs</span>
            </Link>
            <ul className="space-y-6 lg:space-y-2">
              <li onClick={() => handleFilter("Internship")} className="sub-menu" id="lws-internship-menu">
                <span className="!text-[#FF5757] mr-1">
                  <FontAwesomeIcon icon={faStop} />
                </span>
                Internship
              </li>
              <li onClick={() => handleFilter("Full Time")} className="sub-menu" id="lws-fulltime-menu">
                <span className="!text-[#FF8A00] mr-1">
                  <FontAwesomeIcon icon={faStop} />
                </span>
                Full Time
              </li>
              <li onClick={() => handleFilter("Remote")} className="sub-menu" id="lws-remote-menu">
                <span className="!text-[#56E5C4] mr-1">
                  <FontAwesomeIcon icon={faStop} />
                </span>
                Remote
              </li>
            </ul>
          </li>
          <li>
            <Link to="/addjob" className="main-menu" id="lws-addJob-menu">
              <FontAwesomeIcon icon={faFileCirclePlus} className="mr-1" />
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
