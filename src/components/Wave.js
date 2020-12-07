import styled from "styled-components";
import { motion } from "framer-motion";

export const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 1440 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1, strokeOpacity: 1 }}
        animate={{
          pathLength: 1,
          pathOffset: 0,
          strokeOpacity: 0.3,
        }}
        transition={{ duration: 1 }}
        d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
        stroke="#DB4249"
        strokeOpacity="0.5"
        strokeWidth="10"
      />
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1, strokeOpacity: 1 }}
        animate={{ pathLength: 1, pathOffset: 0, strokeOpacity: 0.3 }}
        transition={{ duration: 1 }}
        d="M0.253812 128.631C692.5 -327 778 710 1443.81 128.76"
        stroke="#4ED3FC"
        strokeOpacity="0.5"
        strokeWidth="10"
      />
    </WaveSvg>
  );
};

export const Wave2 = () => {
  return (
    <WaveSvg
      width="1440"
      height="316"
      viewBox="0 0 1440 316"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1, strokeOpacity: 1 }}
        animate={{ pathLength: 1, pathOffset: 0, strokeOpacity: 0.3 }}
        transition={{ duration: 1 }}
        d="M-21.5 14.7393C588.535 573.652 937.322 -41.3803 1443.5 15.5"
        stroke="#4ED3FC"
        strokeOpacity="0.5"
        strokeWidth="10"
      />
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1, strokeOpacity: 1 }}
        animate={{ pathLength: 1, pathOffset: 0, strokeOpacity: 0.3 }}
        transition={{ duration: 1 }}
        d="M-20 78.8772C629.746 -191.133 783.061 660.394 1448.87 81"
        stroke="#DB4249"
        strokeOpacity="0.5"
        strokeWidth="10"
      />
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: -1;
`;
