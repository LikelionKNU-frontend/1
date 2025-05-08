import React, { useEffect } from "react";

const Timer2 = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머...");
    }, 1000);

    // 화면에서 컴포넌트가 사라질때 타이머가 종료되는 cleanup을 작성한 것
    return () => {
      clearInterval(timer);
      console.log("종료");
    };
  }, []);

  return (
    <div>
      <span>꽥꽥꽥꽥꽥</span>
    </div>
  );
};
export default Timer2;
