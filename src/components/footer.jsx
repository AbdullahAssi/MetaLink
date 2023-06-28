import {logo, playstore, appstore } from '../assets';
import { footerLinks} from "../constants";

const Footer = () => (
    <section className='flex justify-center items-center flex-col sm:py-16 py-6 mt-14' >
        <div className='flex justify-center items-start md:flex-row flex-col mb-8 w-full p-10 sm:px-20 max-w-[1280px]'>
        <div className="flex-[1] flex flex-col justify-start mr-10">
            <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72.14px] object-contain"
            />
            <p className={` font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[312px]`}>
            Buy, sell and discover exclusive digital assets by the top artists of NFTs world.
            </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                <h4 className="font-poppins font-medium text-[20px] leading-[27px] text-white">
                {footerlink.title}
                </h4>
                <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                    <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                        index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                    >
                    {link.name}
                    </li>
                ))}
                </ul>
            </div>
            ))}
            <div className='mr-0 sm:mr-10'>
                <h1 className='text-[20px] text-white font-medium flex flex-col ss:my-0 my-4 min-w-[150px]'>Download the App</h1>
                <img
                src={playstore}
                alt="APP"
                className="w-[156px] h-[62.14px] my-1 object-contain"
                />
                <img src={appstore} className='w-[156px] h-[62.14px] my-1 object-contain' alt="" />
            </div>
        </div>
        </div>

        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white mt-12">
        Ⓒ<span className='text-gradient text-4xl '>M.Abdullah</span>  All Rights Reserved.
        </p>
    </section>
);

export default Footer;