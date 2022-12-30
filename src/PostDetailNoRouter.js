export default function(props) {
    const { id, title } = props;

    return (
        <>
        <div>Post ID: {id}</div>
        <div>Post Title: {title}</div>
        </>
    )
}