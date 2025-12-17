import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  CircularProgress,
} from "@mui/material";

function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.slice(0, 5));
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      <Typography variant="h6" mb={2}>
        GitHub Users
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        users.map((user) => (
          <Box
            key={user.id}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 1,
              p: 1,
              bgcolor: "#f1f1f1",
              borderRadius: 1,
            }}
          >
            <Avatar src={user.avatar_url} />
            <Typography>{user.login}</Typography>
          </Box>
        ))
      )}
    </Box>
  );
}

export default GithubUsers;
