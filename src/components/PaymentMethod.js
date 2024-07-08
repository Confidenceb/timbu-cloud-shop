import React from "react";
import "./PaymentMethod.css";
import Button from "./Button";
import PaymentIcon from "./PaymentIcons";

const PaymentMethod = () => (
  <div className="payment-method">
    <h3 className="payment-method-header">Payment</h3>
    <p className="payment-method-secondary">Select Payment Method</p>
    <div className="payment-methods">
      <Button className="payment-method-btn active">
        <div className="btn-element">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8.50494H22"
                stroke="#10413F"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 16.5049H8"
                stroke="#10413F"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 16.5049H14.5"
                stroke="#10413F"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.44 3.50494H17.55C21.11 3.50494 22 4.38494 22 7.89494V16.1049C22 19.6149 21.11 20.4949 17.56 20.4949H6.44C2.89 20.5049 2 19.6249 2 16.1149V7.89494C2 4.38494 2.89 3.50494 6.44 3.50494Z"
                stroke="#10413F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span>Debit or Credit Card</span>
        </div>
      </Button>
      <Button className="payment-method-btn">
        <div className="btn-element">
          <span>
            <svg
              width="25"
              height="18"
              viewBox="0 0 25 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="23"
                height="16"
                rx="2"
                fill="#FEFEFE"
                stroke="#D9D9D9"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.38698 11.2957H6.30481C6.23076 11.2957 6.16777 11.3505 6.15623 11.4249L5.71854 14.2505C5.70984 14.3063 5.75225 14.3565 5.80779 14.3565H6.32443C6.39848 14.3565 6.46146 14.3017 6.47301 14.2271L6.59106 13.4651C6.60245 13.3904 6.66558 13.3357 6.73948 13.3357H7.08206C7.79492 13.3357 8.20631 12.9844 8.31381 12.2884C8.36221 11.9839 8.31586 11.7446 8.17577 11.577C8.022 11.3931 7.74916 11.2957 7.38698 11.2957ZM7.51183 12.3277C7.45266 12.7231 7.15596 12.7231 6.86908 12.7231H6.70578L6.82034 11.9846C6.82714 11.94 6.86512 11.9072 6.90943 11.9072H6.98427C7.17969 11.9072 7.36406 11.9072 7.45933 12.0206C7.51608 12.0883 7.5335 12.1888 7.51183 12.3277ZM10.6218 12.315H10.1036C10.0595 12.315 10.0213 12.3479 10.0145 12.3926L9.99158 12.5401L9.95533 12.4867C9.84315 12.3208 9.593 12.2654 9.3433 12.2654C8.7706 12.2654 8.28151 12.7071 8.18625 13.3266C8.13675 13.6356 8.20712 13.9311 8.37927 14.1372C8.53722 14.3266 8.7632 14.4056 9.03201 14.4056C9.49342 14.4056 9.74934 14.1034 9.74934 14.1034L9.7262 14.2501C9.71749 14.3062 9.75989 14.3564 9.8151 14.3564H10.2819C10.3562 14.3564 10.4188 14.3016 10.4305 14.2271L10.7106 12.421C10.7195 12.3655 10.6772 12.315 10.6218 12.315ZM9.89946 13.342C9.84944 13.6435 9.61446 13.8458 9.31482 13.8458C9.16434 13.8458 9.04402 13.7967 8.96684 13.7036C8.89025 13.6111 8.8611 13.4794 8.88549 13.3329C8.93221 13.0339 9.17115 12.825 9.46625 12.825C9.61336 12.825 9.73301 12.8747 9.81181 12.9687C9.89074 13.0636 9.92209 13.196 9.89946 13.342ZM12.861 12.3149H13.3818C13.4548 12.3149 13.4973 12.3982 13.4559 12.4591L11.7238 15.0048C11.6958 15.0461 11.6496 15.0706 11.6002 15.0706H11.0801C11.0069 15.0706 10.9641 14.9866 11.0065 14.9256L11.5458 14.1504L10.9722 12.4364C10.9524 12.3768 10.9956 12.3149 11.0578 12.3149H11.5695C11.636 12.3149 11.6947 12.3594 11.7139 12.4242L12.0183 13.4594L12.7366 12.3821C12.7647 12.3401 12.8114 12.3149 12.861 12.3149Z"
                fill="#253B80"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.5073 14.2505L18.9514 11.3732C18.9583 11.3285 18.9963 11.2957 19.0404 11.2955H19.5404C19.5956 11.2955 19.638 11.3459 19.6293 11.4017L19.1913 14.2271C19.1799 14.3017 19.1169 14.3565 19.0428 14.3565H18.5962C18.541 14.3565 18.4986 14.3062 18.5073 14.2505ZM15.106 11.2957H14.0236C13.9498 11.2957 13.8868 11.3505 13.8752 11.4249L13.4375 14.2505C13.4288 14.3062 13.4712 14.3565 13.5265 14.3565H14.0819C14.1335 14.3565 14.1776 14.3182 14.1857 14.266L14.3099 13.465C14.3213 13.3904 14.3844 13.3357 14.4583 13.3357H14.8007C15.5137 13.3357 15.9251 12.9844 16.0326 12.2884C16.0812 11.9839 16.0345 11.7446 15.8945 11.577C15.7408 11.393 15.4682 11.2957 15.106 11.2957ZM15.2309 12.3277C15.1718 12.7231 14.8751 12.7231 14.5881 12.7231H14.4249L14.5397 11.9846C14.5465 11.94 14.5841 11.9071 14.6286 11.9071H14.7034C14.8987 11.9071 15.0832 11.9071 15.1784 12.0205C15.2353 12.0882 15.2525 12.1887 15.2309 12.3277ZM18.3406 12.315H17.8227C17.7782 12.315 17.7404 12.3479 17.7338 12.3925L17.7108 12.5401L17.6744 12.4866C17.5623 12.3208 17.3123 12.2654 17.0626 12.2654C16.4899 12.2654 16.0009 12.707 15.9056 13.3266C15.8563 13.6355 15.9264 13.931 16.0985 14.1371C16.2568 14.3266 16.4825 14.4055 16.7513 14.4055C17.2127 14.4055 17.4685 14.1034 17.4685 14.1034L17.4455 14.2501C17.4367 14.3061 17.4791 14.3564 17.5347 14.3564H18.0013C18.0752 14.3564 18.1382 14.3016 18.1498 14.227L18.43 12.421C18.4386 12.3655 18.3962 12.315 18.3406 12.315ZM17.6183 13.342C17.5686 13.6434 17.3333 13.8458 17.0336 13.8458C16.8834 13.8458 16.7628 13.7967 16.6856 13.7035C16.609 13.6111 16.5802 13.4794 16.6043 13.3328C16.6512 13.0339 16.8899 12.825 17.185 12.825C17.3322 12.825 17.4518 12.8747 17.5306 12.9687C17.6099 13.0636 17.6412 13.196 17.6183 13.342Z"
                fill="#179BD7"
              />
              <path
                d="M11.3919 10.2848L11.5249 9.42437L11.2286 9.41736H9.81348L10.7969 3.06798C10.7999 3.04881 10.8099 3.03094 10.8244 3.01825C10.8389 3.00556 10.8575 2.99857 10.8768 2.99857H13.2629C14.0551 2.99857 14.6017 3.16641 14.8871 3.4977C15.0209 3.65311 15.1062 3.81551 15.1474 3.99424C15.1906 4.18178 15.1914 4.40583 15.1491 4.67909L15.1461 4.69904V4.87413L15.2799 4.95133C15.3926 5.01219 15.4821 5.08187 15.5508 5.16165C15.6653 5.29453 15.7393 5.46341 15.7706 5.66363C15.8029 5.86955 15.7922 6.11458 15.7393 6.392C15.6783 6.71111 15.5796 6.98904 15.4463 7.21646C15.3236 7.42601 15.1674 7.59978 14.982 7.73451C14.805 7.86246 14.5946 7.95961 14.3568 8.02179C14.1262 8.08286 13.8635 8.11373 13.5753 8.11373H13.3896C13.2568 8.11373 13.1278 8.16242 13.0266 8.24973C12.9251 8.33883 12.8579 8.46051 12.8373 8.59368L12.8233 8.67115L12.5883 10.1877L12.5776 10.2434C12.5748 10.261 12.5699 10.2698 12.5628 10.2758C12.5565 10.2812 12.5473 10.2848 12.5384 10.2848H11.3919Z"
                fill="#253B80"
              />
              <path
                d="M15.4066 4.71936C15.3995 4.76572 15.3914 4.81312 15.3822 4.86182C15.0675 6.50686 13.991 7.07516 12.616 7.07516H11.916C11.7479 7.07516 11.6062 7.19948 11.5799 7.36836L11.2215 9.683L11.12 10.3391C11.1029 10.4499 11.1869 10.5499 11.2968 10.5499H12.5385C12.6855 10.5499 12.8104 10.4411 12.8335 10.2935L12.8457 10.2292L13.0796 8.71862L13.0946 8.63578C13.1174 8.48763 13.2426 8.37884 13.3896 8.37884H13.5753C14.7783 8.37884 15.72 7.88152 15.9953 6.44237C16.1103 5.84118 16.0507 5.3392 15.7465 4.98615C15.6544 4.87969 15.5402 4.79136 15.4066 4.71936Z"
                fill="#179BD7"
              />
              <path
                d="M15.0772 4.5858C15.0292 4.57155 14.9796 4.5586 14.9287 4.54694C14.8776 4.53555 14.8251 4.52545 14.7712 4.51664C14.5824 4.48556 14.3757 4.47079 14.1541 4.47079H12.2839C12.2378 4.47079 12.1941 4.48141 12.1549 4.50058C12.0686 4.5428 12.0046 4.62595 11.989 4.72774L11.5911 7.29361L11.5797 7.36846C11.6059 7.19958 11.7476 7.07525 11.9157 7.07525H12.6158C13.9908 7.07525 15.0674 6.5067 15.382 4.86191C15.3914 4.81322 15.3993 4.76582 15.4064 4.71946C15.3268 4.67646 15.2405 4.63968 15.1477 4.60833C15.1248 4.60056 15.1012 4.59305 15.0772 4.5858Z"
                fill="#222D65"
              />
              <path
                d="M11.9891 4.72769C12.0046 4.62589 12.0687 4.54275 12.1549 4.50079C12.1944 4.48162 12.2379 4.471 12.2839 4.471H14.1542C14.3757 4.471 14.5825 4.48576 14.7712 4.51685C14.8252 4.52565 14.8776 4.53576 14.9288 4.54715C14.9796 4.55881 15.0292 4.57176 15.0773 4.586C15.1012 4.59326 15.1249 4.60077 15.148 4.60828C15.2408 4.63962 15.3271 4.67666 15.4067 4.7194C15.5004 4.11148 15.406 3.69756 15.0832 3.32276C14.7273 2.91014 14.085 2.73349 13.2631 2.73349H10.8769C10.709 2.73349 10.5658 2.85781 10.5398 3.02696L9.54601 9.44161C9.52638 9.56851 9.62253 9.68304 9.74819 9.68304H11.2214L11.5912 7.29355L11.9891 4.72769Z"
                fill="#253B80"
              />
            </svg>
          </span>
          <span>Paypal</span>
        </div>
      </Button>
    </div>
    <PaymentIcon header={"We Accept"} />
  </div>
);

export default PaymentMethod;
