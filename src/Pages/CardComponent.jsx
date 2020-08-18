import React from "react";
import { Card } from "../main.styles";

export default function CardComponent(props) {
  const { mission_name = '', flight_number = '', mission_id = [], launch_year = '', launch_success = '', rocket = {}, links: { mission_patch } } = props.data;
  const { first_stage = {} } = rocket || {};
  const { cores = [] } = first_stage || {};
  const [{ land_success = '' }] = cores || [];

  const launchSuccessful = launch_success === null ? 'false' : launch_success.toString()
  const landSuccessful = land_success === null ? 'false' : land_success.toString()

  return (
    <Card>
      <div style={{ textAlign: 'center', backgroundColor: 'rgb(228 230 232)', width: '100%', height: '100%' }}>
        <img height="150px" width="150px" src={mission_patch}></img>
      </div>
      <h4 style={{ color: 'blue', minHeight: '40px' }}>{mission_name} #{flight_number}</h4>
      <div style={{ minHeight: '80px' }}>
        <p>
          <b>Mission IDs:</b>
          <ul>{
            mission_id.length > 0 &&
            mission_id.map(i => <li>{i}</li>) || <p><b>No Missions</b></p>
          }

          </ul>
        </p>
      </div>

      <p><b>Launch Year:</b> <span style={{ color: 'blue' }}>{launch_year}</span></p>
      <p><b>Successful Launch: {launchSuccessful}</b></p>
      <p><b>Successful Landing:{landSuccessful}</b></p>
    </Card>
  );
}
