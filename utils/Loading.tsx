/**
 * Loading component
 * Renders a loading spinner or message
 */
const Loading = ({ message = "Loading..." }: { message?: string }) => {
    return (
        <div className="flex items-center justify-center p-4">
            <p className="text-zinc-400 text-sm">{message}</p>
        </div>
    )
}

export default Loading;