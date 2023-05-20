import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Children = () => {
    return (
        <div className='md:px-32 px-5 py-20 md:text-left text-center flex flex-wrap gap-10 justify-center overflow-hidden'>
            <div>
                <h3 className='text-4xl font-bold mt-10'>About Kid's and Toys</h3>
                <p className='text-center mt-2'>It's not easy to make your child happy</p>
            </div>

            <div className='grid lg:grid-cols-2' >
                <div className='lg:p-20 pb-4' data-aos="fade-down-right" data-aos-duration="2000" >
                    <h3 className='mb-5 lg:text-2xl font-bold'>Toys are all your baby need better toys for better growth</h3>
                    <p>Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Faucibus interdum posuere lorem ipsum dolor. Eu tincidunt tortor aliquam nulla facilisi cras. Venenatis lectus magna.</p>
                </div>
                <div data-aos="fade-down-left" data-aos-duration="2000">
                    <img src="https://cdn.shopify.com/s/files/1/0373/7341/1467/articles/cars-construction-benefit-your-child_1200x1200.jpg?v=1625072196" alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-2'>
                <div data-aos="fade-down-right" data-aos-duration="2000">
                    <img src="https://www.babyshop.com/images/1061618/card_xlarge.jpg" alt="" />
                </div>
                <div className='lg:p-20 mt-5' data-aos="fade-down-left" data-aos-duration="2000">
                    <h3 className='mb-5 lg:text-2xl font-bold'>Creative modern wooden toys for kids development</h3>
                    <p>Ut faucibus pulvinar elementum integer enim neque volutpat. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. Elit scelerisque mauris pellentesque pulvinar pellentesque tristique.</p>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ut officiis ipsa asperiores aliquid ex exercitationem amet? Ipsa illum alias minus repellendus odit officia voluptatibus amet optio culpa? Blanditiis, provident.</p>
                    <div>
                        <button className='btn btn-outline mt-10 flex gap-3'><span>Read More Details</span> <FaLongArrowAltRight className='text-xl' /> </button>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2'>
                <div className='lg:p-20 mb-5' data-aos="fade-down-right" data-aos-duration="2000">
                    <h3 className='mb-5 lg:text-2xl font-bold'>Wooden toys that will delight your little one a lot</h3>
                    <p>Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Faucibus interdum posuere lorem ipsum dolor. Eu tincidunt tortor aliquam nulla facilisi cras. Venenatis lectus magna.</p>
                </div>
                <div data-aos="fade-down-left" data-aos-duration="2000">
                    <img src="https://media.istockphoto.com/id/639376560/photo/little-boy-and-toy.jpg?s=612x612&w=0&k=20&c=Ibc5U-i2GPd6qgl0AyKeUF0Vr85unHXi8YRtgBHHed4=" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Children;