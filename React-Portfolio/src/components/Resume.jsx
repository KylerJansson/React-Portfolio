import React from "react";

const Resume = () => {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">Resume</h2>
                <div className="text-center mb-3">
                    <a href="link to my resume" target="_blank" className="btn btn-primary">Download My Resume</a>
                </div>
                <h3 className="text-center mb-3">Proficiencies</h3>
                <div className="text-center">
                    <div className="text-container mx-auto">
                        <ul className="list-unstyled">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>API's</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;