export default function List(data) {
    console.log("===========");
    console.log(data);
    console.log("===========");
return(
    <div>
        <ul style={{ listStyleType: "none" }}>
            {data.user.map(item => <li key={item.passport}>{item.name}</li>)}
        </ul>
    </div>
)
};