// render a "p" tag which displays "Learn some information about this person". Each person should have name and age properties
// If person is over 18 years old, display a h3 that says "please go vote". Otherwise is under 18, "you must be 18"
// If person name is longer than 8 characters, only display first 6 characters
// hobbies - accepts an array of hobbies in an li

const Person = ({ name, age, hobbies=[] }) => {
    let info = (
        <div>
            <p>Learn some information about this person:</p>
            <p><b>Name: </b>{name.length > 8 ? name.slice(0,6) : name }</p>
            <p><b>Age: </b>{age}</p>
            <h3>{age > 18 ? "Please go vote!" : "You must be 18"}</h3>

            <ul>
                {hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
        </div>
    )
    return info;
}