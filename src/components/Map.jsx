const Map = () => {
    const userinfo = [
        {
            username:"king",
            email:"king@gmail.com",
            location:"hyd"
        },
        {
            username:"king1",
            email:"king@gmail.com",
            location:"hyd"
        },
        {
            username:"king2",
            email:"king@gmail.com",
            location:"hyd"
        }
    ]
    return (
        <main>
        {userinfo.map((user) => (
            <ul key={Math.random()}>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.location}</li>
            </ul>
        ))}
        </main>
    );
};
export default Map;