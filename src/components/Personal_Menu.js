import React from "react";
import "./Personal_Menu.css";

const App = () => {
  const [menu, setmenu] = React.useState([]);
  const [dish, setdish] = React.useState("");
  const [dishEditing, setdishEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  React.useEffect(() => {
    const json = localStorage.getItem("menu");
    const loadedmenu = JSON.parse(json);
    if (loadedmenu) {
      setmenu(loadedmenu);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(menu);
    localStorage.setItem("menu", json);
  }, [menu]);

  function handleSubmit(e) {
    e.preventDefault();

    const newdish = {
      id: new Date().getTime(),
      text: dish,
      completed: false,
    };
    setmenu([...menu].concat(newdish));
    setdish("");
  }

  function deletedish(id) {
    let updatedmenu = [...menu].filter((dish) => dish.id !== id);
    setmenu(updatedmenu);
  }

  function toggleComplete(id) {
    let updatedmenu = [...menu].map((dish) => {
      if (dish.id === id) {
        dish.completed = !dish.completed;
      }
      return dish;
    });
    setmenu(updatedmenu);
  }

  function submitEdits(id) {
    const updatedmenu = [...menu].map((dish) => {
      if (dish.id === id) {
        dish.text = editingText;
      }
      return dish;
    });
    setmenu(updatedmenu);
    setdishEditing(null);
  }

  return (
    <div id="dish-list">
      <h1> Current Menu </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setdish(e.target.value)}
          value={dish}
        />
        <button type="submit">Add dish</button>
      </form>
      {menu.map((dish) => (
        <div key={dish.id} className="dish">
          <div className="dish-text">
            <label>
              <input
                type="checkbox"
                id="completed"
                checked={dish.completed}
                onChange={() => toggleComplete(dish.id)}
              />
              : Available : &nbsp;
            </label>
            {dish.id === dishEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{dish.text}</div>
            )}
          </div>
          <div className="dish-actions">
            {dish.id === dishEditing ? (
              <button onClick={() => submitEdits(dish.id)}>Submit Edits</button>
            ) : (
              <button onClick={() => setdishEditing(dish.id)}>Edit</button>
            )}

            <button onClick={() => deletedish(dish.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;