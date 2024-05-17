import { useState } from "react"

const List = () => {
    const [inputTask, setInputTask] = useState("");
    const [listItems, setListItems] = useState([])


  


    const handleDelete = (id) => {
        setListItems(listItems.filter(item => item.id !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // stops the browser refreshing after okay is pressed on the alert

        if (inputTask.trim() !== "") {
            setListItems([...listItems, { id: Math.floor(Math.random() * 1000), value: inputTask }]);
            setInputTask(""); // Clear the input field
        }

        alert(`${inputTask} has been added`); // show a popup with whatever was inputted
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>My To-Do list</h1>
                <label>
                    What would you like to add:
                    <input type="text"
                        value={inputTask}
                        onChange={(e) => setInputTask(e.target.value)} />
                </label>
                <button className="btn" type="submit">Add task</button>
            </form>


            <h2>Your list so far:</h2>
            <ul>
                {listItems.map((item) => (
                    <li key={item.id}>{item.value}
                        <button className="btn" onClick={() => handleDelete(item.id)}>Completed </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}



export default List


