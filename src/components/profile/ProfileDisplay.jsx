const ProfileDisplay = ( {data} ) => {

  return (
    <>
      <h3>Profile page</h3>
      <p>Id: {data.id}</p>
      <p>Username: {data.username}</p>
      <p>Email: {data.email}</p>
      {data.description && (
        <p>description: {data.description}</p>
      )}
    </>
  );
};

export default ProfileDisplay;