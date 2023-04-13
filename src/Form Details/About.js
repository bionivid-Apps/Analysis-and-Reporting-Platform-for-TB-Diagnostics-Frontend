import React from 'react'

function About() {
    return (
        <React.Fragment>
            <div className='container-fluid pt-4'>

                {/* Introduction */}

                <div className='row'>
                    <div className='col mt-5 ms-5 mb-5 position-relative insideBgImg2'>
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <h1 className='text-white text-center fs-1 fw-bold'>About Us</h1>
                        </div>
                    </div>

                    {/* Heading */}

                    <div className='col mt-5 mb-5 me-5 bg-light contentBgImg'>
                        <h3 className='text-center mt-5 mb-5 fw-bold text-success'>Heading</h3>
                        <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsum facilis qui aliquid praesentium culpa tempore repellat fugit cumque minus similique hic nemo nihil excepturi nam sint cum voluptas dicta fuga, laborum nobis. Alias molestiae distinctio cupiditate perspiciatis harum, voluptates minus, ea dolorem placeat ducimus quia corrupti mollitia commodi vitae!</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default About