import React, {Component, useState} from 'react';
import "./Form.css";

const OtherGame = (props) => (
    <div id="otherGameDiv" >
        <label htmlFor="otherGame">Other game:</label>
        <input type="text" id="otherGame" name="otherGame" value={props.campaignGame} onChange={(event) => {props.changeValue(event.target.value)}}/>
    </div>
)

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
                campaignName: '',
                campaignDescription: '',
                campaignBudget: 0,
                campaignGame: '',
                otherText: '',
                campaignStartDate: new Date(),
                campaignEndDate: new Date(),
                campaignLanguage: '',
                campaigns: [],
        }
    }

    handleSubmit(event) {
        console.log(this.state);
        this.setState({campaigns: [...this.state.campaigns, {
                campaignName: this.state.campaignName,
                campaignGame: this.state.campaignGame === "Other" ? this.state.otherText : this.state.campaignGame,
                campaignBudget: this.state.campaignBudget,
                campaignStartDate: this.state.campaignStartDate,
                campaignLanguage: this.state.campaignLanguage}],
                campaignName: '',
                campaignDescription: '',
                campaignGame: '',
                campaignBudget: '',
                campaignStartDate: new Date(),
                campaignEndDate: new Date(),
                campaignLanguage: '',
                otherText: '',
        }
        )
    }

    render() {
        return (
            <div className={"form_section"}>
                <form className="campaignForm">
                    <label htmlFor="campaignName">Campaign name:</label><br />
                    <input type="text" value={this.state.campaignName} onChange={(event) => {this.setState({campaignName: event.target.value})}} placeholder="Your campaign name..."/>
                    <p id="errorHelperName">Your campaign name should be between 1 and 20 characters!</p>
                    <label htmlFor="campaignDescription">Campaign description:</label><br />
                    <hr />

                    <textarea id="campaignDescription" name="campaignDescription" value={this.state.campaignDescription} onChange={(event) => {this.setState({campaignDescription: event.target.value})}} rows="6" cols="20" placeholder="Your campaign description..." required></textarea>
                    <hr />

                        <label htmlFor="campaignGame">Campaign game:</label><br />
                        <select id="campaignGame" name="campaignGame" value={this.state.campaignGame} onChange={(event) => {this.setState({campaignGame: event.target.value})}} required>
                            <option value="" disabled selected>Select the game</option>
                            <option value="League of Legends">League of Legends</option>
                            <option value="DOTA 2">DOTA 2</option>
                            <option value="Minecraft">Minecraft</option>
                            <option value="Fortnite">Fortnite</option>
                            <option value="Apex Legends">Apex Legends</option>
                            <option id="otherGameSelected" value="Other">Other</option>
                        </select>
                    {this.state.campaignGame === "Other" && (<OtherGame campaignGame={this.state.otherText} changeValue={(value) => {this.setState({otherText: value})}}/>)}
                    <label htmlFor="campaignBudget">Campaign budget:</label>
                    <input type="number" id="campaignBudget" name="campaignBudget" value={this.state.campaignBudget} onChange={(event) => {this.setState({campaignBudget: event.target.value})}} min="1" max="20000" placeholder="Your campaign budget..." required />

                    <label htmlFor="campaignStartDate">Campaign start date:</label>
                    <input type="date" id="campaignStartDate" name="campaignStartDate" value={this.state.campaignStartDate} onChange={(event) => {this.setState({campaignStartDate: event.target.value})}} required /><br />

                    <label htmlFor="campaignEndDate">Campaign end date:&nbsp</label>
                    <input type="date" id="campaignEndDate" name="campaignEndDate" value={this.state.campaignEndDate} onChange={(event) => {this.setState({campaignEndDate: event.target.value})}} required />
                    <hr />

                    <p id="questionCrypto">Can the campaign be paid with crypto currency?</p>
                    <input type="radio" id="yesCrypto" name="paidCrypto" value="yes" required />
                    <label htmlFor="yesCrypto">Yes</label><br />
                    <input type="radio" id="noCrypto" name="paidCrypto" value="no" required />
                    <label htmlFor="noCrypto">No</label><br />
                    <hr />

                    <label htmlFor="campaignLanguage">Campaign language:</label><br />
                    <select id="campaignLanguage" name="campaignLanguage" value={this.state.campaignLanguage} onChange={(event) => {this.setState({campaignLanguage: event.target.value})}} required>
                        <option value="" disabled selected>Select the language</option>
                        <option value="English">English</option>
                        <option value="German">German</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Japanese">Japanese</option>
                    </select>
                    <hr />
                </form>
                <input type="submit" value={"Submit"} onClick={this.handleSubmit.bind(this)}/>
                <hr />
                <table id="campaignTable">
                    <thead>
                        <tr>
                            <th>Campaign name</th>
                            <th>Campaign game</th>
                            <th>Campaign start date</th>
                            <th>Campaign budget</th>
                            <th>Campaign language</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.campaigns.map((value) => {
                        return (
                            <tr>
                                <td>{value.campaignName}</td>
                                <td>{value.campaignGame}</td>
                                <td>{value.campaignStartDate}</td>
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
}

export default Form;

