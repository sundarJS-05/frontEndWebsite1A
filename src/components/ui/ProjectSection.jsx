import React from 'react'
import { TbActivityHeartbeat } from "react-icons/tb";

export default function ProjectSection() {
  return (
    <div>
        <ProjectCard/>

    </div>
  )
}


function  ProjectCard(){
    return(
        <div className='border p-5'>

            {/* 1st */}
            <section>

                {/* left section */}
                <section>
                <div className='w-6 h-7'>
                    <img src="https://images.pexels.com/photos/8832766/pexels-photo-8832766.jpeg?auto=compress&cs=tinysrgb&w=400"/>

                </div>


                <div>
                    <p> Random</p>
                    <p> Again... random</p>
                </div>
            </section>
            </section>

            {/* right section */}

            <section>

                <div className='border-4 p-2 text-4xl'>
                <TbActivityHeartbeat />
                </div>
            </section>

        </div>
    )

}