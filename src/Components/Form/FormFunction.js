import React, { useState } from "react";

function OtherGame(props) {
       return (
           <div id="otherGameDiv">
            <label htmlFor="otherGame">Other game:</label>
            <input type="text"
                   id="otherGame"
                   name="otherGame"
                   value={props.campaignGame}
                   onChange={(event) => {props.changeValue(event.target.value)}}/>
        </div>
    )
}

function FormFunction() {
    const [campaignName, setCampaignName] = useState('');
    const [campaignDescription, setCampaignDescription] = useState('');
    const [campaignBudget, setCampaignBudget] = useState('0');
    const [campaignGame, setCampaignGame] = useState('');
    const [campaignOtherText, setCampaignOtherText] = useState('');
    const [campaignLanguage, setLanguage] = useState('');
    const [campaigns, setCampaigns] = useState([]);

    const handleSubmit = (event) => {
        console.log(campaigns);
        setCampaigns(campaigns => [...campaigns, {
            campaignName: campaignName,
            campaignGame: campaignGame === "Other" ? campaignOtherText : campaignGame,
            campaignBudget: campaignBudget,
            campaignLanguage: campaignLanguage}])
        setCampaignName('')
        setCampaignDescription('')
        setCampaignBudget('0')
        setCampaignGame('')
        setCampaignOtherText('')
        setLanguage('')
    }

    return (
        <div className={"form_section"}>
            <form className="campaignForm">
                <label htmlFor="campaignName">Campaign name:</label><br />
                <input type="text"
                       value={campaignName}
                       onChange={event => setCampaignName(event.target.value)}
                       placeholder="Your campaign name..."/>
                <p id="errorHelperName">Your campaign name should be between 1 and 20 characters!</p>
                <label htmlFor="campaignDescription">Campaign description:</label><br />
                <hr />

                <textarea id="campaignDescription"
                          name="campaignDescription"
                          value={campaignDescription}
                          onChange={event => setCampaignDescription(event.target.value)}
                          rows="6"
                          cols="20"
                          placeholder="Your campaign description..."
                          required>
                </textarea>
                <hr />

                <label htmlFor="campaignGame">Campaign game:</label><br />
                <select id="campaignGame"
                        name="campaignGame"
                        value={campaignGame}
                        onChange={event => setCampaignGame(event.target.value )}
                        required>
                    <option value="" disabled selected>Select the game</option>
                    <option value="League of Legends">League of Legends</option>
                    <option value="DOTA 2">DOTA 2</option>
                    <option value="Minecraft">Minecraft</option>
                    <option value="Fortnite">Fortnite</option>
                    <option value="Apex Legends">Apex Legends</option>
                    <option id="otherGameSelected" value="Other">Other</option>
                </select>

                {campaignGame === "Other" && (<OtherGame campaignGame={campaignOtherText} changeValue={(value) => {setCampaignOtherText(value)}}/>)}

                <label htmlFor="campaignBudget">Campaign budget:</label>
                <input type="number"
                       id="campaignBudget"
                       name="campaignBudget"
                       value={campaignBudget}
                       onChange={event => setCampaignBudget(event.target.value)}
                       min="1"
                       max="20000"
                       placeholder="Your campaign budget..."
                       required/>

                <p id="questionCrypto">Can the campaign be paid with crypto currency?</p>
                <input type="radio"
                       id="yesCrypto"
                       name="paidCrypto"
                       value="yes"
                       required/>
                <label htmlFor="yesCrypto">Yes</label><br />
                <input type="radio"
                       id="noCrypto"
                       name="paidCrypto"
                       value="no"
                       required/>
                <label htmlFor="noCrypto">No</label><br />
                <hr />

                <label htmlFor="campaignLanguage">Campaign language:</label><br />
                <select id="campaignLanguage"
                        name="campaignLanguage"
                        value={campaignLanguage}
                        onChange={event => setLanguage(event.target.value)}
                        required>
                    <option value="" disabled selected>Select the language</option>
                    <option value="English">English</option>
                    <option value="German">German</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Japanese">Japanese</option>
                </select>
                <hr />
            </form>
            <input type="submit"
                   value={"Submit"}
                   onClick={handleSubmit.bind(this)}/>
            <hr />
            <table id="campaignTable">
                <thead>
                <tr>
                    <th>Campaign name</th>
                    <th>Campaign game</th>
                    <th>Campaign budget</th>
                    <th>Campaign language</th>
                </tr>
                </thead>
                <tbody>
                {campaigns.map((value) => {
                    return (
                        <tr>
                            <td>{value.campaignName}</td>
                            <td>{value.campaignGame}</td>
                            <td>{value.campaignBudget}</td>
                            <td>{value.campaignLanguage}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default FormFunction;