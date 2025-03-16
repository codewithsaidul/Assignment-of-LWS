import { useDispatch, useSelector } from "react-redux";
import { AddFlight, Reset_Message } from "../redux/action";
import toast from "react-hot-toast";
import { useEffect } from "react";

const BookingForm = () => {
  const flightBooking = useSelector((state) => state.flightBooking);
  const dispatch = useDispatch();


  useEffect(() => {
    if (flightBooking.successMessage) {
      toast("✅ ফ্লাইট বুকিং সফল হয়েছে!");

      setTimeout(() => {
        dispatch(Reset_Message())
      }, 1000)
    }
  }, [flightBooking.successMessage, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const bookingId = Date.now();
    const fromDesti = form.from.value;
    const toDesti = form.to.value;
    const bookingDate = form.date.value;
    const guest = form.guests.value;
    const ticketClass = form.ticketClass.value;

    const data = {
      bookingId,
      fromDesti,
      toDesti,
      bookingDate,
      guest,
      ticketClass,
    };


    if (fromDesti === toDesti) {
      return toast.error("From Destination এবং To Destination একই হতে পারে না!")
    }

    if (flightBooking.flights.length >= 3) {
      return toast.error("You Reached Maximum Booking")
    }




    dispatch(AddFlight(data));


  };

  const disableBtn = flightBooking.flights.length >= 3;

  return (
    // <!-- Input Data -->
    <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form onSubmit={handleSubmit} className="first-hero lws-inputform">
          {/* <!-- From --> */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="from"
                id="lws-from"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Saidpur">Saidpur</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- To --> */}
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="to"
                id="lws-to"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Sylhet">Sylhet</option>
                <option value="Saidpur">Saidpur</option>
                <option value="Cox's Bazar">Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- Date --> */}
          <div className="des-from">
            <p>Journey Date</p>
            <input
              type="date"
              className="outline-none px-2 py-2 w-full date"
              name="date"
              id="lws-date"
              required
            />
          </div>

          {/* <!-- Guests --> */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (1).svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="guests"
                id="lws-guests"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* <!-- class --> */}
          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src="./img/icons/Vector (3).svg" alt="" />
              <select
                className="outline-none px-2 py-2 w-full"
                name="ticketClass"
                id="lws-ticketClass"
                required
              >
                <option value="" hidden>
                  Please Select
                </option>
                <option value="Business">Business</option>
                <option value="Economy">Economy</option>
              </select>
            </div>
          </div>

          <button disabled={disableBtn} className="addCity" type="submit" id="lws-addCity">
            <svg
              width="15px"
              height="15px"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="text-sm">Book</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
