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
                  ภาควิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ <br/> 
                  มหาวิทยาลัยเชียงใหม่ 239 ถ. ห้วยแก้ว ต.สุเทพ อ. เมือง จ. เชียงใหม่ 50200
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

                <li className="mb-4 flex md:hidden">
                  <a
                    href="https://www.facebook.com/compscicmu/"
                    className="hover:underline"
                  >
                    Facebook Computer Science CMU
                  </a>
                </li>
                <li className="mb-4 flex md:hidden">
                  <a
                    href="https://www.facebook.com/cscmuhomecoming/"
                    className="hover:underline"
                  >
                    Facebook Page ศิษย์เก่า
                  </a>
                </li>
                <li className="mb-4 flex md:hidden">
                  <a
                    href="https://www.google.com/maps/d/u/0/viewer?mid=1XzZUWuQlmVJeZC2dcBxA2yKIXO8&ll=18.80376300042011%2C98.95247199999993&z=20"
                    className="hover:underline"
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
                <ul className="dark:text-white font-medium">
                  <li className="mb-4">
                    <a
                      href="https://www.facebook.com/compscicmu/"
                      className="hover:underline"
                    >
                      Facebook Computer Science CMU
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://www.facebook.com/cscmuhomecoming/"
                      className="hover:underline"
                    >
                      Facebook Page ศิษย์เก่า
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://www.google.com/maps/d/u/0/viewer?mid=1XzZUWuQlmVJeZC2dcBxA2yKIXO8&ll=18.80376300042011%2C98.95247199999993&z=20"
                      className="hover:underline"
                    >
                      Location
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
