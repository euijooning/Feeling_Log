import React from "react";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

const LogItem = ({ id, emotion, content, date }) => {
  // 혹시 모르니 예외처리
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const navigate = useNavigate();
  const moveLogDetail = () => {
    navigate(`/log/${id}`);
  };
  const moveEditPage = () => {
    navigate(`/edit/${id}`)
  }

  return (
    <div className="LogItem">
      <div
        onClick={moveLogDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")} // 공백 한 칸 띄워주고 구분
      >
        {/* 여기 이미지 */}
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} alt="img" />
      </div>
      <div onClick={moveLogDetail} className="info_wrapper">
        <div className="log_date">{strDate}</div>
        <div className="log_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="button_wrapper">
        <MyButton onClick={moveEditPage} text={"수정하기"} />
      </div>
    </div>
  );
};

export default React.memo(LogItem);