import { v4 as uuidv4 } from 'uuid';
let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id )
    console.log(user);
    
    res.send(user);
}

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User added: ${user.name}`);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id );
    res.send(`user: ${id} deleted`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;

    const user = users.find((user) => user.id === id );

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    if (name) user.name = name;
    if (age) user.age = age;
    if (email) user.email = email;

    res.send(user);

}