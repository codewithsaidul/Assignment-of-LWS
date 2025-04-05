import {
    faBriefcase,
    faFileCirclePlus,
    faStop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <a
              href="/jobs"
              className="main-menu menu-active"
              id="lws-alljobs-menu"
            >
              {/* <i className="fa-solid fa-briefcase"></i> */}
              <FontAwesomeIcon icon={faBriefcase} />
              <span> All Available Jobs</span>
            </a>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <a
                  className="sub-menu"
                  href="/jobs/internship"
                  id="lws-internship-menu"
                >
                  {/* <i className="fa-solid fa-stop !text-[#FF5757]"></i> */}
                  <span className="!text-[#FF5757] mr-1">
                    <FontAwesomeIcon icon={faStop} />
                  </span>
                  Internship
                </a>
              </li>
              <li>
                <a
                  className="sub-menu"
                  href="/jobs/fulltime"
                  id="lws-fulltime-menu"
                >
                  {/* <i className="fa-solid fa-stop !text-[#FF8A00]"></i> */}
                  <span className="!text-[#FF8A00] mr-1">
                    <FontAwesomeIcon icon={faStop} />
                  </span>
                  Full Time
                </a>
              </li>
              <li>
                <a
                  className="sub-menu"
                  href="/jobs/remote"
                  id="lws-remote-menu"
                >
                  {/* <i className="fa-solid fa-stop !text-[#56E5C4]"></i> */}
                  <span className="!text-[#56E5C4] mr-1">
                    <FontAwesomeIcon icon={faStop} />
                  </span>
                  Remote
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/jobs" className="main-menu" id="lws-addJob-menu">
              {/* <i className="fa-solid fa-file-circle-plus"></i> */}
              <FontAwesomeIcon icon={faFileCirclePlus} className="mr-1" />
              <span>Add NewJob</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
