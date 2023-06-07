// eslint-disable : lint 끄는 기능
import React, { Component, useState } from 'react';
import './App.css';
import List from './components/list';

function App() {
  const [title, setTitle] = useState([
      '남자 코트 추천',
      '강남 우동 맛집',
      '파이썬 독학'
  ]);

  const [modal, setModal] = useState(false);
  const [postIdx, setPostIdx] = useState(0);
  const [post, setPost] = useState('');


  const writePost = () => {
    const input = document.querySelector(".postInput");
    if(input.value.length < 1) {
      alert("글 제목은 최소 1자 이상이어야 합니다 : < ");
    }else {
      // const newPosts = [...title, post]; 
      const newPosts = [...title];
      newPosts.unshift(post); // 앞애 추가하고 싶으면 unshift()
      setTitle(newPosts);
      input.value = "";
    }
  }

  function btnSort() {
    let sortArr = [...title];
    sortArr.sort();
    setTitle(sortArr);
  }

  function showModal() {
    if(modal) {
      setModal(false);
    }else {
      setModal(true);
    }
  }

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4 style={{ color : '#fff', fontSize : '18px'}}>ReactBlog</h4>
      </div>

      <Modal2></Modal2>

      <List title={title} changeTitle={setTitle} changePost={setPostIdx}></List>
      {
        modal === true ? <Modal title={title} color={'skyblue'} postIdx={postIdx} changeTitle={setTitle}/> : null
      }
      <button onClick={() => {setModal(!modal)}}>모달 변경</button>
      <button onClick={() => {
        const newTitle = [...title];
        newTitle[0] = '여자 코트 추천';
        setTitle(newTitle);
        }}>글제목 수정</button>
      <button onClick={btnSort}>글제목 정렬</button>  


      <input type="text" className="postInput" onChange={(e) => { setPost(e.target.value) }} onMouseOver={() => { console.log("mouse!!") }}/>
      <button onClick={() => {writePost()}}>글작성</button>
    </div>
  )

}

function Modal(props) {
  const changeTitle = () => {
    const newTitle = [...props.title];
    newTitle[0] = "여자 코트 추천";
    props.changeTitle(newTitle);
  }
  return (
    <div className='modal' style={{background : props.color}}>
      <h4>{props.title[props.postIdx]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={() => {changeTitle()}}> 글수정 </button>
    </div>

  )
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'name' : 'vivi',
      'age' : 20
    }
  }

  render() {
    return (
      <div>
        안녕 {this.state.name}({this.state.age})
        <button onClick={()=>{this.setState({age: 30})}}>변경</button>
      </div>
    )
  }
}

export default App;

// 부모-> 자식 state 전송하려면 props 문법 사용