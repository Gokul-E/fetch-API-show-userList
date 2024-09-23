
// document.addEventListener("DOMContentLoaded",()=>{
//     axios.get('https://dummyjson.com/users')
//     .then(res => {
//         console.log(res.users.data);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });

//     users.forEach((userlist) => {
    
//     const element=`
//     <div class="para">
//     <p> href="#" ${userlist.firstName}></p>
//     <p> href="#" ${userlist.age}></p>
//    <p> href="#" ${userlist.email}></p>
//     <p> href="#" ${userlist.phone}></p>
//     <//div>`;

//     const parentElement=document.getElementById('parent-container');
//     parentElement.innerHTML += element;
    
// });



// })
document.addEventListener("DOMContentLoaded", () => {
    axios.get('https://dummyjson.com/users')
        .then(res => {
            console.log(res.data);
            // console.log(typeof(res.data));

            const users = res.data.users;
            console.log(users)
        //    console.log(typeof(users))
            


            users.forEach((user) => {
                const element = `
                    <div class="para">
                        <p><strong>First Name:</strong> ${user.firstName}</p>
                        <p><strong>Age:</strong> ${user.age}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                    </div>`;

                const parentElement = document.getElementById('parent-container');
                parentElement.innerHTML += element;
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            const errorElement = document.createElement('div');
            // errorElement.className = 'error';
            // errorElement.textContent = 'Error fetching data. Please try again later.';
            document.getElementById('parent-container').appendChild(errorElement);
        });
});