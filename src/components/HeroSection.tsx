export default function HeroSection() {
    function handleClick() {
        alert("🎉Soon To Be Launched!!🎉")
    };

    return (
        <main className="h-fit lg:bg-gradient-to-r from-white via-white to-purple-800">
            <section className="max-w-[1300px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

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

                    <button
                        className="bg-purple-800 mt-8 px-6 py-3 rounded-xl text-white font-medium hover:bg-purple-900 transition cursor-pointer"
                        onClick={handleClick}
                    >
                        Start Investing Now ➜
                    </button>

    
                    <div className="mt-16 grid grid-cols-3 gap-5 text-center">
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

                <div className="flex justify-center lg:justify-end items-center gap-4 lg:gap-6 mt-3 mb-10">
                    <img
                        src="/phone2.png"
                        alt="phone2"
                        className="
                            w-38 h-65 sm:w-48 md:w-62 lg:w-70 xl:w-94 xl:h-165 lg:h-125 md:h-115
                            drop-shadow-xl
                        "
                    />
                    <img
                        src="/phone1.png"
                        alt="phone1"
                        className="
                            w-32 sm:w-48 md:w-56 lg:w-60 xl:w-[320px]
                            drop-shadow-xl
                        "
                    />
                </div>

            </section>
        </main>
    );
}
