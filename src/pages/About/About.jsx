import "./About.css";
import img1 from "../../assets/Container.png";
import img2 from "../../assets/Container (1).png";
import img3 from "../../assets/Container (2).png";

const About = () => {
    return (
        <>
            <p className="text-[16px] text-center mt-[77px] ">OUR BLOGS</p>

            <h1 className="text-[48px] mt-[25px] text-center">Find our all blogs from here</h1>
                <p className="text-[16px] text-[#666666]  flex justify-center text-center mt-[25px] items-center mb-[77px] ">our blogs are written from very research research and well known writers writers so that  we can provide you <br /> the best blogs and articles articles for you to read them all along</p >
                
        <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">

            <div className="flex flex-col">
                <img src={img1} alt="Travel" className="w-full aspect-[4/3] object-cover rounded-2xl mb-5" />
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-gray-400 mb-2">
                    <span className="text-gray-900">Travel</span> <span>13 March 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Train Or Bus Journey? Which one suits?</h3>
                <p className="text-gray-500 text-sm mb-4">The choice between a train or bus journey depends on various factors such as distance and cost.</p>
                <a href="#" className="text-indigo-600 font-bold text-sm underline underline-offset-4">Read More...</a>
            </div>

            <div className="flex flex-col">
                <img src={img2} alt="Development" className="w-full aspect-[4/3] object-cover rounded-2xl mb-5" />
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-gray-400 mb-2">
                    <span className="text-gray-900">Development</span> <span>11 March 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Best Website to research for your next project</h3>
                <p className="text-gray-500 text-sm mb-4">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.</p>
                <a href="#" className="text-indigo-600 font-bold text-sm underline underline-offset-4">Read More...</a>
            </div>

                <div className="flex flex-col">
                    <img src={img3} alt="Sports" className="w-full aspect-[4/3] object-cover rounded-2xl mb-5" />
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-gray-400 mb-2">
                    <span className="text-gray-900">Sports</span> <span>10 March 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-3">How to Be a Dancer in 2023 with proper skills?</h3>
                <p className="text-gray-500 text-sm mb-4">Organically grow the holistic world view of disruptive innovation via workplace diversity.</p>
                <a href="#" className="text-indigo-600 font-bold text-sm underline underline-offset-4">Read More...</a>
            </div>

            <div className="flex flex-col">
                <img src={img1} alt="Singer" className="w-full aspect-[4/3] object-cover rounded-2xl mb-5" />
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-gray-400 mb-2">
                    <span className="text-gray-900">Travel</span> <span>13 March 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Who is the best singer on chart? Know him?</h3>
                <p className="text-gray-500 text-sm mb-4">Chart by Billboard which ranks the all-time greatest artists based on performance.</p>
                <a href="#" className="text-indigo-600 font-bold text-sm underline underline-offset-4">Read More...</a>
            </div>

            <div className="flex flex-col">
                <img src={img2} alt="Business" className="w-full aspect-[4/3] object-cover rounded-2xl mb-5" />
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-gray-400 mb-2">
                    <span className="text-gray-900">Development</span> <span>11 March 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-3">How to start export import business from home?</h3>
                <p className="text-gray-500 text-sm mb-4">Capitalize on low hanging fruit to identify a ballpark value added activity.</p>
                <a href="#" className="text-indigo-600 font-bold text-sm underline underline-offset-4">Read More...</a>
            </div>

            <div className="flex flex-col">
                <img src={img3} alt="Chocolate" className="w-full aspect-[4/3] object-cover rounded-2xl mb-5" />
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-gray-400 mb-2">
                    <span className="text-gray-900">Sports</span> <span>10 March 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Make some drinks with chocolates and milk</h3>
                <p className="text-gray-500 text-sm mb-4">Organically grow the holistic world view of disruptive innovation and milk.</p>
                <a href="#" className="text-indigo-600 font-bold text-sm underline underline-offset-4">Read More...</a>
            </div>

            <div className="flex flex-col">
                <img src={img1} alt="Sea" className="w-full aspect-[4/3] object-cover rounded-2xl mb-5" />
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-gray-400 mb-2">
                    <span className="text-gray-900">Travel</span> <span>13 March 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-3">8 Rules Of Travelling In Sea You Need To Know</h3>
                <p className="text-gray-500 text-sm mb-4">Travelling in sea has many advantages. Some of the advantages include cost efficiency.</p>
                <a href="#" className="text-indigo-600 font-bold text-sm underline underline-offset-4">Read More...</a>
            </div>

            <div className="flex flex-col">
                <img src={img2} alt="UI/UX" className="w-full aspect-[4/3] object-cover rounded-2xl mb-5" />
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-gray-400 mb-2">
                    <span className="text-gray-900">Development</span> <span>11 March 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-3">How to build strong portfolio and get a Job in UI/UX</h3>
                <p className="text-gray-500 text-sm mb-4">Build your brand and showcase your best works to attract high-paying clients.</p>
                <a href="#" className="text-indigo-600 font-bold text-sm underline underline-offset-4">Read More...</a>
            </div>

            <div className="flex flex-col">
                <img src={img3} alt="Football" className="w-full aspect-[4/3] object-cover rounded-2xl mb-5" />
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-gray-400 mb-2">
                    <span className="text-gray-900">Sports</span> <span>10 March 2023</span>
                </div>
                <h3 className="text-xl font-bold mb-3">How to Be a Professional Footballer in 2023</h3>
                <p className="text-gray-500 text-sm mb-4">Hard work and dedication are key to becoming a professional player in today's world.</p>
                <a href="#" className="text-indigo-600 font-bold text-sm underline underline-offset-4">Read More...</a>
            </div>

        </div>
    </div>
        </>
    );
};

export default About;
