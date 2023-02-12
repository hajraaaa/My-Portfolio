import React, { useState } from 'react'

const Projects = () => {
    const [ProjectList] = useState(
        [
            {
                title: "Personality Prediction System through CV Analysis",
                subTitle: "MERN Stack",
                description:
                    "This system will help to reduce the workload of HR Department.",
                link: "https://github.com/hajraaaa"
            },
            {
                title: "ToDo App",
                subTitle: "React, Redux Toolkit Query",
                description:
                    "It will help to maintain our daily tasks or list everything that we have to do.",
                link: "https://github.com/hajraaaa"
            },
            {
                title: "Portfolio",
                subTitle: "React Js",
                description:
                    "My portfolio website.",
                link: "https://github.com/hajraaaa"
            }]
    )
    return (
        <>
            <div id='projects' className='container'>

                <h1 className='text-center my-5'>My Projects</h1>
                <div className="row g-5 mx-2">
                    {ProjectList.map((x, index) =>
                        <div key={index} className="col-lg-6 col-md-6 col-sm-12">
                            <div className="p-3 card">
                                <div className="card-body">
                                    <h5 className="card-title">{x.title}</h5>
                                    <h6 className="card-subtitle mb-2 ">{x.subTitle}</h6>
                                    <p className="card-text">{x.description}</p>
                                    <a href={x.link} className="card-link btn btn-dark">Repository</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Projects
