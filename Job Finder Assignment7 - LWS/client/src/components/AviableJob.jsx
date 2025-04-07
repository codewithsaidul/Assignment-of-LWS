import { faCalendar, faPen, faStop, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteJob, editActive } from "../feature/jobs/jobsSlice";
import formatIndianNumber from "../utils/numberSeparatorWithComas";

const AviableJob = ( { job } ) => {
  const dispatch = useDispatch()
  const { id, title, type, salary, deadline} = job


  const typeColor = (type) => {
    let color;
    
    if (type === "Full Time") {
      color = "#FF8A00"
    } else if (type === "Internship") {
      color = "#FF5757"
    } else if (type === "Remote") {
      color = "#56E5C4"
    } else {
      return true
    }

    return color
  }

  const handleEdit = () => {
    dispatch(editActive(job))
  }


  const handleDelete = () => {
    dispatch(deleteJob(id))
  }

  return (
    <div className="lws-single-job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}
            {/* <i className="fa-solid fa-stop !text-[#FF8A00] text-lg mr-1.5"></i> */}
            <span className={`!text-[${typeColor(type)}] mr-1`}><FontAwesomeIcon icon={faStop}  /></span>
            {type}
          </div>
          <div className="lws-salary">
            {/* <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            <span className="text-slate-400 text-lg mr-1.5">
                <FontAwesomeIcon icon={faBangladeshiTakaSign} />
            </span> */}
            BDT {formatIndianNumber(salary)}
          </div>
          <div className="lws-deadline">
            {/* <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i> */}
            <span className="text-slate-400 text-lg mr-1.5">
                <FontAwesomeIcon icon={faCalendar} />
            </span>
            Closing on {deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="block" style={{marginRight: "20px"}}>
          <Link to="/editjob">
            <button type="button" onClick={handleEdit} className="lws-edit btn btn-primary">
              {/* <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i> */}
              <span className="text-gray-300 -ml-1 mr-2">
                  <FontAwesomeIcon icon={faPen} />
              </span>
              Edit
            </button>
          </Link>
        </span>

        <span className="sm:ml-3">
          <button onClick={handleDelete} type="button" className="lws-delete btn btn-danger ">
            {/* <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i> */}
            <span className="text-gray-300 -ml-1 mr-2">
                <FontAwesomeIcon icon={faTrash} />
            </span>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default AviableJob;
