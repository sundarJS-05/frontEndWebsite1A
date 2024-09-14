import React from 'react'
import { TbActivityHeartbeat } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io5";
import { BiGitBranch } from "react-icons/bi";

const projectData = [
    {
      title: "Project Alpha",
      link: "https://alpha.com",
      githubRepo: "https://github.com/user/project-alpha",
      lastCommit: "3 days",
      time: "2 hours"
    },
    {
      title: "Beta Development",
      link: "https://beta.dev",
      githubRepo: "https://github.com/user/beta-development",
      lastCommit: "5 days",
      time: "1 hour"
    },
    {
      title: "Gamma System",
      link: "https://gamma-system.io",
      githubRepo: "https://github.com/user/gamma-system",
      lastCommit: "1 week",
      time: "4 days"
    },
    {
      title: "Delta Network",
      link: "https://delta.network",
      githubRepo: "https://github.com/user/delta-network",
      lastCommit: "2 weeks",
      time: "6 hours"
    },
    {
      title: "Epsilon App",
      link: "https://epsilonapp.com",
      githubRepo: "https://github.com/user/epsilon-app",
      lastCommit: "3 weeks",
      time: "12 hours"
    },
    {
      title: "Zeta Tech",
      link: "https://zeta-tech.io",
      githubRepo: "https://github.com/user/zeta-tech",
      lastCommit: "4 weeks",
      time: "3 days"
    },
    {
      title: "Eta Framework",
      link: "https://etaframework.com",
      githubRepo: "https://github.com/user/eta-framework",
      lastCommit: "1 month",
      time: "5 hours"
    },
    {
      title: "Theta AI",
      link: "https://theta-ai.dev",
      githubRepo: "https://github.com/user/theta-ai",
      lastCommit: "2 months",
      time: "1 day"
    },
    {
      title: "Iota Robotics",
      link: "https://iotarobotics.com",
      githubRepo: "https://github.com/user/iota-robotics",
      lastCommit: "3 months",
      time: "8 hours"
    },
    {
      title: "Kappa Cloud",
      link: "https://kappa.cloud",
      githubRepo: "https://github.com/user/kappa-cloud",
      lastCommit: "5 months",
      time: "10 days"
    },
    {
      title: "Lambda Solutions",
      link: "https://lambdasolutions.com",
      githubRepo: "https://github.com/user/lambda-solutions",
      lastCommit: "6 months",
      time: "7 hours"
    },
    {
      title: "Mu Software",
      link: "https://musoftware.io",
      githubRepo: "https://github.com/user/mu-software",
      lastCommit: "1 year",
      time: "2 weeks"
    }
  ];
  

export default function ProjectSection() {
  return (
    <div className='grid grid-cols-3 gap-6'>
        {projectData.map( (project, index)=> (
                    <ProjectCard 
                    key={index}
                    title={project.title}
                    link={project.link}
                    githubRepo={project.githubRepo}
                    lastCommit={project.lastCommit}
                    time={project.time}

                    />
                   )
        )}

    </div>
  )
}


// function  ProjectCard(){
//     return(
//         <div className='border p-5'>

//             {/* 1st */}
//             <section>

//                 {/* left section */}
//                 <section>
//                 <div className='w-6 h-7'>
//                     <img src="https://images.pexels.com/photos/8832766/pexels-photo-8832766.jpeg?auto=compress&cs=tinysrgb&w=400"/>

//                 </div>


//                 <div>
//                     <p className> Random lines</p>
//                     <p className='text-ellipsis'> Again... random lines</p>
//                 </div>
//             </section>
//             </section>

//             {/* right section */}

//             <section>

//                 <div className='border-4 dark:border-gray-500 h-10 w-10 rounded-full text-3xl flex items-center  justify-center dark:text-gray-400'>
//                 <TbActivityHeartbeat />
//                 </div>

//                 <div className='py-2 px-3'>
//             <HiDotsHorizontal />
//               </div>
              
//             </section>

//             {/* 2nd - Github - section */}
//             <button className='flex items-center p-5'>
//             <IoLogoGithub />
//             <p className=' m-2'> Gihtub par jaayein </p>
//             </button>

//             {/* 3rd section */}
//             <div className='flex items-center'>
//                 <span>
//                     Aakhri commit -- xxxyyy pehle | main branch par
//                 </span>
//                 <BiGitBranch />
    

//             </div>


//         </div>
//     )

// }


function ProjectCard({ title, link, githubRepo, lastCommit, time }) {
    return (
      <div className='border p-5'>
  
        {/* 1st Section */}
        <section className='flex justify-between'>
  
          {/* Left section */}
          <div className='flex items-center'>
            <div className='w-6 h-7'>
              <img
                src='https://images.pexels.com/photos/8832766/pexels-photo-8832766.jpeg?auto=compress&cs=tinysrgb&w=400'
                alt='project thumbnail'
              />
            </div>
            <div className='ml-3'>
              <p className='font-bold'>{title}</p>
              <a href={link} className='text-ellipsis text-blue-500 underline'>
                {link}
              </a>
            </div>
          </div>
  
          {/* Right section */}
          <div className='flex items-center'>
            <div className='border-4 dark:border-gray-500 h-10 w-10 rounded-full text-3xl flex items-center justify-center dark:text-gray-400'>
              <TbActivityHeartbeat />
            </div>
            <div className='py-2 px-3'>
              <HiDotsHorizontal />
            </div>
          </div>
  
        </section>
  
        {/* 2nd Section - Github */}
        <button className='flex items-center p-5' >
          <IoLogoGithub />
          <p className='m-2'>Visit GitHub</p>
        </button>
  
        {/* 3rd Section */}
        <div className='flex items-center'>
          <span>
            Last commit: {lastCommit} | on main branch
          </span>
          <BiGitBranch className='ml-2' />
          <span className='ml-2'>
            {time} ago
          </span>
        </div>
  
      </div>
    );
  }
  
