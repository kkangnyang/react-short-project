import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './todo/TodoForm'
import TodoItem from './todo/TodoItem';

function App() {
  const [todo, setTodo] = useState([])

  useEffect(() => {
    // 이 컴포넌트가 마운트될 때 실행되는 함수
    return () => {
      // 이 컴포넌트가 언마운트될 때 실행되는 함수
    }
  }, []);

  useEffect(() => {

  }); // 리랜더링될때마다 실행

  useEffect(() => {
    // todo가 바뀔 때마다 실행됨
    // {} !== {}
    return () => {
      // cleanup
      // todo가 바뀌기 직전에 실행됨
    }
  }, [todo]);

  // todo가 a -> b
  // a useEffect -> a cleanup -> b useEffect

  const onSubmit = (newTodo) => {
    // state는 값이 변해야만 동작
    const nextTodo = [...todo, {title: newTodo, complete: false, id: Math.random()}]
    setTodo(nextTodo) // 불변성. immer 라이브러리 사용하면 더 코드가 깔끔해짐
    console.log(todo); // 안 바뀜, 비동기때문x(batch)
  }

  return (
    <> {/* Fragment */}
      <div className="App">TODO</div>
      <div className="App">
        {todo.length === 0 ? (
          <div>
            <div>할 일을 추가해보세요.</div>
            <TodoForm onSubmit={onSubmit} />
          </div>
        ) : (
          <> 
          {todo.map((t, idx) => (<TodoItem key={idx} index={idx} item={t} setTodo={setTodo} />))}
            <TodoForm onSubmit={onSubmit} />
          </>
        )}

      </div>
    </>
  )
}

export default App
