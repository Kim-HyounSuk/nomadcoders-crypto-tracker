import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const Wrraper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 6rem;
  gap: 1rem;
`;

const Overview = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 10px;
`;
const OverviewItem = styled.div<{ isdecrease: boolean }>`
  display: flex;
  width: 100%;
  color: ${(props) => (props.isdecrease ? "red" : "green")};
  align-items: center;
  justify-content: space-between;
  font-size: 2.5rem;
`;

interface IUSD {
  ath_date: string;
  ath_price: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_1h: number;
  percent_change_1y: number;
  percent_change_6h: number;
  percent_change_7d: number;
  percent_change_12h: number;
  percent_change_15m: number;
  percent_change_24h: number;
  percent_change_30d: number;
  percent_change_30m: number;
  percent_from_price_ath: number;
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
}

const Price = () => {
  const {
    percent_change_15m,
    percent_change_30m,
    percent_change_1h,
    percent_change_6h,
    percent_change_12h,
    percent_change_24h,
  } = useOutletContext<IUSD>();
  return (
    <>
      <Wrraper>
        <Overview>
          <span>prev 15m...</span>
          <OverviewItem isdecrease={percent_change_15m < 0}>
            <div>{percent_change_15m}%</div>
            <div>{percent_change_15m > 0 ? "⬆" : "⬇"}</div>
          </OverviewItem>
        </Overview>
        <Overview>
          <span>prev 30m...</span>
          <OverviewItem isdecrease={percent_change_30m < 0}>
            <div>{percent_change_30m}%</div>
            <div>{percent_change_30m > 0 ? "⬆" : "⬇"}</div>
          </OverviewItem>
        </Overview>
        <Overview>
          <span>prev 1h...</span>
          <OverviewItem isdecrease={percent_change_1h < 0}>
            <div>{percent_change_1h}%</div>
            <div>{percent_change_1h > 0 ? "⬆" : "⬇"}</div>
          </OverviewItem>
        </Overview>
        <Overview>
          <span>prev 6h...</span>
          <OverviewItem isdecrease={percent_change_6h < 0}>
            <div>{percent_change_6h}%</div>
            <div>{percent_change_6h > 0 ? "⬆" : "⬇"}</div>
          </OverviewItem>
        </Overview>
        <Overview>
          <span>prev 12h...</span>
          <OverviewItem isdecrease={percent_change_12h < 0}>
            <div>{percent_change_12h}%</div>
            <div>{percent_change_12h > 0 ? "⬆" : "⬇"}</div>
          </OverviewItem>
        </Overview>
        <Overview>
          <span>prev 24h...</span>
          <OverviewItem isdecrease={percent_change_24h < 0}>
            <div>{percent_change_24h}%</div>
            <div>{percent_change_24h > 0 ? "⬆" : "⬇"}</div>
          </OverviewItem>
        </Overview>
      </Wrraper>
    </>
  );
};

export default Price;
