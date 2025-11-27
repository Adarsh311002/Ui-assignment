import React from "react";
import { Plus, Heart, Crown, Send } from "lucide-react";
import EditableText from "../component/EditableText.jsx";

const Landing = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* hro sec*/}
      <div className="relative w-full">
        {/* img c */}
        <div className="hero-container flex flex-col md:flex-row w-full h-[600px] relative z-0">
          {/* LI */}
          <div className="w-full md:w-1/2 h-full clip-hero-left relative z-20">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop"
              className="w-full h-full object-cover brightness-90"
              alt="hijab portrait"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* MI */}
          <div className="w-full md:w-1/2 h-full clip-hero-mid relative z-10 hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="sunglasses girl"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* RI */}
          <div className="w-full md:w-1/2 h-full clip-hero-right relative z-0 hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop"
              className="w-full h-full object-cover brightness-90"
              alt="red lipstick portrait"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* 25k */}
          <div className="absolute top-[25%] right-[12%] z-20 rotate-[-25deg] hidden md:block">
            <h2 className="text-6xl font-heavy leading-none drop-shadow-lg">
              25K
            </h2>
            <p className="text-xs tracking-[0.2em] font-bold uppercase text-center mt-1 drop-shadow-md">
              Followers
            </p>
          </div>
        </div>

        {/* hero c & name */}
        <div className="hero-name-container relative -mt-32 z-30 flex flex-col items-center w-full px-4">
          {/* ++ */}
          <div className="absolute left-6 md:left-24 top-40 md:top-40 w-16 h-16 border-2 border-yellow-500 rotate-45 hidden md:flex items-center justify-center bg-black/60 backdrop-blur-md shadow-[0_0_20px_rgba(234,179,8,0.2)]">
            <div className="-rotate-45 flex flex-col items-center justify-center">
              <Crown
                size={14}
                className="text-yellow-500 fill-yellow-500 mb-0.5"
              />
              <span className="text-white font-heavy text-lg leading-none">
                4.5
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white text-xl mb-[-5px] font-medium">I'm</p>
            <div className="flex flex-col items-center">
              <EditableText
                initialValue="AMBER"
                tag="h1"
                className="hero-title text-7xl md:text-[8rem] font-heavy tracking-tighter uppercase leading-none drop-shadow-2xl"
              />
              <EditableText
                initialValue="Johanson"
                tag="span"
                className="hero-subtitle text-red-600 font-serif-italic capitalize text-6xl md:text-[5rem] tracking-normal block -mt-6 md:-mt-10 drop-shadow-lg"
              />
            </div>
          </div>

          <p className="text-center text-gray-300 text-xs max-w-md mt-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            dignissim id non quisque egestas dui. Tincidunt amet sit cras
            volutpat.
          </p>

          <div className="flex items-center gap-24 mt-12">
            <button className="font-extrabold text-lg uppercase tracking-wider transition-colors hover:text-red-500">
              <span className="text-red-600">F</span>ollow
            </button>
            <button className="text-white font-extrabold text-lg uppercase tracking-wider hover:text-red-600 transition-colors">
              Message
            </button>
          </div>
        </div>
      </div>

      {/* intro */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative">
        <EditableText
          initialValue="My Intro"
          tag="h2"
          className="text-3xl ml-35 md:text-8xl font-heavy mb-1 text-left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
          <div className="relative h-[600px] w-full hidden md:block">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-outline font-heavy text-[10rem] opacity-20 pointer-events-none z-0">
              Intro
            </span>

            {/* TLI */}
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
              className="absolute left-17 top-8 w-1/3 h-[65%] object-cover z-20 grayscale shadow-2xl"
              alt="intro portrait"
            />

            {/* BRI */}
            <img
              src="https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=800&auto=format&fit=crop"
              className="absolute right-12 bottom-8 w-1/3 h-[65%] object-cover z-10 brightness-50 shadow-2xl"
              alt="intro hallway"
            />
          </div>

          {/*content */}
          <div className="flex flex-col justify-center">
            <EditableText
              multiline={true}
              initialValue="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
              tag="p"
              className="text-gray-400 text-sm leading-8 tracking-wide mb-8 text-justify"
            />

            <EditableText
              multiline={true}
              initialValue="Double click here to edit this paragraph regarding your personal details or biography."
              tag="p"
              className="text-gray-400 text-sm leading-8 tracking-wide mb-16 text-justify"
            />

            <div className="flex gap-20">
              <a
                href="#"
                className="font-serif-italic text-4xl hover:text-red-600 transition-colors"
              >
                About me
              </a>
              <a
                href="#"
                className="font-serif-italic text-4xl hover:text-red-600 transition-colors"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* gallery sec */}
      <section className="w-full mb-24 flex justify-center px-4">
        {/* Main C */}
        <div className="flex flex-col md:flex-row h-auto md:h-[500px] gap-2 items-center">
          {/* LI */}
          <div className="w-full md:w-[350px] h-[300px] md:h-full rounded-3xl overflow-hidden relative shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop"
              className="w-full h-full object-cover"
              alt="portrait 1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent mix-blend-overlay"></div>
          </div>

          {/* right side rgp*/}
          <div className="flex gap-2 h-[300px] md:h-full">
            <div className="w-[160px] md:w-[180px] h-full rounded-3xl overflow-hidden relative shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=800&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                alt="portrait 2"
              />
            </div>

            <div className="w-[160px] md:w-[180px] h-full rounded-3xl overflow-hidden relative shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=800&auto=format&fit=crop"
                className="w-full h-full object-cover brightness-75 hover:brightness-100 transition duration-500"
                alt="portrait 3"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-heavy mb-8">My Gallery</h2>

        <div className="relative w-full aspect-square md:aspect-[21/9] rounded-[2rem] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1550596334-7bb40a71b6bc?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt="gallery main"
          />

          <div className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-3 bg-white/20 backdrop-blur-md px-2 py-2 pr-6 rounded-full border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
              alt="avatar"
            />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">
                Cameron Williamson
              </span>
              <span className="text-[10px] text-gray-300">Photographer</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            <p className="text-xs text-gray-300 mb-4 max-w-lg hidden md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Heart className="text-pink-500 fill-pink-500" size={18} />
                  <span className="text-sm font-bold">25</span>
                </div>
              </div>
              <Send className="text-purple-400 -rotate-45" size={20} />
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-12 md:py-24 bg-gradient-to-t from-[#111] to-black">
        <div className="inline-block border border-gray-800 bg-black/50 p-8 rounded-lg max-w-xs mx-auto mb-8">
          <h3 className="text-xl font-bold mb-2">Short Message</h3>
          <p className="text-[10px] text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit tristique.
          </p>
        </div>
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">
          Thank you : Visit again
        </p>
      </footer>
    </div>
  );
};

export default Landing;
