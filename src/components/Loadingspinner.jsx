import {css} from "@emotion/react";
import {useState} from "react";

import PropagateLoader from "react-spinners/PropagateLoader";


const override = css`

display: block;
margin: 0 auto;
border-color: red;

`;


export default function Loadingspinner() {

const [loading] = useState(true);

return (
  <div className="sweet-loading">

    

    <PropagateLoader color={"black"} loading={loading} css={override} size={15} />

  </div>
);
}
