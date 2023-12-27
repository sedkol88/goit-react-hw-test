import css from './friendlist.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={`${css.status} ${
          isOnline ? css.statusGreen : css.statusRed
        }`}
      ></span>

      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;

// const statusStyle = {
//   backgroundColor: isOnline ? 'green' : 'red',
// };

/* <span className={css.status} style={statusStyle}></span> */
