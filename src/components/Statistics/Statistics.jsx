import React from "react";
import { StatisticsConteiner, Title, StatisticList, Label, Percentage, Item } from "./Statistics.styled";
export default function Statistics({ data }) {
  return (
    <StatisticsConteiner>
      <Title>Upload stats</Title>

      <StatisticList>
        {data.map((item) => (
          <Item id={item.id} key={item.id}>
            <Label>{item.label}: </Label>
            <Percentage >{item.percentage}%</Percentage >
          </Item>
        ))}
      </StatisticList>
    </StatisticsConteiner>
  );
}