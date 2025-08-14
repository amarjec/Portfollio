import React from 'react';

function SocialLinks() {
  
  const socialLinks = {
    github: "https://github.com/amarjec",
    leetcode: "https://leetcode.com/amarjec",
    linkedin: "https://www.linkedin.com/in/amarjec/",
    geeksforgreeks: "https://www.geeksforgeeks.org/user/amarjec"
  };

  return (
    <div className="flex justify-center space-x-6 py-4">
      {/* GitHub Icon and Link */}
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
      >
        <img
          src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF"
          alt="GitHub logo"
          width="40"
          height="40"
          className="rounded-full"
        />
        <span className="sr-only">GitHub Profile</span>
      </a>

      {/* LeetCode Icon and Link */}
      <a
        href={socialLinks.leetcode}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-orange-500 transition-colors duration-300 transform hover:scale-110"
      >
        <img
          src="https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000" 
          alt="LeetCode logo"
          width="40"
          height="40"
          className="rounded-full"
        />
        <span className="sr-only">LeetCode Profile</span>
      </a>

      {/* LinkedIn Icon and Link */}
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
      >
        <img
          src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" 
          alt="LinkedIn logo"
          width="40"
          height="40"
          className="rounded-full"
        />
        <span className="sr-only">LinkedIn Profile</span>
      </a>

      {/* GeeksforGeeks Icon and Link */}
      <a
        href={socialLinks.geeksforgreeks}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-500 transition-colors duration-300 transform hover:scale-110"
      >
        <img
          src="https://img.icons8.com/?size=100&id=AbQBhN9v62Ob&format=png&color=000000" 
          alt="GeeksforGeeks logo"
          width="40"
          height="40"
          className="rounded-full"
        />
        <span className="sr-only">GeeksforGeeks Profile</span>
      </a>
    </div>
  );
}

export default SocialLinks;
