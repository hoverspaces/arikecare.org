const defaultClassName = "h-4";

export const LocationIcon = ({ className, style }) => (
  <svg
    className={`${defaultClassName} ${className}`}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 1024 1024"
  >
    <path
      d="M512 0C278.8 0 89 189.7 89 423c0 228.6 391.5 580.5 408.1 595.4 4.2 3.8 9.5 5.6 14.8 5.6s10.6-1.9 14.8-5.6C543.5 1003.5 935 651.6 935 423 935 189.7 745.2 0 512 0z m0 971.5C440.3 904.8 133.6 608.4 133.6 423c0-208.7 169.8-378.4 378.4-378.4S890.4 214.3 890.4 423c0 185.3-306.7 481.8-378.4 548.5z"
      fill=""
    />
    <path d="M512 200.3c-122.7 0-222.6 99.9-222.6 222.6S389.3 645.6 512 645.6 734.6 545.7 734.6 423 634.7 200.3 512 200.3z m0 400.7c-98.2 0-178.1-79.9-178.1-178.1s79.9-178 178.1-178S690.1 324.8 690.1 423 610.2 601 512 601z" />
  </svg>
);

export const MenuIcon = ({ style, className = defaultClassName }) => (
  <svg
    className={className}
    style={style}
    fill="currentColor"
    viewBox="0 0 20 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z" />
  </svg>
);

export const CrossIcon = ({ className, style }) => (
  <svg
    className={className ?? defaultClassName}
    style={style}
    fill="currentColor"
    viewBox="0 0 9 9"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.62664 3.99995L8.86664 0.759953C8.93945 0.674931 8.9775 0.565563 8.97318 0.453707C8.96886 0.341851 8.92249 0.235745 8.84334 0.156592C8.76418 0.0774389 8.65808 0.0310688 8.54622 0.0267482C8.43436 0.0224277 8.325 0.0604751 8.23997 0.133287L4.99997 3.37329L1.75997 0.128842C1.67495 0.0560305 1.56558 0.0179836 1.45373 0.0223041C1.34187 0.0266246 1.23577 0.0729944 1.15661 0.152148C1.07746 0.231301 1.03109 0.337407 1.02677 0.449263C1.02245 0.561119 1.0605 0.670486 1.13331 0.755509L4.37331 3.99995L1.12886 7.23995C1.08234 7.2798 1.04455 7.32883 1.01787 7.38397C0.991198 7.43911 0.976206 7.49917 0.973842 7.56037C0.971478 7.62158 0.981791 7.68262 1.00414 7.73965C1.02648 7.79669 1.06037 7.84848 1.10369 7.8918C1.147 7.93511 1.1988 7.969 1.25583 7.99135C1.31286 8.01369 1.3739 8.02401 1.43511 8.02164C1.49632 8.01928 1.55638 8.00429 1.61152 7.97761C1.66666 7.95093 1.71569 7.91315 1.75553 7.86662L4.99997 4.62662L8.23997 7.86662C8.325 7.93943 8.43436 7.97748 8.54622 7.97316C8.65808 7.96884 8.76418 7.92247 8.84334 7.84332C8.92249 7.76416 8.96886 7.65806 8.97318 7.5462C8.9775 7.43434 8.93945 7.32498 8.86664 7.23995L5.62664 3.99995Z" />
  </svg>
);

export const PhoneIcon = ({ className, style }) => (
  <svg
    className={className ?? defaultClassName}
    style={style}
    fill="currentColor"
    viewBox="0 0 473.806 473.806"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zm-154.2-286.1c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zm217.2 96.3c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z"></path>
  </svg>
);

export const EnvolopIcon = ({ className, style }) => (
  <svg
    className={className ?? defaultClassName}
    style={style}
    fill="currentColor"
    viewBox="0 0 490 490"
  >
    <path
      d="M479.574,78.191H10.425c-0.071,0-0.141,0.007-0.211,0.008l0.001,0.003C4.556,78.315,0,82.925,0,88.617v312.766
	c0,5.762,4.669,10.426,10.425,10.426h469.149c5.758,0,10.426-4.664,10.426-10.426V88.617C490,82.854,485.332,78.191,479.574,78.191z
	 M454.407,99.043l-138.581,138.58c-0.002,0.002-0.004,0.003-0.006,0.005L245,308.449l-70.82-70.821
	c-0.004-0.004-0.008-0.007-0.013-0.012L35.594,99.043H454.407z M20.851,113.784l131.215,131.215L20.851,376.215V113.784z
	 M35.594,390.957l131.215-131.216l70.821,70.821c3.629,3.629,9.303,5.439,14.743,0l70.82-70.82l131.215,131.215H35.594z
	 M469.149,376.213L337.935,244.999l131.214-131.214V376.213z"
    />
  </svg>
);

