import { projects } from "@/data";

const Projects = () => {
  return (
    <div className="pt-20 w-full">
      <h1 className="heading text-3xl md:text-3xl lg:text-[43px]">
        Recent projects
      </h1>

      <div className="w-full mt-5 grid lg:grid-cols-1 grid-cols-1 gap-10 lg:ml-[68px] lg:mr-[155px]">
        {projects.map((card) => (
          <div
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            key={card.id}
          >
            <div className="flex lg:flex-col flex-col lg:items-center p-3 md:p-5 lg:p-2">
              <div className="lg:ms-5">
                <div className="flex justify-between items-center w-full">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                      {card.title}
                  </h1>
                  <a href={card.link} className="hover:underline flex text-right text-md md:text-2xl lg:text-[20px] font-semibold lg:mr-[153px]">
                    Link
                  </a>
                </div>
                <p className="text-start md:tracking-wider text-sm md:text-lg lg:text-lg mt-3 lg:mr-[135px]">
                  {card.des}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;