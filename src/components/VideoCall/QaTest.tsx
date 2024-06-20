import React, { Dispatch, RefObject, SetStateAction, useState } from "react";
import { MdNetworkCheck } from "react-icons/md";
import { CiMicrophoneOff, CiMicrophoneOn } from "react-icons/ci";
import {
  BsFillCameraVideoOffFill,
  BsFillCameraVideoFill,
} from "react-icons/bs";

import ReactMic from "@/components/VideoCall/ReactMic";
import IntelPage from "@/components/VideoCall/IntelPage";
import { Button } from "../ui/button";

type props = {
  videoRef: RefObject<HTMLVideoElement>;
  videoStream: MediaStream;
  audioMuted: {
    audioMuted: boolean;
    setAudioMuted: Dispatch<SetStateAction<boolean>>;
  };
  videoMuted: {
    videoMuted: boolean;
    setVideoMuted: Dispatch<SetStateAction<boolean>>;
  };
  toggle: {
    toggleAudioMute: () => void;
    toggleVideoMute: () => void;
    startPage: Dispatch<SetStateAction<boolean>>;
  };
};

export default function QATest({
  videoRef,
  videoStream,
  audioMuted,
  videoMuted,
  toggle,
}: props) {
  return (
    <>
      <div className="w-screen h-screen bg-white dark:bg-black p-8 pl-20 gap-6 flex">
        <div className=" w-3/5 h-3/5">
          <div className="relative rounded-2xl">
            <video
              width={1920}
              height={2000}
              muted
              className="outline outline-2  bg-slate-200 rounded-2xl outline-black/40  "
              ref={videoRef}
              style={{ transform: "scaleX(-1)" }}
              autoPlay
            />
            <div className="flex w-full h-14 absolute bottom-0  justify-between mb-4 gap-2">
              <div className="">
                {!audioMuted.audioMuted && (
                  <ReactMic
                    backgroundColor="rgba(0, 0, 0, 0.5)"
                    width={50}
                    height={40}
                    className="bg-primary absolute ml-3  rounded-full p-2 "
                    stream={videoStream}
                  />
                )}
              </div>

              <div className="flex justify-center w-full gap-2">
                <div
                  onClick={toggle.toggleVideoMute}
                  className="outline outline-1 dark:outline-white/40 outline-black/40 dark:hover:bg-white/15  hover:bg-black/15 transition-colors flex justify-center items-center rounded-full p-3"
                >
                  {!videoMuted.videoMuted ? (
                    <BsFillCameraVideoFill className="text-primary" size={30} />
                  ) : (
                    <BsFillCameraVideoOffFill
                      className="text-primary"
                      size={30}
                    />
                  )}
                </div>
                <div
                  onClick={toggle.toggleAudioMute}
                  className="outline outline-1 dark:outline-white/40 outline-black/40 dark:hover:bg-white/15  hover:bg-black/15 transition-colors flex justify-center items-center rounded-full p-3"
                >
                  {!audioMuted.audioMuted ? (
                    <CiMicrophoneOn className="text-primary" size={30} />
                  ) : (
                    <CiMicrophoneOff className="text-primary" size={30} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/2 ">
          <h1 className="text-3xl text-center font-thin">
            Create A Video Call With Your Tutor{" "}
          </h1>
          <div className=" mt-10 ">
            <IntelPage />
          </div>
          <div className="flex justify-center">
            <Button
              className="mt-10 w-48 text-lg p-6"
              onClick={() => toggle.startPage(false)}
            >
              Connect 
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
