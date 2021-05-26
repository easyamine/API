import { React, useState, useEffect } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";

function UserList() {
  const [listOfUSer, setlistOfUSer] = useState([]);

  const getListOfUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setlistOfUSer(response.data);
  };

  useEffect(() => {
    getListOfUsers();
  }, []);


  const style = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="userList">
      {listOfUSer && (
        <div>
          <Typography variant="h4" style={style}>
            User Details
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">UserName</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listOfUSer.map((user) => {
                return (
                  <TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                      {user.id}
                    </TableCell>
                    <TableCell align="left">{user.name}</TableCell>
                    <TableCell align="left">{user.username}</TableCell>
                    <TableCell align="left">{user.email}</TableCell>
                    <TableCell align="left">{user.phone}</TableCell>
                    <TableCell align="left">
                      <CreateIcon />
                    </TableCell>
                    <TableCell align="left">
                      <DeleteIcon />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default UserList;