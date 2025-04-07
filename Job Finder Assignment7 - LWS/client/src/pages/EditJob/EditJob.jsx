import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editJob } from "../../feature/jobs/jobsSlice";

const EditJob = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  const { editing } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    const { id, title, type, salary, deadline } = editing;

    if (id) {
      setTitle(title);
      setType(type);
      setSalary(salary);
      setDeadline(deadline);
    } else {
      setTitle("");
      setType("");
      setSalary("");
      setDeadline("");
    }
  }, [editing]);

  const handleEdit = (e) => {
    e.preventDefault();

    const job = {
      title,
      type,
      salary: Number(salary),
      deadline,
    };

    dispatch(
      editJob({
        id: editing?.id,
        data: job,
      })
    );
    setTitle("");
    setType("");
    setSalary("");
    setDeadline("");
  };

  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleEdit} className="space-y-6">
            <div className="fieldContainer">
              <label className="text-sm font-medium text-slate-300">
                Job Title
              </label>
              <select
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="lws-JobTitle"
                name="title"
                required
              >
                <option value="" hidden>
                  Select Job
                </option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Full Stack Developer">
                  Full Stack Developer
                </option>
                <option value="MERN Stack Developer">
                  MERN Stack Developer
                </option>
                <option value="DevOps Engineer">DevOps Engineer</option>
                <option value="QA Engineer">QA Engineer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Social Media Manager">
                  Social Media Manager
                </option>
                <option value="Senior Executive">Senior Executive</option>
                <option value="Junior Executive">Junior Executive</option>
                <option value="Android App Developer">
                  Android App Developer
                </option>
                <option value="IOS App Developer">IOS App Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label>Job Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                id="lws-JobType"
                name="type"
                required
              >
                <option value="" hidden>
                  Select Job Type
                </option>
                <option value="Full Time">Full Time</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label>Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input
                  type="number"
                  name="salary"
                  id="lws-JobSalary"
                  required
                  className="!rounded-l-none !border-0"
                  placeholder="Enter Salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
            </div>

            <div className="fieldContainer">
              <label>Deadline</label>
              <input
                type="date"
                name="deadline"
                id="lws-JobDeadline"
                required
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                id="lws-submit"
                className="cursor-pointer btn btn-primary w-fit"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditJob;
