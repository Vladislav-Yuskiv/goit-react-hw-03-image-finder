import { Component } from "react";
import PropTypes from "prop-types";
import s from './Searchbar.module.css';

class Searchbar extends Component {

    state = {
        value: '',
    }


    handleChange = (e) => {
        this.setState({ value: e.currentTarget.value })
    }

    handleSumbit = (e) => {
        e.preventDefault();
        if (this.state.value.trim() === "") {
            return;
        }
        this.props.onSubmit(this.state.value)
    }

    render() {
        return (
            <header className={s.Searchbar} >
                < form className={s.SearchForm} onSubmit={this.handleSumbit}>
                    < button type=" submit " className={s.SearchForm_button} >
                        < span className={s.SearchForm_button_label} > Search </ span >
                    </ button >

                    <input
                        className={s.SearchForm_input}
                        type="text"
                        //autocomplete="off"
                        //autofocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                </form >
            </header >
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Searchbar;