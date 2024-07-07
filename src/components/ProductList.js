import React, { useState } from "react";
import Product from "./Product";
import "./ProductList.css";
import Pagination from "./Pagination";

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
      colors: [
        "#FFEB3B",
        "#FF9800",
        "#9C27B0",
        "#4CAF50",
        "#3F51B5",
        "#F44336",
      ],
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
      colors: ["#FFEB3B", "#FF9800", "#9C27B0"],
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
      colors: ["#FFEB3B", "#FF9800", "#9C27B0", "#4CAF50", "#3F51B5"],
    },
    {
      id: 4,
      limited: true,
      name: "Giora Signature Sleeping Gown",
      description: "Women's night gown",
      price: "63",
      images: [
        "https://s3-alpha-sig.figma.com/img/0d68/b89e/73c69425a6b0371a2fb009b26f540ed1?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mEP2fs3LHePQ~U33moRRFCPVkGngI~hSTLDiRVRF6JqqGf7T874EjR11sasjflt1dVZZy~nCdDgjxauo5cXU~0odIAyUYeYSRVsdpWA8jZ68GgbrBcZvlbVBbB0n6txeBU8w-z6nN0D0sjmhetPo1UWPY7BBkvz-n-AN8udzh-3PkeLfEkcJMmSytvuAEfN1kVll4HywCe-K03rhTpq7VEwdPZBhvkmRpFFVU0VKR~XZTU-BckSYftpGzLm-ntz3dw3NvXum3kPt60HL9rUohgLNJlqGbjxOqhg5abi8V6dHtpE9HFcqdAbhVDtJOtBKNH19BizQMVXNGJgWGGvJxQ__",
        "https://s3-alpha-sig.figma.com/img/84a3/19c1/d5f6d859281310f9bb0c5f17cac7f1ee?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kEq7r0R~dnzS8zji2XaMdd8TaCgef7XZd7yeg-3bc5YC3wz7a-Qepr3zR-vDPqPte1mmV2i13jy7EkoP-ZCObkgiKA9Qk6UdhaEAsortHxD0nrHnQXdLz7KbQAGxyifqm8NUPqzz33JgBmbq8nY3DTSNkkGv2iMwg0UoHGL4OZ2x1qeHiwrTtLHNySq-lVO4HJlQifpG13LnjX6cdYPLwCYD8PBROAnwOFfIOnq-09uTlxpIC63rBhitwQUfrJEgF~OibSeGkc6DQIuYPX6~LVSZOUEhG69qmdpQ08DayKUos1cyIA9E7LxXxgFyXBFAM6rsYr9obT0u5WsE85G4Uw__",
      ],
      colors: ["#FFEB3B", "#FF9800", "#9C27B0", "#4CAF50", "#3F51B5"],
    },
    {
      id: 5,
      limited: true,
      name: "Giora Signature Sleeping Gown",
      description: "Women's night gown",
      price: "63",
      images: [
        "https://s3-alpha-sig.figma.com/img/236f/b827/2ed2e86e0d77b4e9bb38d4dd321afd92?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VuntL2RjGIDJoIko4tF5ipWBq6lmZ2J~XULw4xsp45Q~HUAY3c-5GmFxrrzDJIuRKVX9cgW3m2v2~OE7oMI63g05szcjWAjhzhhWqhVfXLR7uO1lhCD5nKDWlkETeX9ayuKXsdFSECHSuUCS1c7cecxpEmtvVN83BGULaeRe0gkbqmqbdFCTPY9S0gSYGSbvnN1Xnly7UFU15LiFK-rmHiPNiZF6kV97a0YTF1QKKPekyCrCg7uStxEsVqNZ3lUZJEPIpZvnwU6RhEMRGlxTvjBRTY80~PcdmyXATyfGrpYcAfMA7pybFbENVQK5N~o0e-aOdSMyH3CJ0YgK6p1feA__",
        "https://s3-alpha-sig.figma.com/img/a0b0/8d8b/5c3a78c356f8bc8bb7f75a14607308b1?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUtdARQugI~Ea6yUmOik2pjvvOA6-44uO7MF5ruGCkf~~aZs2N24CA28nW3iV94rIV2lkQXgtVPUQAJOLfTEOxWzTak~n~fVcJ51u4REAtpfSAUMnCfP-vp3dTc38m~X9Ql2KX-p18LWkPMfbYk8EYJIsF7gsY9KKyrLzfZWeGMzppC63RW4Phziy5K7PrURb8WsNgPYg7A8tADtVMMrxPZL8~HEjrq~zuL~WYon8iqEwk~EJhoPv~FMpUVRgd5dEn2QiOfvAqZuepZ6qrjQJDhfMAKMV9FPR5f24eMjCSylq5tmRvxSACrqNQI7aDpZzeVZgbSMZnqtuWjExASKQg__",
      ],
      colors: ["#FFEB3B", "#FF9800", "#9C27B0", "#4CAF50", "#3F51B5"],
    },
    {
      id: 6,
      name: "Limited Giora Signature Sleeping Gown",
      description: "Women's night gown",
      price: "63",
      images: [
        "https://s3-alpha-sig.figma.com/img/72f5/202b/5b06d054bd283b91992c5144831c5b5d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h3kePTCwPU4E8sM4TxDsyrTW0GhkZT80hxFUEL3sci6Y2TK9DCAE-nOUG68Q6YQeOQmQRL28oKy46PVGaeoa3QP-u7UTFkPdXKI0mNUbVuBCZLx-hNKPczKQ5-rAx7MX2HG4XNFHnzmuMuz3tBbT9mwKIrQ8rjlQ9~8Odo9y67-zv3MCKfeSQkdMt-4PVrAlldtTnDe2OnhcY5Ai4j2fQ9QJsIqOAayDbrIhEvYPOVwksnz4uMI1GZgA1RVVWOOKCSqFXlDDS7d37xYoUX2f8thNqTXlAaV-nNNYSSOviEM-Lb77o8vNS~GxW2qGZ1g2OqxAFfOKPiNX36FOBe~Rtw__",
        "https://s3-alpha-sig.figma.com/img/a117/4018/e9ab3525d518c96069c650fb22661c55?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mIElOCpbM90NuSNGtetAk4uXAkoCvYOa7M885iy0glgWWMsssWwVrIFtFYQ~eyWnOyXU2BJ-XC0c2inRVU6sdq9hyv5VAgl44w9v29lF3lflfIGIp~-ApLSYJHJhg7IMTwRNOe7nPYq-gLfrsgARCkJYE3Q7GZB0mYtgxbQOycUrwfaC~MFjdGpd4TAUqMFx~xeRgw0A6RhQJZfhS41019E5vqsYA-oRReKgRsBEelyiVwotVSJl~MCysg3wnGbgsS9VCa0qT86hy4jBUDCASmQUv4dKZUu99wJmKbpK-YaJrQJIRrM9qe3hHxCkWI2PRyGVyM7lDuO~yZF5v22JOQ__",
      ],
      colors: ["#FFEB3B", "#FF9800", "#9C27B0", "#4CAF50", "#3F51B5"],
    },
  ];

  // const totalPages = Math.ceil(products.length / productsPerPage);
  const totalPages = 5;
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
