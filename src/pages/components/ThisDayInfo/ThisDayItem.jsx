import React from "react";
import s from "./ThisDayInfo.module.scss";
import { IndicatorSvgSelector } from "../../../assets/icon/IndicatorSvgSelector/IndicatorSvgSelector";

const ThisDayItem = (props) => {
  const { icon_id, name, value } = props.item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={s.indicator_name}>{name}</div>
      <div className={s.indicator_value}>{value}</div>
    </div>
  );
};

export default ThisDayItem;