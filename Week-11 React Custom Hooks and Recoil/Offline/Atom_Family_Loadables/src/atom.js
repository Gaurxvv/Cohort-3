import { atomFamily } from "recoil";
import { TODOS } from "./Todos";

export const todosAtomFamily = atomFamily({
  key: "todoAtomfamiily",
  default: (id) => {
    const todo = TODOS.find((x) => x.id === id);
    return todo || { title: "Unknown Task", description: "No decription" };
  },
});