export const ShareIcon = ({ className, style }) => (
  <svg
    className={className ?? defaultClassName}
    style={style}
    fill="currentColor"
    viewBox="0 0 481.6 481.6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M381.6 309.4c-27.7 0-52.4 13.2-68.2 33.6l-132.3-73.9c3.1-8.9 4.8-18.5 4.8-28.4 0-10-1.7-19.5-4.9-28.5l132.2-73.8c15.7 20.5 40.5 33.8 68.3 33.8 47.4 0 86.1-38.6 86.1-86.1S429 0 381.5 0s-86.1 38.6-86.1 86.1c0 10 1.7 19.6 4.9 28.5l-132.1 73.8c-15.7-20.6-40.5-33.8-68.3-33.8-47.4 0-86.1 38.6-86.1 86.1s38.7 86.1 86.2 86.1c27.8 0 52.6-13.3 68.4-33.9l132.2 73.9c-3.2 9-5 18.7-5 28.7 0 47.4 38.6 86.1 86.1 86.1s86.1-38.6 86.1-86.1-38.7-86.1-86.2-86.1zm0-282.3c32.6 0 59.1 26.5 59.1 59.1s-26.5 59.1-59.1 59.1-59.1-26.5-59.1-59.1 26.6-59.1 59.1-59.1zM100 299.8c-32.6 0-59.1-26.5-59.1-59.1s26.5-59.1 59.1-59.1 59.1 26.5 59.1 59.1-26.6 59.1-59.1 59.1zm281.6 154.7c-32.6 0-59.1-26.5-59.1-59.1s26.5-59.1 59.1-59.1 59.1 26.5 59.1 59.1-26.5 59.1-59.1 59.1z"></path>
  </svg>
);
export const InstagramIcon = ({ style, className = defaultClassName }) => (
  <svg
    className={className}
    style={style}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.60063 0.181641H14.3991C17.3873 0.181641 19.8183 2.61264 19.8182 5.60057V14.3991C19.8182 17.387 17.3873 19.818 14.3991 19.818H5.60063C2.6127 19.818 0.181816 17.3871 0.181816 14.3991V5.60057C0.181816 2.61264 2.6127 0.181641 5.60063 0.181641ZM14.3993 18.0758C16.4266 18.0758 18.0761 16.4265 18.0761 14.3991H18.0759V5.60057C18.0759 3.5733 16.4265 1.92387 14.3991 1.92387H5.60063C3.57336 1.92387 1.92405 3.5733 1.92405 5.60057V14.3991C1.92405 16.4265 3.57336 18.0759 5.60063 18.0758H14.3993ZM4.8576 9.99991C4.8576 7.16403 7.16464 4.85693 10.0005 4.85693C12.8363 4.85693 15.1433 7.16403 15.1433 9.99991C15.1433 12.8357 12.8363 15.1426 10.0005 15.1426C7.16464 15.1426 4.8576 12.8357 4.8576 9.99991ZM6.62798 9.99982C6.62798 11.8591 8.14074 13.3717 10 13.3717C11.8593 13.3717 13.372 11.8591 13.372 9.99982C13.372 8.1404 11.8594 6.62772 10 6.62772C8.14062 6.62772 6.62798 8.1404 6.62798 9.99982Z"
    />
  </svg>
);

export const FacebookIcon = ({ style, className = defaultClassName }) => (
  <svg
    className={className}
    style={style}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6352 20.7275V12.7662H16.3585L16.7671 9.66268H13.6352V7.6815C13.6352 6.78323 13.8885 6.17107 15.2032 6.17107L16.8774 6.1704V3.39446C16.5878 3.35756 15.594 3.27295 14.4373 3.27295C12.0219 3.27295 10.3683 4.71903 10.3683 7.37413V9.66268H7.63672V12.7662H10.3683V20.7275H13.6352Z"
    />
    <mask
      id="mask0_1_356"
      maskUnits="userSpaceOnUse"
      x="7"
      y="3"
      width="10"
      height="18"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6352 20.7275V12.7662H16.3585L16.7671 9.66268H13.6352V7.6815C13.6352 6.78323 13.8885 6.17107 15.2032 6.17107L16.8774 6.1704V3.39446C16.5878 3.35756 15.594 3.27295 14.4373 3.27295C12.0219 3.27295 10.3683 4.71903 10.3683 7.37413V9.66268H7.63672V12.7662H10.3683V20.7275H13.6352Z"
      />
    </mask>
    <g mask="url(#mask0_1_356)"></g>
  </svg>
);

export const TwitterIcon = ({ style, className = defaultClassName }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 19 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.8179 2.1461C18.1353 2.44856 17.4029 2.65368 16.6334 2.74525C17.4191 2.27474 18.0206 1.52844 18.3056 0.641891C17.5686 1.07762 16.7551 1.39401 15.8882 1.56553C15.1941 0.825012 14.2067 0.36377 13.1116 0.36377C11.0105 0.36377 9.30698 2.06731 9.30698 4.16719C9.30698 4.46501 9.34058 4.75589 9.40549 5.03404C6.2441 4.87525 3.44079 3.36062 1.56458 1.05907C1.23661 1.61998 1.05004 2.27356 1.05004 2.97122C1.05004 4.29119 1.72219 5.45586 2.74201 6.13725C2.11852 6.11641 1.53213 5.94489 1.01876 5.6598V5.70732C1.01876 7.54992 2.33061 9.08774 4.07007 9.43774C3.75137 9.5235 3.41531 9.57101 3.06764 9.57101C2.82198 9.57101 2.5844 9.54668 2.35146 9.50032C2.83585 11.0126 4.24043 12.1124 5.90458 12.1426C4.60316 13.1624 2.96219 13.7685 1.17985 13.7685C0.872764 13.7685 0.570279 13.7499 0.272461 13.7163C1.95631 14.7976 3.95537 15.428 6.10392 15.428C13.1023 15.428 16.9278 9.63129 16.9278 4.6041L16.915 4.11159C17.6625 3.57847 18.3091 2.90865 18.8179 2.1461Z"
    />
  </svg>
);

export const GoogleIcon = ({ style, className = defaultClassName }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

export const PlayIcon = ({ style, className = defaultClassName }) => (
  <svg
    className={className}
    style={style}
    fill="currentColor"
    viewBox="0 0 260 180"
  >
    <path
      d="M220,2H40C19.01,2,2,19.01,2,40v100c0,20.99,17.01,38,38,38h180c20.99,0,38-17.01,38-38V40C258,19.01,240.99,2,220,2z
	 M102,130V50l68,40L102,130z"
    />
  </svg>
);
