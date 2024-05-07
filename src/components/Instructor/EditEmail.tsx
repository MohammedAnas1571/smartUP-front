import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/Redux/Store";
import axios from "axios";
import { toast } from "sonner";
import { useState } from "react";

import EmailVerification from "./EmailVerification";
import { SuccessData } from "@/Redux/Tutor/tutorSlice";

const EditEmail = ({
  modal,
  setModal,
}: {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { currentTutor } = useSelector((state: RootState) => state.tutor);
  const [verification, setVerification] = useState(false);
   const dispatch = useDispatch()
  const [email, setEmail] = useState<string>(currentTutor?.email || "");
  const [validationError, setValidationError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<Element>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setValidationError("Please enter a valid email address.");
      return;
    }

    try {
      const {data} = await axios.post("/auth/tutor/change-email");
      toast.success("Please check Otp in  Your Entered Email");
      console.log(data)
        dispatch(SuccessData(data.tutor))
      setVerification(true);
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
      <Dialog open={modal} onOpenChange={setModal}>
        <DialogContent className="sm:max-w-[400px]">
          {verification ? (
            <EmailVerification setModal={setModal} email={email} />
          ) : (
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle>Edit Email</DialogTitle>
              </DialogHeader>

              <div>
                <Label htmlFor="Email" className="text-right">
                  Email
                </Label>
                <Input
                  name="email"
                  defaultValue={currentTutor?.email}
                  className="mt-2"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {validationError && (
                  <p className="text-red-500">{validationError}</p>
                )}
              </div>

              <DialogFooter className="mt-4">
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditEmail;
