import styled from "styled-components";

export default styled.div`
  margin-right: auto; /* 1 */
  margin-left: auto; /* 1 */

  max-width: 1200px; /* 2 */

  padding-right: 30px; /* 3 */
  padding-left: 30px; /* 3 */

  margin-bottom: ${(props) => (props.footer ? "0px" : "50px")};
  margin-top: ${(props) => (props.listing ? "50px" : "0px")};
`;
