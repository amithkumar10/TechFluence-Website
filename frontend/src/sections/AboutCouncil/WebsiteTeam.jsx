import React from "react";

const WebsiteTeam = () => {
  const memberDetails = [
    {
      img: "/events/nagesh.jpg",
      name: "Nagesh Merva",
      designation: "Developer",
    },
    {
      img: "/events/AmithFormals.jpeg",
      name: "Amith Kumar",
      designation: "Developer",
    },

    {
      img: "/events/NewAryan.jpeg",
      name: "Aryan Naik",
      designation: "Developer",
    },
    {
      img: "/events/Nishka.jpeg",
      name: "Nishka Naik",
      designation: "Designer",
    },
    {
      img: "/events/Meher.jpeg",
      name: "Meher Aga",
      designation: "Designer",
    },
    {
      img: "/events/Meher.jpeg",
      name: "Yash Naik",
      designation: "Designer",
    },

    {
      img: "/events/Onkar.jpeg",
      name: "Sumeet Yadav",
      designation: "Graphic Designer & Video Editor",
    },
  ];
  return (
    <div>
      <div className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Website Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {memberDetails.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-center">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400 text-center mt-1">
                  {member.designation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteTeam;
