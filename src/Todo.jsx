import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function Todo() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!todoText.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: todoText,
      },
    ]);

    setTodoText("");
  };

  return (
    <Box>
      <Typography variant="h6" mb={2}>
        Todo List
      </Typography>

      {/* Input section */}
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <TextField
          size="small"
          fullWidth
          label="Enter todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <Button variant="contained" onClick={addTodo}>
          Add
        </Button>
      </Box>

      {/* Todo Table */}
      {todos.length > 0 && (
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell><b>#</b></TableCell>
                <TableCell><b>Todo</b></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {todos.map((todo, index) => (
                <TableRow key={todo.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{todo.text}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default Todo;
