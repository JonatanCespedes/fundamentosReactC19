const USER = {
    name: "jLuque",
    avatar: "https://static.vecteezy.com/system/resources/previews/009/734/564/original/default-avatar-profile-icon-of-social-media-user-vector.jpg",
    age: 20,
};

const userStyles = {
    color: "green",
    textTransform: "uppercase"
}

const imgStyles = {
    width: "150px",
    height: "150px",
}

export const User = () => {
    return (
        <>
            <h2>Mostrar datos</h2>
            <p style={userStyles}>Nombre de usuario: {USER.name}</p>
            <img style={imgStyles} src={USER.avatar} alt="" />
            <p>Edad: {USER.age}</p>
        </>
    )
}