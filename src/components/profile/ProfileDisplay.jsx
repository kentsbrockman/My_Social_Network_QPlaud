const ProfileDisplay = ( {data} ) => {

  return (
    <>
      <h3>Profile page</h3>
      <p>Username: {data.username}</p>
      <p>Email: {data.email}</p>
      {data.description && (
        <p>Description: {data.description}</p>
      )}
    </>
  );
};

export default ProfileDisplay;