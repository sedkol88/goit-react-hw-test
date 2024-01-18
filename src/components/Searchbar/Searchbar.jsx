import { Component } from 'react';

import styles from './searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(value);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({
      search: '',
    });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { search } = this.state;

    return (
      <header>
        <form onSubmit={handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            value={search}
            onChange={handleChange}
            type="text"
            // autoComplete="off"
            // autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
