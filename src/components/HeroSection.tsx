

export default function HeroSection() {
    function handleClick(){
        alert("🎉Soon To Be Launched!!🎉")
    };
    return (
        <main className="min-h-screen bg-gradient-to-r from-white via-[#f7f1fb] to-[#e4d4f7]">
            <section className="max-w-[1300px] mx-auto px-4 lg:px-0  grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="bg-[#9E2349] h-1 w-7"></span>
                        <h2 className="text-[#9E2349] text-sm lg:text-base">
                            Welcome to the
                        </h2>
                    </div>

                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.1] mt-4">
                        Unprecedented <br />
                        Era of <span className="text-[#9E2349]">Real Estate <br /> Investing</span>
                    </h1>

                    <p className="font-light text-sm sm:text-base mt-6 leading-relaxed text-gray-700">
                        Lilypads uses sophisticated technologies for data-driven decisions in <br className="hidden lg:block" />
                        investing, managing and funding commercial real estate assets.
                    </p>

                    <button className="bg-purple-800 mt-8 px-6 py-3 rounded-xl text-white font-medium hover:bg-purple-900 transition cursor-pointer" onClick={handleClick}>
                        Start Investing Now ➜
                    </button>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">

                        <div>
                            <p className="font-bold text-3xl text-purple-800">658+</p>
                            <p className="text-gray-600">Properties Registered</p>
                        </div>

                        <div>
                            <p className="font-bold text-3xl text-purple-800">685+</p>
                            <p className="text-gray-600">Deals Cracked</p>
                        </div>

                        <div>
                            <p className="font-bold text-3xl text-purple-800">255+</p>
                            <p className="text-gray-600">Investors</p>
                        </div>

                    </div>
                </div>
                <div className="relative flex justify-center lg:justify-end">
                    <img src='/phone1.jpg' className="w-64 lg:w-80 shadow-xl rounded-4xl border-8 border-black/10" alt="card1" />
                    <img src='/phone2.jpg' className="w-64 h-[90%] lg:w-80 absolute left-0 border-8 border-black/10 shadow-xl rounded-4xl" alt="card2" />
                </div>
            </section>
        </main>
    );
}
