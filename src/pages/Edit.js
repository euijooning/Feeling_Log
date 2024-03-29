import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LogStateContext } from "../App";
import LogEditor from "../components/LogEditor";

const Edit = () => {
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const logList = useContext(LogStateContext);
  // console.log(id);
  // console.log(logList);

    // 페이지마다 다른 타이틀 만들게 하기
    useEffect(() => {
      const titleElement = document.getElementsByTagName("title")[0];
      titleElement.innerHTML = `${id}번째 기록 수정`;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  useEffect(() => {
    if (logList.length >= 1) {
      // 데이터가 한개라도 있어야
      const targetLog = logList.find((it) => parseInt(it.id) === parseInt(id));
      console.log(targetLog);

      // 잘못된 id값을 전달하는 경우에 대한 처리 작업도 필요함.
      // truthy / falsy 활용.
      if (targetLog) {
        setOriginData(targetLog);
      } else {
        alert("존재하지 않는 기록입니다.");
        navigate("/", { replace: true }); // 홈으로 돌려보내고, 뒤로가기 금지
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, logList]);

  return (
    <div>
      {originData && <LogEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
