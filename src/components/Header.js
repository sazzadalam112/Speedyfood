const Title = () => (
    <img
        className="logo"
        alt="logo"
        src="https://i.pinimg.com/originals/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.png" />
)

const Heading = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Heading;