

const LoginPage = () => {
    return(
        <div>
            <div className="bg-[#000]  h-[100vh] flex items-center justify-center w-screen ">
                
                <div className="w-[60vw] h-[100vh] flex flex-col items-center justify-center">
                    <p className="bg-gradient-to-t text-[80px] from-[#433D3A] via-[#C6C4C3] font-bold to-[#CAC8C6] bg-clip-text select-none text-transparent">NivakaranS</p>
                </div>
                <div className="w-[40vw] h-[100vh] flex flex-col items-center justify-center bg-[#101010]">

                    <div className="text-white text-3xl">Welcome Back</div>
                    <div>
                        <div className="mt-[10px]">
                            <p className="text-[16px]">Username</p>
                            <input className="bg-[#000] w-[120%] px-[18px] ring-gray-500 ring-[1px] mt-[2px] py-[10px] rounded-[5px] outline-none  "/>
                        </div>
                        <div className="mt-[10px]">
                            <p className="text-[16px]">Password</p>
                            <input className="bg-[#000] w-[120%] px-[18px] ring-gray-500 ring-[1px] mt-[2px] py-[10px] rounded-[5px] outline-none  "/>
                        </div>
                        <div className="bg-[#433D3A] w-[120%] select-none px-[18px]  mt-[20px] py-[10px] rounded-[5px] outline-none flex items-center justify-center cursor-pointer">
                            <p className="text-[16px]">Login</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginPage