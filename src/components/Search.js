import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
 class Search extends Component {
     state= {
         searchText :'',
         amount:15,
         apiUrl:'https://pixabay.com/api/',
         apiKey:'12285153-44ce81e823c6ad0cc68bf7a1b',
         images:[]
     }
    render() {
        return (
            <div>
                <TextField 
                 name = "searchText"
                 value={this.state.searchText}
                 onChange= {this.onTextChange}
                 floatingLabelText="Search for Images"
                 fullWidth={true}
                 />
                 <br />
                 <SelectField 
                 name = "amount"
                 floatingLabelText="Amount"
                 value = {this.state.amount}
                 onChange= {this.onAmountChange}>
                     <MenuItem value ={5} primaryText="5"></MenuItem>
                     <MenuItem value ={10} primaryText="10"></MenuItem>
                     <MenuItem value ={15} primaryText="15"></MenuItem>
                     <MenuItem value ={30} primaryText="30"></MenuItem>
                     <MenuItem value ={50} primaryText="50"></MenuItem>
                 </SelectField>
            </div>
        )
    }
}
export default Search;