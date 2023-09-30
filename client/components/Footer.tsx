import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <footer className="bg-[#F29D35] mt-[5rem]">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8 px-4 py-6 lg:py-8 ">
            <div>
              <h1 className="mb-6 text-sm font-bold text-bold uppercase dark:text-white">
                COMPUTER SCIENCE CMU
              </h1>
              <ul className="dark:text-white font-medium">
                <p>
                  ภาควิชาวิทยาการคอมพิวเตอร์ 
                  <br/>  คณะวิทยาศาสตร์ มหาวิทยาลัยเชียงใหม่ 
                  <br/> 239 ถ. ห้วยแก้ว ต.สุเทพ อ. เมือง จ. เชียงใหม่ 50200
                </p>
                <br></br>
                <div className="flex md:hidden">
                  <p>
                    โทรศัพท์ : 0-5394-3412-16 , 063-080-7969
                    <br></br>ธุรการ : กด 0 หรือ 101
                    <br></br>หลักสูตรปริญญาตรี : กด 103
                    <br></br>หลักสูตรปริญญาโท-เอก : กด 105
                    <br></br>E-mail : compsci@cmu.ac.th
                    <br></br>Line ID : cscmu
                  </p>
                </div>
                <br></br>
                <h2 className="mb-6 text-sm font-bold uppercase dark:text-white flex md:hidden">
                  Social Media
                </h2>

                <li className="flex md:hidden">
                  <a
                    href="https://www.facebook.com/compscicmu/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Facebook Computer Science CMU
                  </a>
                </li>
                <li className="flex md:hidden">
                  <a
                    href="https://www.facebook.com/cscmuhomecoming/"
                    className="hover:underline"
                    target="_blank"
                  >
                    Facebook Page ศิษย์เก่า
                  </a>
                </li>
                <li className="flex md:hidden">
                  <a
                    href="https://www.google.com/maps/d/u/0/viewer?mid=1XzZUWuQlmVJeZC2dcBxA2yKIXO8&ll=18.80376300042011%2C98.95247199999993&z=20"
                    className="hover:underline"
                    target="_blank"
                  >
                    Location
                  </a>
                </li>
              </ul>
            </div>
            <div className=" hidden md:flex">
              <ul className="dark:text-white font-medium">
                <li className="mb-4">
                  <p>
                    โทรศัพท์ : 0-5394-3412-16 , 063-080-7969
                    <br></br>ธุรการ : กด 0 หรือ 101
                    <br></br>หลักสูตรปริญญาตรี : กด 103
                    <br></br>หลักสูตรปริญญาโท-เอก : กด 105
                    <br></br>E-mail : compsci@cmu.ac.th
                    <br></br>Line ID : cscmu
                  </p>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Social Media
                </h2>
                <ul className="dark:text-white font-medium mb-4">
                <li>
                <a
                  href="https://www.facebook.com/compscicmu/"
                  className="hover:underline flex items-center"
                >
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 425 512"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="black"
                      strokeWidth="30"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 mr-2" 
                    >
                      <path d="M212 50.5q43.5 0 81.75 16.5t66.75 45 45 66.5T422 260t-16.5 81.75-45 66.75-66.75 45T212 470t-81.5-16.5-66.5-45-45-66.75T2.5 260 19 178.5 64 112t66.5-45T212 50.5zm79 91.5h-44.5q-13 0-24 4.5t-19.25 12-12.75 17-4.5 19V221h-39.5v52H186v105h52.5V273h39v-52h-39v-13.5q0-6 4.75-9.5t8.25-3.5H291V142z"/>
                    </svg>
                    Computer Science CMU
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/cscmuhomecoming/"
                  className="hover:underline flex items-center"
                >
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 425 512"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="black"
                      strokeWidth="30"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 mr-2" 
                    >
                      <path d="M212 50.5q43.5 0 81.75 16.5t66.75 45 45 66.5T422 260t-16.5 81.75-45 66.75-66.75 45T212 470t-81.5-16.5-66.5-45-45-66.75T2.5 260 19 178.5 64 112t66.5-45T212 50.5zm79 91.5h-44.5q-13 0-24 4.5t-19.25 12-12.75 17-4.5 19V221h-39.5v52H186v105h52.5V273h39v-52h-39v-13.5q0-6 4.75-9.5t8.25-3.5H291V142z"/>
                    </svg>
                    Facebook Page ศิษย์เก่า
                  </span>
                </a>
              </li>

                  <li>
                  <a
                      href="https://www.google.com/maps/d/u/0/viewer?mid=1XzZUWuQlmVJeZC2dcBxA2yKIXO8&ll=18.80376300042011%2C98.95247199999993&z=20"
                      className="hover:underline"
                      target="_blank"
                  >
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 12 12"
                        width="12"
                        height="12"
                        fill="none"
                        stroke="black"
                        strokeWidth="30"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 mr-2"
                      >
                      <path d="m6 .5c2.48528137 0 4.5 2.01471863 4.5 4.5 0 1.86262254-1.41980393 3.81485295-4.2 5.9-.17777778.1333333-.42222222.1333333-.6 0-2.78019607-2.08514705-4.2-4.03737746-4.2-5.9 0-2.48528137 2.01471863-4.5 4.5-4.5zm0 3c-.82842712 0-1.5.67157288-1.5 1.5s.67157288 1.5 1.5 1.5 1.5-.67157288 1.5-1.5-.67157288-1.5-1.5-1.5z" fill="#212121"/>
                    </svg>
                    Location
                  </span>
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
