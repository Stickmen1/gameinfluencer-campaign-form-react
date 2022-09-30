import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import {Box, Button, FormControlLabel, FormLabel, Grid, Radio, RadioGroup} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function OtherGame(props: { campaignGame: string; changeValue: (arg0: string) => void; }) {
       return (
           <Grid>
               <hr />
               <TextField
                   className={"text_fields"}
                   required
                   fullWidth
                   label="Campaign game"
                   value={props.campaignGame}
                   onChange={(event) => {props.changeValue(event.target.value)}}
                   variant="filled"/>
            </Grid>
    )
}

function FormFunction() {
    const [campaignName, setCampaignName] = useState<string>('');
    const [campaignDescription, setCampaignDescription] = useState<string>('');
    const [campaignBudget, setCampaignBudget] = useState<number>(0);
    const [campaignGame, setCampaignGame] = useState<string>('');
    const [campaignOtherText, setCampaignOtherText] = useState<string>('');
    const [campaignLanguage, setLanguage] = useState<string>('');
    const [campaigns, setCampaigns] = useState<campaignsInformation[]>([]);

    interface campaignsInformation {
        campaignName: string;
        campaignGame: string;
        campaignBudget: number;
        campaignLanguage: string;
    }

    const handleSubmit = (event) => {
        console.log(campaigns);
        setCampaigns(campaigns => [...campaigns, {
            campaignName: campaignName,
            campaignGame: campaignGame === "Other" ? campaignOtherText : campaignGame,
            campaignBudget: campaignBudget,
            campaignLanguage: campaignLanguage}])
        setCampaignName('')
        setCampaignDescription('')
        setCampaignBudget(0)
        setCampaignGame('')
        setCampaignOtherText('')
        setLanguage('')
    }

    return (
        <Box>
            <h2>Gameinfluencer campaign registration form</h2>
            <Grid className={"form_section"}>
                <form className="campaignForm">
                    <Grid>
                        <TextField
                            className={"text_fields"}
                            required
                            fullWidth
                            label="Campaign name"
                            value={campaignName}
                            onChange={event => setCampaignName(event.target.value)}
                            variant="filled"/>
                        <hr />
                    </Grid>

                    <Grid>
                        <TextField
                            className={"text_fields"}
                            required
                            fullWidth
                            label="Campaign description"
                            multiline rows={5}
                            value={campaignDescription}
                            onChange={event => setCampaignDescription(event.target.value)}
                            variant="filled"/>
                        <hr />
                    </Grid>

                    <Grid>
                        <FormControl fullWidth>
                            <InputLabel>Campaign game</InputLabel>
                            <Select
                                className={"text_fields"}
                                required
                                label="Campaign game"
                                value={campaignGame}
                                onChange={event => setCampaignGame(event.target.value)}
                                displayEmpty
                            >
                                <MenuItem value="League of Legends">League of Legends</MenuItem>
                                <MenuItem value="DOTA 2">DOTA 2</MenuItem>
                                <MenuItem value="Minecraft">Minecraft</MenuItem>
                                <MenuItem value="Fortnite">Fortnite</MenuItem>
                                <MenuItem value="Apex Legends">Apex Legends</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {campaignGame === "Other" && (<OtherGame campaignGame={campaignOtherText} changeValue={(value) => {setCampaignOtherText(value)}}/>)}
                    <hr />

                    <Grid>
                        <TextField
                            className={"text_fields"}
                            required
                            fullWidth
                            label="Campaign Budget"
                            type="number"
                            value={campaignBudget}
                            onChange={event => setCampaignBudget(Number(event.target.value))}/>
                    </Grid>
                    <hr />

                    <Grid>
                        <FormLabel>Paying with crypto?</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="yes" control={<Radio />} label={"Yes"} />
                            <FormControlLabel value="no" control={<Radio />} label={"No"} />
                        </RadioGroup>
                    </Grid>
                    <hr />

                    <Grid>
                        <FormControl fullWidth>
                            <InputLabel>Campaign language</InputLabel>
                            <Select
                                className={"text_fields"}
                                required
                                label="Campaign language"
                                value={campaignLanguage}
                                onChange={event => setLanguage(event.target.value)}
                                displayEmpty
                            >
                                <MenuItem value="English">English</MenuItem>
                                <MenuItem value="German">German</MenuItem>
                                <MenuItem value="Spanish">Spanish</MenuItem>
                                <MenuItem value="Japanese">Japanese</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <hr />
                </form>

                <Button
                    variant="contained"
                    value={"Submit"}
                    onClick={handleSubmit.bind(this)}
                    endIcon={<SendIcon />}
                    fullWidth
                >Submit</Button>

                <hr />
                <TableContainer className="table_campaign_information">
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Campaign name</TableCell>
                                <TableCell>Campaign game</TableCell>
                                <TableCell>Campaign budget</TableCell>
                                <TableCell>Campaign language</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {campaigns.map((value) => {
                                return (
                                    <TableRow className={"row_information"}>
                                        <TableCell>{value.campaignName}</TableCell>
                                        <TableCell>{value.campaignGame}</TableCell>
                                        <TableCell>{value.campaignBudget}</TableCell>
                                        <TableCell>{value.campaignLanguage}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Box>
    );
}

export default FormFunction;
