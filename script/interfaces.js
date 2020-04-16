/*
function showTodo(todo: { title: string; text: string }) {
  console.log(todo.title + ': ' + todo.text);
}
*/
function showTodo(todo) {
    console.log(todo.title + ': ' + todo.text);
}
var todo1 = { title: 'Trash', text: 'Take out the trash' };
showTodo(todo1);
