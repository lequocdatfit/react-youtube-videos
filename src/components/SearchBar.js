import React from 'react';

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return(
            <div className="SearchBar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui field">
                    <label>Search video</label>
                    <input
                        value={this.state.term} 
                        type="text" 
                        onChange={this.onInputChange}/>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SearchBar;