const Title = () => (
    <img
        className="w-28 h-32"
        alt="logo"
        src="https://i.pinimg.com/originals/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.png" />
)

const Heading = () => {
    return (
        <div className=" px-20 h-32 flex justify-between bg-white-400 shadow-xl">
            <Title />
            <div className="flex">
                <ul className="flex py-2">
                    <li className="p-10">Home</li>
                    <li className="p-10">About</li>
                    <li className="p-10">Contact</li>
                    <li className="p-10">Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Heading;