
import axios from "axios"
import { toast } from "sonner";
const handleApiError = (err:unknown) => {
    if (axios.isAxiosError(err) && err.response) {
      toast.error(err.response.data.message || "Sorry, something went wrong!");
    } else {
      toast.error("Sorry, something went wrong!");
    }
  };
  export default handleApiError