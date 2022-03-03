import React from 'react'

const Button = ({isLoading, children, ...props}) => {
    return (
        <button disabled={isLoading ? true : false} {...props}>{isLoading ? 'Loading...': children}</button>
    )
}

export default Button