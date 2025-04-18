import { useMatchMedia } from "../../hooks/useMatchMedia";
import "./styles.scss";

const LetterWomen = () => {
  const { isMobile } = useMatchMedia();

  return (
    <div className="letter-women">
      {isMobile ? (
        <svg
          width="272"
          height="261"
          viewBox="0 0 272 261"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M93.1789 74.602C97.4274 48.7249 114.098 46.4417 121.661 45.9589C131.156 44.0278 153.545 44.0019 170.539 58.2923C191.782 76.1552 206.743 88.5282 241.574 131.05C241.587 130.904 241.6 130.758 241.615 130.612C243.739 108.961 261.062 82.1347 271.612 72.5433C282.233 62.8871 305.119 57.2224 313.809 56.4032V192.765C313.809 192.765 269.314 199.71 244.771 192.631C224.687 186.837 197.037 184.423 185.723 183.941C185.265 186.355 184.68 188.646 183.94 190.7C179.595 202.769 166.077 211.459 149.663 215.321C133.248 219.184 107.178 218.218 98.0052 218.218C90.6669 218.218 65.6588 213.39 54.072 210.976C53.9111 212.103 52.334 214.839 47.3131 216.77C41.0369 219.184 38.1399 216.287 33.7952 216.77C29.4504 217.253 27.0362 221.115 25.1051 225.46C23.174 229.805 16.8978 236.564 13.5183 233.184C10.8148 230.481 15.6104 224.011 18.3462 221.115C14.4839 224.011 9.173 231.253 6.75909 231.253C4.34518 231.253 3.37962 227.874 4.82796 225.46C5.98664 223.529 10.4604 217.896 12.5525 215.321C12.8734 214.958 13.2438 214.535 13.6485 214.071C14.0957 213.13 14.5795 211.56 14.9664 209.045C15.7388 204.024 19.1505 199.872 20.7598 198.424C22.0472 194.24 27.4222 186.258 38.6227 187.803C65.6585 189.734 130.351 179.113 127.455 175.733C125.137 173.03 121.392 167.245 120.426 164.67C119.621 163.383 118.668 159.801 116.351 155.939C113.454 151.111 107.499 141.337 104.12 135.061C101.416 130.04 97.9335 119.667 96.9679 115.322C96.0021 112.265 95.8799 104.764 95.1075 100.902C94.1419 96.0742 89.7995 98.2583 93.1789 74.602Z"
            fill="#F2DAF5"
          />
          <path
            d="M97 62.0001C103.5 48.5001 114.5 44.8334 123.5 43.5C137 41.5 153.545 44.002 170.539 58.2924C190.064 74.7109 204.282 86.4914 233.5 121.308M186.354 153.043C185.389 147.732 183.457 120.696 163.181 75.7974"
            stroke="black"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
          <path
            d="M186.354 153.042C187.155 157.449 187.956 172.163 185.723 183.94C197.037 184.423 224.687 186.837 244.77 192.63C269.313 199.71 313.808 192.765 313.808 192.765V56.4031C305.118 57.2223 282.232 62.8869 271.611 72.5432C260.99 82.1995 243.504 109.325 241.573 131.05C238.717 127.563 235.994 124.279 233.391 121.178C232.195 125.523 226.038 134.406 210.976 135.179C195.913 135.951 182.963 122.626 178.371 115.868C184.679 136.82 185.723 149.571 186.354 153.042Z"
            fill="white"
          />
          <path
            d="M181.526 233.184L221.597 169.939L261.185 187.802L220.149 255.874L181.526 233.184Z"
            fill="white"
          />
          <path
            d="M221.597 169.939L181.526 233.184M221.597 169.939L261.185 187.802L220.149 255.874L181.526 233.184M221.597 169.939L224.977 219.183L181.526 233.184"
            stroke="black"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
          <path
            d="M37.174 27.519C41.8087 17.8633 55.5197 9.01234 61.7959 5.79379C65.8191 4.34545 75.6035 2.51087 82.5555 6.75936C91.2456 12.07 97.039 15.4495 103.798 25.5879C109.205 33.6987 109.591 37.0138 109.109 37.6575C106.051 40.3932 99.646 47.1199 98.4874 52.1409C98.4874 54.276 97.3433 58.86 96.7037 62.2786C96.5798 63.0622 96.4553 63.8685 96.3312 64.6932C95.4286 70.6923 94.5511 77.6684 94.1423 84.0046C93.1767 98.9709 98.0046 109.592 100.418 121.179C102.35 130.448 115.063 153.909 121.178 164.48C124.013 164.95 126.522 165.484 128.42 166.077C136.144 168.491 171.387 181.526 174.284 182.975C176.601 184.133 191.342 190.538 198.423 193.596C201.481 194.723 208.465 197.748 211.941 200.838C216.286 204.7 217.252 206.148 219.183 208.562C220.728 210.493 219.129 211.298 218.137 211.459C218.788 211.987 219.461 212.478 220.148 212.907C227.1 215.997 226.907 218.522 225.942 219.399C227.244 220.407 227.773 221.483 227.873 222.08C227.873 223.207 227.294 225.46 224.976 225.46C222.079 225.46 216.769 223.529 213.389 222.08C210.686 220.921 203.573 215.804 200.354 213.39C202.285 215.321 205.182 218.701 211.458 223.046C217.734 227.391 216.769 229.805 216.286 230.287C215.803 230.77 212.907 232.219 207.596 230.287C202.285 228.356 200.354 221.597 195.526 220.632C190.699 219.666 185.388 220.632 178.629 217.735C171.87 214.838 168.008 206.631 167.042 205.183C166.077 203.734 166.56 201.321 165.111 199.872C163.663 198.424 161.732 197.941 156.421 199.872C152.173 201.417 132.765 205.022 123.592 206.631C113.615 208.079 89.2179 210.3 71.4515 207.597C53.6852 204.893 42.1628 192.63 38.6224 186.837C37.6568 185.389 34.4704 179.982 29.4495 169.94C24.4286 159.898 21.2416 143.226 20.2758 136.145C19.4711 126.972 15.991 111.532 21.899 99.7285C26.4901 90.5557 27.1886 90.6607 32.1759 86.2779C37.1632 81.8951 44.9187 79.1747 50.2083 79.0236C55.4979 78.8725 64.2275 79.4892 65.6573 76.7628C67.0871 74.0363 60.8295 67.5899 60.8295 67.5899C60.5076 67.429 59.188 67.1071 56.4844 67.1071C53.105 67.1071 54.0705 68.0727 50.2083 68.5555C46.346 69.0382 45.8632 68.0727 42.9665 68.0727C40.0698 68.0727 40.5526 68.5555 36.2076 69.0382C32.7316 69.4245 30.8975 67.9118 30.415 67.1071C30.0932 66.1416 29.546 62.1827 29.9323 54.072C30.415 43.9336 31.3806 39.5885 37.174 27.519Z"
            fill="#F2DAF5"
          />
          <path
            d="M60.8295 67.5898C60.8295 67.5898 67.0871 74.0362 65.6573 76.7627C64.2275 79.4892 55.4979 78.8724 50.2083 79.0235C44.9187 79.1747 37.1632 81.895 32.1759 86.2778C27.1886 90.6606 26.4901 90.5557 21.899 99.7285C15.991 111.532 19.4711 126.972 20.2758 136.145C21.2416 143.226 24.4286 159.898 29.4495 169.94C34.4704 179.982 37.6568 185.389 38.6224 186.837"
            stroke="black"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
          <path
            d="M66.0195 64.6353C69.0144 68.3956 77.3004 74.9578 86.485 71.1243C97.9657 66.3325 98.0655 52.9552 98.2652 51.4578"
            stroke="black"
            strokeWidth="0.7"
          />
          <path
            d="M56.188 167.544C73.0329 162.241 116.799 156.595 157.103 176.435C159.717 177.722 175.045 184.222 184.421 188.313"
            stroke="black"
            strokeWidth="0.7"
          />
          <path
            d="M37.1739 27.519C41.8086 17.8633 55.5196 9.01234 61.7957 5.79379C65.8189 4.34545 75.6033 2.51087 82.5554 6.75936C91.2455 12.07 97.0389 15.4495 103.798 25.5879C109.205 33.6987 109.591 37.0138 109.108 37.6575C106.051 40.3932 99.6459 47.1199 98.4872 52.1409C98.4872 48.7614 99.4528 39.1058 96.0733 32.8296C94.9468 34.7607 91.1489 37.754 84.9693 34.2779C78.7897 30.8019 75.3137 27.3581 74.3481 26.0706C74.0262 29.2892 72.3204 36.5953 68.0719 40.0713C62.7613 44.4164 62.7613 45.3819 60.8302 44.8991C58.8991 44.4164 56.4852 38.623 51.1746 37.1746C45.864 35.7263 42.9673 37.1746 41.5189 41.0369C40.0706 44.8991 39.5887 51.6581 44.8984 54.5548C50.2081 57.4515 53.104 57.9342 56.4843 61.3137C59.1886 64.0173 60.5078 66.6243 60.8294 67.5899C60.5075 67.429 59.1879 67.1071 56.4843 67.1071C53.1048 67.1071 54.0704 68.0727 50.2081 68.5555C46.3459 69.0382 45.8631 68.0727 42.9664 68.0727C40.0697 68.0727 40.5525 68.5555 36.2075 69.0382C32.7314 69.4245 30.8974 67.9117 30.4149 67.1071L29.9321 54.072C30.4149 43.9336 31.3805 39.5885 37.1739 27.519Z"
            fill="black"
            stroke="black"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
          <path
            d="M79.6592 36.6914C80.3029 37.496 82.2662 39.4915 84.9698 41.0364C85.7422 41.4227 84.6479 44.7378 84.0042 46.347"
            stroke="black"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
          <path
            d="M84.4869 50.2096C83.0386 52.1408 83.0386 54.0719 83.0386 55.5202C83.0386 58.8997 84.4869 60.8308 86.418 61.3135C88.3492 61.7963 90.2803 60.8308 90.2803 58.4169C90.2803 56.4857 87.5445 55.842 86.418 55.5202C89.3147 52.6235 89.7975 50.2096 88.832 49.244C87.8664 48.2785 85.7159 48.571 84.4869 50.2096Z"
            fill="black"
          />
          <path
            d="M70.643 99.9358C69.1947 103.476 64.0658 113.048 57.5 120"
            stroke="black"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
          <path
            d="M200.355 213.39C198.424 211.459 192.63 208.079 188.768 206.631M222.563 217.735C217.735 216.286 212.907 212.907 211.459 211.459C210.01 210.01 200.838 202.768 193.113 201.32M194.079 196.01C200.838 196.975 209.045 202.286 210.976 204.217C212.563 205.804 215.129 209.022 218.137 211.459"
            stroke="black"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
          <path
            d="M20.7595 198.424C23.9781 196.815 31.5739 193.403 36.2086 192.631M12.5522 215.322C14.9662 212.586 20.1802 206.535 21.7251 204.218C23.6562 201.321 28.4841 199.39 32.3463 198.907C35.4361 198.521 37.496 198.424 38.1397 198.424M18.3459 221.115C22.2082 218.218 26.0704 210.494 27.5188 209.045C28.9671 207.597 33.795 203.252 39.5883 202.769"
            stroke="black"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
          <path
            d="M241.689 131.232C242.172 132.519 243.427 135.384 244.586 136.543"
            stroke="black"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
          <path
            d="M38.6226 186.837C42.163 192.63 53.6854 204.893 71.4517 207.596C89.2181 210.3 113.615 208.079 123.592 206.631C132.765 205.021 152.173 201.417 156.421 199.872C161.732 197.941 163.663 198.423 165.111 199.872C166.56 201.32 166.077 203.734 167.043 205.182"
            stroke="black"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
          <path
            d="M94.1427 162.215C100.698 162.215 128.682 166.084 137.388 167.525C131.273 156.954 116.223 140.686 107.96 120.378C99.6974 100.069 92.5 83.5 97.162 62.0544M56.0029 167.526C61.31 164.872 76.4392 163.111 86.901 162.477"
            stroke="black"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
          <path
            d="M94.1429 162.215C100.698 162.215 128.683 166.084 137.388 167.525C131.698 157.689 118.274 142.923 109.779 124.558C107.946 127.937 102.253 134.793 94.1429 135.179C84.0048 135.662 82.5558 133.248 74.8313 127.937C68.6516 123.689 60.6696 121.127 57.4511 120.378C54.3936 122.898 48.182 131.027 47.7958 143.386C47.4096 155.745 56.0031 163.623 60.3481 166.017C67.282 164.201 78.5711 162.982 86.9011 162.477C88.3496 162.346 91.8258 162.109 94.1429 162.215Z"
            fill="white"
          />
          <path
            d="M56.0031 167.525C57.0845 166.985 58.5737 166.481 60.3481 166.017M107.96 120.378C108.535 121.791 109.143 123.184 109.779 124.558M60.3481 166.017C67.282 164.201 78.5711 162.982 86.9011 162.477C88.3496 162.346 91.8258 162.109 94.1429 162.215C100.698 162.215 128.683 166.084 137.388 167.525C131.698 157.689 118.274 142.923 109.779 124.558M60.3481 166.017C56.0031 163.623 47.4096 155.745 47.7958 143.386C48.182 131.027 54.3936 122.898 57.4511 120.378C60.6696 121.127 68.6516 123.689 74.8313 127.937C82.5558 133.248 84.0048 135.662 94.1429 135.179C102.253 134.793 107.946 127.937 109.779 124.558"
            stroke="black"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
          <path
            d="M163.18 75.7979C183.457 120.697 185.388 147.732 186.354 153.043C187.155 157.45 187.956 172.164 185.723 183.941"
            stroke="black"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
          <path
            d="M91.2457 122.627C90.9239 125.362 90.9561 131.8 93.6596 135.662"
            stroke="black"
            strokeWidth="0.965564"
          />
        </svg>
      ) : (
        <svg
          width="611"
          height="508"
          viewBox="0 0 611 508"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M181.336 145.184C189.604 94.8245 222.046 90.3812 236.766 89.4417C255.244 85.6835 298.816 85.6331 331.888 113.444C373.228 148.207 402.344 172.286 470.129 255.039C470.155 254.755 470.181 254.471 470.209 254.186C474.344 212.052 508.056 159.844 528.587 141.178C549.257 122.386 593.796 111.362 610.707 109.767V375.144C610.707 375.144 524.115 388.66 476.352 374.882C437.266 363.607 383.457 358.91 361.438 357.97C360.547 362.669 359.407 367.128 357.968 371.124C349.512 394.613 323.205 411.524 291.26 419.041C259.316 426.557 208.58 424.678 190.728 424.678C176.447 424.678 127.779 415.283 105.229 410.585C104.916 412.777 101.847 418.101 92.0757 421.86C79.8615 426.557 74.2236 420.92 65.7682 421.86C57.3129 422.799 52.6145 430.315 48.8563 438.771C45.0981 447.227 32.884 460.381 26.3071 453.804C21.0456 448.543 30.3785 435.953 35.7026 430.315C28.1862 435.953 17.8506 450.046 13.1528 450.046C8.4551 450.046 6.576 443.469 9.39465 438.771C11.6496 435.013 20.3561 424.052 24.4275 419.041C25.052 418.333 25.7728 417.511 26.5604 416.608C27.4307 414.777 28.3722 411.721 29.1252 406.827C30.6285 397.055 37.268 388.975 40.3998 386.157C42.9053 378.014 53.3656 362.48 75.1632 365.487C127.778 369.245 253.678 348.575 248.04 341.998C243.531 336.736 236.241 325.478 234.362 320.467C232.796 317.962 230.941 310.993 226.431 303.476C220.793 294.081 209.205 275.059 202.628 262.845C197.367 253.074 190.589 232.887 188.71 224.431C186.83 218.48 186.592 203.884 185.089 196.367C183.21 186.972 174.759 191.222 181.336 145.184Z"
            fill="#F2DAF5"
          ></path>
          <path
            d="M362.666 297.839C364.226 306.415 365.785 335.051 361.438 357.97C383.457 358.91 437.267 363.607 476.352 374.882C524.115 388.66 610.708 375.144 610.708 375.144V109.767C593.796 111.362 549.258 122.386 528.587 141.178C507.917 159.97 473.888 212.76 470.13 255.039C464.571 248.253 459.273 241.862 454.206 235.827C451.879 244.283 439.897 261.571 410.583 263.074C381.269 264.577 356.068 238.646 347.131 225.492C359.407 266.269 361.438 291.084 362.666 297.839Z"
            fill="white"
          ></path>
          <path
            d="M353.271 453.803L431.253 330.722L508.297 365.485L428.435 497.962L353.271 453.803Z"
            fill="white"
          ></path>
          <path
            d="M431.253 330.722L353.271 453.803M431.253 330.722L508.297 365.485L428.435 497.962L353.271 453.803M431.253 330.722L437.83 426.556L353.271 453.803"
            stroke="black"
            strokeWidth="1.8791"
            strokeLinecap="round"
          ></path>
          <path
            d="M72.3453 53.5552C81.365 34.7642 108.048 17.5391 120.262 11.2754C128.092 8.45677 147.134 4.88648 160.663 13.1545C177.575 23.4896 188.85 30.0666 202.003 49.7971C212.526 65.5816 213.278 72.0332 212.338 73.2859C206.388 78.6099 193.923 91.7008 191.668 101.472C191.668 105.627 189.442 114.548 188.197 121.201C186.202 133.819 184.117 149.457 183.212 163.483C181.333 192.609 190.729 213.279 195.427 235.828C199.185 253.867 223.926 299.525 235.827 320.098C241.344 321.012 246.228 322.052 249.92 323.206C264.953 327.904 333.54 353.272 339.178 356.09C343.687 358.345 372.375 370.81 386.155 376.761C392.106 378.953 405.698 384.841 412.462 390.854C420.918 398.37 422.798 401.189 426.556 405.887C429.562 409.645 426.452 411.211 424.52 411.524C425.788 412.551 427.097 413.506 428.435 414.343C441.964 420.356 441.589 425.27 439.709 426.975C442.243 428.938 443.274 431.033 443.468 432.194C443.468 434.386 442.34 438.771 437.83 438.771C432.193 438.771 421.858 435.013 415.281 432.194C410.02 429.939 396.177 419.98 389.913 415.282C393.672 419.04 399.309 425.617 411.523 434.073C423.737 442.529 421.858 447.227 420.918 448.166C419.979 449.106 414.342 451.925 404.007 448.166C393.672 444.408 389.913 431.254 380.518 429.375C371.122 427.496 360.787 429.375 347.634 423.738C334.48 418.101 326.963 402.128 325.084 399.31C323.205 396.491 324.145 391.793 321.326 388.975C318.507 386.156 314.749 385.216 304.414 388.975C296.146 391.981 258.376 398.997 240.525 402.128C221.108 404.947 173.629 409.269 139.053 404.007C104.478 398.746 82.0541 374.881 75.164 363.607C73.2849 360.788 67.0839 350.265 57.3126 330.723C47.5412 311.18 41.3391 278.734 39.4594 264.954C37.8935 247.103 31.1208 217.055 42.6183 194.083C51.5532 176.232 52.9125 176.436 62.6185 167.907C72.3244 159.377 87.4174 154.083 97.7116 153.789C108.006 153.495 124.995 154.695 127.777 149.389C130.56 144.083 118.382 131.538 118.382 131.538C117.755 131.225 115.187 130.598 109.926 130.598C103.349 130.598 105.228 132.477 97.7116 133.417C90.1952 134.357 89.2556 132.477 83.6183 132.477C77.981 132.477 78.9206 133.417 70.4646 134.357C63.6999 135.108 60.1306 132.164 59.1916 130.598C58.5653 128.719 57.5004 121.015 58.2521 105.23C59.1916 85.4999 61.0707 77.044 72.3453 53.5552Z"
            fill="#F2DAF5"
          ></path>
          <path
            d="M128.482 125.788C134.31 133.106 150.436 145.877 168.31 138.416C190.653 129.091 190.847 103.057 191.236 100.143"
            stroke="black"
            strokeWidth="1.8791"
          ></path>
          <path
            d="M109.349 326.061C142.131 315.741 227.305 304.753 305.741 343.364C310.828 345.868 340.659 358.518 358.905 366.479"
            stroke="black"
            strokeWidth="1.8791"
          ></path>
          <path
            d="M72.3455 53.5552C81.3651 34.7642 108.048 17.5391 120.263 11.2754C128.092 8.45677 147.134 4.88648 160.663 13.1545C177.575 23.4896 188.85 30.0666 202.003 49.7971C212.526 65.5816 213.278 72.0332 212.339 73.2859C206.388 78.6099 193.923 91.7008 191.668 101.472C191.668 94.8954 193.548 76.1044 186.971 63.8902C184.778 67.6484 177.387 73.4737 165.361 66.7089C153.335 59.9441 146.57 53.242 144.691 50.7365C144.065 57.0002 140.745 71.2187 132.477 77.9835C122.142 86.4395 122.142 88.3186 118.383 87.379C114.625 86.4395 109.928 75.1648 99.5925 72.3462C89.2574 69.5275 83.6201 72.3462 80.8015 79.8626C77.9828 87.379 77.0449 100.533 87.3783 106.17C97.7117 111.807 103.347 112.747 109.926 119.324C115.189 124.585 117.756 129.659 118.382 131.538C117.755 131.225 115.187 130.598 109.926 130.598C103.349 130.598 105.228 132.477 97.7117 133.417C90.1953 134.357 89.2557 132.477 83.6184 132.477C77.9811 132.477 78.9207 133.417 70.4647 134.357C63.7 135.108 60.1308 132.164 59.1917 130.598L58.2522 105.23C59.1917 85.4999 61.0708 77.044 72.3455 53.5552Z"
            fill="black"
            stroke="black"
            strokeWidth="1.8791"
            strokeLinecap="round"
          ></path>
          <path
            d="M155.026 71.4058C156.278 72.9717 160.099 76.8552 165.361 79.8617C166.864 80.6134 164.734 87.0649 163.482 90.1968"
            stroke="black"
            strokeWidth="1.8791"
            strokeLinecap="round"
          ></path>
          <path
            d="M164.421 97.7137C161.603 101.472 161.603 105.23 161.603 108.049C161.603 114.626 164.421 118.384 168.179 119.323C171.938 120.263 175.696 118.384 175.696 113.686C175.696 109.928 170.372 108.675 168.179 108.049C173.817 102.411 174.756 97.7137 172.877 95.8346C170.998 93.9555 166.813 94.5247 164.421 97.7137Z"
            fill="black"
          ></path>
          <path
            d="M137.48 194.487C134.661 201.377 125.829 218.539 113.051 232.069C97.0789 248.981 96.1394 258.376 94.2603 264.953C92.8185 269.999 91.8614 295.104 102.412 309.112C106.445 314.467 111.889 319.125 114.93 320.86C115.64 321.265 116.275 321.732 116.809 322.266"
            stroke="black"
            strokeWidth="1.8791"
            strokeLinecap="round"
          ></path>
          <path
            d="M389.913 415.281C386.155 411.523 374.88 404.946 367.364 402.128M433.133 423.737C423.737 420.919 414.342 414.342 411.523 411.523C408.704 408.704 390.853 394.611 375.82 391.793M377.699 381.458C390.853 383.337 406.825 393.672 410.583 397.43C413.672 400.519 418.666 406.782 424.52 411.523"
            stroke="black"
            strokeWidth="1.8791"
            strokeLinecap="round"
          ></path>
          <path
            d="M40.4006 386.157C46.6642 383.025 61.4465 376.386 70.4662 374.882M24.4282 419.041C29.126 413.717 39.2731 401.941 42.2797 397.432C46.0379 391.794 55.4334 388.036 62.9498 387.096C68.9629 386.345 72.9717 386.157 74.2244 386.157M35.7034 430.316C43.2198 424.678 50.7362 409.646 53.5549 406.827C56.3735 404.008 65.769 395.552 77.0436 394.613"
            stroke="black"
            strokeWidth="1.8791"
            strokeLinecap="round"
          ></path>
          <path
            d="M470.355 255.393C471.295 257.898 473.737 263.473 475.992 265.728"
            stroke="black"
            strokeWidth="1.8791"
            strokeLinecap="round"
          ></path>
          <path
            d="M75.1638 363.606C82.0539 374.881 104.478 398.745 139.053 404.007C173.629 409.268 221.107 404.946 240.525 402.128C258.376 398.996 296.146 391.98 304.414 388.974C314.749 385.216 318.507 386.155 321.326 388.974C324.145 391.792 323.205 396.49 325.084 399.309"
            stroke="black"
            strokeWidth="1.8791"
            strokeLinecap="round"
          ></path>
          <path
            d="M183.212 315.689C195.97 315.689 250.431 323.219 267.372 326.024C255.471 305.45 226.184 273.792 210.103 234.269C194.022 194.746 187.209 149.892 189.088 120.765M108.988 326.024C119.316 320.86 148.759 317.434 169.119 316.2"
            stroke="black"
            strokeWidth="1.8791"
            strokeLinecap="round"
          ></path>
          <path
            d="M183.213 315.689C195.971 315.689 250.431 323.219 267.373 326.024C256.3 306.881 230.176 278.144 213.642 242.404C210.076 248.981 198.997 262.322 183.213 263.074C163.483 264.014 160.663 259.316 145.63 248.981C133.604 240.713 118.07 235.728 111.807 234.269C105.856 239.173 93.7678 254.994 93.0162 279.046C92.2646 303.099 108.989 318.429 117.445 323.088C130.939 319.555 152.909 317.182 169.12 316.2C171.939 315.943 178.704 315.482 183.213 315.689Z"
            fill="white"
          ></path>
          <path
            d="M108.989 326.024C111.093 324.972 113.991 323.992 117.445 323.088M210.104 234.269C211.223 237.019 212.405 239.731 213.642 242.404M117.445 323.088C130.939 319.555 152.909 317.182 169.12 316.2C171.939 315.943 178.704 315.482 183.213 315.689C195.971 315.689 250.431 323.219 267.373 326.024C256.3 306.881 230.176 278.144 213.642 242.404M117.445 323.088C108.989 318.429 92.2646 303.099 93.0162 279.046C93.7678 254.994 105.856 239.173 111.807 234.269C118.07 235.728 133.604 240.713 145.63 248.981C160.663 259.316 163.483 264.014 183.213 263.074C198.997 262.322 210.076 248.981 213.642 242.404"
            stroke="black"
            strokeWidth="1.8791"
            strokeLinecap="round"
          ></path>
          <path
            d="M317.568 147.511C357.029 234.889 360.787 287.504 362.666 297.839C364.226 306.416 365.785 335.051 361.438 357.971"
            stroke="black"
            strokeWidth="1.8791"
            strokeLinecap="round"
          ></path>
          <path
            d="M177.575 238.646C176.948 243.97 177.011 256.497 182.273 264.014"
            stroke="black"
            strokeWidth="1.8791"
          ></path>
        </svg>
      )}
    </div>
  );
};

export default LetterWomen;
