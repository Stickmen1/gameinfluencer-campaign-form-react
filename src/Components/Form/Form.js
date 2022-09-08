import React, {Component, useState} from 'react';
import "./Form.css";

class Form extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        campaignName: '',
        campaignDescription: '',
        campaignGame: '',
        campaignBudget: 0,
        campaignStartDate: new Date(),
        campaignEndDate: new Date(),
        campaignLanguage: '',
        formInformation: [],
    }

    handleSubmit(event) {
       //let campaignOldInformation =
    }

    render() {
        return (
            <div className={"form_section"}>
                <form className="campaignForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="campaignName">Campaign name:</label><br />
                    <input type="text" value={this.state.campaignName} onChange={(event) => {this.setState({...this.state, campaignName: event.target.value})}} placeholder="Your campaign name..."/>
                    <p id="errorHelperName">Your campaign name should be between 1 and 20 characters!</p>
                    <label htmlFor="campaignDescription">Campaign description:</label><br />
                    <hr />

                    <textarea id="campaignDescription" name="campaignDescription" value={this.state.campaignDescription} onChange={(event) => {this.setState({...this.state, campaignDescription: event.target.value})}} rows="6" cols="20" placeholder="Your campaign description..." required></textarea>
                    <hr />

                        <label htmlFor="campaignGame">Campaign game:</label><br />
                        <select id="campaignGame" name="campaignGame" value={this.state.campaignGame} onChange={(event) => {this.setState({...this.state, campaignGame: event.target.value})}} required>
                            <option value="" disabled selected>Select the game</option>
                            <option value="League of Legends">League of Legends</option>
                            <option value="DOTA 2">DOTA 2</option>
                            <option value="Minecraft">Minecraft</option>
                            <option value="Fortnite">Fortnite</option>
                            <option value="Apex Legends">Apex Legends</option>
                            <option id="otherGameSelected" value="Other">Other</option>
                        </select>

                    <label htmlFor="campaignBudget">Campaign budget:</label>
                    <input type="number" id="campaignBudget" name="campaignBudget" value={this.state.campaignBudget} onChange={(event) => {this.setState({...this.state, campaignBudget: event.target.value})}} min="1" max="20000" placeholder="Your campaign budget..." required />

                    <label htmlFor="campaignStartDate">Campaign start date:</label>
                    <input type="date" id="campaignStartDate" name="campaignStartDate" value={this.state.campaignStartDate} onChange={(event) => {this.setState({...this.state, campaignStartDate: event.target.value})}} required /><br />

                    <label htmlFor="campaignEndDate">Campaign end date:&nbsp</label>
                    <input type="date" id="campaignEndDate" name="campaignEndDate" value={this.state.campaignEndDate} onChange={(event) => {this.setState({...this.state, campaignEndDate: event.target.value})}} required />
                    <hr />

                    <p id="questionCrypto">Can the campaign be paid with crypto currency?</p>
                    <input type="radio" id="yesCrypto" name="paidCrypto" value="yes" required />
                    <label htmlFor="yesCrypto">Yes</label><br />
                    <input type="radio" id="noCrypto" name="paidCrypto" value="no" required />
                    <label htmlFor="noCrypto">No</label><br />
                    <hr />

                    <label htmlFor="campaignLanguage">Campaign language:</label><br />
                    <select id="campaignLanguage" name="campaignLanguage" value={this.state.campaignLanguage} onChange={(event) => {this.setState({...this.state, campaignLanguage: event.target.value})}} required>
                        <option value="" disabled selected>Select the language</option>
                        <option value="English">English</option>
                        <option value="German">German</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Japanese">Japanese</option>
                    </select>
                    <hr />
                </form>
                <input type="submit" value={"Submit"}/>
                <hr />
                <table id="campaignTable">
                    <thead>
                        <th>Campaign name</th>
                        <th>Campaign game</th>
                        <th>Campaign start date</th>
                        <th>Campaign budget</th>
                        <th>Campaign language</th>
                    </thead>
                    <tbody>
                        {this.state.formInformation.map(campaignInformation => <td>{campaignInformation}</td>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Form;

const OtherGame = () => (
    <div id="otherGameDiv" >
        <label htmlFor="otherGame">Other game:</label>
        <input type="text" id="otherGame" name="otherGame"/>
    </div>
)