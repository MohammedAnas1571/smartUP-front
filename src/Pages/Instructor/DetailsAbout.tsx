import { useCourseDetails } from "@/CustomHook/useCourseDetails";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { AddModules } from "@/components/AddModules";

import DetailDescription from "@/components/Instructor/DetailDescription";
import { useState } from "react";

const DetailsAbout = () => {
  const [change,setChange] = useState<boolean>(false)
  const { id } = useParams();

  const { course,chapters,setInvoke } = useCourseDetails(id!);
  return (
    <div>
      <div className="relative">
        {change && (
          <AddModules change={change} setChange={setChange} setInvoke= {setInvoke} courseId={id!}  />
        )}
        <Button
          onClick={() => {
            setChange(true);
          }}
          className="uppercase absolute right-5 top-52 "
        >
          +Add new modules
        </Button>
      </div>
      {course&& chapters &&( <DetailDescription course={course} chapters= {chapters} />)}
     
    </div>
  );
};

export default DetailsAbout;
