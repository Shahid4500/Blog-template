import React from "react";
const OverviewSection = () => {
  return (
    <div  className="w-full lg:h-[420px]  flex flex-col items-center justify-center lg:mt-1 mt-14 ">
          <h2 className="lg:ml-56 mr-56  font-bold text-[25px] lg:text-[45px] text-overViewColor">Overview</h2>
          <div className="flex flex-col gap-8 lg:p-0 w-[335px] lg:w-[720px] justify-center items-end lg:ml-[33rem] text-overViewColor">
          <p>
            A professional wordsmith skilled in SEO writing with a knack for
            digital marketing. He writes to enlighten customers and knows how to
            tickle readers’ imaginations while connecting stories with sales
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          </div>
        </div>
  );
};

export default OverviewSection;
