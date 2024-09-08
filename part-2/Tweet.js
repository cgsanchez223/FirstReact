// Define a Tweet component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.

const Tweet = ({ username, name, date, message }) => {
    return (
        <div>
            <p><b>{username} ({name}) at {date}:</b> {message}</p>
        </div>
    )
}