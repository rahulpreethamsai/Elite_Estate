export default function AboutSection() {
    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pb-16">

                    <article>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-[#9E2349] h-1 w-6"></span>
                            <p className="text-[#9E2349] font-semibold">About Us</p>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-serif font-semibold">
                            Lilypad is the only Real<br />
                            Estate Investment tool<br />
                            you need for your<br />
                            business
                        </h2>
                    </article>

                    <article className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <img src="/about1.png" alt="icon" className="w-20" />
                            <h3 className="font-semibold">Become a Data-Driven<br />Investor</h3>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                            Lilypads is the cloud-based real estate investment platform that helps
                            you make data-driven decisions for long-term investment objectives.
                        </p>
                    </article>

                    <article className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <img src="/about2.png" alt="icon" className="w-20" />
                            <h3 className="font-semibold">Lilypads can help you<br />make smarter decisions.</h3>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                            Streamline your investment process and collaborate in reaching
                            your long-term goals.
                        </p>
                    </article>

                </div>

                <div className="border-t border-black my-10"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                    <article className="flex flex-col gap-4">

                        <div className="flex items-center gap-4">
                            <img src="/about3.png" alt="icon" className="w-20" />
                            <h3 className="font-semibold">Manager Due Diligence</h3>
                        </div>

                        <p className="text-sm text-gray-600 mt-1">
                            Evaluate managers using traditional risk metrics with added
                            factor analysis to reach your objectives.
                        </p>

                    </article>


                    <article className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <img src="/about4.png" alt="icon" className="w-20" />
                            <h3 className="font-semibold">Optimize Asset Allocation</h3>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                            Understand risk drivers using Lilypad factors and optimize your
                            portfolio based on clear objectives.
                        </p>
                    </article>


                    <article className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <img src="/about5.png" alt="icon" className="w-20" />
                            <h3 className="font-semibold">Our Subscribers</h3>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                            Serving global subscribers — banks, family offices, pension funds,
                            investment managers and more.
                        </p>
                    </article>

                </div>
            </div>
        </section>
    );
}
