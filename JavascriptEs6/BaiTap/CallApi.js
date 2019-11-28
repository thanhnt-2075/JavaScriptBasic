// Sử dụng từ Api https://jsonplaceholder.typicode.com/users để lấy email
async function callApi()
{
    const emailUrl = await findRandomEmail();
    document.getElementById('log').insertAdjacentHTML('beforeend', emailUrl.map(data => {
        return data.address.street + data.address.suite + data.address.city + data.address.zipcode + data.address.geo.lat + data.address.geo.lng
            + data.company.name + data.company.catchPhrase + data.company.bs
            + data.email
            + data.id
            + data.name
            + data.username
            + data.phone
            + data.website
            + "</br>";
    }));
}
function findRandomEmail()
{
    const endpoint = 'https://jsonplaceholder.typicode.com/users';
    return fetch(endpoint)
        .then(data => {return data.json()})
        .then(data => data.map(dataI => {
            return dataI;
        }));
}
{/* <div>`${data.name}`</div> */}

// test: Đệ quy chuyển các object con thành Array

// function checkObject(data)
// {
//     var dataObject = [];
//     if (typeof data === 'object')
//     {
//         dataObject = Object.values(data);
//         dataObject.forEach(data => {
//             return checkObject(data);
//         });
//     }
//     console.log(dataObject);
//     return data;
// }