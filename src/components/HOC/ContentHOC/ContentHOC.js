import React from 'react'

const ContentHOC = props => {
    if (props.loading) {
        return (
            <div class="text-center py-5">
                <div class="spinner-border text-warning" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    else if (props.error) {
        return (
            <div class="alert alert-danger d-flex align-items-center my-5" role="alert">
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