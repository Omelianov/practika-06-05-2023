export const UsersList = ({ users, deleteUser }) => {
    return (
        <ul> 
            {users.map(({name, email, id}) => {
                return (
                    <li key = {id}>
                        <p>Name:{name}</p>
                        <p>Name:{email}</p>
                        <button onClick={()=>{deleteUser(id)}} class="button">Delete</button>
                    </li>
                );
            })}
        </ul>
    )
}
