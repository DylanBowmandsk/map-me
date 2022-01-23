const Navbar = () => {
    return (
        <div className="flex flex-row justify-between px-32 py-6 mb-6">
            <a id="logo" className="text-2xl">Map-Me</a>
            <ul className="list-none text-lg tracking-wide">
                <li className="inline mx-6">Home</li>
                <li className="inline mx-6">Stats</li>
            </ul>
        </div>
    )
}

export default Navbar