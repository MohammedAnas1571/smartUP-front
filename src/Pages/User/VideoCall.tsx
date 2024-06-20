import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/Store';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
import { ScreenShare } from 'lucide-react';

const VideoCall = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const { currentTutor } = useSelector((state: RootState) => state.tutor);
  const { roomID } = useParams<{ roomID: string }>();
  const containerRef = useRef<HTMLDivElement>(null);
  const zpInstanceRef = useRef<any>(null); 

  useEffect(() => {
    const myMeeting = async () => {
      const appID = Number(import.meta.env.VITE_APP_ID);
      const serverSecret = import.meta.env.VITE_SERVERSECRET;

      const userID = currentUser?._id || currentTutor?._id;
      const userName = currentUser?.username || currentTutor?.username;

      if (!userID || !userName || !roomID) {
        console.error("User ID, Username, or RoomID is missing");
        return;
      }

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        userID,
        userName
      );

    
      if (zpInstanceRef.current) {
        zpInstanceRef.current.destroy(); 
        zpInstanceRef.current = null;
      }

      zpInstanceRef.current = ZegoUIKitPrebuilt.create(kitToken);

      if (containerRef.current) {
        zpInstanceRef.current.joinRoom({
          container: containerRef.current,
          sharedLinks: [
            {
              name: 'Copy link',
              url: `http://localhost:5173/instructor/video-call/${roomID}`,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
           
          },
          showScreenSharingButton: true,
        
        });
      }
    };

    myMeeting();

    
    return () => {
      if (zpInstanceRef.current) {
        zpInstanceRef.current.destroy(); 
        zpInstanceRef.current = null;
      }
    };
  }, [currentUser, currentTutor, roomID]);

  return (
    <div
      ref={containerRef}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
};

export default VideoCall;
