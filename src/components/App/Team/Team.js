import * as React from 'react';
import { Stack, Typography, Button, InputBase, FormControl, Select, MenuItem, InputLabel, Avatar} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import './team.css';
import FlagIcon from '@mui/icons-material/Flag';

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
                <Typography variant='H5' color="NeutralGrey.dark" pl={1}>
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

            <Stack>
                <Stack className='table-header' direction="row" justifyContent='space-between' sx={{padding: 2}} backgroundColor="#FAFBFC" height={68}>
                    <Stack className='table-header-left' justifyContent="center">
                        <Typography variant="Caption" color="NeutralGrey.main" >
                            4 members
                        </Typography>
                    </Stack>
                    
                    <Stack className='table-header-right' direction="row" gap={1} py={1}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0.666687C5.26362 0.666687 4.66667 1.26364 4.66667 2.00002H4C3.46957 2.00002 2.96086 2.21073 2.58579 2.58581C2.21071 2.96088 2 3.46959 2 4.00002V13.3334C2 13.8638 2.21071 14.3725 2.58579 14.7476C2.96086 15.1226 3.46957 15.3334 4 15.3334H12C12.5304 15.3334 13.0391 15.1226 13.4142 14.7476C13.7893 14.3725 14 13.8638 14 13.3334V4.00002C14 3.46959 13.7893 2.96088 13.4142 2.58581C13.0391 2.21073 12.5304 2.00002 12 2.00002H11.3333C11.3333 1.26364 10.7364 0.666687 10 0.666687H6ZM11.3333 3.33335C11.3333 4.06973 10.7364 4.66669 10 4.66669H6C5.26362 4.66669 4.66667 4.06973 4.66667 3.33335H4C3.82319 3.33335 3.65362 3.40359 3.5286 3.52862C3.40357 3.65364 3.33333 3.82321 3.33333 4.00002V13.3334C3.33333 13.5102 3.40357 13.6797 3.5286 13.8048C3.65362 13.9298 3.82319 14 4 14H12C12.1768 14 12.3464 13.9298 12.4714 13.8048C12.5964 13.6797 12.6667 13.5102 12.6667 13.3334V4.00002C12.6667 3.82321 12.5964 3.65364 12.4714 3.52862C12.3464 3.40359 12.1768 3.33335 12 3.33335H11.3333ZM6 2.66669V3.33335H10V2.66669V2.00002H6V2.66669Z" fill="#C5B1FE"/>
                        </svg>
                        <Stack justifyContent="center">
                            <Typography variant='CaptionMedium' color="primary.dark" >View as report</Typography>
                        </Stack>
                        
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47136 2.86195C8.21101 2.6016 7.7889 2.6016 7.52855 2.86195C7.26821 3.1223 7.26821 3.54441 7.52855 3.80476L11.0571 7.33335H3.33329C2.9651 7.33335 2.66663 7.63183 2.66663 8.00002C2.66663 8.36821 2.9651 8.66669 3.33329 8.66669H11.0571L7.52855 12.1953C7.26821 12.4556 7.26821 12.8777 7.52855 13.1381C7.7889 13.3984 8.21101 13.3984 8.47136 13.1381L13.1376 8.4719C13.1392 8.47029 13.1408 8.46868 13.1424 8.46705C13.26 8.34721 13.3328 8.18311 13.3333 8.00202C13.3333 8.00135 13.3333 8.00069 13.3333 8.00002C13.3333 7.99935 13.3333 7.99869 13.3333 7.99802C13.333 7.90836 13.3151 7.82286 13.2827 7.74483C13.2509 7.66799 13.2041 7.59588 13.1424 7.53299C13.1408 7.53139 13.1392 7.52979 13.1376 7.52821M8.47136 2.86195L13.1376 7.52821L8.47136 2.86195Z" fill="#C5B1FE"/>
                        </svg>
                    </Stack>
                </Stack>

                <Stack className='table-strokes' gap={0.25}>
                    <Stack className='sort' direction="row" justifyContent='space-between' px={1} backgroundColor="#fff" height={46}>
                        <Stack className='sort-left' direction="row" gap={0.5} py={2} px={1}>
                            <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.13807 0.528575C0.877722 0.268226 0.455612 0.268226 0.195262 0.528575C-0.0650874 0.788925 -0.0650874 1.21103 0.195262 1.47138L3.5286 4.80472C3.78894 5.06507 4.21106 5.06507 4.4714 4.80472L7.80474 1.47138C8.06509 1.21103 8.06509 0.788925 7.80474 0.528575C7.54439 0.268226 7.12228 0.268226 6.86193 0.528575L4 3.3905L1.13807 0.528575ZM1.13807 5.19524C0.877722 4.93489 0.455612 4.93489 0.195262 5.19524C-0.0650874 5.45559 -0.0650874 5.8777 0.195262 6.13805L3.5286 9.47138C3.78894 9.73173 4.21106 9.73173 4.4714 9.47138L7.80474 6.13805C8.06509 5.8777 8.06509 5.45559 7.80474 5.19524C7.54439 4.93489 7.12228 4.93489 6.86193 5.19524L4 8.05717L1.13807 5.19524Z" fill="#B3B5B7"/>
                            </svg>
                            <Typography variant='Caption' color="NeutralGrey.light">
                                Member
                            </Typography>
                        </Stack>
                        <Stack className='sort-right' direction="row">
                            <Stack className="table-rows-item" direction="row" gap={0.5} >
                                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.13807 0.528575C0.877722 0.268226 0.455612 0.268226 0.195262 0.528575C-0.0650874 0.788925 -0.0650874 1.21103 0.195262 1.47138L3.5286 4.80472C3.78894 5.06507 4.21106 5.06507 4.4714 4.80472L7.80474 1.47138C8.06509 1.21103 8.06509 0.788925 7.80474 0.528575C7.54439 0.268226 7.12228 0.268226 6.86193 0.528575L4 3.3905L1.13807 0.528575ZM1.13807 5.19524C0.877722 4.93489 0.455612 4.93489 0.195262 5.19524C-0.0650874 5.45559 -0.0650874 5.8777 0.195262 6.13805L3.5286 9.47138C3.78894 9.73173 4.21106 9.73173 4.4714 9.47138L7.80474 6.13805C8.06509 5.8777 8.06509 5.45559 7.80474 5.19524C7.54439 4.93489 7.12228 4.93489 6.86193 5.19524L4 8.05717L1.13807 5.19524Z" fill="#B3B5B7"/>
                                </svg>
                                <Typography variant='Caption' color="NeutralGrey.light">
                                    Type
                                </Typography>
                            </Stack>
                            <Stack className="table-rows-item" direction="row" gap={0.5} >
                                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.13807 0.528575C0.877722 0.268226 0.455612 0.268226 0.195262 0.528575C-0.0650874 0.788925 -0.0650874 1.21103 0.195262 1.47138L3.5286 4.80472C3.78894 5.06507 4.21106 5.06507 4.4714 4.80472L7.80474 1.47138C8.06509 1.21103 8.06509 0.788925 7.80474 0.528575C7.54439 0.268226 7.12228 0.268226 6.86193 0.528575L4 3.3905L1.13807 0.528575ZM1.13807 5.19524C0.877722 4.93489 0.455612 4.93489 0.195262 5.19524C-0.0650874 5.45559 -0.0650874 5.8777 0.195262 6.13805L3.5286 9.47138C3.78894 9.73173 4.21106 9.73173 4.4714 9.47138L7.80474 6.13805C8.06509 5.8777 8.06509 5.45559 7.80474 5.19524C7.54439 4.93489 7.12228 4.93489 6.86193 5.19524L4 8.05717L1.13807 5.19524Z" fill="#B3B5B7"/>
                                </svg>
                                <Typography variant='Caption' color="NeutralGrey.light">
                                    Project
                                </Typography>
                            </Stack>
                            <Stack className="table-rows-item" direction="row" gap={0.5} >
                                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.13807 0.528575C0.877722 0.268226 0.455612 0.268226 0.195262 0.528575C-0.0650874 0.788925 -0.0650874 1.21103 0.195262 1.47138L3.5286 4.80472C3.78894 5.06507 4.21106 5.06507 4.4714 4.80472L7.80474 1.47138C8.06509 1.21103 8.06509 0.788925 7.80474 0.528575C7.54439 0.268226 7.12228 0.268226 6.86193 0.528575L4 3.3905L1.13807 0.528575ZM1.13807 5.19524C0.877722 4.93489 0.455612 4.93489 0.195262 5.19524C-0.0650874 5.45559 -0.0650874 5.8777 0.195262 6.13805L3.5286 9.47138C3.78894 9.73173 4.21106 9.73173 4.4714 9.47138L7.80474 6.13805C8.06509 5.8777 8.06509 5.45559 7.80474 5.19524C7.54439 4.93489 7.12228 4.93489 6.86193 5.19524L4 8.05717L1.13807 5.19524Z" fill="#B3B5B7"/>
                                </svg>
                                <Typography variant='Caption' color="NeutralGrey.light">
                                    Team
                                </Typography>
                            </Stack>
                            <Stack className="table-rows-item" direction="row" gap={0.5} >
                                <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.13807 0.528575C0.877722 0.268226 0.455612 0.268226 0.195262 0.528575C-0.0650874 0.788925 -0.0650874 1.21103 0.195262 1.47138L3.5286 4.80472C3.78894 5.06507 4.21106 5.06507 4.4714 4.80472L7.80474 1.47138C8.06509 1.21103 8.06509 0.788925 7.80474 0.528575C7.54439 0.268226 7.12228 0.268226 6.86193 0.528575L4 3.3905L1.13807 0.528575ZM1.13807 5.19524C0.877722 4.93489 0.455612 4.93489 0.195262 5.19524C-0.0650874 5.45559 -0.0650874 5.8777 0.195262 6.13805L3.5286 9.47138C3.78894 9.73173 4.21106 9.73173 4.4714 9.47138L7.80474 6.13805C8.06509 5.8777 8.06509 5.45559 7.80474 5.19524C7.54439 4.93489 7.12228 4.93489 6.86193 5.19524L4 8.05717L1.13807 5.19524Z" fill="#B3B5B7"/>
                                </svg>
                                <Typography variant='Caption' color="NeutralGrey.light">
                                    Country
                                </Typography>
                            </Stack>
                            <Stack width={112} className="table-rows-item" textAlign="right" >
                                <Stack direction="row" gap={0.5} ml="auto">    
                                    <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.13807 0.528575C0.877722 0.268226 0.455612 0.268226 0.195262 0.528575C-0.0650874 0.788925 -0.0650874 1.21103 0.195262 1.47138L3.5286 4.80472C3.78894 5.06507 4.21106 5.06507 4.4714 4.80472L7.80474 1.47138C8.06509 1.21103 8.06509 0.788925 7.80474 0.528575C7.54439 0.268226 7.12228 0.268226 6.86193 0.528575L4 3.3905L1.13807 0.528575ZM1.13807 5.19524C0.877722 4.93489 0.455612 4.93489 0.195262 5.19524C-0.0650874 5.45559 -0.0650874 5.8777 0.195262 6.13805L3.5286 9.47138C3.78894 9.73173 4.21106 9.73173 4.4714 9.47138L7.80474 6.13805C8.06509 5.8777 8.06509 5.45559 7.80474 5.19524C7.54439 4.93489 7.12228 4.93489 6.86193 5.19524L4 8.05717L1.13807 5.19524Z" fill="#B3B5B7"/>
                                    </svg>
                                    <Typography variant='Caption' color="NeutralGrey.light">
                                        Contract
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack className='rows-content' gap={0.25} >
                        <Stack direction="row" py={1} justifyContent="space-between" backgroundColor="#fff" height={80}>
                            <Stack direction="row" gap={1}>
                                <Stack px={1}>
                                    <Avatar src="../icons/user.jpg" sx={{ width: 56, height: 56 }}/>
                                </Stack>
                                <Stack justifyContent="center">
                                    <Typography variant='Subtitle2' color="primary.dark" lineHeight={1.57}>Giacomina Otaegui</Typography>
                                    <Typography variant='Caption' color="grey" lineHeight={1.25}>Cloud Security specialist </Typography>
                                </Stack>
                            </Stack>
                            <Stack direction="row" >
                                <Stack className="table-rows-content-item" justifyContent="center" >
                                    <Typography variant="Caption" color="NeutralGrey.dark">
                                        Employee    
                                    </Typography> 
                                </Stack>
                                <Stack className="table-rows-content-item" justifyContent="center" >
                                    <Typography variant="BadgeLabel" color="primary.dark">
                                        ASF    
                                    </Typography> 
                                </Stack>
                                <Stack className="table-rows-content-item" justifyContent="center" >
                                    <Typography variant="Caption" color="NeutralGrey.main">
                                        Marketing    
                                    </Typography> 
                                </Stack>
                                <Stack direction="row" className="table-rows-content-item" gap={1}>
                                    <Stack justifyContent="center">
                                        <FlagIcon fontSize='12'/>
                                    </Stack>
                                    <Stack justifyContent="center">
                                        <Typography variant="Caption" color="NeutralGrey.main">
                                            Spain    
                                        </Typography> 
                                    </Stack>
                                    
                                </Stack>
                                <Stack className="table-rows-content-item" justifyContent="center" textAlign="right" >
                                    <Typography className='contract-disabled' ml="auto" variant="Tooltip">
                                        TERMINATED    
                                    </Typography>                                     
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack direction="row" py={1} justifyContent="space-between" backgroundColor="#fff" height={80}>
                            <Stack direction="row" gap={1}>
                                <Stack px={1}>
                                    <Avatar src="../icons/user.jpg" sx={{ width: 56, height: 56 }}/>
                                </Stack>
                                <Stack justifyContent="center">
                                    <Typography variant='Subtitle2' color="primary.dark" lineHeight={1.57}>Tilda Ulrich</Typography>
                                    <Typography variant='Caption' color="grey" lineHeight={1.25}>SEO  </Typography>
                                </Stack>
                            </Stack>
                            <Stack direction="row" >
                                <Stack className="table-rows-content-item" justifyContent="center" >
                                    <Typography variant="Caption" color="NeutralGrey.dark">
                                        Employee    
                                    </Typography> 
                                </Stack>
                                <Stack className="table-rows-content-item" justifyContent="center" >
                                    <Typography variant="BadgeLabel" color="primary.dark">
                                        ASF    
                                    </Typography> 
                                </Stack>
                                <Stack className="table-rows-content-item" justifyContent="center" >
                                    <Typography variant="Caption" color="NeutralGrey.main">
                                        Development...    
                                    </Typography> 
                                </Stack>
                                <Stack direction="row" className="table-rows-content-item" gap={1}>
                                    <Stack justifyContent="center">
                                        <FlagIcon fontSize='12'/>
                                    </Stack>
                                    <Stack justifyContent="center">
                                        <Typography variant="Caption" color="NeutralGrey.main">
                                            Spain    
                                        </Typography> 
                                    </Stack>
                                    
                                </Stack>
                                <Stack className="table-rows-content-item" justifyContent="center" textAlign="right" >
                                    <Typography className='contract-active' ml="auto" variant="Tooltip">
                                        ACTIVE    
                                    </Typography>                                     
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack direction="row" py={1} justifyContent="space-between" backgroundColor="#fff" height={80}>
                            <Stack direction="row" gap={1}>
                                <Stack px={1}>
                                    <Avatar src="../icons/user.jpg" sx={{ width: 56, height: 56 }}/>
                                </Stack>
                                <Stack justifyContent="center">
                                    <Typography variant='Subtitle2' color="primary.dark" lineHeight={1.57}>Sam Sauno</Typography>
                                    <Typography variant='Caption' color="grey" lineHeight={1.25}>Fullstack</Typography>
                                </Stack>
                            </Stack>
                            <Stack direction="row" >
                                <Stack className="table-rows-content-item" justifyContent="center" >
                                    <Typography variant="Caption" color="NeutralGrey.dark">
                                        Contractor    
                                    </Typography> 
                                </Stack>
                                <Stack className="table-rows-content-item" justifyContent="center" >
                                    <Typography variant="BadgeLabel" color="primary.dark">
                                        DDT    
                                    </Typography> 
                                </Stack>
                                <Stack className="table-rows-content-item" justifyContent="center" >
                                    <Typography variant="Caption" color="NeutralGrey.main">
                                        Development......    
                                    </Typography> 
                                </Stack>
                                <Stack direction="row" className="table-rows-content-item" gap={1}>
                                    <Stack justifyContent="center">
                                        <FlagIcon fontSize='12'/>
                                    </Stack>
                                    <Stack justifyContent="center">
                                        <Typography variant="Caption" color="NeutralGrey.main">
                                            Germany    
                                        </Typography> 
                                    </Stack>
                                    
                                </Stack>
                                <Stack className="table-rows-content-item" justifyContent="center" textAlign="right" >
                                    <Typography className='contract-active' ml="auto" variant="Tooltip">
                                        ACTIVE    
                                    </Typography>                                     
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack direction="row" py={1} justifyContent="space-between" backgroundColor="#fff" height={80}>
                            <Stack direction="row" gap={1}>
                                <Stack px={1}>
                                    <Avatar src="../icons/user.jpg" sx={{ width: 56, height: 56 }}/>
                                </Stack>
                                <Stack justifyContent="center">
                                    <Typography variant='Subtitle2' color="primary.dark" lineHeight={1.57}>Peter Stadnik</Typography>
                                    <Typography variant='Caption' color="grey" lineHeight={1.25}>PR-specialist</Typography>
                                </Stack>
                            </Stack>
                            <Stack direction="row" >
                                <Stack className="table-rows-content-item" justifyContent="center" >
                                    <Typography variant="Caption" color="NeutralGrey.dark">
                                        Employee    
                                    </Typography> 
                                </Stack>
                                <Stack className="table-rows-content-item" justifyContent="center" >
                                    <Typography variant="BadgeLabel" color="primary.dark">
                                        My lovely Pro...    
                                    </Typography> 
                                </Stack>
                                <Stack className="table-rows-content-item" justifyContent="center" >
                                    <Typography variant="Caption" color="NeutralGrey.main">
                                        Development...    
                                    </Typography> 
                                </Stack>
                                <Stack direction="row" className="table-rows-content-item" gap={1}>
                                    <Stack justifyContent="center">
                                        <FlagIcon fontSize='12'/>
                                    </Stack>
                                    <Stack justifyContent="center">
                                        <Typography variant="Caption" color="NeutralGrey.main">
                                            US    
                                        </Typography> 
                                    </Stack>
                                    
                                </Stack>
                                <Stack className="table-rows-content-item" justifyContent="center" textAlign="right" >
                                    <Typography className='contract-active' ml="auto" variant="Tooltip">
                                        ACTIVE    
                                    </Typography>                                     
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
  
    
      
      
  );
}

export default Team;
