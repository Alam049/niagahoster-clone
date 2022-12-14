import { useEffect, useState } from "react";
import { ANIMATION_DURATION } from ".";
import { HamburgerCloseButton } from "./Buttons/hamburger-close";
import {HiOutlineShoppingCart} from "react-icons/hi"

export function Navbar({ onToggleClick, isExpanded: isExpandedFromParent }) {
  const [isExpanded, setIsExpanded] = useState(() => isExpandedFromParent);
  const [whiteBackground, setWhiteBackground] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsExpanded(isExpandedFromParent), 0);
    setTimeout(
      () => setWhiteBackground(!isExpandedFromParent),
      ANIMATION_DURATION
    );
  }, [isExpandedFromParent]);

  return (
    <div
      className={`  ${
        whiteBackground || "bg-[#f5faff]"
      }  px-4 pt-2 pb-1 flex items-center justify-between lg:justify-around `}
    >
      {/* LOGO */}
      <svg
        fill="blue"
        height="25"
        width="255"
        xmlns="http://www.w3.org/2000/svg"
        className="lg:hidden"
      >
        <path
     d="m 22.996,0.86523651 a 12.369,12.369 0 0 0 -9.66,0.24199999 11.847,11.847 0 0 0 -3.285,2.24 L 1.928,11.167237 A 6.219,6.219 0 0 0 0,15.648237 c 0,3.475 2.97,6.334 6.578,6.334 h 0.003 c 0.08,0 0.159,0 0.239,-0.004 -1.94,-0.686 -3.238,-2.474 -3.238,-4.464 0,-1.3 0.554,-2.545 1.532,-3.442 l 6.792,-6.5370005 0.72,-0.697 0.245,-0.235 0.277,-0.267 c 0.169,-0.16 0.344,-0.314 0.525,-0.46 2.807,-2.36 6.411,-3.658 10.137,-3.654 0.607,0 1.214,0.034 1.817,0.102 A 11.917,11.917 0 0 0 22.996,0.86623651 Z M 50.523,3.9552365 C 49.164,0.73523651 45.296,-0.83876349 41.951,0.46523651 l -0.084,0.034 A 6.581,6.581 0 0 0 39.772,1.8572365 l -4.97,4.785 -0.717,0.688 -0.066,0.06 c -0.86,0.762 -2.21,0.736 -3.036,-0.06 l -3.812,-3.67 a 14.907,14.907 0 0 0 -8.577,0.563 7.589,7.589 0 0 1 5.151,2.111 l 6.593,6.3470005 c 1.206,1.158 3.188,1.158 4.394,0 L 42.87,4.8452365 a 2.22,2.22 0 0 1 0.254,-0.21 5.053,5.053 0 0 1 3.212,-1.143 c 2.088,0 3.961,1.275 4.656,3.17 a 6.226,6.226 0 0 0 -0.47,-2.708 h 0.001 z m -4.184,0.595 c -0.222,0 -0.444,0.018 -0.663,0.055 0.106,0.071 0.205,0.15 0.297,0.239 0.411,0.395 0.642,0.933 0.642,1.493 0,0.56 -0.23,1.097 -0.642,1.493 l -8.087,7.7880005 -0.052,0.05 c -0.143,0.137 -0.29,0.268 -0.442,0.392 -2.826,2.428 -6.485,3.769 -10.272,3.764 -0.565,0 -1.13,-0.029 -1.692,-0.087 3.331,2.382 7.723,2.925 11.57,1.428 a 11.795,11.795 0 0 0 3.934,-2.511 l 7.892,-7.594 0.25,-0.242 c 0.089,-0.085 0.175,-0.172 0.258,-0.261 a 3.615,3.615 0 0 0 0.843,-2.3100005 c 0,-2.027 -1.732,-3.695 -3.837,-3.695 H 46.336 Z M 32.456,17.777237 a 7.62,7.62 0 0 1 -5.222,-2.111 L 20.673,9.3492365 a 3.22,3.22 0 0 0 -2.221,-0.905 3.15,3.15 0 0 0 -2.202,0.876 l -1.936,1.8650005 -0.815,0.784 -1.892,1.823 -0.785,0.756 -1.296,1.25 -1.159,1.117 -0.232,0.224 c -0.411,0.396 -0.97,0.619 -1.551,0.619 -0.582,0 -1.14,-0.223 -1.551,-0.619 a 2.104,2.104 0 0 1 -0.277,-0.325 c -0.046,0.23 -0.07,0.463 -0.07,0.697 0,2.027 1.732,3.695 3.837,3.697 a 3.9,3.9 0 0 0 2.611,-0.988 c 0.017,-0.015 0.034,-0.03 0.05,-0.047 l 0.05,-0.047 0.067,-0.064 2.138,-2.059 3.474,-3.345 c 0.854,-0.804 2.24,-0.796 3.084,0.017 l 3.885,3.74 c 2.858,0.634 5.851,0.412 8.574,-0.638 z"
          // bisa ganti2 logo, asal baris fill ini tetep ada
          fill={!isExpandedFromParent && whiteBackground ? "white" : "#007aff"}
        />
      </svg>

      <svg
        fill="blue"
        height="25"
        width="255"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden lg:block"
      >
        <path
     d="m 24.327,0.95682202 a 12.574,12.574 0 0 0 -10.22,0.26599998 12.62,12.62 0 0 0 -3.475,2.474 l -8.5919998,8.635 A 7.014,7.014 0 0 0 2.1769317e-7,17.278822 c 0,3.837 3.14199998230683,6.994 6.95999998230683,6.994 h 0.002 c 0.084,0 0.168,0 0.252,-0.005 a 5.264,5.264 0 0 1 -1.804,-8.73 l 7.1859998,-7.218 0.762,-0.77 0.258,-0.259 0.292,-0.295 c 0.18,-0.177 0.365,-0.347 0.556,-0.508 a 16.236,16.236 0 0 1 10.724,-4.034 c 0.642,0 1.284,0.037 1.922,0.112 A 12.463,12.463 0 0 0 24.326,0.95582202 Z M 53.447,4.366822 C 52.009,0.81282202 47.917,-0.92617798 44.378,0.51482202 l -0.089,0.037 A 6.945,6.945 0 0 0 42.073,2.050822 l -5.256,5.284 -0.759,0.76 c -0.023,0.022 -0.046,0.045 -0.07,0.066 a 2.321,2.321 0 0 1 -3.21,-0.066 l -4.034,-4.053 a 15.144,15.144 0 0 0 -9.072,0.622 7.857,7.857 0 0 1 5.448,2.331 l 6.974,7.008 a 3.295,3.295 0 0 0 4.648,0 l 8.61,-8.652 c 0.083,-0.084 0.173,-0.161 0.268,-0.232 a 5.209,5.209 0 0 1 3.397,-1.262 5.235,5.235 0 0 1 4.925,3.502 7.004,7.004 0 0 0 -0.497,-2.991 h 0.002 z m -4.426,0.658 c -0.236,0 -0.47,0.02 -0.702,0.061 a 2.336,2.336 0 0 1 0.314,3.56 l -8.555,8.6 -0.055,0.055 a 7.954,7.954 0 0 1 -0.467,0.434 16.246,16.246 0 0 1 -10.867,4.156 c -0.597,0 -1.195,-0.032 -1.789,-0.097 a 12.565,12.565 0 0 0 12.88,1.295 12.467,12.467 0 0 0 3.52,-2.49 l 8.349,-8.386 0.265,-0.266 a 7.41,7.41 0 0 0 0.272,-0.29 4.091,4.091 0 0 0 0.892,-2.55 c 0,-2.238 -1.833,-4.08 -4.059,-4.08 h -0.002 z m -14.687,14.605 a 7.887,7.887 0 0 1 -5.524,-2.331 l -6.941,-6.975 a 3.333,3.333 0 0 0 -2.35,-1 3.26,3.26 0 0 0 -2.329,0.968 l -2.047,2.06 -0.862,0.865 -2.002,2.013 -0.83,0.835 -1.372,1.381 -1.2259998,1.232 -0.245,0.248 a 2.315,2.315 0 0 1 -3.575,-0.359 4.1,4.1 0 0 0 -0.073,0.77 c 0,2.238 1.832,4.08 4.059,4.082 a 4.045,4.045 0 0 0 2.7619998,-1.091 l 0.053,-0.052 0.053,-0.052 0.07,-0.07 2.262,-2.274 3.675,-3.693 a 2.322,2.322 0 0 1 3.262,0.018 l 4.11,4.13 c 3.023,0.7 6.19,0.454 9.07,-0.705 z m 39.986,-16.555 v 8.91 l -9.146,-8.985 h -1.68 v 18.251 h 4.78 v -8.934 l 9.118,8.96 h 1.658 v -18.202 z m 14.727,18.212 v -18.178 h -4.583 v 4.05 h 0.008 v 10.05 h -0.008 v 4.076 h 4.583 z m 13.575,-18.433 h -1.988 l -8.14,17.735 -0.311,0.675 h 4.83 l 1.06,-2.285 h 7.132 l 1.06,2.285 h 4.831 l -0.309,-0.675 z m -3.048,12.152 2.041,-4.777 2.092,4.777 z m 29.91,-4.104 h -8.55 v 4.024 h 3.845 c -0.827,1.74 -2.016,2.234 -3.876,2.234 -2.739,0 -4.496,-1.974 -4.496,-4.986 0,-2.779 1.576,-5.062 4.496,-5.062 1.834,0 3.023,0.623 3.772,2.181 h 4.548 c -0.879,-4.517 -4.677,-6.413 -8.32,-6.44 -4.599,0 -9.25,3.117 -9.279,9.326 0.026,6.205 4.676,9.295 9.279,9.295 3.333,0 6.769,-1.454 8.062,-5.245 0.619,-1.769 0.619,-3.51 0.519,-5.327 z m 11.51,-8.048 h -1.989 l -8.14,17.735 -0.309,0.675 h 4.83 l 1.06,-2.285 h 7.132 l 1.06,2.285 h 4.831 l -0.312,-0.675 z m -3.049,12.152 2.041,-4.777 2.093,4.777 z m 23.964,-11.896 v 6.594 h -5.581 v -6.594 h -4.73 v 18.177 h 4.73 v -7.296 h 5.581 v 7.296 h 4.728 v -18.177 z m 8.185,9.096 c 0,12.593 18.552,12.593 18.552,0 0,-12.56799998 -18.552,-12.56799998 -18.552,0 z m 4.754,0 c 0,-6.544 9.069,-6.544 9.069,0 a 4.552,4.552 0 0 1 -9.069,0 z m 23.593,-1.753 c -1.629,-0.182 -2.972,-0.466 -2.869,-1.843 0.155,-2.156 5.013,-2.364 5.013,0.052 h 4.392 c 0.103,-7.84299998 -13.952,-7.84299998 -13.797,0 0.051,3.946 2.636,5.296 6.561,5.582 1.808,0.104 3.307,0.39 3.307,1.665 0,2.131 -5.658,2.103 -5.658,-0.208 h -4.471 c -0.102,7.998 14.625,7.868 14.625,0.234 0.002,-4.55 -3.512,-5.095 -7.103,-5.482 z m 8.715,-7.343 v 4.154 h 4.441 v 14.023 h 4.573 v -14.023 h 4.418 v -4.154 z m 20.837,14.048 v -3.194 h 6.149 v -4.13 h -6.149 v -2.57 h 6.693 v -4.154 h -11.292 v 18.177 h 11.523 v -4.13 l -6.924,0.002 z m 22.667,-2.311 c 4.573,-3.116 3.281,-11.71 -3.825,-11.737 h -7.933 v 18.177 h 4.626 v -5.35 h 2.404 l 3.101,5.35 h 5.581 l -0.414,-0.675 z m -3.825,-3.038 h -3.307 v -4.545 c 1.086,0 2.221,-0.026 3.307,0 2.636,0.026 2.506,4.545 0,4.545 z"
          // bisa ganti2 logo, asal baris fill ini tetep ada
          fill={!isExpandedFromParent && whiteBackground ? "white" : "#007aff"}
        />
      </svg>

      <div className="flex items-center  gap-4  ">
      <div className="w-5">
        <HiOutlineShoppingCart  color={!isExpandedFromParent && whiteBackground ? 'white' : "#007aff"} fontSize="1.5em" /> 
      </div>

      <button
        className={`${
          !isExpandedFromParent && whiteBackground
            ? "text-white border-white border-[1px]"
            : "text-[#007aff] border-[#007aff]"
        } border-[1px] rounded-full px-8 py-2 hover:bg-[#ff9800] hover:text-white hover:border-transparent font-medium`}
      >
        Login
      </button>

      <HamburgerCloseButton isOpen={isExpanded} onClick={onToggleClick} />
      </div>
    </div>
  );
}
