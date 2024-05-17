import React from 'react';
import img from "../assets/banner.png";

const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img className="w-full h-64 object-cover object-center" src={img} alt="About Us Cover" />
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Aikinyi Estate</h2>
              <p className="text-gray-600">Who We Are?</p>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Agency Story</h3>
                <p className="text-gray-600 mb-4">
                Aikinyi Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
                </p>
                <p className="text-gray-600 mb-4">
                Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
                </p>
                <p className="text-gray-600 mb-4">
                Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
                </p>
  {/*<button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">More About Us</button>*/}
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img className="w-full h-full object-cover rounded" src={img} alt="Our Team" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
