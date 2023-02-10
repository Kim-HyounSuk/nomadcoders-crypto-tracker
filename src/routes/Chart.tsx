import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Chart = () => {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexCharts
          type="candlestick"
          series={[
            {
              name: "price-data",
              data: data?.map((data) => [
                data.time_close * 1000,
                data.open,
                data.high,
                data.low,
                data.close,
              ]) as number[][],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            tooltip: {
              enabled: true,
            },
            chart: {
              width: 480,
              height: 480,
              toolbar: { show: false },
              background: "transparent",
            },
            grid: { show: false },
            yaxis: { show: false },
            xaxis: {
              type: "datetime",
              labels: {
                show: false,
                datetimeFormatter: { month: "MMM 'yy" },
              },
              axisTicks: { show: false },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
