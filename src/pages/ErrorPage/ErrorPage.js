export default function ErrorPage({error}) {
    return (
        <div>
        <h1>Page Not Found</h1>
        <p>{error}</p>
        </div>
    )
}