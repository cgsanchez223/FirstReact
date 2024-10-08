const App = () => {
    return (
        <div>
            <div id="person">
                <Person name="Christopher" age={31} hobbies={["dancing", "reading", "designing"]} />
            </div>
            <div id="person">
                <Person name="Mia" age={7} hobbies={["playing catch", "going to walks", "eating snack"]} />
            </div>
            <div id="person">
                <Person name="Katherina" age={22} hobbies={["cooking", "playing with dogs", "going for walks"]} />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
