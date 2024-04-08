import React from 'react';

const Project = ({ item }) => {
    return (
        <div className="card h-100 shadow-sm">
            <h5 className="card-title text-center">{item.title}</h5>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-link"><img src={item.image} className="card-img-top" alt={item.title} style={{ objectFit: 'cover', width: '100%', height: '200px' }} /></a>
            <a href={item.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub Repository</a>
        </div>)
};

export default Project;