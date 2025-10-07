import React from 'react';

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description, date, link }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-[#010D26]">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a href={link} className="text-[#D99E30] text-sm font-semibold hover:underline">
          Read More »
        </a>
      </div>
      <div className="px-6 pb-4 text-gray-400 text-xs">{date}</div>
    </div>
  );
};

export default BlogCard;
