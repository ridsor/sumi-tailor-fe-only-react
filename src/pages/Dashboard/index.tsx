import { useState } from "react";
import Chart from "react-apexcharts";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

export default () => {
  const getMonthForChart = (): string[] => {
    const monthNow = new Date().getMonth();
    var monthName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ];
    var month = [];
    for (var i = 0; i <= 5; i++) {
      month.unshift(monthName[(monthNow + (12 - i)) % 12]);
    }

    return month;
  };

  const [chartOrder, setChartOrder] = useState({
    series: [
      {
        name: "Total Pesanan",
        data: [31, 40, 28, 51, 42, 109],
      },
    ],
    options: {
      title: {
        text: "Total Pesanan Perbulan",
      },
      colors: ["#445E36", "#E91E63", "#9C27B0"],
      fill: {
        colors: ["#B3CBA6", "#E91E63", "#9C27B0"],
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: getMonthForChart(),
      },
      dataLabels: {
        enabled: false,
      },
    },
  });

  const [chartIncome, setChartIncome] = useState({
    series: [
      {
        name: "Total Penghasilan",
        data: [400000, 1000000, 2000000, 1500000, 4200000, 1090000],
      },
    ],
    options: {
      title: {
        text: "Total Penghasilan Perbulan",
      },
      colors: ["#445E36", "#E91E63", "#9C27B0"],
      fill: {
        colors: ["#B3CBA6", "#E91E63", "#9C27B0"],
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: getMonthForChart(),
      },
      yaxis: {
        labels: {
          formatter: (value: string) => "Rp. " + value,
        },
      },
      dataLabels: {
        enabled: false,
      },
    },
  });

  return (
    <>
      <section>
        <div className="container max-w-full">
          <div className="p-4">
            <div className="flex flex-wrap gap-y-2 lg:gap-y-0 mb-3">
              <div className="w-full lg:w-4/12">
                <div className="flex items-center h-full">
                  <h1 className="font-semibold font-one text-3xl tracking-wide mb-3 lg:mb-0">
                    Dashboard
                  </h1>
                </div>
              </div>
              <div className="w-full lg:w-8/12">
                <div className="flex gap-2 h-full">
                  <div className="w-1/2 h-full">
                    <div className="h-full p-3 flex items-center justify-center bg-white border-[#d7d3cc] border w-full max-w-[300px] mx-auto rounded-xl">
                      <div>
                        <div className="text-center font-semibold">
                          Total Pesanan Hari Ini
                        </div>
                        <div className="flex justify-center items-center gap-2 flex-col lg:flex-row">
                          <div className="value font-bold text-xl lg:text-2xl">
                            99
                          </div>
                          <div className="font-bold text-success flex items-center gap-1">
                            <FaArrowUpLong className="text-[13px]" />
                            <span>+1%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 h-full">
                    <div className="flex items-center justify-center h-full p-3s bg-white border-[#d7d3cc] border w-full max-w-[300px] mx-auto rounded-xl">
                      <div>
                        <div className="text-center font-semibold">
                          Total Penghasilan Hari Ini
                        </div>
                        <div className="flex justify-center items-center gap-2 flex-col lg:flex-row">
                          <div className="value font-bold text-xl lg:text-2xl">
                            Rp. 1000000
                          </div>
                          <div className="font-bold text-fail flex items-center gap-1">
                            <FaArrowDownLong className="text-[13px]" />
                            <span>-1%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                <div className="w-full max-w-[500px] mx-auto">
                  <Chart
                    options={chartOrder.options}
                    series={chartOrder.series}
                    type="area"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="w-full max-w-[500px] mx-auto">
                  <Chart
                    options={chartIncome.options}
                    series={chartIncome.series}
                    type="area"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
