export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </>
  );
};
