const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Ibro",
      email: "ibro@email.com",
    },
    {
      id: 2,
      name: "mohamed",
      email: "ibro@email.com",
    },
    {
      id: 3,
      name: "ahmed",
      email: "ibro@email.com",
    },
  ];

  return (
    <div>
      <ul>
        {users.length > 0 ? (
          users.map((user) => <li key={user.id}> {user.name} </li>)
        ) : (
          <p>no users found!</p>
        )}
      </ul>
    </div>
  );
};

export default UserList;
