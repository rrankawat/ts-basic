/* 
function showTodo(todo: { title: string; text: string }) {
  console.log(todo.title + ': ' + todo.text);
}
*/

interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo) {
  console.log(todo.title + ': ' + todo.text);
}

let todo1 = { title: 'Trash', text: 'Take out the trash' };

showTodo(todo1);
