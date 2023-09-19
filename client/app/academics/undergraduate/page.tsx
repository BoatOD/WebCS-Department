'use client';
import React from "react";
import Undergraduate from "@/components/AcademicPage/Undergraduate";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-7">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="max-w-full max-h-full justify-center">
              <Image
                src={"/image1.png" ?? "#"}
                width="0"
                height="0"
                sizes="100vw"
                alt="academic-image"
                className="w-auto h-auto object-scale-down  "
              />
            </div>
            <div className="p-5">
              <p>
                World-renowned for both rigor and innovation, EECS is the
                largest undergraduate program at MIT. Our flexible curriculum
                and inventive, hands-on approach to coursework gives students a
                holistic view of the field, an understanding of how to solve
                problems, and a focus on modeling and abstraction that prepares
                them for success in a wide range of fields, from research to
                industry and beyond. The majority of undergraduate programs in
                EECS are administered by the EECS Undergraduate Office, who can
                be reached at ug@eecs.mit.edu.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 order-first md:order-last ">
          <div className="flex flex-col space-y-2 mt-7">
            <div className="px-8 py-0.5 bg-black w-full"></div>
            <Sidebar theme={customTheme} className="w-full">
              <Sidebar.Items className="bg-white p-0">
                <Sidebar.ItemGroup className="bg-white p-0">
                  <Sidebar.Item href="#">
                    <p>UNDERGRADUATE</p>
                  </Sidebar.Item>
                  <div className="flex flex-col space-y-1 mt-7">
                    <div className="px-8 py-0.5 bg-slate-500"></div>
                  </div>
                  <Sidebar.Item href="#">
                    <p>Courses</p>
                  </Sidebar.Item>
                  <div className="flex flex-col space-y-1 mt-7">
                    <div className="px-8 py-0.5 bg-slate-500"></div>
                  </div>
                  <Sidebar.Collapse label="Undergraduate 64">
                    <Sidebar.Item href="#">Program</Sidebar.Item>
                    <Sidebar.Item href="#">required courses</Sidebar.Item>
                    <Sidebar.Item href="#">Core courses</Sidebar.Item>
                    <Sidebar.Item href="#">GE electric courses</Sidebar.Item>
                    <Sidebar.Item href="#">Free electric courses </Sidebar.Item>
                    <Sidebar.Item href="#">
                      Plan-specific Compulsory Courses
                    </Sidebar.Item>
                    <Sidebar.Item href="#">Compulsory Courses</Sidebar.Item>
                    <Sidebar.Item href="#">Major Elective Courses</Sidebar.Item>
                    <Sidebar.Item href="#">Minor Courses</Sidebar.Item>
                  </Sidebar.Collapse>
                  <div className="flex flex-col space-y-1 mt-7">
                    <div className="px-8 py-0.5 bg-slate-500"></div>
                  </div>

                  <Sidebar.Collapse label="undergraduate 59 (63)">
                    <Sidebar.Item href="#">Program</Sidebar.Item>
                    <Sidebar.Item href="#">required courses</Sidebar.Item>
                    <Sidebar.Item href="#">Core courses</Sidebar.Item>
                    <Sidebar.Item href="#">GE electric courses</Sidebar.Item>
                    <Sidebar.Item href="#">Free electric courses </Sidebar.Item>
                    <Sidebar.Item href="#">
                      Plan-specific Compulsory Courses
                    </Sidebar.Item>
                    <Sidebar.Item href="#">Compulsory Courses</Sidebar.Item>
                    <Sidebar.Item href="#">Major Elective Courses</Sidebar.Item>
                    <Sidebar.Item href="#">Minor Courses</Sidebar.Item>
                  </Sidebar.Collapse>
                  <div className="flex flex-col space-y-1 mt-7">
                    <div className="px-8 py-0.5 bg-slate-500"></div>
                  </div>

                  <Sidebar.Collapse label="Student portal">
                    <Sidebar.Item href="#">Score Report </Sidebar.Item>
                    <Sidebar.Item href="#">Assignment Submission</Sidebar.Item>
                    <Sidebar.Item href="#">Student Research</Sidebar.Item>
                    <Sidebar.Item href="#">Phone Number</Sidebar.Item>
                    <Sidebar.Item href="#">Line Chat Bot</Sidebar.Item>
                  </Sidebar.Collapse>
                  <div className="flex flex-col space-y-1 mt-7">
                    <div className="px-8 py-0.5 bg-slate-500"></div>
                  </div>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
        </div>
      </div>
    </>
  );
}
