import "./logo.css"
const Logo = () => {
    return (
        <div>
            <svg className="rotating-wheel" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" fill="#333" stroke="#000" strokeWidth="5" />
                <circle cx="100" cy="100" r="70" fill="#999" stroke="#666" strokeWidth="5" />
                <circle cx="100" cy="100" r="30" fill="#444" />
                <line x1="100" y1="30" x2="100" y2="170" stroke="#444" strokeWidth="10" />
                <line x1="30" y1="100" x2="170" y2="100" stroke="#444" strokeWidth="10" />
                <line x1="45" y1="45" x2="155" y2="155" stroke="#444" strokeWidth="10" />
                <line x1="45" y1="155" x2="155" y2="45" stroke="#444" strokeWidth="10" />
            </svg>
        </div>
    )
}

export default Logo;
