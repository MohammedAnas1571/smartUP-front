import React, { useEffect, useRef } from "react";

const IntelPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;

    if (!canvas || !img1 || !img2) {
      return;
    }

    const rect1 = img1.getBoundingClientRect();
    const rect2 = img2.getBoundingClientRect();

    canvas.width = window.innerWidth - 200;
    canvas.height = window.innerHeight - 300;
    console.log(window.innerWidth, window.innerHeight);

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let dashOffset = 0;
    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.setLineDash([10, 10]);
      ctx.lineDashOffset = dashOffset;

      ctx.strokeStyle = "red";
      ctx.beginPath();
      ctx.moveTo(rect1.x + rect1.width / 2, rect1.y + rect1.height / 2);
      ctx.lineTo(rect2.x + rect2.width / 2, rect2.y + rect2.height / 2);
      ctx.stroke();

      dashOffset++;
      if (dashOffset > 15) {
        dashOffset = 0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="flex justify-center gap-28">
          <img
            className="w-44 h-44 rounded-full z-10 outline outline-1 bg-slate-800"
            src="https://img.freepik.com/premium-photo/man-with-beard-beard-blue-circle-generative-ai_902639-79016.jpg?w=740"
            ref={img2Ref}
            alt="Avatar 2"
          />
          <img
            className="w-44 h-44 rounded-full z-10 outline outline-1 bg-slate-800"
            src="https://www.svgrepo.com/show/382101/male-avatar-boy-face-man-user.svg"
            ref={img1Ref}
            alt="Avatar 1"
          />
          <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />
        </div>
      </div>
    </div>
  );
};

export default IntelPage;
