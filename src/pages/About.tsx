import React from 'react';
import { Award, Target, Rocket, Users } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      bio: 'With over 15 years of experience in technology innovation, Sarah leads Aricia Labs with a vision for transformative solutions.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
      bio: 'Marcus brings deep technical expertise and a passion for emerging technologies to drive our innovation forward.'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
      bio: 'Emily leads our design team with a focus on creating intuitive, user-centered experiences that delight our clients.'
    },
    {
      name: 'David Park',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
      bio: "David's technical leadership and problem-solving skills help turn complex challenges into elegant solutions."
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: 'Innovation First',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that drive real business value.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Client Partnership',
      description: 'We believe in building lasting relationships and treating our clients\' success as our own.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client service.'
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: 'Forward Thinking',
      description: 'We stay ahead of technology trends to future-proof our solutions and client investments.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Aricia Labs</h1>
            <p className="text-xl text-gray-100">
            At Aricia Labs, we’re a passionate team of innovators and problem solvers, driven by a commitment to empower businesses through advanced, cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                Ariacia Labs started with a single vision: to innovate in digital solutions that really make a difference. Founded by Aaryan, I started this journey with nothing but passion, determination, and a dream to empower businesses through web development and digital marketing.

Of course, the road wasn't all easy to travel, but surely all those challenges added up to this growth ladder. Today, AriciaLabs is driven by a belief that with hard work, authenticity, and innovation, we can help businesses thrive and reach new heights.

AriciaLabs is not just a company; it's evidence of persistence that holds a brighter future ahead. You see name AriciaLabs i see my thousands of dreams in it.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The experts behind our success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Milestones that mark our journey</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Award className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovative Solutions</h3>
              <p className="text-gray-600">Committed to bringing fresh, creative, and efficient digital solutions that make a difference.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">5+ Satisfied Clients</h3>
              <p className="text-gray-600">Trusted by individuals and businesses for personalized, high-quality services.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">98% Client Satisfaction</h3>
              <p className="text-gray-600">Focused on exceeding client expectations with attention to detail and exceptional service.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
