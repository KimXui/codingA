import '../App.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import axios, { Axios } from "axios";


function Event() {
  let [Tab, setTab] = useState(0);

  return (
    <div>
      <div className="Event_bg" />
      <div>


        <Nav fill variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link-0">상세정보</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link-1">리뷰</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link-2">QnA</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled">반품교환정보</Nav.Link>
          </Nav.Item>
        </Nav>

      <TabComponent Tab = {Tab} />


      </div>
    </div>
  );
}


function TabContent({ 탭 }) {
  let [fade, setFade] = useState('');

  useEffect(() => {
    setFade(''); // 초기화
    const timeoutId = setTimeout(() => {
      setFade('end');
    }, 100);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [탭.length]);

  return (
    <div className={'start ' + fade}>
      {[
        <div>내용0</div>,
        <div>내용1</div>,
        <div>내용2</div>
      ][탭]}
    </div>
  );
}



function TabComponent(props) {
  if (props.Tab == 0) {
    return <div className='tab-0'>내용0</div>
  } else if (props.Tab == 1) {
    return <div className='tab-1'>내용1</div>
  } else if (props.Tab == 2) {
    return <div className='tab-2'>내용2</div>
  }
}

export default Event;
