import React from "react";

export const BookCarousel=( props: { book: string | undefined; })=>{
    return(
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
        <div className='text-center'>
            <img src={props.book} width='160' height='233' alt="book" />
            <h6 className='mt-2'>Book</h6>
            <p>Code2Dream</p>
            <a className='btn main-color text-white' href="#">Reserve</a>
        </div>
    </div>
    );
}