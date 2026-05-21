/**
 * Error component
 * Renders an error message
 * @param message - error message to display
 */
const Error = ({ message = "Something went wrong." }: { message?: string }) => {
    return (
        <div className="flex items-center justify-center p-4">
            <p className="text-red-500 text-sm">{message}</p>
        </div>
    )
}

export default Error;