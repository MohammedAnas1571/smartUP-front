import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { CiStar } from "react-icons/ci";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";

type ChapterDetails = {
  _id: string;
  name: string;
  order: number;
  videoUrl: string;
};
type ReviewDetails = {
  rating:number;
  review:string;
}

const ViewCourse = () => {
  const [chapters, setChapter] = useState<ChapterDetails[]>([]);
  const [star, setStar] = useState(0);
  const [review, setReview] = useState("");
  const [userReview,setUserReview] = useState<ReviewDetails|null>()
  const [selected, setSelected] = useState<ChapterDetails | null>(null);
  const { id } = useParams();

  

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`/auth/modules/${id}`);
      setChapter(data.chapters);
      setUserReview(data.reviews)
      if (data.chapters.length > 0) {
        setSelected(data.chapters[0]);
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(
          err.response.data.message || "Sorry, something went wrong!"
        );
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    if (!review.trim()) {
      toast.error("Please provide a review.");
      return;
    }
    try {
     const {data} =  await axios.post(`/auth/review/${id}`, {
        star,
        review,
      });
      toast.success("Review submitted successfully!");
      setUserReview(data)
      setStar(0);
      setReview("");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        toast.error(
          err.response.data.message || "Sorry, something went wrong!"
        );
      }
    }
  };

  return (
    <div className="py-10 px-8">
      <div className="flex justify-around ">
        {selected && (
          <video
            key={selected._id}
            controls
            width="700"
            height="600"
            className=" h-[400px] border bg-black"
          >
            <source src={selected.videoUrl} type="video/mp4" />
          </video>
        )}
        <div className="flex flex-col gap-7">
          <div className="w-96 h-96 rounded-md shadow-md overflow-y-auto ">
            <h1 className="flex justify-center items-center font-bold text-white bg-slate-900 h-16 text-2xl">
              Chapters
            </h1>
            {chapters.map((chapter, index) => (
              <div
                className={`py-5 px-5 text-left transition-colors transform focus:bg-black cursor-pointer ${
                  selected === chapter ? "bg-slate-200" : " hover:bg-slate-100"
                }
          }  whitespace-nowrap`}
                onClick={() => setSelected(chapter)}
              >
                <p className="text-lg capitalize font-serif ">
                  {index + 1}.{chapter.name}
                </p>
              </div>
            ))}
          </div>
          <div className="w-96 h-auto flex flex-col items-center  rounded-md shadow-md ">
            

            {userReview ? (
            <div className="max-w-96 px-5 py-3" >
            <h2 className="text-2xl mb-2">Your Review:</h2>
            <div className="">
              <div className="flex gap-3 mb-3">
                {[1, 2, 3, 4, 5].map((item) => {
                  if (userReview.rating >= item) {
                    return (
                      <FaStar
                        key={item}
                        size={30}
                        className="text-yellow-300"
                      />
                    );
                  } else {
                    return (
                      <CiStar
                        key={item}
                        size={30}
                        className="text-primary"
                      />
                    );
                  }
                })}
              </div>
              <p className="text-lg break-words ">{userReview.review}</p>
            </div>
          </div>
          
            ) : (
              <>
              <h1 className="text-2xl  p-5">Review course</h1>
                <div className="flex gap-3 mb-5 ">
                  {[1, 2, 3, 4, 5].map((item) => {
                    if (star >= item) {
                      return (
                        <FaStar
                          onClick={() => {
                            if (star !== item) {
                              setStar(item);
                            } else {
                              setStar(item - 1);
                            }
                          }}
                          size={30}
                          className="  text-yellow-300 transition-colors"
                        />
                      );
                    } else {
                      return (
                        <CiStar
                          onClick={() => setStar(item)}
                          size={30}
                          className="text-primary hover:text-yellow-300 transition-colors"
                        />
                      );
                    }
                  })}
                </div>

                <Textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Type your review."
                  className=" text-lg w-80 mb-5"
                />
                <div className="flex justify-end w-80">
                  <Button onClick={handleSubmit} className="mb-5 ">
                    Submit
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewCourse;
