import * as React from 'react';
import { Stack, Typography, Button, InputBase, FormControl, Select, MenuItem, InputLabel, Avatar} from '@mui/material';
import './talent.css';
import AddIcon from '@mui/icons-material/Add';

function Talent() {

  return (
    
    <Stack className="talent" height="100%" position="static" gap={3}>
        <Stack direction="row" gap={1} height={36}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.47136 1.80476C6.73171 1.54441 6.73171 1.1223 6.47136 0.861949C6.21101 0.6016 5.7889 0.6016 5.52855 0.861949L0.861888 5.52862C0.601539 5.78896 0.601539 6.21108 0.861888 6.47142L5.52855 11.1381C5.7889 11.3984 6.21101 11.3984 6.47136 11.1381C6.73171 10.8777 6.73171 10.4556 6.47136 10.1953L2.94277 6.66669H10.6666C11.0348 6.66669 11.3333 6.36821 11.3333 6.00002C11.3333 5.63183 11.0348 5.33335 10.6666 5.33335H2.94277L6.47136 1.80476Z" fill="#C5B1FE"/>
            </svg>
            <Typography variant="CaptionMedium" color="primary.dark" my="auto">
                Back
            </Typography>
        </Stack>
        <Stack className='header' direction="row" gap={1.5} justifyContent='space-between' height={72}>
            <Stack direction="row" gap={2}>
                <Avatar src="../icons/user.jpg" sx={{ width: 72, height: 72 }}/>
                <Stack gap={1}>
                    <Stack direction="row" gap={2}>
                        <Typography variant='H5' color="NeutralGrey.dark">
                            Giacomina Otaegui
                        </Typography>
                        <Stack justifyContent="center">
                            <Typography className='contract-active' variant='Tooltip'>
                                Active
                            </Typography>
                        </Stack>
                    </Stack>
                    <Typography variant='body2' color="NeutralGrey.main">
                        Cloud Security specialist
                    </Typography>
                </Stack>
            </Stack>
            <Stack>
                <Button variant="contained" width={142} height={36}>
                    <Typography variant='CaptionMedium'>
                        Add contract 
                    </Typography>
                    <AddIcon sx={{ fontSize: 16, ml: 1 }}/>
                </Button>
            </Stack>
        </Stack>
        <Stack className='cards' direction="row" gap={2} pt={2}>
            <Stack sx={{width: '50%'}} gap={2}>
                <Stack className='cards-block' gap={2}>
                    <Stack direction="row" justifyContent="space-between">
                        <Stack direction="row" gap={1}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0.666687C3.46957 0.666687 2.96086 0.877401 2.58579 1.25247C2.21071 1.62755 2 2.13625 2 2.66669V13.3334C2 13.8638 2.21071 14.3725 2.58579 14.7476C2.96086 15.1226 3.46957 15.3334 4 15.3334H12C12.5304 15.3334 13.0391 15.1226 13.4142 14.7476C13.7893 14.3725 14 13.8638 14 13.3334V6.052C14 6.04335 13.9998 6.03473 13.9995 6.02612C13.9998 6.01746 14 6.00876 14 6.00002C14 5.73706 13.8478 5.50966 13.6266 5.40115L9.22244 0.965043C9.10304 0.785223 8.8987 0.666687 8.66667 0.666687C8.66365 0.666687 8.66064 0.666707 8.65763 0.666747C8.65465 0.666707 8.65167 0.666687 8.64868 0.666687H4ZM8 2.00002H4C3.82319 2.00002 3.65362 2.07026 3.5286 2.19528C3.40357 2.32031 3.33333 2.48988 3.33333 2.66669V13.3334C3.33333 13.5102 3.40357 13.6797 3.5286 13.8048C3.65362 13.9298 3.82319 14 4 14H12C12.1768 14 12.3464 13.9298 12.4714 13.8048C12.5964 13.6797 12.6667 13.5102 12.6667 13.3334V6.66669H8.66667C8.29848 6.66669 8 6.36821 8 6.00002V2.00002ZM11.6804 5.33335L9.33333 2.96921V5.33335H11.6804Z" fill="#C5B1FE"/>
                            </svg>
                            <Typography variant='body1' color="primary.dark" my="auto">
                                Contracts
                            </Typography>
                        </Stack>
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47136 2.86195C8.21101 2.6016 7.7889 2.6016 7.52855 2.86195C7.26821 3.1223 7.26821 3.54441 7.52855 3.80476L11.0571 7.33335H3.33329C2.9651 7.33335 2.66663 7.63183 2.66663 8.00002C2.66663 8.36821 2.9651 8.66669 3.33329 8.66669H11.0571L7.52855 12.1953C7.26821 12.4556 7.26821 12.8777 7.52855 13.1381C7.7889 13.3984 8.21101 13.3984 8.47136 13.1381L13.1376 8.4719C13.1392 8.47029 13.1408 8.46868 13.1424 8.46705C13.26 8.34721 13.3328 8.18311 13.3333 8.00202C13.3333 8.00135 13.3333 8.00069 13.3333 8.00002C13.3333 7.99935 13.3333 7.99869 13.3333 7.99802C13.333 7.90836 13.3151 7.82286 13.2827 7.74483C13.2509 7.66799 13.2041 7.59588 13.1424 7.53299C13.1408 7.53139 13.1392 7.52979 13.1376 7.52821M8.47136 2.86195L13.1376 7.52821L8.47136 2.86195Z" fill="#C5B1FE"/>
                        </svg>
                    </Stack>
                    <Stack gap={2}>
                        <Stack className='cards-content-stroke' direction="row" justifyContent='space-between'>
                            <Stack >
                                <Stack direction="row" gap={1}>
                                    <Typography variant='body2' color="text.light">
                                        01.12.2023
                                    </Typography>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47136 2.86195C8.21101 2.6016 7.7889 2.6016 7.52855 2.86195C7.26821 3.1223 7.26821 3.54441 7.52855 3.80476L11.0571 7.33335H3.33329C2.9651 7.33335 2.66663 7.63183 2.66663 8.00002C2.66663 8.36821 2.9651 8.66669 3.33329 8.66669H11.0571L7.52855 12.1953C7.26821 12.4556 7.26821 12.8777 7.52855 13.1381C7.7889 13.3984 8.21101 13.3984 8.47136 13.1381L13.1376 8.4719C13.1392 8.47029 13.1408 8.46868 13.1424 8.46705C13.26 8.34721 13.3328 8.18311 13.3333 8.00202C13.3333 8.00135 13.3333 8.00069 13.3333 8.00002C13.3333 7.99935 13.3333 7.99869 13.3333 7.99802C13.333 7.90836 13.3151 7.82286 13.2827 7.74483C13.2509 7.66799 13.2041 7.59588 13.1424 7.53299C13.1408 7.53139 13.1392 7.52979 13.1376 7.52821M8.47136 2.86195L13.1376 7.52821L8.47136 2.86195Z" fill="#C5B1FE"/>
                                    </svg>
                                    <Typography variant='body2' color="text.light">
                                        14.12.2023
                                    </Typography>
                                    <Typography className='contract-active' variant='Tooltip'>
                                        Active
                                    </Typography>
                                </Stack>
                                <Stack>
                                    <Typography variant='Caption' color="NeutralGrey.main">
                                        Project name
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack gap={1} textAlign="right">
                                <Typography variant='Subtitle2' color='text.light'>
                                    $ 1000
                                </Typography>
                                <Typography variant='Caption' color="NeutralGrey.main">
                                    hourly rate
                                </Typography>
                            </Stack>

                            
                        </Stack>
                        <Stack className='cards-content-stroke' direction="row" justifyContent='space-between'>
                            <Stack >
                                <Stack direction="row" gap={1}>
                                    <Typography variant='body2' color="text.light">
                                        01.12.2023
                                    </Typography>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47136 2.86195C8.21101 2.6016 7.7889 2.6016 7.52855 2.86195C7.26821 3.1223 7.26821 3.54441 7.52855 3.80476L11.0571 7.33335H3.33329C2.9651 7.33335 2.66663 7.63183 2.66663 8.00002C2.66663 8.36821 2.9651 8.66669 3.33329 8.66669H11.0571L7.52855 12.1953C7.26821 12.4556 7.26821 12.8777 7.52855 13.1381C7.7889 13.3984 8.21101 13.3984 8.47136 13.1381L13.1376 8.4719C13.1392 8.47029 13.1408 8.46868 13.1424 8.46705C13.26 8.34721 13.3328 8.18311 13.3333 8.00202C13.3333 8.00135 13.3333 8.00069 13.3333 8.00002C13.3333 7.99935 13.3333 7.99869 13.3333 7.99802C13.333 7.90836 13.3151 7.82286 13.2827 7.74483C13.2509 7.66799 13.2041 7.59588 13.1424 7.53299C13.1408 7.53139 13.1392 7.52979 13.1376 7.52821M8.47136 2.86195L13.1376 7.52821L8.47136 2.86195Z" fill="#C5B1FE"/>
                                    </svg>
                                    <Typography variant='body2' color="text.light">
                                        14.12.2023
                                    </Typography>
                                    <Typography className='contract-active' variant='Tooltip'>
                                        Active
                                    </Typography>
                                </Stack>
                                <Stack>
                                    <Typography variant='Caption' color="NeutralGrey.main">
                                        Project name
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack gap={1} textAlign="right">
                                <Typography variant='Subtitle2' color='text.light'>
                                    $ 1000
                                </Typography>
                                <Typography variant='Caption' color="NeutralGrey.main">
                                    hourly rate
                                </Typography>
                            </Stack>

                            
                        </Stack>
                    </Stack>
                    
                </Stack>
                <Stack className='cards-block' gap={2}>
                    <Stack direction="row" justifyContent="space-between">
                        <Stack direction="row" gap={1}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 0.666687C3.46957 0.666687 2.96086 0.877401 2.58579 1.25247C2.21071 1.62755 2 2.13625 2 2.66669V13.3334C2 13.8638 2.21071 14.3725 2.58579 14.7476C2.96086 15.1226 3.46957 15.3334 4 15.3334H12C12.5304 15.3334 13.0391 15.1226 13.4142 14.7476C13.7893 14.3725 14 13.8638 14 13.3334V6.052C14 6.04335 13.9998 6.03473 13.9995 6.02612C13.9998 6.01746 14 6.00876 14 6.00002C14 5.73706 13.8478 5.50966 13.6266 5.40115L9.22244 0.965043C9.10304 0.785223 8.8987 0.666687 8.66667 0.666687C8.66365 0.666687 8.66064 0.666707 8.65763 0.666747C8.65465 0.666707 8.65167 0.666687 8.64868 0.666687H4ZM8 2.00002H4C3.82319 2.00002 3.65362 2.07026 3.5286 2.19528C3.40357 2.32031 3.33333 2.48988 3.33333 2.66669V13.3334C3.33333 13.5102 3.40357 13.6797 3.5286 13.8048C3.65362 13.9298 3.82319 14 4 14H12C12.1768 14 12.3464 13.9298 12.4714 13.8048C12.5964 13.6797 12.6667 13.5102 12.6667 13.3334V6.66669H8.66667C8.29848 6.66669 8 6.36821 8 6.00002V2.00002ZM11.6804 5.33335L9.33333 2.96921V5.33335H11.6804Z" fill="#C5B1FE"/>
                            </svg>
                            <Typography variant='body1' color="primary.dark" my="auto">
                                Variables
                            </Typography>
                        </Stack>
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.47136 2.86195C8.21101 2.6016 7.7889 2.6016 7.52855 2.86195C7.26821 3.1223 7.26821 3.54441 7.52855 3.80476L11.0571 7.33335H3.33329C2.9651 7.33335 2.66663 7.63183 2.66663 8.00002C2.66663 8.36821 2.9651 8.66669 3.33329 8.66669H11.0571L7.52855 12.1953C7.26821 12.4556 7.26821 12.8777 7.52855 13.1381C7.7889 13.3984 8.21101 13.3984 8.47136 13.1381L13.1376 8.4719C13.1392 8.47029 13.1408 8.46868 13.1424 8.46705C13.26 8.34721 13.3328 8.18311 13.3333 8.00202C13.3333 8.00135 13.3333 8.00069 13.3333 8.00002C13.3333 7.99935 13.3333 7.99869 13.3333 7.99802C13.333 7.90836 13.3151 7.82286 13.2827 7.74483C13.2509 7.66799 13.2041 7.59588 13.1424 7.53299C13.1408 7.53139 13.1392 7.52979 13.1376 7.52821M8.47136 2.86195L13.1376 7.52821L8.47136 2.86195Z" fill="#C5B1FE"/>
                        </svg>
                    </Stack>
                    <Stack gap={0.375}>
                        <Stack className='cards-content-stroke' direction="row" justifyContent='space-between'>
                            <Typography variant='Subtitle2' color="text.main">
                                Average Day Salary
                            </Typography>
                            <Typography variant='Subtitle2' color='text.light'>
                                $ 997.8
                            </Typography>
                        </Stack>
                        <Typography variant='Caption' color="NeutralGrey.main" px={1}>
                            Using for vacation payout calculation
                        </Typography>
                    </Stack>
                    
                </Stack>
            </Stack>
            <Stack sx={{width: '50%'}}>
                <Stack className='cards-block' mt={1}>
                    test
                </Stack>
            </Stack>
        </Stack>
    </Stack>
  
    
      
      
  );
}

export default Talent;
