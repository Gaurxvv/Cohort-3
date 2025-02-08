import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TODO_FILE = path.join(__dirname, "todos.json");

function loadTodos() {
    try {
        return fs.existsSync(TODO_FILE) ? fs.readJsonSync(TODO_FILE) : [];
    } catch (error) {
        console.error(chalk.red("❌ Error reading todos.json. Returning an empty list."));
        return [];
    }
}

function saveTodos(todos) {
    try {
        fs.writeJsonSync(TODO_FILE, todos, { spaces: 4 });
    } catch (error) {
        console.error(chalk.red("❌ Error saving todos.json."));
    }
}

function addTodo(task) {
    let todos = loadTodos();
    todos.push({ task, done: false });
    saveTodos(todos);
    console.log(chalk.green.bold(`✔ Added: ${task}`));
}

function deleteTodo(index) {
    let todos = loadTodos();
    if (index >= 0 && index < todos.length) {
        let removed = todos.splice(index, 1);
        saveTodos(todos);
        console.log(chalk.red.bold(`✘ Deleted: ${removed[0].task}`));
    } else {
        console.log(chalk.yellow("⚠ Invalid index."));
    }
}

function markDone(index) {
    let todos = loadTodos();
    if (index >= 0 && index < todos.length) {
        todos[index].done = true;
        saveTodos(todos);
        console.log(chalk.blue.bold(`✔ Marked as done: ${todos[index].task}`));
    } else {
        console.log(chalk.yellow("⚠ Invalid index."));
    }
}

function listTodos() {
    let todos = loadTodos();
    if (todos.length === 0) {
        console.log(chalk.gray("No todos found."));
    } else {
        console.log(chalk.cyan.bold("\nYour To-Do List:"));
        todos.forEach((todo, index) => {
            console.log(`${chalk.yellow(index)}. ${todo.done ? chalk.green("[✔]") : chalk.red("[ ]")} ${todo.task}`);
        });
    }
}

yargs(hideBin(process.argv))
    .command("add <task>", "Add a new todo", {}, (argv) => addTodo(argv.task))
    .command("delete <index>", "Delete a todo", {}, (argv) => deleteTodo(parseInt(argv.index)))
    .command("done <index>", "Mark a todo as done", {}, (argv) => markDone(parseInt(argv.index)))
    .command("list", "List all todos", {}, () => listTodos())
    .demandCommand(1, chalk.red("⚠ Please provide a valid command."))
    .help()
    .argv;
