import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import data from "./Pages/data.js";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";

import axios from "axios";

import Detail from "./Pages/detail.js";
import Event from "./Pages/event.js";
import Cart from "./Pages/cart.js"



function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [clickCount, setClickCount] = useState(0);



  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            Penta.GG
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              게시판
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              이벤트1
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/0");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((shoe, i) => (
                    <Photo shoes={shoe} i={i + 1} />
                  ))}
                </div>
              </div>{" "}
              <>

                <button onClick={() => {
                  let newClickCount = clickCount + 1;
                  setClickCount(newClickCount);
                  if (newClickCount === 1) {
                    axios.get('https://codingapple1.github.io/shop/data2.json').then((결과) => {
                      let copy = [...shoes, ...결과.data]
                      setShoes(copy)
                    }).catch(() => {
                      console.log('통신 실패')
                    })
                  } else if (newClickCount === 2) {
                    axios.get('https://codingapple1.github.io/shop/data3.json').then((결과) => {
                      let copy = [...shoes, ...결과.data]
                      setShoes(copy)
                    })
                  } else {
                    window.alert('상품이 존재하지 않습니다')
                  }
                }}>버튼</button>

                <p>버튼이 눌린 횟수: {clickCount}</p>

              </>


            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>404_not_found_X</div>} />
        <Route path="/event" element={<Event />} />
        <Route path="/cart" element={<Cart />} />

          
        
      </Routes>
    </div >
  );
}



function Photo(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
