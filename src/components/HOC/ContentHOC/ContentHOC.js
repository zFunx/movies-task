const ContentHOC = props => {
    if (props.loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    else if (props.error) {
        return (
            <div className="alert alert-danger d-flex align-items-center my-5" role="alert">
                <div>
                    {props.error}
                </div>
            </div>
        )
    }
    else {
        return props.children
    }
}

export default ContentHOC