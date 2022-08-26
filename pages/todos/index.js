import { useEffect, useState, useCallback } from "react";
import { render } from "react-dom";

export default function Page() {

    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [checkTime, setCheckTime] = useState('');

    const callbackTodo = (ev) => {
        setTodo(ev.target.value)
    }

    const callbackSubmit = (ev) => {
        ev.preventDefault();
        if(todo == '') return;
        let newTodo = {
            id: todoList.length + 1,
            name: todo,
            done: false
        }

        setTodoList([...todoList, newTodo]);
        setTodo('');
    }

    const listClickHandler = (ev, id) => {
        ev.preventDefault();
        let found = todoList.findIndex( element => element.id == id );
        let tempArray = todoList;
        tempArray[found].done = !tempArray[found].done;
        setTodoList(tempArray);
        setCheckTime( new Date().toISOString() );
        console.log(tempArray);
    }

    useEffect( ()=>{
        console.log(`todolist changed`)
    }, [todoList, checkTime] )

    return (
        <div className="container">
            <form>

                <input id="todo" onChange={callbackTodo} value={todo} />
                <button onClick={callbackSubmit}>Submit</button>

                <ul>
                    {
                        todoList.length == 0 ?
                            <></>
                            :
                            // <div>{JSON.stringify(todoList)}</div>
                        todoList.map(t => (
                            <li key={t.id}
                                onClick={(e) => {listClickHandler(e, t.id)}} 
                                className={t.done ? 'done' : ''}
                            >{t.name}</li>
                        ))
                    }
                </ul>
            </form>

            <style jsx>{`
                li.done{text-decoration: line-through !important}
            `}</style>

        </div>
    )

}