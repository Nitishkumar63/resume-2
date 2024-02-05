import Layout from "../sheared/layout";

const Protofolio = () => {
  const ResumeData = [
    {
      href: "https://foxihotels.com/",
      path: "/project/foxihotels.png",
    },
    {
      href: "https://www.grandkalingahotel.com/",
      path: "/project/grandkalingahotel.png",
    },
    {
      href: "https://www.guarented.com/",
      path: "/project/guarented.png",
    },
    {
      href: "https://www.igp.com/",
      path: "/project/igp.png",
    },
    {
      href: "https://www.showmaqers.com/",
      path: "/project/showmaqers.png",
    },
    {
      href: "https://zieeinterior.com/",
      path: "/project/zieeinterior.png",
    },
  ];

  return (
    <Layout success="works">
      <div className="flex justify-center lg:mt-10 md:mt-2 lg:py-5">
        <div className="w-[1300px] bg-white rounded-xl p-[50px] shadow-md ">
          <div className="flex gap-x-5 items-center mb-10">
            <h1 className="text-4xl font-bold">Portfolio</h1>
            <hr className="w-[200px] border-[#EC3C63] border" />
          </div>

          <div className="w-full">
            <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3  gap-[50px]">
              {ResumeData.map((item, index) => (
                <div key={index} className="w-full">
                  <a target="_blank" href={item.href}>
                    <div
                      className="h-[250px] w-[350px] cursor-pointer project_1 rounded-lg"
                      style={{
                        backgroundImage: `url(${item.path})`,
                        backgroundSize: "cover",
                      }}
                    >
                         
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Protofolio;
