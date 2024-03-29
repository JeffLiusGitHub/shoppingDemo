import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { styled } from '@mui/material/styles';
import { visuallyHidden } from '@mui/utils';
import { userRequest } from '../axiosRequest';
import { useSelector } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.info.light,
		color: theme.palette.common.white,
		fontSize: 20,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 18,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

const headCells = [
	{
		id: 'userId',
		numeric: true,
		disablePadding: true,
		label: 'UserId',
	},
	{
		id: 'productName',
		numeric: false,
		disablePadding: false,
		label: 'product name',
	},
	{
		id: 'color',
		numeric: false,
		disablePadding: false,
		label: 'color',
	},
	{
		id: 'size',
		numeric: false,
		disablePadding: false,
		label: 'size',
	},
	{
		id: 'price',
		numeric: true,
		disablePadding: false,
		label: 'price',
	},
	{
		id: 'quantity',
		numeric: true,
		disablePadding: false,
		label: 'quantity',
	},
	{
		id: 'img',
		numeric: true,
		disablePadding: false,
		label: 'img',
	},
];

function EnhancedTableHead(props) {
	const {
		onSelectAllClick,
		order,
		orderBy,
		numSelected,
		rowCount,
		onRequestSort,
	} = props;
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		// <Table stickyHeader aria-label="sticky table">
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox" sx={{ backgroundColor: '#03a9f4' }}>
					<Checkbox
						color="primary"
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{
							'aria-label': 'select all user order',
						}}
					/>
				</TableCell>
				{headCells.map((headCell) => (
					<StyledTableCell
						key={headCell.id}
						align={'left'}
						padding={headCell.disablePadding ? 'none' : 'normal'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component="span" sx={visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</Box>
							) : null}
						</TableSortLabel>
					</StyledTableCell>
				))}
			</TableRow>
		</TableHead>
		// </Table>
	);
}

EnhancedTableHead.propTypes = {
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.oneOf(['asc', 'desc']).isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = ({
	numSelected,
	deleteRecordFromServerHandler,
}) => {
	// const { numSelected } = props;

	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
				...(numSelected > 0 && {
					bgcolor: (theme) =>
						alpha(
							theme.palette.primary.main,
							theme.palette.action.activatedOpacity
						),
				}),
			}}
		>
			{numSelected > 0 ? (
				<Typography
					sx={{ flex: '1 1 100%' }}
					color="inherit"
					variant="subtitle1"
					component="div"
				>
					{numSelected} selected
				</Typography>
			) : (
				<Typography
					sx={{ flex: '1 1 100%', fontWeight: 'bold' }}
					variant="h5"
					id="tableTitle"
					component="div"
				>
					User Order
				</Typography>
			)}

			{numSelected > 0 ? (
				<Tooltip title="Delete">
					<IconButton onClick={deleteRecordFromServerHandler}>
						<DeleteIcon />
						Delete
					</IconButton>
				</Tooltip>
			) : (
				<Tooltip title="Filter list">
					<IconButton>
						<FilterListIcon />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	);
};

export default function EnhancedTable() {
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('productName');
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [data, setData] = React.useState([]);
	const { _id } = useSelector((state) => state.user);
	useEffect(() => {
		(async () => {
			try {
				const res = await userRequest.get('carts/', { userId: _id });
				setData(res.data);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [_id]);

	const deleteCart = async (orderId) => {
		try {
			const res = await userRequest.delete(`/carts/${orderId}`, {
				userId: _id,
			});
			console.log(res);
			setData(
				data.filter((data) => {
					return data._id !== orderId;
				})
			);
		} catch (err) {
			console.log(err);
		}
	};
	const deleteRecordFromServerHandler = () => {
		selected.map((s) => deleteCart(s));
	};

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelected = data.map((n) => n._id);
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event, _id) => {
		const selectedIndex = selected.indexOf(_id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, _id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
		}

		setSelected(newSelected);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleChangeDense = (event) => {
		setDense(event.target.checked);
	};

	const isSelected = (_id) => selected.indexOf(_id) !== -1;

	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

	return (
		<Box sx={{ width: '90%', padding: '5%', backgroundColor: '#f5fafd' }}>
			<Paper sx={{ width: '100%', mb: 2 }}>
				<EnhancedTableToolbar
					numSelected={selected.length}
					deleteRecordFromServerHandler={deleteRecordFromServerHandler}
				/>
				<TableContainer>
					<Table
						sx={{ minWidth: 750 }}
						aria-labelledby="tableTitle"
						size={dense ? 'small' : 'medium'}
					>
						<EnhancedTableHead
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={handleRequestSort}
							rowCount={data.length}
						/>
						<TableBody>
							{stableSort(data, getComparator(order, orderBy))
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((data, index) => {
									const isItemSelected = isSelected(data._id);
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<StyledTableRow
											hover
											onClick={(event) => handleClick(event, data._id)}
											role="checkbox"
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={data._id}
											selected={isItemSelected}
										>
											<StyledTableCell padding="checkbox">
												<Checkbox
													color="secondary"
													checked={isItemSelected}
													inputProps={{
														'aria-labelledby': labelId,
													}}
												/>
											</StyledTableCell>
											<StyledTableCell
												component="th"
												id={labelId}
												scope="row"
												padding="none"
												align="left"
											>
												{data.userId}
											</StyledTableCell>
											<StyledTableCell align="left">
												{data.products.name}
											</StyledTableCell>
											<StyledTableCell align="left">
												<div
													style={{
														border: '1px solid rgba(0, 0, 0, 0.4)',
														content: '',
														height: '20px',
														width: '20px',
														borderRadius: '50%',
														backgroundColor: `${data.products.color}`,
													}}
												></div>
											</StyledTableCell>
											<StyledTableCell align="left">
												{data.products.size}
											</StyledTableCell>
											<StyledTableCell align="left">
												{data.products.price}
											</StyledTableCell>
											<StyledTableCell align="left">
												{data.products.quantity}
											</StyledTableCell>
											<StyledTableCell align="left">
												<img
													src={data.products.img}
													alt={data.products.name}
													style={{ height: '40px', width: '40px' }}
												/>
											</StyledTableCell>
										</StyledTableRow>
									);
								})}
							{emptyRows > 0 && (
								<TableRow
									style={{
										height: (dense ? 33 : 53) * emptyRows,
									}}
								>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={data.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
			<FormControlLabel
				control={<Switch checked={dense} onChange={handleChangeDense} />}
				label="Dense padding"
			/>
		</Box>
	);
}
