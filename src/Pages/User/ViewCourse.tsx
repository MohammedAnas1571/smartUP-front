import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { CiStar } from "react-icons/ci";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdVideoCall } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import Chat from "../../components/Chat/Chat";
import api from "@/Utils/api";
import handleApiError from "@/Error Handler/ApiErrorHandler";

type ChapterDetails = {
  _id: string;
  name: string;
  order: number;
  videoUrl: string;
  courseId: {
    content: string;
    title: string;
    tutorId: {
      username: string;
      profilePhoto: string;
      profession: string;
      _id: string;
    };
  };

  title: string;
};
type ReviewDetails = {
  rating: number;
  review: string;
};

const ViewCourse = () => {
  const [chapters, setChapters] = useState<ChapterDetails[]>([]);
  const [star, setStar] = useState(0);
  const [review, setReview] = useState("");
  const [userReview, setUserReview] = useState<ReviewDetails | null>(null);
  const [selected, setSelected] = useState<ChapterDetails | null>(null);
  const { id } = useParams();
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const { data } = await api.get(`/auth/modules/${id}`);
      setChapters(data.chapters);
      setUserReview(data.reviews);
      if (data.chapters.length > 0) {
        setSelected(data.chapters[0]);
      }
    } catch (err) {
      handleApiError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleSubmit = async () => {
    if (!review.trim()) {
      toast.error("Please provide a review.");
      return;
    }
    try {
      const { data } = await api.post(`/auth/review/${id}`, {
        star,
        review,
      });
      toast.success("Review submitted successfully!");
      setUserReview(data);
      setStar(0);
      setReview("");
    } catch (err) {
      handleApiError(err);
    }
  };
  const handleVideocall = () => {
    function randomID(len: number) {
      let result = "";
      if (result) return result;
      var chars =
          "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
        maxPos = chars.length,
        i;
      len = len || 5;
      for (i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return result;
    }
    const result = randomID(7)
    navigate(`/video-call/${result}`);
  };

  return (
    <div className="py-10 px-8">
      <div className="flex justify-around ">
        <div className="flex-col">
          {selected && (
            <video
              key={selected._id}
              controls
              width="700"
              height="600"
              className="h-[400px] border bg-black rounded-lg"
            >
              <source src={selected.videoUrl} type="video/mp4" />
            </video>
          )}

          {chapters.map((chapter) => (
            <div key={chapter._id} className="my-5">
              {selected?._id === chapter._id && (
                <>
                  <h1 className="text-3xl mb-5">{chapter.courseId.title}</h1>
                  <div className="flex gap-5 mt-2 ">
                    <div>
                      <img
                        className="w-20 h-20 rounded-full object-cover"
                        src={`/auth/${chapter.courseId.tutorId.profilePhoto}`}
                        alt={chapter.courseId.tutorId.username}
                      />
                    </div>
                    <div>
                      <p className="text-2xl">
                        {chapter.courseId.tutorId.username}
                      </p>
                      <p className="text-sm">
                        {chapter.courseId.tutorId.profession}
                      </p>
                    </div>

                    <div className=" flex gap-7 my-2">
                      <button
                        onClick={() => setShowChat(true)}
                        className="bg-black/20 py-2 px-2 rounded-md hover:bg-black/20 transition duration-300 flex gap-2 items-center"
                      >
                        <IoChatboxEllipses size={25} />
                        Chat with Instructor
                      </button>
                      <button
                        onClick={handleVideocall}
                        className="bg-black/20 py-2 px-2 rounded-md hover:bg-black/20 transition duration-300 flex gap-2 items-center"
                      >
                        <MdVideoCall size={30} />
                        Connect with Instructor
                      </button>
                    </div>
                  </div>
                  {showChat && (
                    <Chat
                      setShowChat={setShowChat}
                      tutor={chapter.courseId.tutorId}
                    />
                  )}
                  <Card className="border-0 shadow-none">
                    <CardHeader>
                      <CardTitle>What you'll learn</CardTitle>
                      <CardDescription>Course Includes:</CardDescription>
                    </CardHeader>
                    <CardContent>{chapter.courseId.content}</CardContent>
                  </Card>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-7">
          <div className="w-96 h-96 rounded-md shadow-md overflow-y-auto ">
            <h1 className="flex justify-center items-center font-bold text-white bg-slate-900 h-16 text-2xl">
              Chapters
            </h1>
            {chapters.map((chapter, index) => (
              <div
                key={chapter._id}
                className={`py-5 px-5 text-left transition-colors transform cursor-pointer ${
                  selected?._id === chapter._id
                    ? "bg-slate-100"
                    : " hover:bg-slate-100"
                } whitespace-nowrap`}
                onClick={() => setSelected(chapter)}
              >
                <p className="text-lg capitalize font-serif">
                  {index + 1}. {chapter.name}
                </p>
              </div>
            ))}
          </div>
          <div className="w-96 h-auto flex flex-col items-center rounded-md shadow-md ">
            {userReview ? (
              <div className="max-w-96 px-5 py-3">
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
                <h1 className="text-2xl p-5">Review course</h1>
                <div className="flex gap-3 mb-5 ">
                  {[1, 2, 3, 4, 5].map((item) => {
                    if (star >= item) {
                      return (
                        <FaStar
                          key={item}
                          onClick={() => {
                            if (star !== item) {
                              setStar(item);
                            } else {
                              setStar(item - 1);
                            }
                          }}
                          size={30}
                          className="text-yellow-300 transition-colors"
                        />
                      );
                    } else {
                      return (
                        <CiStar
                          key={item}
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
                  className="text-lg w-80 mb-5"
                />
                <div className="flex justify-end w-80">
                  <Button onClick={handleSubmit} className="mb-5">
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
