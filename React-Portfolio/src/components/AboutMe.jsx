import React from "react";

const AboutMe = () => {
    return (
        <section className="my-5">
            <div className="container">
                <h2 className="text-center mb-4">About Me</h2>
                <div className="row">
                    <div className="col-lg-4 mb-3">
                        <img src="/picture of me.jpg" alt="Kyler Jansson" className="img-fluid rounded" />
                    </div>
                    <div className="col-lg-8">
                        <div className="text-container">
                            <p>I'm a student and a passionate full-stack developer. I'm all about creating awesome web experiences.
                                I work with both front-end and back-end tech to build user-friendly, engaging interfaces.</p>
                            <p>I love teaming up with others, exploring new technologies, and tackling problems head-on. Clean code and
                                good communication are my jam.</p>
                            <p>I can't wait to bring my tech skills, creativity, and all-around enthusiasm to your team. Let's cook
                                up some innovative web solutions together.</p>
                            <p>Thanks for dropping by my portfolio, and here's to future collaborations!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;