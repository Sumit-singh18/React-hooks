import React, { useState } from "react";

const Todo = () => {
    const UserData = [
        { id: 0, Name: "Sumit", RollNo: 560, Sem: "B.tech" },
        { id: 1, Name: "Rohan", RollNo: 580, Sem: "B.tech" },
        { id: 2, Name: "Hulkk", RollNo: 590, Sem: "B.tech" },
        { id: 3, Name: "spidy", RollNo: 990, Sem: "B.tech"},

    ];
    const [myData, setmyData] = useState(UserData);
    const removeData = (id) => {
        const myNewData = myData.filter((data) => {
            return data.id !== id
        });
        setmyData(myNewData);
    };

    return (
        <div>
            {myData.map((data) => {
                return (
                    <div style={{ margin: 16 }} key={data.id}>
                        Name: {data.Name} | Roll no. {data.RollNo} | Semester : {data.Sem}
                        <button
                            onClick={() => {
                                removeData(data.id);
                            }}
                        >
                            Delete Data
                        </button>
                    </div>
                );
            })}

        </div>
    );
};
export default Todo;
