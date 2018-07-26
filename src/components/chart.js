// This is not needing data from redux so it does not need to be a container
// It is the reusable data UI for the rows in the weather_list Container
// I do not need to make any use of state inside this component -> it only needs to be a functional component.
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines svgHeight={120} width={140} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)}</div>
    </div>
  );
}