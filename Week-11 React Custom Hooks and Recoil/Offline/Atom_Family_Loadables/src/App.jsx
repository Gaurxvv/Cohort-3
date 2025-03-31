import { RecoilRoot, useRecoilValue, useRecoilValueLoadable } from 'recoil'
import './App.css'
import { todosAtomFamily } from './atom'

function App() {

  return (
    <>
      <RecoilRoot>
        <div>
          <Todo id={1} />
          <Todo id={2} />
          <Todo id={1} />
        </div>
      </RecoilRoot>
    </>
  )
}
function Todo({ id }) {
  const currentTodo = useRecoilValueLoadable(todosAtomFamily(id))
  if (currentTodo.state === "loading") { return <div>Loading</div> }
  else if (currentTodo.state === "hasValue") {
    const todo = currentTodo.contents
    return (
      <div>
        {todo.title} <br></br>
        {todo.description}
      </div>
    )
  }

}

export default App
