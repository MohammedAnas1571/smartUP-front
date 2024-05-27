import { useCourseDetails } from "@/CustomHook/useCourseDetails";
import DetailDescription from "@/components/Instructor/DetailDescription";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const CourseApprovals = () => {
  const { id } = useParams();
  const { course, chapters, setChapters } = useCourseDetails(id!);
  const navigate = useNavigate();

  const handleApproval = () => {
    try {
      axios.put(`/auth/admin/approval/${id}/status?changeTo=Pending`);
      toast.success("Status Changed");
      navigate("/admin/courses");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Something Went Wrong");
      }
    }
  };
  const handlePending = () => {
    try {
      axios.put(`/auth/admin/approval/${id}/status?changeTo=Approved`);
      toast.success("Status Changed");
      navigate("/admin/courses");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Something Went Wrong");
      }
    }
  };

  return (
    <div>
      {course && (course?.status === "Pending" ? (
        <Button
          onClick={handlePending}
          className="uppercase absolute right-5 top-52 "
        >
          Approve
        </Button>
      ) : (
        <Button
          onClick={handleApproval}
          className="uppercase absolute right-5 top-52 "
        >
          
          Pending
        </Button>
      ))}

      {course && (
        <DetailDescription
          setChapters={setChapters}
          course={course}
          chapters={chapters}
        />
      )}
    </div>
  );
};

export default CourseApprovals;
