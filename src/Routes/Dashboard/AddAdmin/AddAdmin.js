import React, { useState } from 'react';

const AddAdmin = () => {
    const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://blooming-meadow-45048.herokuapp.com/user/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Make Admin Sucessfully");
        }
      });
  };
    return (



        <div>
            <h3 className="text-center display-3">
                Make a New Admin Here

            </h3>

            <form onSubmit={handleSubmit}>
                <input onBlur={(e)=>setEmail(e.target.value)} className="w-50 h-50 p-2" type="text" placeholer="email here"></input>
                <input className="ms-3" type="submit" value="Add Admin"></input>
            </form>

        </div>
    );
};

export default AddAdmin;