


function Task({ tasks }) {

    return (
        <div className="task-list">
            <h5 class="title">Your Tasks For The Day!</h5>
            {tasks.length === 0 ? <h6 class="error-msg">Add a few tasks!</h6> : ""}
            {tasks.map((element, index) => {
                return <h4 id={index} className="task">{element}</h4>
            })}
        </div>    
    );
}


export default Task;
