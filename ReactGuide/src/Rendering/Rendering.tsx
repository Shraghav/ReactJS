interface RenderingProps {
    name: string,
    isLogged: boolean
}
function Rendering(props: RenderingProps) {
    const welcomeMessage = <h2 className="welcome-message">Hello {props.name}</h2>
    const loginMessage = <h2 className="login-message">Please Login</h2>
    return (props.isLogged ? welcomeMessage: loginMessage)
}
export default Rendering