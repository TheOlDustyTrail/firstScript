import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos/1"

interface todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as todo;
    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    console.log(`
    The Todo with ID:${id}
    Has a title of: ${title}
    Is it finished? ${finished}
    `)
})