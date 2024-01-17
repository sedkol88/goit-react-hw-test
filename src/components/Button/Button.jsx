import { Component } from 'react';

import styles from './button.module.css';

class Button extends Component {
  state = {
    active: false,
  };

  handleClick() {
    console.log(this);

    // const {active: prevActive} = this.state;
    // this.setState({
    //     active: !prevActive
    // })
  }

  render() {
    const { text, type } = this.props;
    const { active } = this.state;
    console.log(this);
    const fullClassName = active
      ? `${styles.active} ${styles.btn}`
      : styles.btn;

    return (
      <button
        onClick={() => this.handleClick()}
        className={fullClassName}
        type="submit"
      >
        {text}
      </button>
    );
  }
}

export default Button;
