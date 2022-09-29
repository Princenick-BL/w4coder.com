import styled from "styled-components";

export const ChartWrapper = styled.div`
  width: 80vw;
  margin: 0 auto;
`;

export const PieChartWrapper = styled.div`
  width: 48vw;
  margin: 0 auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;

  th,
  td {
    border-top: 1px solid #ddd;
    padding: 1rem;
  }

  th {
  }

  .left-align {
    text-align: left;
  }
  .center-align{
    text-align : center;
  }
`;

export const colors = [
  "#fcba03",
  "#fa8c5c",
  "#9fc934",
  "#60d17e",
  "#45afed",
  "#7c5cdb",
  "#ce5cdb",
  "#db5c97",
];

export const ChartTitle = styled.h5`
  color: var(--color-primary-light);
  font-size: 1rem;
`;

export const Subtitle = styled.h3`
  color: #35213d;
  padding-bottom: 20px;
`;

export const ReportWrapper = styled.div`
  padding: 0;
  border-bottom: 1px solid #f0eee9;
`;

export const LastRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
`;

export const DatepickerRow = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const DatepickerWrapper = styled.div`
  color: #35213d;
  font-weight: 500;
  .picker {
    width: fit-content;
    border-radius: 50px;
    background-color: #fff;
    text-align: center;
    line-height: 20px;
    font-size: 1rem;
    border : none;
    cursor : pointer;
    outline : none;
    padding: .3rem;
  }
`;

export const DatepickerLabel = styled.label`
  padding-right: 1rem;
  padding-left : 1rem;
  color : #fff
`;
