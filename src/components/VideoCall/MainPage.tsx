import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Peer from "peerjs";
import { motion } from "framer-motion";
import { BsFillCameraVideoFill, BsFillCameraVideoOffFill } from "react-icons/bs";
import { CiMicrophoneOff, CiMicrophoneOn } from "react-icons/ci";
import ReactMic from "@/components/VideoCall/ReactMic";
import "../../App.css" 

type Props = {
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
  };
};

export const VideoCallMain: React.FC<Props> = ({ videoStream, toggle, videoMuted, audioMuted }) => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [peerId, setPeerId] = useState<string>("");
  const [remoteVideoStream, setRemoteVideoStream] = useState<MediaStream | null>(null);
  const [remotePeerIdValue, setRemotePeerIdValue] = useState<string>("");
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const currentUserVideoRef = useRef<HTMLVideoElement>(null);
  const peerInstance = useRef<Peer | null>(null);

  useEffect(() => {
    const peer = new Peer();
    peer.on("open", (id) => {
      console.log(id);
      setPeerId(id);
    });
    peerInstance.current = peer;
  }, []);

  useEffect(() => {
    if (videoStream && currentUserVideoRef.current) {
      currentUserVideoRef.current.srcObject = videoStream;
    }

    const peer = peerInstance.current;
    if (peer) {
      peer.on("call", (call) => {
        call.answer(videoStream);
        call.on("stream", (remoteStream) => {
          setRemoteVideoStream(remoteStream);
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = remoteStream;
            remoteVideoRef.current.play();
          }
        });
      });
    }
  }, [videoStream]);

  const call = (remotePeerId: string) => {
    const call = peerInstance.current?.call(remotePeerId, videoStream);
    call?.on("stream", (remoteStream) => {
      setRemoteVideoStream(remoteStream);
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = remoteStream;
        remoteVideoRef.current.play();
      }
    });
  };

  return (
    <div>
      <div className="absolute top-3 right-3"></div>
      <div className="w-dvw h-dvh pt-10">
        <div className="flex justify-center w-full h-4/5 ">
          <motion.div
            className="bg-slate-600 relative drag-area h-full rounded-3xl"
            ref={constraintsRef}
          >
            <video
              width={1920}
              height={1080}
              autoPlay
              ref={remoteVideoRef}
              style={{ transform: "scaleX(-1)" }}
              playsInline
              muted
              className="rounded-2xl outline-primary w-full h-full"
            ></video>
            <div className="example-container">
              <motion.div
                drag
                whileTap={{ cursor: "grabbing" }}
                className="relative w-20 outline outline-2 outline-primary rounded-2xl"
                dragConstraints={constraintsRef}
              >
                <video
                  autoPlay
                  style={{ transform: "scaleX(-1)" }}
                  ref={currentUserVideoRef}
                  muted
                  width={250}
                  height={250}
                  src=""
                  className="rounded-2xl bg-slate-200"
                ></video>
                <ReactMic
                  className="bg-primary rounded-full absolute bottom-1 left-1"
                  width={35}
                  height={30}
                  stream={videoStream}
                />
              </motion.div>
            </div>
            <ReactMic
              className="bg-primary rounded-full absolute bottom-1 left-1"
              width={50}
              height={40}
              stream={remoteVideoStream!}
            />
          </motion.div>
          <div className="bg-slate-600 h-full w-1/5 rounded-3xl ml-3">
            <h1>{peerId}</h1>
            <input
              type="text"
              value={remotePeerIdValue}
              onChange={(e) => setRemotePeerIdValue(e.target.value)}
            />
            <button onClick={() => call(remotePeerIdValue)}>Call</button>
          </div>
        </div>
        <div className="flex w-full h-14 justify-center mt-4 gap-2">
          <div
            onClick={toggle.toggleVideoMute}
            className="outline outline-1 dark:outline-white/40 outline-black/40 dark:hover:bg-white/15 hover:bg-black/15 transition-colors flex justify-center items-center rounded-full p-3"
          >
            {!videoMuted.videoMuted ? (
              <BsFillCameraVideoFill className="text-primary" size={30} />
            ) : (
              <BsFillCameraVideoOffFill className="text-primary" size={30} />
            )}
          </div>
          <div
            onClick={toggle.toggleAudioMute}
            className="outline outline-1 dark:outline-white/40 outline-black/40 dark:hover:bg-white/15 hover:bg-black/15 transition-colors flex justify-center items-center rounded-full p-3"
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
  );
};
