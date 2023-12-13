import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { Axios } from "axios";

function Detail(props) {
  let { id } = useParams();
  let [count, setcount] = useState(0);

  useEffect(() => {
    let a = setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);
  const checkInput = (event) => {
    const regex = /[가-힣]/g;
    if (regex.test(event.target.value)) {
      window.alert("한글 입력은 허용되지 않습니다.");
    }
  };
  



  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="alert alert-warning">2초 이내 구매시 90%할인</div>
          <button
            onClick={() => {
              setcount(count + 1);
            }}
          >
            {" "}
            {count}
          </button>
          <input onChange={checkInput} />

          <img
            src={props.shoes.sort((a, b) => a.id - b.id)[parseInt(id)].img}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
         
          
          




        </div>
      </div>
    </div>
  );
}

export default Detail;
