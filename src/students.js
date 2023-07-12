import React, {useState} from 'react';

function StudentList() {
    let [generateId] = useState(1);

    const [students, setStudents] = useState([
        {id: generateId++, name: 'Tuấn', age: 26, address: 'Thái Bình'},
        {id: generateId++, name: 'Công', age: 26, address: 'Bắc Giang'},
        {id: generateId++, name: 'Sơn', age: 29, address: 'Nam Định'},
    ]);

    const [inputStudent, setInputStudent] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setInputStudent({...inputStudent, [name]: value,});
    };

    const addStudent = () => {
        const newStudent = {id: generateId++, ...inputStudent};
        setStudents([...students, newStudent]);
        setInputStudent(null);
        setIsEditing(false);
    };

    const startEditing = (student) => {
        setInputStudent(student);
        setIsEditing(true);
    };

    const updateStudent = () => {
        setStudents(students.map(student => student === inputStudent
            ? {...student, ...inputStudent} : student)
        );
        setInputStudent(null);
        setIsEditing(false);
    };

    const deleteStudent = (id) => {
        setStudents(students.filter((student) => student.id !== id));
    };


    return (
        <div>
            <h2>Danh sách sinh viên</h2>
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
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.address}</td>
                        <td>
                            <button onClick={() => startEditing(student)}>Edit</button>
                            &nbsp;
                            <button onClick={() => deleteStudent(student.id)}> Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <h2>{isEditing ? 'Update Student' : 'Add Student'}</h2>
            <div>
                <input
                    type="text"
                    name="name"
                    value={inputStudent?.name || ''}
                    onChange={handleInputChange}
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="age"
                    value={inputStudent?.age || ''}
                    onChange={handleInputChange}
                    placeholder="Age"
                />
                <input
                    type="text"
                    name="address"
                    value={inputStudent?.address || ''}
                    onChange={handleInputChange}
                    placeholder="Address"
                />
                {isEditing ? (
                    <button onClick={updateStudent}>Update</button>
                ) : (
                    <button onClick={addStudent}>Add</button>
                )}
            </div>
        </div>
    );
}

export default StudentList;
