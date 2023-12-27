import FriendListItem from './FriendListItem';
import css from './friendlist.module.css';

const FriendList = ({ friends }) => {
  const elements = friends.map(friend => (
    <FriendListItem
      key={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));

  return <ul className={css.friendlist}>{elements}</ul>;
};

export default FriendList;
