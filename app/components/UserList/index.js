import React from 'react';
import { arrayOf, object } from 'prop-types';
import { compose, pure } from 'recompose';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import FilterListIcon from 'material-ui-icons/FilterList';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  // TablePagination,
  TableRow,
} from 'material-ui/Table';

UserList.propTypes = {
  users: arrayOf(object),
};

function UserList() {
  return (
    <div>
      <Toolbar>
        <Typography type="subheading">Users</Typography>
        <div>
          <IconButton aria-label="Filter list">
            <FilterListIcon />
          </IconButton>
        </div>
      </Toolbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Departament</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover>
            <TableCell>Rustam Sgadiev</TableCell>
            <TableCell>rrrpost@server.zone</TableCell>
            <TableCell>Sales</TableCell>
            <TableCell>Yes</TableCell>
          </TableRow>
          <TableRow hover>
            <TableCell>Rustam Sgadiev</TableCell>
            <TableCell>rrrpost@server.zone</TableCell>
            <TableCell>Sales</TableCell>
            <TableCell>Yes</TableCell>
          </TableRow>
          <TableRow hover>
            <TableCell>Rustam Sgadiev</TableCell>
            <TableCell>rrrpost@server.zone</TableCell>
            <TableCell>Sales</TableCell>
            <TableCell>Yes</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            {/* <TablePagination
              colSpan={4}
              count={20}
              rowsPerPage={10}
              rowsPerPageOptions={[10]}
              page={1}
              backIconButtonProps={{
                'aria-label': 'Previous Page',
              }}
              nextIconButtonProps={{
                'aria-label': 'Next Page',
              }}
              onChangePage={() => {}}
            /> */}
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default compose(pure)(UserList);
