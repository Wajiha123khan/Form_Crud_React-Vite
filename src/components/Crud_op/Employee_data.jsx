import React, { useState , useEffect } from 'react';

 const EmployeeData =[
    {
    id:1,
    firstName:'wajiha',
    lastName:'kahn',
    age:'22'
},
{
    id:2,
    firstName:'hiba',
    lastName:'ali',
    age:'23'
},
{
    id:3,
    firstName:'subhan',
    lastName:'kahn',
    age:'24'
},
{
    id:4,
    firstName:'ali',
    lastName:'kahn',
    age:'25'
},
{
    id:5,
    firstName:'alic',
    lastName:'bob',
    age:'27'
},
]
function Employee_data() {
    const [data, setData] = useState([]);
    const [firstName , setFirstName] = useState(''); 
    const [lastName , setLastName] = useState(''); 
    const [age , setAge] = useState(0); 
    const [id , setId] = useState(0); 
    const [isupdate , setIsUpdate] = useState(false); 
    useEffect(() => {
        setData(EmployeeData)
    },[]);

    const handleEdit = (id) =>{
        const dt = data.filter(item => item.id == id);
        if(dt !== undefined){
            setIsUpdate(true)
            setId(id);
            setFirstName(dt[0].firstName);
            setLastName(dt[0].lastName);
            setAge(dt[0].age);

        }
    }
    const handleDelete = (id) =>{
        if(id > 0){
            if(window.confirm("Are you sure want to delete this item ?")){
             const dt = data.filter(item => item.id !== id);
             setData(dt);
            }
        }
    }
    const handleSave = (e) =>{
        let error = '';
        if(firstName === '')
            error += 'first_name is required ,';

        if(lastName === '')
            error += 'last_name is required,';

        if(age <= 0 )
            error += 'age is required';
        if (error === '') {

        e.preventDefault();
        const dt= [...data];
        const newObject = {
            id: EmployeeData.length + 1,
            firstName:firstName,
            lastName:lastName,
            age:age

        }
    
        dt.push(newObject);
        setData(dt);
        }
        else{
            alert(error)
        }     
    }

    const handleUpdate = () =>{
      const index = data.map((item) =>{
        return item.id
      }).indexOf(id);
      const dt = [...data];
      dt[index].firstName = firstName;
      dt[index].lastName = lastName;
      dt[index].age = age;

      setData(dt);
      handleClear();

    }

    const handleClear =() =>{
        setId('');
            setFirstName('');
            setLastName('');
            setAge('');
            setIsUpdate(false);
    }


    return (
      <div>
        <div style={{display:'flex', jsutifyContent:"center", marginTop:"10px" , marginBottom:"10px " }}>
            <div>
                <label>First Name:
                    <input type='text' placeholder='Enter your First Name' onChange={(e) =>setFirstName(e.target.value)} value={firstName}/>
                </label>
            </div>

            <div>
                <label>Last Name:
                    <input type='text' placeholder='Enter your last Name' onChange={(e) =>setLastName(e.target.value)} value={lastName}/>
                </label>
            </div>
            
            <div>
                <label>age:
                    <input type='text' placeholder='Enter your Age' onChange={(e) =>setAge(e.target.value)} value={age}/>
                </label>
            </div>
             
            <div>
            {
                !isupdate ?
                <button className='btn btn-primary' onClick={(e) =>handleSave(e)}>Save</button>
                :
                <button className='btn btn-primary' onClick={() =>handleUpdate()}>Update</button>
             }
            <button className='btn btn-danger' onClick={() =>handleClear()}>Clear</button>
            </div>

            

        </div>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <td>SR.No</td>
                    <td>Id</td>
                    <td>First Name</td>
                    <td>Second Name</td>
                    <td>age</td>
                    <td className='mt-2 text-center'>Action</td>
                    
                </tr>
            </thead>

            <tbody>
                {
                    data.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.id}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.age}</td>
                                <td>
                                    <button className='btn btn-primary' onClick={() =>handleEdit(item.id)}>Edit</button>&nbsp;
                                    <button className='btn btn-danger' onClick={() =>handleDelete(item.id)}>Delete</button>
                                </td>

                            </tr>
                        )
                    }) 
                }
            </tbody>

        </table>

      </div>
    )
  }

export default Employee_data;





// import React, { useState } from 'react';

// const initialData = [
//   { id: 1, firstName: 'Wajiha', lastName: 'Khan', age: 22 },
//   { id: 2, firstName: 'Hiba', lastName: 'Ali', age: 23 },
//   // more data
// ];

// function EmployeeData() {
//   const [employees, setEmployees] = useState(initialData);

//   return (
//     <div>
//       <h4>Employee Data</h4>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Age</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((emp) => (
//             <tr key={emp.id}>
//               <td>{emp.id}</td>
//               <td>{emp.firstName}</td>
//               <td>{emp.lastName}</td>
//               <td>{emp.age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default EmployeeData;
