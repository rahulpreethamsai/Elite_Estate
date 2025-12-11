import { useNavigate } from "react-router-dom";
import  { useState } from "react";

export default function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  function handleSignUp(){
    navigate('/auth')
  };

  function handleSubscribe(){
    if (!email) {
      alert("Email is required!");
    } else if (email.endsWith('@gmail.com')) {
      alert("🎉You Will Recieve Important Updates On Your Email!!🎉");
      setEmail('');
    } else {
      alert("Please enter a valid @gmail.com email address.");
    }
  }
  return (
    <footer className="bg-[#1D1D1D] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  
          <div>
            <div className="flex flex-col gap-6">

            
              <div className="flex bg-[#2C2C2C] p-2 rounded-full w-full max-w-md items-center">
                <input
                  type="email"
                  placeholder="Enter Your Email Here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent w-full px-4 text-gray-300 focus:outline-none"
                />
                <button className="bg-[#1F1F1F] px-4 py-2 rounded-full text-xs md:text-sm whitespace-nowrap" onClick={handleSubscribe}>
                  Subscribe To Newsletter
                </button>
              </div>

            
              <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                Signup and start enjoying the<br />benefits today!
              </h3>

              
              <button className="bg-purple-700 hover:bg-purple-800 px-4 py-3 rounded-xl mt-2 text-sm font-medium w-fit" onClick={handleSignUp}>
                Sign Up To Lilypads
              </button>

              <div className="flex flex-wrap items-center gap-4 mt-6">
                {["/Facebook.png", "/Twitter.png", "/Linkedin.png", "/Youtube.png", "/Medium.png", "/Pinterest.png"].map((icon, idx) => (
                  <img key={idx} src={icon} alt="icon" className="w-10 md:w-14" />
                ))}
              </div>
            </div>
          </div>

        
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <img src="/logo.png" alt="logo" className="w-20 mb-4" />
              <h4 className="font-semibold mb-2">Reach Us At</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                6751 Columbia Gateway Dr.,<br />
                3rd Floor, Columbia,<br />
                MD 21046
              </p>
            </div>

        
            <div>
              <h4 className="font-semibold mb-2">Network</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Community</li>
                <li>Investor</li>
                <li>Broker</li>
              </ul>

              <h4 className="font-semibold mt-6 mb-2">Technology</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Artificial Intelligence</li>
                <li>Block Chain</li>
              </ul>
            </div>

    
            <div>
              <h4 className="font-semibold mb-2">Product</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Invest</li>
                <li>Discover</li>
                <li>Transact</li>
                <li>Manage</li>
              </ul>

              <h4 className="font-semibold mt-6 mb-2">Highlights</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Impact of COVID-19 on industry</li>
                <li>Commercial lending insights</li>
              </ul>
            </div>

      
            <div>
              <h4 className="font-semibold mb-2">Our Story</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Approach</li>
                <li>About Us</li>
              </ul>

              <h4 className="font-semibold mt-6 mb-2">Knowledge Center</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>Resource</li>
                <li>Blog</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Lilypads. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}