function TodoItem({item, index, setTodo}) {
    const onChange = (e) => {
        setTodo((prevTodo) => {
            const nextTodo = [...prevTodo];
            nextTodo[index] = {...nextTodo[index]};
            nextTodo[index].completed = e.target.value;
            return nextTodo;
        });
    }

    return (
        <div>
            <input type="checkbox" value={item.completed} onChange={onChange} />
            {item.title}
        </div>
    )
}

export default TodoItem