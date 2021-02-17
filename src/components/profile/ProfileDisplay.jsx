const ProfileDisplay = ( {data} ) => {

  return (
    <div className="Profile">
      Profile page
      {data && (
        <ul>
          <li>id: {data.id}</li>
          <li>username: {data.username}</li>
          <li>email: {data.email}</li>
          {data.description && (
            <li>description: {data.description}</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default ProfileDisplay;