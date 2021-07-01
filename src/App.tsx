import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {useCovidApi} from './hooks/useDataApi';
import {
    Box,
    CircularProgress,
    IconButton,
    InputBase,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core';
import {ApiResult} from './models/ApiResult';
import {Country} from './models/Country';
import {Alert} from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import {getTotal} from './utils/getTotal';
import {getRatio} from './utils/getRatio';

const useStyles = makeStyles({
    root: {
        padding: 16,
        maxWidth: 1024
    },
    formWrapper: {
        display: 'flex'
    },
    form: {
        display: 'inline-block',
        border: '1px solid lightgray',
        marginLeft: 'auto',
        paddingLeft: 10,
        marginRight: 10
    },
    table: {
        maxWidth: 1024,
    },
    grayText: {
        color: 'lightgray'
    },
    boldText: {
        fontWeight: 'bold'
    }
});


function App() {

    const [data, isLoading, isError]: [ApiResult, boolean, boolean] = useCovidApi();
    const [filteredRow, setFilteredRow] = useState<Array<Country>>([]);
    const [total, setTotal] = useState<Country>(new Country());

    useEffect(() => {
        const reducedTotal = getTotal(data.countries);
        reducedTotal.ratio = getRatio(reducedTotal);
        setTotal(reducedTotal);
        setFilteredRow(data.countries)
    }, [data])

    const searchTerm = useCallback((event: any) => {
        const searchTerm = event?.target?.value;

        let updatedFilteredRow;
        if (searchTerm) {
            updatedFilteredRow = data.countries.filter(country => country.name.toLowerCase().normalize().includes(searchTerm.toLowerCase().normalize()))
        } else {
            updatedFilteredRow = [...data.countries];
        }

        const reducedTotal = getTotal(updatedFilteredRow);
        reducedTotal.ratio = getRatio(reducedTotal);

        setTotal(reducedTotal);
        setFilteredRow(updatedFilteredRow)
    }, [data, setFilteredRow]);

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography variant="h5" component="h1">
                Covid-19 Daily Update
            </Typography>

            {isError && <Alert severity="error">Error joining the server</Alert>}

            <Box className={classes.formWrapper}>
                {isLoading && <CircularProgress/>}
                <Paper component="form" className={classes.form}>
                    <InputBase placeholder="Search Country"
                               color="primary"
                               onChange={searchTerm}
                    />
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon/>
                    </IconButton>
                </Paper>
            </Box>


            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Cases</TableCell>
                            <TableCell align="right">Death</TableCell>
                            <TableCell align="right">Ratio</TableCell>
                            <TableCell align="right">Region</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row" className={classes.boldText}>{total.name}</TableCell>
                            <TableCell align="right" className={classes.boldText}>{total.cases}</TableCell>
                            <TableCell align="right" className={classes.boldText}>{total.deaths}</TableCell>
                            <TableCell align="right" className={classes.boldText}>{total.ratio} %</TableCell>
                            <TableCell align="right" className={classes.boldText}></TableCell>
                        </TableRow>
                        {filteredRow.map((country: Country) => (
                            <TableRow key={country.name}>
                                <TableCell component="th" scope="row">{country.name}</TableCell>
                                <TableCell align="right">{country.cases}</TableCell>
                                <TableCell align="right">{country.deaths}</TableCell>
                                <TableCell align="right">{country.ratio} %</TableCell>
                                <TableCell align="right" className={classes.grayText}>{country.continent}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default App;
