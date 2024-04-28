import { SuccessData } from "@/Redux/Tutor/tutorSlice";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { Button } from "../ui/button";
interface EmailVerificationProps {
  email: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailVerification = ({ email, setModal }: EmailVerificationProps) => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [validationError, setValidationError] = useState<string>("");
  const handleSubmit = async (e: React.FormEvent<Element>) => {
    e.preventDefault();

    if (!otp.trim()) {
      setValidationError("please fill otp field");
      return;
    }
    try {
      const { data } = await axios.post("/auth/tutor/verifyotp", {
        otp,
        email,
      });
      toast.success("Email is changed");
      dispatch(SuccessData(data.tutor));
      setModal(false);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(err.response.data.message || "Something went wrong.");
      } else {
        console.error("An unexpected error occurred:", err);
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col space-y-2 text-center mb-2">
        <h2 className="text-2xl md:text-2xl font-bold">Confirm OTP</h2>
        <p className="text-md  md:text-xl ">Enter the OTP we just sent you.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col max-w-md space-y-5">
          <input
            type="text"
            placeholder="otp"
            onChange={(e) => setOtp(e.target.value)}
            className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
          />
          {validationError && (
            <p className="text-red-500 ">{validationError}</p>
          )}
          <input hidden value={email} />
          <Button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium text-white">
            Confirm
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EmailVerification;
