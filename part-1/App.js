// renders a div with instances of the other two components.

const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Chris" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));
