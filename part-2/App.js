// Create an App component that renders at least three tweets.

const App = () => {
    return (
        <div>
            <div class="tweet">
                <Tweet username="Smith" name="Mike" date="9/7/24" message="I am going to Disneyland" />
                <Tweet username="TheBigMan123" name="Vinny" date="7/6/24" message="It is too hot out" />
                <Tweet username="MyLifeAsABigMac" name="Jonathan" date="2/23/24" message="This day just keeps getting better! #soulfood" />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));