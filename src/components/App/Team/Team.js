import * as React from 'react';
import { Stack, Typography, Button, InputBase, FormControl, Select, SelectChangeEvent, MenuItem, InputLabel} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import './team.css';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    padding: '12px 16px',
    width: '100%',
    height: 56,
    border: '1px solid #E2D8FF'
}));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    height: 30,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#C5B1FE'
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    },
    fontSize:14,
    fontWeight: 400,
    letterSpacing: 0.17
}));

function Team() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    
    <Stack className="team" height="100%" position="static" gap={4}>
        <Stack className='header' direction="row" gap={1.5} justifyContent='space-between'>
            <Stack >
                <Typography variant='' color="NeutralGrey" pl={1}>
                    Team
                </Typography>

            </Stack>

            <Stack direction="row" gap={2} >
                <Button variant="contained">
                    <Typography variant='CaptionMedium'>
                        Add member 
                    </Typography>
                    <AddIcon sx={{ fontSize: 16, ml: 1 }}/>
                </Button>
                <Button variant="outlined"  >
                    <Typography variant='CaptionMedium' mr={1} >
                        Bulk import
                    </Typography> 
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.52864 1.52864C7.78899 1.26829 8.2111 1.26829 8.47145 1.52864L11.8048 4.86197C12.0651 5.12232 12.0651 5.54443 11.8048 5.80478C11.5444 6.06513 11.1223 6.06513 10.862 5.80478L8.66671 3.60952V10C8.66671 10.3682 8.36823 10.6667 8.00004 10.6667C7.63185 10.6667 7.33337 10.3682 7.33337 10V3.60952L5.13811 5.80478C4.87776 6.06513 4.45565 6.06513 4.1953 5.80478C3.93495 5.54443 3.93495 5.12232 4.1953 4.86197L7.52864 1.52864ZM2.00004 9.33337C2.36823 9.33337 2.66671 9.63185 2.66671 10V12.6667C2.66671 12.8435 2.73695 13.0131 2.86197 13.1381C2.98699 13.2631 3.15656 13.3334 3.33337 13.3334H12.6667C12.8435 13.3334 13.0131 13.2631 13.1381 13.1381C13.2631 13.0131 13.3334 12.8435 13.3334 12.6667V10C13.3334 9.63185 13.6319 9.33337 14 9.33337C14.3682 9.33337 14.6667 9.63185 14.6667 10V12.6667C14.6667 13.1971 14.456 13.7058 14.0809 14.0809C13.7058 14.456 13.1971 14.6667 12.6667 14.6667H3.33337C2.80294 14.6667 2.29423 14.456 1.91916 14.0809C1.54409 13.7058 1.33337 13.1971 1.33337 12.6667V10C1.33337 9.63185 1.63185 9.33337 2.00004 9.33337Z" fill="#C5B1FE"/>
                    </svg>  
                </Button>

            </Stack>
        </Stack>
        <Stack className='table'>
            <Stack className='filters-stroke' direction="row" gap={1}>
                <Stack >
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon fontSize='16'/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Stack>

                <Stack backgroundColor='#FFFFFF' borderRadius={2} width='100%' border='1px solid #EEEEEE'>
                    <Stack direction='row' gap={2} p={1}>
                        <FormControl fullWidth>
                            <InputLabel >Age</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            border="1px solid #EEEEEE"
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel >Age</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            border="1px solid #EEEEEE"
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
  
    
      
      
  );
}

export default Team;