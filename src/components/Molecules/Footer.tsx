import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-black m-auto flex">
            <div className="w-11/12 m-auto   flex flex-col lg:flex-row justify-around items-start lg:items-center py-12">
                {/* Left Side */}
                <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="https://www.pw.live/study/batches" target="_blank">
                            <Image
                                src="/pwlogot.png"
                                alt="PW Logo"
                                width={60}
                                height={60}
                                className='rounded-full'

                            />
                        </Link>
                        <span className="ml-3 text-2xl max-sm:pr-5 text-black font-roboto font-semibold">Physics Wallah</span>
                    </div>
                    <div className="text-center lg:text-left mt-4 max-sm:mr-4 max-sm:text-sm mb-2 max-w-[24rem] mx-auto">
                        <p className="font-roboto font-normal text-gray-600 text-md">
                            We understand that every student has different needs and capabilities, which is why we create such a wonderful and unique curriculum that is the best fit for every student.
                        </p>
                    </div>



                    <div className="flex justify-center lg:justify-start mt-6 max-sm:mr-4">
                    <Link href="https://play.google.com/store/apps/details?id=xyz.penpencil.physicswala" target="_blank">
                        <button type="button" className="flex items-center justify-center w-36 text-white bg-gray-900 rounded-md h-10 mr-5">
                            <div className="mr-2">
                                <svg viewBox="30 336.7 120.9 129.2" width="24">
                                    <path fill="#FFD400"
                                        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z">
                                    </path>
                                    <path fill="#FF3333"
                                        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z">
                                    </path>
                                    <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z">
                                    </path>
                                    <path fill="#3BCCFF"
                                        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs">
                                    GET IT ON
                                </div>
                                <div className="-mt-1 font-roboto text-md font-medium">
                                    Google Play
                                </div>
                            </div>
                        </button>
                        </Link>
                        <Link href="https://apps.apple.com/in/app/physics-wallah/id1641443555" target="_blank">
                        <button type="button" className="flex items-center justify-center w-36 text-white bg-gray-900 h-10 rounded-md">
                            <div className="mr-2">
                                <svg viewBox="0 0 384 512" width="24">
                                    <path fill="currentColor"
                                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <div className="text-xs">
                                    Download on the
                                </div>
                                <div className="-mt-1 font-roboto text-md font-medium">
                                    App Store
                                </div>
                            </div>
                        </button>
                        </Link>
                    </div>
                    <div className="mt-6">
                        <h4 className="text-md max-sm:pl-10 font-roboto text-gray-9000 font-semibold">Let&apos;s go social :</h4>
                        <div className="flex justify-center lg:justify-start pt-2">
                            <Link href="https://www.facebook.com/physicswallah" target="_blank">
                                <Image
                                    src="/facebook.png"
                                    alt="FB Logo"
                                    width={25}
                                    height={25}
                                    className='mr-2'

                                />
                            </Link>
                            <Link href="https://www.instagram.com/physicswallah/" target="_blank">
                                <Image
                                    src="/instagram.png"
                                    alt="Insta Logo"
                                    width={25}
                                    height={25}
                                    className='mr-2'

                                />
                            </Link>
                            <Link href="https://www.youtube.com/c/PhysicsWallah" target="_blank">
                                <Image
                                    src="/youtube.png"
                                    alt="Yt Logo"
                                    width={25}
                                    height={25}
                                    className='mr-2'

                                />
                            </Link>
                            <Link href="https://www.linkedin.com/company/physicswallah/" target="_blank">
                                <Image
                                    src="/linkedin.png"
                                    alt="Linkedin Logo"
                                    width={25}
                                    height={25}
                                    className='mr-2'

                                />
                            </Link>
                            <Link href="https://twitter.com/physicswallahap?lang=en" target="_blank">
                                <Image
                                    src="/twitter.png"
                                    alt="X Logo"
                                    width={25}
                                    height={25}
                                    className='mr-2'

                                />
                            </Link>

                            <Link href="https://t.me/Physics_Wallah_Official_Channel" target="_blank">
                                <Image
                                    src="/telegram.png"
                                    alt="Telegram Logo"
                                    width={25}
                                    height={25}
                                    className='mr-2'

                                />
                            </Link>
                        </div>
                    </div>
                </div>



                {/* Right Side */}
                <div className="flex flex-col max-sm:flex-row max-sm:mt-10  max-sm:w-full max-sm:justify-around  lg:flex-row mt-3 w-5/12 justify-between ">
                    {/* Our Company */}
                    <div className="mb-8 lg:mb-12  ">
                        <h4 className="text-lg font-roboto font-medium  mb-8"> Company</h4>
                        <ul className='font-roboto font-normal text-md text-gray-500'>
                            <li className='mb-5 '>
                                <Link href="https://www.pw.live/about-us" target="_blank">About Us</Link>
                            </li>
                            <li className='mb-5 max-sm:text-sm '>
                                <Link href="https://www.pw.live/contact-us"target="_blank" >Contact Us</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="https://pwhr.darwinbox.in/ms/candidate/a62d7a6e288992/careers"target="_blank">Career</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="https://www.pw.live/updates"target="_blank">Updates</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="https://www.pw.live/exams/"target="_blank">Blogs</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Our Centers */}
                    <div className="mb-8 lg:mb-12   ">
                        <h4 className="text-lg font-roboto font-medium  mb-8"> Our Centers</h4>
                        <ul className='font-roboto font-normal text-md text-gray-500'>
                            <li className='mb-5 max-sm:text-sm'>
                                <Link href="https://www.pw.live/vidyapeeth-centres/new-delhi-dl" target="_blank">New Delhi</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="https://www.pw.live/vidyapeeth-centres/patna-br" target="_blank">Patna</Link>
                            </li>
                            <li className='mb-5 '>
                                <Link href="https://www.pw.live/vidyapeeth-centres/kota-rj" target="_blank">Kota</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="https://www.pw.live/vidyapeeth-centres/dhanbad-jh" target="_blank">Dhanbad</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="https://www.pw.live/vidyapeeth-centres" target="_blank">View All</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Popular Exams */}
                    <div className="mb-8 lg:mb-12 ">
                        <h4 className="text-lg font-roboto font-medium  mb-8"> Popular Exam</h4>
                        <ul className='font-roboto font-normal text-md text-gray-500'>
                            <li className='mb-5'>
                                <Link href="https://www.pw.live/online-course-physics-wallah-jee" target="_blank">IIT JEE</Link>
                            </li>
                            <li className='mb-5 '>
                                <Link href="https://www.pw.live/online-course-physics-wallah-neet" target="_blank">NEET</Link>
                            </li>
                            <li className='mb-5 '>
                                <Link href="https://www.pw.live/online-course-physics-wallah-gate-exam" target="_blank">GATE</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="https://www.pw.live/batches/upsc/pw-only-ias" target="_blank">UPSC</Link>
                            </li>
                            <li className='mb-5'>
                                <Link href="https://www.pw.live/" target="_blank">View All</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                <div className="h-4 bg-purple-600"></div>
        </footer>
    );
};

export default Footer;
