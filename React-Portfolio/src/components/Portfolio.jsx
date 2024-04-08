import React from "react";
import Project from "./Project";

const Portfolio = () => {
    const projectArray = [
        { title: "Book Search Engine", image: "/booksearchengine.png", link: "https://book-search-engine-hal0.onrender.com/", github: "https://github.com/KylerJansson/Book-Search-Engine" },
        { title: "Note Taker", image: "/notetaker.png", link: "https://memo-note-taker-f803db3be7fc.herokuapp.com/", github: "https://github.com/KylerJansson/Note-Taker" },
        { title: "Weather Dashboard", image: "/weatherdashboard.png", link: "https://kylerjansson.github.io/Weather-Dashboard/", github: "https://github.com/KylerJansson/Weather-Dashboard" },
        { title: "Password Generator", image: "/passwordgenerator.png", link: "https://kylerjansson.github.io/Password-Generator/", github: "https://github.com/KylerJansson/Password-Generator" },
        { title: "Work Day Scheduler", image: "/workdayscheduler.png", link: "https://kylerjansson.github.io/Work-Day-Scheduler/", github: "https://github.com/KylerJansson/Work-Day-Scheduler" },
        { title: "Javascript Quiz", image: "/javascriptquiz.png", link: "https://kylerjansson.github.io/Javascript-Quiz/", github: "https://github.com/KylerJansson/Javascript-Quiz" }
    ];
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Portfolio</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {projectArray.map(item => (
                    <div className="col" key={item.title}>
                        <Project item={item} key={item.title} />
                    </div>
                ))};
            </div>
        </div>
    );
};

export default Portfolio;