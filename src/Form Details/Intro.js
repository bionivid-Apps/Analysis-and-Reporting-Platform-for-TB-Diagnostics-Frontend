import React from 'react'

function Intro() {
  return (
    <React.Fragment>
      <div className='container-fluid pt-4'>

        <div className='row'>

          {/* Introduction */}

          <div className='col mt-5 ms-5 mb-5 position-relative insideBgImg'>
            <div className="position-absolute top-50 start-50 translate-middle">
              <h1 className='text-white text-center fs-1 fw-bold'>Introduction Page</h1>
            </div>
          </div>

          {/* Heading */}

          <div className='col mt-5 mb-5 me-5 bg-light contentBgImg'>
            <h3 className='text-center mt-5 mb-5 fw-bold text-success'>Heading</h3>

            {/* Contents for Introduction Page */}

            <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsum facilis qui aliquid praesentium culpa tempore repellat fugit cumque minus similique hic nemo nihil excepturi nam sint cum voluptas dicta fuga, laborum nobis. Alias molestiae distinctio cupiditate perspiciatis harum, voluptates minus, ea dolorem placeat ducimus quia corrupti mollitia commodi vitae!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum ipsum facilis qui aliquid praesentium culpa tempore repellat fugit cumque minus similique hic nemo nihil excepturi nam sint cum voluptas dicta fuga, laborum nobis. Alias molestiae distinctio cupiditate perspiciatis harum, voluptates minus, ea dolorem placeat ducimus quia corrupti mollitia commodi vitae!</p>
          </div>

        </div>

      </div>
    </React.Fragment>
  )
}

export default Intro