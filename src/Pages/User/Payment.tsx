import { useCourseDetails } from "@/CustomHook/useCourseDetails";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faLayerGroup, faHourglassHalf, faInfinity, faDownload, faUsers } from '@fortawesome/free-solid-svg-icons';

const Payment = () => {
  const { id } = useParams();
  const { course } = useCourseDetails(id!);

  const handlePayment = async () => {
    try {
      const { data } = await axios.post("/auth/payment", { course });
      console.log(data)
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast(err.response.data.message || "Sorry, something went wrong!");
      }
    }
  };

  return (
    <div>
      <div className="px-4 py-8">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-6">{course?.title}</h1>
        <h2 className="text-2xl text-center text-gray-700 mb-12">{course?.subTitle}</h2>
        <div className="flex flex-wrap -mx-2 justify-center">
          <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Course Details</h3>
              <p className="text-gray-700 mb-8">Get all the details you need to join the course and start your journey.</p>
              <div className="flex items-center text-gray-800 mb-4">
                <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3 text-lg" />
                <span className="text-lg">Instructor: {course?.tutorId.username}</span>
              </div>
              <div className="flex items-center text-gray-800 mb-4">
                <FontAwesomeIcon icon={faLayerGroup} className="mr-3 text-lg" />
                <span className="text-lg">Level: {course?.level}</span>
              </div>
              <div className="flex items-center text-gray-800">
                <FontAwesomeIcon icon={faHourglassHalf} className="mr-3 text-lg" />
                <span className="text-lg">Duration:klfjdgl</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Benefits</h3>
              <p className="text-gray-700 mb-8">Discover the advantages of enrolling in our kickboxing course.</p>
              <ul className="text-gray-800">
                <li className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faInfinity} className="mr-3 text-lg text-blue-600" />
                  <span className="text-lg">Lifetime access to the course</span>
                </li>
                <li className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faDownload} className="mr-3 text-lg text-blue-600" />
                  <span className="text-lg">Downloadable course materials</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faUsers} className="mr-3 text-lg text-blue-600" />
                  <span className="text-lg">Access to community forum</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Payment Details</h3>
              <p className="text-gray-700 mb-4">Complete your purchase with our secure payment gateway.</p>
              <div className="text-gray-800 mb-4">
                <div className="flex justify-between mb-4">
                  <span className="text-lg">Course Fees</span>
                  <span className="text-lg">₹{course?.price}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="text-lg">Total Amount</span>
                  <span className="text-lg">₹{course?.price}</span>
                </div>
              </div>
              <button
                onClick={handlePayment}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center w-full transition duration-300 ease-in-out"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
