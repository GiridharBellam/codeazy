import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Todo from "./Todo";
import GithubUsers from "./GithubUsers";

function App() {
  const [activeTab, setActiveTab] = useState("todo");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f4f6f8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 400,
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" textAlign="center" mb={2}>
          My Dashboard
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <Button
            fullWidth
            variant={activeTab === "todo" ? "contained" : "outlined"}
            onClick={() => setActiveTab("todo")}
          >
            Todo List
          </Button>

          <Button
            fullWidth
            variant={activeTab === "github" ? "contained" : "outlined"}
            onClick={() => setActiveTab("github")}
          >
            GitHub Users
          </Button>
        </Box>

        {/* Content */}
        {activeTab === "todo" && <Todo />}
        {activeTab === "github" && <GithubUsers />}
      </Box>
    </Box>
  );
}

export default App;
