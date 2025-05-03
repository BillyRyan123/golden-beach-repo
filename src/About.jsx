import React, { useEffect } from "react";
import samuel from "./Images/samuel.jpg"; // Replace with your actual image path

const About = () => {
  useEffect(() => {
    document.title = "GoldenBeach | About Me";
  }, []);

  return (
    <main className="bg-white min-h-screen text-gray-800 font-sans">

      {/* Header */}
      <section className="text-center py-16 px-6">
       
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-lora">
          Hi, I'm Samuel — the founder of GoldenTide. I created this space to help you discover the magic of the coast, one beach at a time.
        </p>
      </section>

      {/* Image & Bio */}
      <section className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto py-16 px-6 gap-10">
        <img
          src={samuel}
          alt="Samuel"
          className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-amber-200"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold text-amber-600 mb-4">Samuel </h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-xl">
            With a deep love for nature and a passion for discovery, I started GoldenBeach as a way to share the hidden treasures of the coastline with others.
            What began as a personal journey to find peace by the sea has turned into a platform where you can explore quiet beaches, chase golden sunsets, and
            reconnect with the beauty of the ocean. My goal is to help you experience the calm, wonder, and adventure that beaches have always given me.
          </p>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-amber-600 mb-4">Why I Do What I Do</h3>
          <p className="text-lg text-gray-700 font-lora">
            I believe the beach is more than a destination — it's a healing space. Whether you're planning a trip, looking for calm, or simply love the sound
            of waves, GoldenTide was made for you. I hope each visit inspires you to breathe deeply, dream bigger, and explore more.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <p className="text-lg font-lora mb-4 text-gray-700">Want to connect or share your favorite beach?</p>
        <a
          href="mailto:info@goldentide.com"
          className="inline-block bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition"
        >
          Send Me a Message
        </a>
      </section>

    </main>
  );
};

export default About;
