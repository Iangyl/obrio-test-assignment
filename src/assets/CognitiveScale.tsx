import React, { memo, SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="250"
    height="250"
    viewBox="0 0 250 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M126 191C134.837 191 142 198.163 142 207C142 215.837 134.837 223 126 223C117.164 223 110 215.837 110 207C110 198.163 117.164 191 126 191Z"
      fill="#BBC8EC"
    />
    <path
      d="M238.827 169.004L16.0539 192.419C14.406 192.592 13.2107 194.068 13.3839 195.716C13.5571 197.364 15.0331 198.559 16.681 198.386L239.454 174.971C241.101 174.798 242.297 173.322 242.124 171.674C241.951 170.026 240.474 168.831 238.827 169.004Z"
      fill="#9BABD9"
    />
    <path
      d="M167.388 78C176.555 78.001 185.009 82.901 189.5 90.819C193.992 82.901 202.446 78.001 211.613 78C225.633 78 237 90.884 237 104.774C237 139.66 189.5 164 189.5 164C189.5 164 142 139.66 142 104.774C142 90.884 153.367 78 167.388 78Z"
      fill="#DEE4F8"
    />
    <path
      d="M151.079 51.8109C148.24 51.8109 145.948 49.5191 145.948 46.6805C145.948 46.361 145.698 46.1104 145.379 46.1104C145.059 46.1104 144.808 46.361 144.808 46.6805C144.808 49.5191 142.516 51.8109 139.678 51.8109C139.358 51.8109 139.107 52.0615 139.107 52.381C139.107 52.6997 139.358 52.9511 139.678 52.9511C142.516 52.9511 144.808 55.2421 144.808 58.0808C144.808 58.4003 145.059 58.6516 145.379 58.6516C145.698 58.6516 145.948 58.4003 145.948 58.0808C145.948 55.2421 148.24 52.9511 151.079 52.9511C151.398 52.9511 151.649 52.6997 151.649 52.381C151.649 52.0615 151.398 51.8109 151.079 51.8109Z"
      fill="#9BABD9"
    />
    <path
      d="M108.811 28.3032H108.117C107.702 28.3032 107.356 28.6025 107.356 29.0021C107.01 33.6945 101.887 38.4862 97.0065 38.919C96.6264 38.9522 96.3145 39.2845 96.3145 39.651V40.349C96.3145 40.7486 96.6264 41.0478 97.0416 41.081C101.887 41.4143 106.837 46.2393 107.356 50.9316C107.391 51.3644 107.771 51.6968 108.256 51.6968H108.741C109.226 51.6968 109.606 51.3644 109.641 50.8985C110.056 45.6408 114.452 41.3149 119.921 41.0478C120.371 41.0157 120.683 40.6823 120.683 40.2495V39.651C120.683 39.2183 120.337 38.8849 119.921 38.8518C114.417 38.5857 109.987 34.2267 109.641 28.9017C109.572 28.6025 109.226 28.3032 108.811 28.3032Z"
      fill="#DEE4F8"
    />
    <path
      d="M49.9648 87C45.1988 87 41.3348 90.868 41.3348 95.639C41.3348 95.888 41.3478 96.133 41.3688 96.376C40.5148 96.189 39.6298 96.089 38.7198 96.089C31.8818 96.089 26.3398 101.638 26.3398 108.482C26.3398 110.015 26.6198 111.482 27.1278 112.838C20.8098 113.399 15.8558 118.709 15.8558 125.179C15.8558 129.286 17.8528 132.924 20.9258 135.18C17.8508 136.197 15.4778 138.912 15.0618 142.344C14.5088 146.905 17.6148 151.066 22.0718 151.881C20.6868 153.94 19.8788 156.42 19.8788 159.089C19.8788 166.227 25.6588 172.014 32.7898 172.014C35.1088 172.014 37.2828 171.398 39.1648 170.326C40.0618 174.824 44.0278 178.214 48.7838 178.214C54.2018 178.214 58.5948 173.817 58.5948 168.393V95.639C58.5948 90.868 54.7308 87 49.9648 87Z"
      fill="#DEE4F8"
    />
    <path
      d="M48.1708 147.306C47.8898 146.65 47.1288 146.344 46.4718 146.625C44.4918 147.47 42.8578 148.975 41.8508 150.871C39.9068 150.412 37.8738 150.584 36.0018 151.384C35.3438 151.665 35.0388 152.426 35.3188 153.083C35.6008 153.741 36.3618 154.045 37.0188 153.764C38.6968 153.047 40.5528 153.027 42.2448 153.705C43.9378 154.383 45.2628 155.679 45.9788 157.356C46.1568 157.774 46.2948 158.207 46.3858 158.648C46.5288 159.334 47.1908 159.78 47.8768 159.659C47.8898 159.656 47.9038 159.654 47.9178 159.651C48.6178 159.504 49.0668 158.82 48.9208 158.12C48.7948 157.512 48.6058 156.913 48.3598 156.338C47.5318 154.397 46.1068 152.827 44.2888 151.819C45.0258 150.571 46.1478 149.579 47.4888 149.005C48.1458 148.725 48.4518 147.964 48.1708 147.306Z"
      fill="#C0CCEE"
    />
    <path
      d="M41.5553 122.402C41.5433 122.427 41.5313 122.452 41.5183 122.475C40.8573 123.789 40.4703 125.256 40.4193 126.802C40.3513 128.875 40.8973 130.895 41.9973 132.643C42.3783 133.248 42.1983 134.046 41.5933 134.427C41.3783 134.563 41.1403 134.626 40.9043 134.626C40.4743 134.626 40.0543 134.412 39.8073 134.022C38.4313 131.834 37.7473 129.31 37.8323 126.718C37.8863 125.068 38.2493 123.488 38.8673 122.04C36.8793 119.565 35.8453 116.402 36.0163 113.225C36.0543 112.511 36.6693 111.964 37.3783 112.002C38.0923 112.04 38.6413 112.65 38.6023 113.364C38.4843 115.553 39.0813 117.733 40.2643 119.562C41.9313 117.252 44.3613 115.503 47.2603 114.687C47.9483 114.493 48.6633 114.893 48.8573 115.581C49.0513 116.269 48.6503 116.984 47.9623 117.178C45.1163 117.979 42.8373 119.904 41.5553 122.402Z"
      fill="#C0CCEE"
    />
    <path
      d="M68.628 87C73.394 87 77.258 90.868 77.258 95.639C77.258 95.888 77.245 96.133 77.224 96.376C78.078 96.189 78.963 96.089 79.873 96.089C86.71 96.089 92.253 101.638 92.253 108.482C92.253 110.015 91.973 111.482 91.465 112.838C97.782 113.399 102.737 118.709 102.737 125.179C102.737 129.286 100.74 132.924 97.667 135.18C100.742 136.197 103.115 138.912 103.531 142.344C104.084 146.905 100.978 151.066 96.521 151.881C97.906 153.94 98.714 156.42 98.714 159.089C98.714 166.227 92.934 172.014 85.803 172.014C83.484 172.014 81.31 171.398 79.428 170.326C78.53 174.824 74.565 178.214 69.809 178.214C64.391 178.214 59.998 173.817 59.998 168.393V95.639C59.998 90.868 63.862 87 68.628 87Z"
      fill="#DEE4F8"
    />
    <path
      d="M70.4221 147.306C70.7031 146.65 71.4631 146.344 72.1201 146.625C74.1001 147.47 75.7331 148.975 76.7401 150.871C78.6841 150.412 80.7181 150.584 82.5901 151.384C83.2481 151.665 83.5531 152.426 83.2731 153.083C82.9921 153.741 82.2291 154.045 81.5721 153.764C79.8941 153.047 78.0381 153.027 76.3461 153.705C74.6531 154.383 73.3291 155.679 72.6131 157.356C72.4351 157.774 72.2971 158.207 72.2061 158.648C72.0631 159.334 71.4011 159.78 70.7151 159.659C70.7021 159.656 70.6881 159.654 70.6741 159.651C69.9741 159.504 69.5261 158.82 69.6721 158.12C69.7981 157.512 69.9861 156.913 70.2321 156.338C71.0601 154.397 72.4851 152.827 74.3031 151.819C73.5661 150.571 72.4441 149.579 71.1031 149.005C70.4451 148.725 70.1411 147.964 70.4221 147.306Z"
      fill="#C0CCEE"
    />
    <path
      d="M77.0384 122.402C77.0504 122.427 77.0624 122.452 77.0754 122.475C77.7364 123.789 78.1234 125.256 78.1744 126.802C78.2424 128.875 77.6964 130.895 76.5964 132.643C76.2154 133.248 76.3954 134.046 77.0004 134.427C77.2154 134.563 77.4534 134.626 77.6894 134.626C78.1194 134.626 78.5394 134.412 78.7864 134.022C80.1624 131.834 80.8464 129.31 80.7614 126.718C80.7074 125.068 80.3444 123.488 79.7264 122.04C81.7144 119.565 82.7484 116.402 82.5774 113.225C82.5394 112.511 81.9244 111.964 81.2154 112.002C80.5014 112.04 79.9524 112.65 79.9914 113.364C80.1094 115.553 79.5124 117.733 78.3294 119.562C76.6624 117.252 74.2324 115.503 71.3334 114.687C70.6454 114.493 69.9304 114.893 69.7364 115.581C69.5424 116.269 69.9434 116.984 70.6314 117.178C73.4774 117.979 75.7564 119.904 77.0384 122.402Z"
      fill="#C0CCEE"
    />
  </svg>
);

const CognitiveScaleIcon = memo(SVGComponent);
export default CognitiveScaleIcon;