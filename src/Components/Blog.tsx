import React from 'react';
import BlogCard from './BlogCard';
import bettingStrategies from '../assets/betting-strategies.jpg';
import taxImage from '../assets/tax.jpg';
import peopleBetting from '../assets/betting.jpg';

interface Blog {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

const blogPosts: Blog[] = [
  {
    image: bettingStrategies,
    title: 'Top 5 Betting Strategies for Beginners in 2025',
    description:
      'Discover the most effective and easy-to-follow betting strategies tailored for beginners in 2025. Whether you are new...',
    date: '1 October 2025',
    link: '/blog/football-strategies',
  },
  {
    image: taxImage,
    title: 'Kenyan Government Reintroduces 15% Betting Tax in 2025',
    description:
      'The Kenyan National Treasury has officially reinstated the 15% excise duty on betting stakes, effective October 1, 2025.This tax — applied to the amount...',
    date: '30 September 2025',
    link: '/blog/casino-heists',
  },
  {
    image: peopleBetting,
    title: 'Harambee Stars’ AFCON Qualifier Sparks Betting Frenzy in Kenya',
    description:
      'Excitement is building ahead of Kenya’s AFCON qualifier against Ghana, with local sportsbooks reporting a massive surge in betting activity...',
    date: '30 September 2025',
    link: '/blog/casino-audio',
  },
  {
    image: bettingStrategies,
    title: 'Harambee Stars’ AFCON Qualifier Sparks Betting Frenzy in Kenya',
    description:
      'Excitement is building ahead of Kenya’s AFCON qualifier against Ghana, with local sportsbooks reporting a massive surge in betting activity...',
    date: '30 September 2025',
    link: '/blog/casino-audio',
  },
  {
    image: taxImage,
    title: 'Harambee Stars’ AFCON Qualifier Sparks Betting Frenzy in Kenya',
    description:
      'Excitement is building ahead of Kenya’s AFCON qualifier against Ghana, with local sportsbooks reporting a massive surge in betting activity...',
    date: '30 September 2025',
    link: '/blog/casino-audio',
  },
  {
    image: peopleBetting,
    title: 'Harambee Stars’ AFCON Qualifier Sparks Betting Frenzy in Kenya',
    description:
      'Excitement is building ahead of Kenya’s AFCON qualifier against Ghana, with local sportsbooks reporting a massive surge in betting activity...',
    date: '30 September 2025',
    link: '/blog/casino-audio',
  },
];

const Blog: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-center text-[#010D26]">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
      <button  className="mt-12 px-6 py-3 bg-[#010D26] text-white font-semibold rounded-md hover:bg-[#D99E30] transition-colors duration-300 mx-auto block">View More</button>
    </section>
  );
};

export default Blog;
