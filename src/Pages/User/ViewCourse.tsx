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

import handleApiError from "@/Error Handler/ApiErrorHandler";
import axios from "axios";

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
      const { data } = await axios.get(`/auth/modules/${id}`);
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
      const { data } = await axios.post(`/auth/review/${id}`, {
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
      var chars =
        "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
      let maxPos = chars.length;
      for (let i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return result;
    }
    const result = randomID(7);
    navigate(`/video-call/${result}`);
  };

  return (
    <div className="py-10 px-4 md:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Video Player */}
          {selected && (
            <video
              key={selected._id}
              controls
              className="w-full md:w-[700px] h-[400px] md:h-[500px] border bg-black rounded-lg"
            >
              <source src={selected.videoUrl} type="video/mp4" />
            </video>
          )}

          {/* Chapters and Instructor Info */}
          {selected && (
            <>
              <h1 className="text-3xl mb-5">{selected.courseId.title}</h1>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-shrink-0">
                  <img
                    className="w-20 h-20 rounded-full object-cover"
                    src={`/auth/${selected.courseId.tutorId.profilePhoto}`}
                    alt={selected.courseId.tutorId.username}
                  />
                </div>
                <div>
                  <p className="text-2xl">{selected.courseId.tutorId.username}</p>
                  <p className="text-sm">{selected.courseId.tutorId.profession}</p>
                </div>
                <div className="flex gap-5 mt-4">
                  <button
                    onClick={() => setShowChat(true)}
                    className="bg-black/20 py-2 px-4 rounded-md hover:bg-black/30 transition duration-300 flex gap-2 items-center"
                  >
                    <IoChatboxEllipses size={25} />
                    Chat with Instructor
                  </button>
                  <button
                    onClick={handleVideocall}
                    className="bg-black/20 py-2 px-4 rounded-md hover:bg-black/30 transition duration-300 flex gap-2 items-center"
                  >
                    <MdVideoCall size={30} />
                    Connect with Instructor
                  </button>
                </div>
              </div>
              {showChat && (
                <Chat
                  setShowChat={setShowChat}
                  tutor={selected.courseId.tutorId}
                />
              )}
              <Card className="border-0 shadow-none mt-8">
                <CardHeader>
                  <CardTitle>What you'll learn</CardTitle>
                  <CardDescription>Course Includes:</CardDescription>
                </CardHeader>
                <CardContent>{selected.courseId.content}</CardContent>
              </Card>
            </>
          )}
        </div>

        {/* Sidebar */}
        <div className="flex-shrink-0 w-full md:w-96">
          {/* Chapters List */}
          <div className="rounded-md shadow-md overflow-y-auto">
            <h1 className="flex justify-center items-center font-bold text-white bg-slate-900 h-16 text-2xl">
              Chapters
            </h1>
            {chapters.map((chapter, index) => (
              <div
                key={chapter._id}
                className={`py-5 px-5 cursor-pointer ${
                  selected?._id === chapter._id
                    ? "bg-slate-100"
                    : "hover:bg-slate-100"
                }`}
                onClick={() => setSelected(chapter)}
              >
                <p className="text-lg capitalize font-serif">
                  {index + 1}. {chapter.name}
                </p>
              </div>
            ))}
          </div>

          {/* Review Section */}
          <div className="mt-8 rounded-md shadow-md p-5">
            {userReview ? (
              <div className="max-w-xs mx-auto">
                <h2 className="text-2xl mb-2">Your Review:</h2>
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
                <p className="text-lg break-words">{userReview.review}</p>
              </div>
            ) : (
              <>
                <h1 className="text-2xl mb-5">Review course</h1>
                <div className="flex gap-3 mb-5">
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
                  className="text-lg w-full mb-5"
                />
                <div className="flex justify-end">
                  <Button onClick={handleSubmit}>Submit</Button>
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
