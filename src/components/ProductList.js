/*
import Product from "./Product";
import "./ProductList.css";
import Pagination from "./Pagination";

import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const products = [
    {
      id: 1,
      name: "Gloria Zeni Sleeveless",
      description: "Women's dinner wear and summer wear",
      price: "90",
      images: [
        "https://s3-alpha-sig.figma.com/img/1c30/65b1/0cf57a656f3ae9d7b4a17ee2491afaf0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W8VwFxQQM6jI-vPnSmA3cY0fR~dCzoqt8vwb6qoux53NJ1eo3W50vNmxa09lFhAg5wdf7Jj-F-lTQYu7khWl1xJvoh6A7xJW3OeFw3dUOMVLvSjGnQrxE5l9RDW4DSwyzO1bh~wlddVJUfkyrlJx7n3Y8YEtXmlaZDm3ARZW7QFcR8WCeJiPK23mzVsDO4eRmxN~JafB9AVchyxh0XcQwoh9l2sPxXF~TFN0i7jhU-2N0iOw5VdoYbxoQ64PXxzi6H6gV6xKKoFg4m7CxMFspZ1-pR-yJheyKcz5xsUtOAmniQCBcrZ~UnYnEFJmWgpmaMtolTHXWmo1cD~a7yooOA__",
        "https://s3-alpha-sig.figma.com/img/19e7/d9ea/06c0d70c14934ac38d11a4ea4396b3bf?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lP9vhSGfBVq~dzxul6wk9G8L7kXA8Q02sP4990cHKI--nMMbcx~UowNi3g1aPa96HizGFahwS0sixNBtsPPXiq3m~sfUdd99i2XZsW5AzOxOEYkVsxQzGqmg-xVK315BiHcyLzNI81WB0Pk2UAYVpMTaRiRxavlzITupv62mfK~7U7WrAg7lVbFNVuDpVS8u-o84QPOMiSM-tKBJtUa~t8yElMjxelWxwx2LYQJmTza3zrEYMahTmLf3YRee5J~EN3hJ3Q-QjhLPG2O63gjlwOiiSq1Cn24buLJz5etPMpOUhVrWaOWjAtQaDaWuAbxghaJ1MExVMpLjHsLdcFyb~A__",
      ],
      colors: ["#0CE5DD", "#E50CC2", "#920CE5", "#2AE50C"],
    },
    {
      id: 2,
      name: "Corporate Sleeveless Dress",
      description: "Women's corporate office dress",
      price: "45",
      images: [
        "https://s3-alpha-sig.figma.com/img/c068/6e8e/162cfd222a6fe2a33e68e5695e25e60d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lmmLGBuOk1rtbh7pMywfzLQpmp5YcQlfxK3opJi-xDdrzHlFEy2LbZeHYBp9CGzg~cShbGIuAxS1j8-8M9gBeO8bQzUJ9Sw6qksOiZksK51ue1dxoqNKJAbX5NP7vpStXZd6X7lOq3nWteyBbmdMXCBDU546xQqr4LCIwv8jikUq~c9KhuLB22tZRE~sb30OL69~y4PT5-FAqnnJD7JugYcjEUssS~4iO61cv02GyZLicFSe0W3PyuTRacEBMxkCdy3KQTycd68ATblBixyHnrwv2bZypzv8tI-w8Hsb9l9RYBKjzj0b-LaFtkK2XiT9scENIhhrg9VVAOIZhy6xxA__",
        "https://s3-alpha-sig.figma.com/img/f892/b14f/dfb5c7d0c711ca269fdbe65cb4e5d475?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TLGMC3gWx5WHpvXxmKH-xkrwppDRdGgtPD39AYynI9RaVOSrNQgjh7NAv1VeKkoQKtM98aqdUzDhn1tuscmmot-uuQNoqGGTJMDTrDEThJ9wL9RD-~mAfh6xTlesXMQyxFDLoE9pDgUaWJKQKuHZqdMzNWGbSyihvkX7vPQLRaIc6q~1Q2o0gMycKzKWwNXobG-joyrBCpkh0arWtQ6LsxfmSvSL7fo94dEGv25zk-NPuRKsJAWSDhZObVnqaTIRP96ltIN9cMggcSTmaHkYJiYp1xs~ZhNlK71QENeS~wovG87YKAGjbZ6U~X-0VflSx9vGaK-UovZxKoAm4QhhFA__",
      ],
      colors: ["#E5B50C", "#E50CC2", "#0CE5DD", "#927306"],
    },
    {
      id: 3,
      limited: true,
      name: `Giora Signature Sleeping Gown`,
      description: "Women's night gown",
      price: "63",
      images: [
        "https://s3-alpha-sig.figma.com/img/1f2e/335d/7255748f45a91a513074932ec458089d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZmXdrWefpeng4lCCvPxag95~QqyifZLPnMuFSr95g2oBGKyiKet4N-JQn-E4Vj4bvvOPWpqkc985t~F5w06hIjyVaVZO5~nBZYGfWrDcdIww~TUQQ--ShYEEgxooKnNeVExrq98YhOvjo8z4UfjuF50QmiZsvT5kpa9O0B-zX9gWTI4RwOqL3XbytoVQGwKnORTVbcSkWPggoArOpcIT-ITbeaBLMRWA-YwAyNdwH6xUN4buvWwEI5RdOOTVzjFKeQytnEj1Y~wGQSrEopGcm4kYGH9OuGScgUDkeP7Ni05QFTl~6FzXyxfIHdsIl2rZf5MkH6zfnFfQOQM1kB31pQ__",
        "https://s3-alpha-sig.figma.com/img/24b7/b0e2/dd8c69b31b798668d61254938f84876d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WE8IInm8Gd6sLPs9r2irbuHwMkKhITCvZO3xpndbIjnB8EeOC9pe6L9~~iXbtF~V3TRnEhDq3fFdguJML3176Jdxm3km3CfQVEbb2unbArpMl9zPgIzkM2b9iltDVdOTH2mVAnX99x0QcH1CW8naGZ98bSF03SplZ9iNUjdlx9vYncwNYWHVko1sqk8NuvpbvcIh5gJbtH6lBL53f90JOi707mRq0kyS19me2Ov6mEjtl5N9UYwR~ulFezHJKzQM4RCeB6dyF2W3LoWetDwKy-9r9s3xmKTxGtq-bfvFLhiOGlB-VMdOrEJL5xfOxhPDiJdZvVhZRc0Ry-v1yr4nRw__",
      ],
      colors: ["#E5B50C", "#E50CC2", "#920CE5", "#0C2FE5"],
    },
    {
      id: 4,
      limited: false,
      name: "Amanda Belfast Sleeveless",
      description: "Women’s dinner wear and summer dress",
      price: "63",
      images: [
        "https://s3-alpha-sig.figma.com/img/0d68/b89e/73c69425a6b0371a2fb009b26f540ed1?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mEP2fs3LHePQ~U33moRRFCPVkGngI~hSTLDiRVRF6JqqGf7T874EjR11sasjflt1dVZZy~nCdDgjxauo5cXU~0odIAyUYeYSRVsdpWA8jZ68GgbrBcZvlbVBbB0n6txeBU8w-z6nN0D0sjmhetPo1UWPY7BBkvz-n-AN8udzh-3PkeLfEkcJMmSytvuAEfN1kVll4HywCe-K03rhTpq7VEwdPZBhvkmRpFFVU0VKR~XZTU-BckSYftpGzLm-ntz3dw3NvXum3kPt60HL9rUohgLNJlqGbjxOqhg5abi8V6dHtpE9HFcqdAbhVDtJOtBKNH19BizQMVXNGJgWGGvJxQ__",
        "https://s3-alpha-sig.figma.com/img/84a3/19c1/d5f6d859281310f9bb0c5f17cac7f1ee?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kEq7r0R~dnzS8zji2XaMdd8TaCgef7XZd7yeg-3bc5YC3wz7a-Qepr3zR-vDPqPte1mmV2i13jy7EkoP-ZCObkgiKA9Qk6UdhaEAsortHxD0nrHnQXdLz7KbQAGxyifqm8NUPqzz33JgBmbq8nY3DTSNkkGv2iMwg0UoHGL4OZ2x1qeHiwrTtLHNySq-lVO4HJlQifpG13LnjX6cdYPLwCYD8PBROAnwOFfIOnq-09uTlxpIC63rBhitwQUfrJEgF~OibSeGkc6DQIuYPX6~LVSZOUEhG69qmdpQ08DayKUos1cyIA9E7LxXxgFyXBFAM6rsYr9obT0u5WsE85G4Uw__",
      ],
      colors: ["#10413F", "#E50C26", "#BAD800", "#2AE50C"],
    },
    {
      id: 5,
      limited: false,
      name: "Okonjo Iweala Dress",
      description: "Women’s corporate office dress",
      price: "63",
      images: [
        "https://s3-alpha-sig.figma.com/img/236f/b827/2ed2e86e0d77b4e9bb38d4dd321afd92?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VuntL2RjGIDJoIko4tF5ipWBq6lmZ2J~XULw4xsp45Q~HUAY3c-5GmFxrrzDJIuRKVX9cgW3m2v2~OE7oMI63g05szcjWAjhzhhWqhVfXLR7uO1lhCD5nKDWlkETeX9ayuKXsdFSECHSuUCS1c7cecxpEmtvVN83BGULaeRe0gkbqmqbdFCTPY9S0gSYGSbvnN1Xnly7UFU15LiFK-rmHiPNiZF6kV97a0YTF1QKKPekyCrCg7uStxEsVqNZ3lUZJEPIpZvnwU6RhEMRGlxTvjBRTY80~PcdmyXATyfGrpYcAfMA7pybFbENVQK5N~o0e-aOdSMyH3CJ0YgK6p1feA__",
        "https://s3-alpha-sig.figma.com/img/a0b0/8d8b/5c3a78c356f8bc8bb7f75a14607308b1?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUtdARQugI~Ea6yUmOik2pjvvOA6-44uO7MF5ruGCkf~~aZs2N24CA28nW3iV94rIV2lkQXgtVPUQAJOLfTEOxWzTak~n~fVcJ51u4REAtpfSAUMnCfP-vp3dTc38m~X9Ql2KX-p18LWkPMfbYk8EYJIsF7gsY9KKyrLzfZWeGMzppC63RW4Phziy5K7PrURb8WsNgPYg7A8tADtVMMrxPZL8~HEjrq~zuL~WYon8iqEwk~EJhoPv~FMpUVRgd5dEn2QiOfvAqZuepZ6qrjQJDhfMAKMV9FPR5f24eMjCSylq5tmRvxSACrqNQI7aDpZzeVZgbSMZnqtuWjExASKQg__",
      ],
      colors: ["#E5B50C", "#E50CC2", "#0CE5DD", "#927306"],
    },
    {
      id: 6,
      name: "Giora Signature Summer Dress",
      limited: false,
      description: "Women’s summer dress",
      price: "63",
      images: [
        "https://s3-alpha-sig.figma.com/img/a117/4018/e9ab3525d518c96069c650fb22661c55?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cJuJY0Tm7HxnP4d~hRiVLOeEfP8t-iDgYvLfwIQqhZ4cqFQG3QICApSaKvHNwPk2S9Glr7L9FGAUAlUZ0cjPCLoo6oWGtFlSpQPk5gPJ~acxrWpgXLfTwdvtU1tcWCmKIzLm22TYHUMfQxevnGr-8Jn5zwc8UbliX1eXZ~gfjkwFJrj26Luf7P87Y9TCTXHHTe6l3PxmWoBvudE~ic95Rp4TTpA2tPfijSuKLO5CejHPJL5nsibxW6ODOamA2WehwKPvm27UTgdssSnNi4nygqpeWXNJbwcHmYUBDQCsX2d2-O7rCQNzjdHDDB3vtrpvPXPFPBHclc29TVbd-Rh57g__",
        "https://s3-alpha-sig.figma.com/img/72f5/202b/5b06d054bd283b91992c5144831c5b5d?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mERUB9hejCxerA1r7FazFrmPQ9Zn6e4ZiAmylOhMbieqUKCePmq6y7syU9I-3c2qoh3VN1p5W5Y1BuT76EM~rhEkUmQY0P4pxdqYgFXBhjAml-Ke~GQHYN~Idy-5-siCACjE50zCWcuEcvwIe~ur1NqMQb8n5Moa4Ktd8wFXG2OzFJMiR7AdxOQdBGwS2FODiFSiKidqIlUddQUjZxbgozqUEtO4~bpIF1AjBMblOb6xq2mrURNrjUC--K4RIcLPTxQ2qEOhERrtS9Hmq-qk0qAnFBWm-g2-wCqzEYNNNc5f7DpV52BjrsnD9CynENtgVy-W47PulwPhdthAIaX53Q__",
      ],
      colors: ["#E5B50C", "#E50CC2", "#9C27B0", "#927306"],
    },
    {
      id: 7,
      name: "Giora Signature Corporate Gown",

      description: "Women’s corporate office dress",
      price: "63",
      images: [
        "https://s3-alpha-sig.figma.com/img/fb67/1147/591edcae1949df9aa588805f2c2fd672?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NM~avpS3hWkDuFs5fPpm9sPFo2Xsa2gXc1ukIyCQA0iE8et~GwMTTmAaJ~HQdT26TVJc8IXprNn~wNFNqrbugyzA8yKKUT4o8FrhInGts2378rFW98-ViUiO9UiCyiQ-nPF55ZSgwJvfgLdQwaXoj0D2e2DggsdSsN5R1sfi0GrFiPu2E2ZVk4gTWHAan7xgG-VVE-POEUiQ3obYJk-9RhwkM6qfDAA6YiIMvVt42MMRcYsZCALxSCk6Rh-tFR~sv96nglH7NCB4GPQdM-4~AIfY7N-CrOx0QPqgmQ8L8UlLQrKoNyV~NLvKY0SQMEvvm8QDfhGPd7FWWBjllIVd9A__",
        "https://s3-alpha-sig.figma.com/img/5b2d/6dd3/acf3419bbfd49ac032bee91212fd774f?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LgMj6l2j0NOvuldJmQOVbLH6pNas2-ONZwqTKkeKQPdkRUnx8ZU8UmpzgQhKK48V4yc5fs~Gc9s4YrydSBiE1MtUfvGIuAnoUVNblX41vE85LXgYemZ1bFeTXbkLxgAA~w3T49WL8fk6-mH8yGqKI5MEa9XuWqn-OglrG7-~MiTy-9tj8RYMeVuxeTBsMm0iVvFEas9RHisqSU6OtWMbtmQRbFJHpR7TEv8YoW9ym327gGBB~oCP~foH2emQJOudcjdANmTjT7yqAI8LVheA5gdc8Ej1pN5wdNGqFNF-q4dvOdqSs-43Y-e8zMnc~N9D5THsPLcJIYABznFKWj5UTQ__",
      ],
      colors: ["#E5B50C", "#E50CC2", "#920CE5", "#0C2FE5"],
    },
    {
      id: 8,
      name: "Kim Young Sleeveless",
      description: "Women’s dinner wear and summer dress",
      price: "63",
      images: [
        "https://s3-alpha-sig.figma.com/img/b5a4/7848/f503747f7c9b0858119bbd45d8e141a3?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7SygfgAem6Xxh~rSmveHLWSYrSHFL5ZmZwkRrxdc6YDnrU4xGdtaViTPWG~1M6e8WpIPKhxQ0mnYYPiX7nwAZTf-2EQ6QOSar7JvRfHUC1B8AbwC2wmBEukfFYka2659KsnQE64Tb0e9DOzBdxfoEKpTQsJVlZT4tdTRtYcQKBUn7dvCccWjlNe8~tfHRL2pys7lCNCWZ6jqvAKUQ7V1INDXTib1qinV8U1tmrF4uNQ-~DW3JIyOvswAmRKb9nw9T~Rzjj8j2QJTuhZiup~9m0Ef6AFtEr-3UVtLXmx4WCFZ1dsOthnUidkcMLfP-MEYgM-7wLGq2-V9fuflaJ-7Q__",
        "https://s3-alpha-sig.figma.com/img/d85b/75fc/7c3868af6c317d78849e748a118ddbc7?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HVKY3klfg71x0RNnOZkD0vp2PL3IZe2Vax2sWyKXQdV2IJxhjImtJCKeFQODt1uxhxJ3cME5TehvGVNyprv-d2WfrfE5rvHGqyxL-Hg6TIgYPwehmNyLXXk0BC5y-SAYQIE55Awnr6k9gr-O7~fez310Ku1GjRyDQmtx8cxfcPsYWRxsH~QW0NP1cTJ2UpZbRYa14ghy755s-Tog30vj0VQPeNOeJBuAFqeLkn17NDcixDKOSuAU8EqMqEgqpU5rJQfK7LxDa9Z~6m2Ol7JyPHzLhLQztIRII7R2vs-7XlzOPCFkZvInca3MWnzVWb4V4yS~xiiAtbIdrFPVtL9njg__",
      ],
      colors: ["#10413F", "#E50C26", "#9C27B0", "#4CAF50"],
    },
    {
      id: 9,
      name: "Giora Signature Party Gown",
      description: "Women’s party dress",
      price: "63",
      images: [
        "https://s3-alpha-sig.figma.com/img/4bba/5a7e/101717a190b19af3f3e7b2f4e7178e2c?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p4m9mlOPBthSocYWVs3K9Hnqffp-Tm6ahdmnJ9K2JjK7Xbr8RER0TDRPcA1C345h-oAAfDHsiaBILlwl-HcQSvotRPxqK0iPQuNaAkiI7d0ZGiQY73~edV7J4nXU71kBfJR7U4iSwZoFF86dWuL1LXx--hk98pbdNRFl4AEOp9RX80jp2eX0WW8oVjeDQ~aX3ojt38oanGEZwgpkiRs4~NQWn9uPyg7mCwwmAq1aubbuGehbwAbzOlp2dr3U0h2~Rb9-8vacm6JQTThVosVhHsN6ySYS0uFEml8XD3iZvWx9jJcHEde-meXQcaP921hln3cM3dQbAyg08wsle6y2hw__",
        "https://s3-alpha-sig.figma.com/img/3026/e103/2ab2ef4da0e3d99ce7d34b402abd3b55?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aK5mWS427edYWuTEGvhjlcNiY200u9fhXYoFzPwDxlYpgZC8Ei6T65C28cHGCI0vfLA31DcQxpQwumLyDe3ZRIvcTZAfiHP4M1ZRgYHYdDaUUBtDIdQPj-x2ce~2K-6RsUcfu~nHOnLJrSP2IB34-lx5wVHwR2yxR8GScxM47XBaLkwG2z61dQWHqYg8VWCv9lEJbZ4R3Wq0bJ2IzR6z6TxpfHGmQeGzoD6HvN1YlF7cbPYNHwxWcdK7MFFSeTcafmSZAAVFFTqSdorP12dc-sKVzDY5RT1hIdegCeOJkSIBsITapo~xZnq3GRN1jQb~Fr8b1ZXElYnde0US-~Udnw__",
      ],
      colors: ["#E5B50C", "#E50CC2", "#920CE5", "#927306"],
    },
    {
      id: 10,
      name: "Melbourne Classic Wear",
      description: "Women’s corporate office dress",
      price: "63",
      images: [
        "https://s3-alpha-sig.figma.com/img/d1db/cba7/395cb0f43dd3aab970f1dca602413d39?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bHmrLz~WZY7tTPuk8qA60PaCndcr9KDpCWl7XljC6L2zs-uKPna2C93~zzGEMqZszBEFgh7HjDDZB47nodYRTwrSgdvd7beNkiFEBuFe3xWhU1fWApWQZzQxnTEPuv0s5yT-EKkjJkNeCEe8AIcLZx4U-Y4g7qKLi4ZPAScLTBStKRCFgI87t5bupCG-kKk-WsyNyeTvKP-rNH57eq2jgienNxWLhUhwuGp4dnVI4-oec4sJtF6TKpweUirJVgPT8Mt2ibyspAMFMKcRBUXu-SETWHs99cqYVnVgm6a-u3FOPrUizPYEdE6~L0xFWx-0prwq-WY~vQeDVfybwFAfKQ__",
        "https://s3-alpha-sig.figma.com/img/3005/452a/8510258b2e61dfc6fd9637feb3786f83?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jf3bocKTNszbH1ndN0NxBhttYxBm74BUMdux7chzWPXtm3jGQ8sx5s3q~0aB7jlH3-hz6vdyCqNkm0EcI2-VSlYAQeAegjuEoepig-DlkvsWKQ~WYjL9vsAqD-oB6uv5TRseuFjg9kfb9rIuy3U74Gw5yTBnOFFIZIGkH23KGxLwDCzAPDHaEBxBxLFZM7eUWzi~i~wxhCp8cQWrS~-ePExFun7at5MtR3XtsDiBY1Vx6zSAu1hW0w-gxoRdmir~bPsUTo8L9Sv3F~rKoQzUHmgSJJ8KEZv4hJfGcjQJhuvpBEV31ibcbSlKpVc3lUeWtftwE2efb6jiSFOX5~PpXQ__",
      ],
      colors: ["#10413F", "#E50C26", "#BAD800", "##2AE50C"],
    },
    {
      id: 11,
      name: "Giora Queen Gown",
      limited: true,
      description: "Women’s summer dress",
      price: "63",
      images: [
        "https://s3-alpha-sig.figma.com/img/8cff/2b55/bec9f9e18c64990df9b6a360c893f0a5?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lmM2kaHNEtmcq~Oo9mxtAh4D01D2ZOv0C41ipCh~BWu5Oq1ylRX4Dl8QBdS7ncsw2EuJQuT08Z~5ivCstXvLESHXfryIf-mlcQnWrYccIoDVdLGhk5NC3hjMGladVGgHktLXyQA6cUl4TN8wqZrjjlfJmVZPB-Gy8EpMvjuWmPe6NU-HBsteBFmphnqnaHJ1QME6TOAjUk8y~cdyu5RQ6CleXNtjFph0znkhNMgW9HYev4r--QB~2xy4fZAdMehj4CIT290A~0b6n3MxmTwWJCbKGhWCFtQN~RbPA9ENhQWynCjU2LF8SH0PIchKy-kgTv8z7PxwIDZSZC~QCVVljw__",
        "https://s3-alpha-sig.figma.com/img/5b6d/4f74/d516759dddf10bd8e442445b42b44336?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jN4Izv0ZH05T4ZXile2U78VDJugCwUoHur2tq0oKrzYZqtfn3dEv-bk40oE-pxAVQy~OrvUcKorwpPupwI6OJyBD5Z3SNKaApSwK4ISeRTjaivzJWuzjjbgittjjTiztmzAlPyXiDJNsTwp0-lvllHSYQeNN9rf7QlNTbTPDrMAIDJqXYUbJ5HX~eXmN7wnA4uFaWpGQOxNvjIVCrgQ51SVxNSaYlJ~~VlIr-WV3mi9RXxuNVRRiKnjRC~vzHJ0vA3b1sKyyE7VOtfExiVNkd6IrV12iH6qZFhk24GN1QeLrrr361O5S0duBDMQD9-dCmBhsSD7Fiw8Gtv3yLx5iSA__",
      ],
      colors: ["#E5B50C", "#E50CC2", "#920CE5", "#0C2FE5"],
    },
    {
      id: 12,
      name: "Giora Signature Corporate Dress",
      description: "Women’s corporate office dress",
      price: "63",
      images: [
        "https://s3-alpha-sig.figma.com/img/cce7/f0eb/20726ecc907239afd8c8cf325771fb0b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WvDs4a4Qpnklil5VSePBe8inBiOCXSxqEfi9laDdjN~6ve14VdxDgrQ1MoVpZl2e4UxZd0i7yUggHoWHzQlCiNfJbQxeSTtT-YGzTveT4oDB4Xx0NtbuHn~DmxqVM8YPRvWxoox0hymCLnHalNflNbLdLc-3q8sR2XnPgwdOfdB0K15VTl~j92tUWhZ7U6kW9jCPhEwxB4jHlIypzytqEB~oLL0pbJPosOwDTyF6imn7PbI3fBCosz7jM0YRRJINuXAwawRz4JeemytfRrADaPKM5bEol-hj5sYZhoMJ~~PmFGPUCzH4x5ME7YePjE5XpPJdQMlzsLFvbP-jti6TJg__",
        "https://s3-alpha-sig.figma.com/img/9528/b700/b23a8fff172c4a9ded1de2ff994bd87a?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VxBufRwO7spWzgIIZWZRRRcT12JjEzfLbY1YYPhU8beiYiQ5RQcYrNsij3ypcUqyyDP6jSvmAybT5zyxgvS9-IRHe8Rlf~c8fanHzw0HLFaMmGuElYYOxCQt5k7IhDz2B~6myNcdWz6zDdVDY5UAM~9ROYH2T2sYuSqz-mTITtKkfC45ys2MQSyY09x~pMx-rJIHoOTNRL2xzoaYlj31pSoGIOY~nY4LAJZmH-4Chp4KtPgwX75fgbznwL61xeSloYora0Zrav7hRuNxhIjojEb-pN5YnSwQJfoRmfGyOCOor-GlIGosHsl5YdG9Rg~AhmV2WzBrjbBRJv~7wtltRA__",
      ],
      colors: ["#E5B50C", "#E50CC2", "#920CE5", "#927306"],
    },
  ];

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="product-list">
      <div>
        <div className="page-container">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 18V15"
                stroke="#919191"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.0698 2.81997L3.13978 8.36997C2.35978 8.98997 1.85978 10.3 2.02978 11.28L3.35978 19.24C3.59978 20.66 4.95978 21.81 6.39978 21.81H17.5998C19.0298 21.81 20.3998 20.65 20.6398 19.24L21.9698 11.28C22.1298 10.3 21.6298 8.98997 20.8598 8.36997L13.9298 2.82997C12.8598 1.96997 11.1298 1.96997 10.0698 2.81997Z"
                stroke="#919191"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="home-page">Home Page</span>
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07996"
              stroke="#919191"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="category">Women</p>
        </div>
        <h1 className="product-list-header">Women Dresses</h1>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductList;

*/

import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product"; // Ensure this path is correct

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://timbu-get-all-products.reavdev.workers.dev"
        );
        const data = response.data;
        if (data && data.items && Array.isArray(data.items)) {
          setProducts(data.items);
        } else {
          setProducts([]);
          setError("No products found");
        }
      } catch (error) {
        setError("Error fetching products");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            images={product.images || []} // Ensure images is an array
            name={product.name}
            description={product.description}
            price={product.price}
            colors={product.colors || []} // Ensure colors is an array
            limited={product.limited || false} // Default limited to false
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
