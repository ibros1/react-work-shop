const UserCard = ({ name, email }) => {
  return (
    <div className="">
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
