import Image from "next/image";
import Carousel from "../../components/Carousel";
export default function Home() {
  const images = [
    "/header-banner.svg",
    "/header-banner.svg",
    "/header-banner.svg",
    "/header-banner.svg",
  ];
  return (
    <div>
      <div className="relative h-full">
        <Image
          src={"/header-banner.svg"}
          width="0"
          height="0"
          sizes="100vw"
          alt="banner"
          className="w-full h-auto"
        />
      </div>

      <div className="mx-auto max-w-7xl px-2 mt-4 sm:px-6 pt-5">
        <div className="flex">
          <div className="flex flex-col space-y-2">
            <div className="px-8 py-0.5 bg-black w-full "></div>
            <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
              Academic
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-2 mt-4 sm:px-6 pt-5">
        <div className="flex flex-row">
          <div className="basis-1/3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg min-h-full">
              <Image
                src={"/undergraduate.svg"}
                width="0"
                height="0"
                sizes="100vw"
                alt="banner"
                className="w-full h-full"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  The Computer Science Department admits students to an
                  undergraduate program that you are guaranteed to find rigorous
                  and dedicated to the real-world training and practical problem
                  solving that has been the hallmark of computer science
                  education at CMU since its inception.
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg min-h-full">
              <Image
                src={"/master.svg"}
                width="0"
                height="0"
                sizes="100vw"
                alt="banner"
                className="w-full h-full"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  We offer three distinct master’s options for students who have
                  completed (or will complete) a bachelor’s degree and want to
                  extend their training in computer science. Our largest program
                  is the M.S. in Computer Science, which allows students to work
                  with their academic advisor to create their own course of
                  study.
                </p>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg min-h-full">
              <Image
                src={"/master.svg"}
                width="0"
                height="0"
                sizes="100vw"
                alt="banner"
                className="w-full h-full"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Chiang Mai University's Ph.D. in Computer Science is, above
                  all, a research degree. We certify that our students have a
                  broad foundation and awareness of core concepts in computer
                  science, have advanced the field by performing significant
                  original research and have reported that work in a scholarly
                  fashion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-2 mt-4 sm:px-6 pt-5">
        <div className="flex flex-row space-x-8">
          <div className="basis-2/3 ">
            <div className="flex pb-5">
              <div className="flex flex-col space-y-2 mt-7">
                <div className="px-8 py-0.5 bg-black w-full "></div>
                <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                  NEWS
                </p>
              </div>
              <div className="ml-auto pt-12 mt-2 ">
                <div className="ml-96">
                  more news
                  <br />
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <Carousel loop>
                {images.map((src, i) => {
                  return (
                    <div className="relative h-96 flex-[0_0_100%]" key={i}>
                      <Image
                        src={src}
                        fill
                        className="object-cover"
                        alt="asdasdasdasdad"
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
          <div className="basis-1/3 ">
            <div className="flex pb-5">
              <div className="flex flex-col space-y-2 mt-7">
                <div className="px-8 py-0.5 bg-black w-full "></div>
                <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
                  EVENTS
                </p>
              </div>
              <div className="ml-auto pt-12 mt-2">
                <div className="">
                  more news
                  <br />
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
