import React from 'react'

const Category = () => {
  return (
    <>
    <div className="container-xl-4 container-lg-3 container-md-2 container-sm-12">
        <div className="row">
            <div className="col">
                <input type="range" name="range"  id="" />
            </div>
            <div className="col">
                <select name="sort" id="">
                    <option value="">Default</option>
                    <option value="">Sort By Ratings</option>
                    <option value="">Sort By Price Low to High</option>
                    <option value="">Sort By Price High to Low</option>

                </select>
            </div>
        </div>
    </div>
    </>
  )
}

export default Category