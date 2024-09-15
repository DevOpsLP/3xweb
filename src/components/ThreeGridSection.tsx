import React from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-20 text-primary-500">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-7xl font-bold mb-8 text-primary-500">
          Our Creators, Their Success
        </h2>
        <p className="text-xl md:text-2xl mb-12">
          Join a community of creators who are earning while doing what they love.
        </p>

        {/* Success Metrics */}
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-24">
          <div className="text-center">
            <span className="text-5xl font-bold text-primary-500">200+</span>
            <p className="text-xl">Creators Joined</p>
          </div>
          <div className="text-center">
            <span className="text-5xl font-bold text-primary-500">$1M+</span>
            <p className="text-xl">Revenue Generated</p>
          </div>
          <div className="text-center">
            <span className="text-5xl font-bold text-primary-500">10+</span>
            <p className="text-xl">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
