import React from 'react';

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/hh'); 
    const data = response.json();
    console.log(response);
    
    if(!response.ok){

        throw new Error('Something went profile wrong');
    }
}


const page = async() => {
    const data = await getData();
console.log(data)
    return (
        <div>
            <p>Profile Page {fdf}</p>
        </div>
    );
};

export default page;