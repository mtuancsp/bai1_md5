import React, {useState} from "react";

export default function CRUD() {
    let [generateId] = useState(1);

    const [list, setList] = useState([
        { id: generateId++, name: 'Tuấn', age: 26, address: 'Thái Bình' },
        { id: generateId++, name: 'Công', age: 26, address: 'Bắc Giang' },
        { id: generateId++, name: 'Sơn', age: 29, address: 'Nam Định' },
    ]);

    let [id, setId] = useState('');
    let [name, setName] = useState('')
    let [age, setAge] = useState('')
    let [address, setAddress] = useState('')
    let [editIndex, setEditIndex] = useState(-1)

    const handleEdit = (index) => {
        const item = list[index];
        setId(item.id);
        setName(item.name);
        setAge(item.age);
        setAddress(item.address);
        setEditIndex(index);
    }
    const handleDelete = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    };
    const handleSubmit = () => {
        if (editIndex !== -1) {
            const newList = [...list];
            newList[editIndex] = {id, name, age, address };
            setList(newList);
            setEditIndex(-1);
        } else {
            id = generateId++;
            console.log();
            setList([...list, {id, name, age, address }]);
        }
        setName("");
        setAge("");
    };
    return (
        <>
            <h2>Danh sách sinh viên</h2>
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br/>
            <label>Age</label>
            <input type="number" name="age" value={age} onChange={(e) => setAge(e.target.value)} /><br/>
            <label>Address</label>
            <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} /><br/>
            <button onClick={handleSubmit}>{editIndex !== -1 ? "Update" : "Add"}</button>
            <table border={1}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {list.map((student, index) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                        <td>
                            <button onClick={() => handleEdit(student.id)}>Edit</button>&nbsp;
                            <button onClick={() => handleDelete(student.id)}> Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>

                <tbody>
                {(() => {
                    const result = [];
                    list.forEach(student => {
                        result.push(
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                                <td>
                                    <button onClick={() => handleEdit(student.id)}>Edit</button>&nbsp;
                                    <button onClick={() => handleDelete(student.id)}> Delete</button>
                                </td>
                            </tr>
                        );
                    });
                    return result;
                })()}
                </tbody>
            </table>
        </>
    );
}