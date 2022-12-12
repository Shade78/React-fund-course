import React, {useState, useRef} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostItem from "./components/PostItem";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/button/input/MyInput";

function App() {
  // [count, setCount] деструктуризация
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'}
  ])

  const [title, setTitle] = useState('')
  const bodyInputRef = useRef()  // получение доступа к DOM елементу

  const addNewPost = (evenT) => {
    evenT.preventDefault()
    console.log(title) 
    console.log(bodyInputRef.current.value)   // если выводить current - получим DOM елемент
  }
  // function addNewPost(){

  // }

  return (
    <div className="App">
        <form>
          {/* -Управляемый компонент- */}
          <MyInput 
            value={title}
            // onChange={function(evenT) {       // чтобы легче понять двустороннее связывание
            //   setTitle(evenT.target.value)
            // }}
            onChange={e => setTitle(e.target.value)}
            type="text" 
            placeholder="Название поста"
          />
          {/* -Неуправляемый компонент-(неконтролируемый) */}
          <MyInput 
            ref={bodyInputRef}
            type="text" 
            placeholder="Описание поста"
          />
          <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title="Посты про JS"/> 
    </div>
  );
}

export default App;
