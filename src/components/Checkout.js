import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import CartSummary from "../components/CartSummary";
import RecommendedProducts from "../components/RecommendedProducts";
import "./Checkout.css";

const items = [
  {
    id: 1,
    name: "Gloria Queen Gown",
    tag: "TRENDING",
    price: 70,
    quantity: 1,
    color: "Black",
    size: "UK 10",
    image:
      "https://s3-alpha-sig.figma.com/img/1c30/65b1/0cf57a656f3ae9d7b4a17ee2491afaf0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W8VwFxQQM6jI-vPnSmA3cY0fR~dCzoqt8vwb6qoux53NJ1eo3W50vNmxa09lFhAg5wdf7Jj-F-lTQYu7khWl1xJvoh6A7xJW3OeFw3dUOMVLvSjGnQrxE5l9RDW4DSwyzO1bh~wlddVJUfkyrlJx7n3Y8YEtXmlaZDm3ARZW7QFcR8WCeJiPK23mzVsDO4eRmxN~JafB9AVchyxh0XcQwoh9l2sPxXF~TFN0i7jhU-2N0iOw5VdoYbxoQ64PXxzi6H6gV6xKKoFg4m7CxMFspZ1-pR-yJheyKcz5xsUtOAmniQCBcrZ~UnYnEFJmWgpmaMtolTHXWmo1cD~a7yooOA__",
  },
  {
    id: 2,
    name: "Gloria Zeni Sleeveless",
    tag: "",
    price: 90,
    quantity: 2,
    color: "Black",
    size: "UK 12",
    image:
      "https://s3-alpha-sig.figma.com/img/1c30/65b1/0cf57a656f3ae9d7b4a17ee2491afaf0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W8VwFxQQM6jI-vPnSmA3cY0fR~dCzoqt8vwb6qoux53NJ1eo3W50vNmxa09lFhAg5wdf7Jj-F-lTQYu7khWl1xJvoh6A7xJW3OeFw3dUOMVLvSjGnQrxE5l9RDW4DSwyzO1bh~wlddVJUfkyrlJx7n3Y8YEtXmlaZDm3ARZW7QFcR8WCeJiPK23mzVsDO4eRmxN~JafB9AVchyxh0XcQwoh9l2sPxXF~TFN0i7jhU-2N0iOw5VdoYbxoQ64PXxzi6H6gV6xKKoFg4m7CxMFspZ1-pR-yJheyKcz5xsUtOAmniQCBcrZ~UnYnEFJmWgpmaMtolTHXWmo1cD~a7yooOA__",
  },
];

const recommendedProducts = [
  {
    id: 3,
    name: "Amanda Belfast Sleeveless",
    description: "Women's dinner wear and summer dress",
    price: 50,
    images: [
      "https://s3-alpha-sig.figma.com/img/1c30/65b1/0cf57a656f3ae9d7b4a17ee2491afaf0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W8VwFxQQM6jI-vPnSmA3cY0fR~dCzoqt8vwb6qoux53NJ1eo3W50vNmxa09lFhAg5wdf7Jj-F-lTQYu7khWl1xJvoh6A7xJW3OeFw3dUOMVLvSjGnQrxE5l9RDW4DSwyzO1bh~wlddVJUfkyrlJx7n3Y8YEtXmlaZDm3ARZW7QFcR8WCeJiPK23mzVsDO4eRmxN~JafB9AVchyxh0XcQwoh9l2sPxXF~TFN0i7jhU-2N0iOw5VdoYbxoQ64PXxzi6H6gV6xKKoFg4m7CxMFspZ1-pR-yJheyKcz5xsUtOAmniQCBcrZ~UnYnEFJmWgpmaMtolTHXWmo1cD~a7yooOA__",
      "https://s3-alpha-sig.figma.com/img/1c30/65b1/0cf57a656f3ae9d7b4a17ee2491afaf0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W8VwFxQQM6jI-vPnSmA3cY0fR~dCzoqt8vwb6qoux53NJ1eo3W50vNmxa09lFhAg5wdf7Jj-F-lTQYu7khWl1xJvoh6A7xJW3OeFw3dUOMVLvSjGnQrxE5l9RDW4DSwyzO1bh~wlddVJUfkyrlJx7n3Y8YEtXmlaZDm3ARZW7QFcR8WCeJiPK23mzVsDO4eRmxN~JafB9AVchyxh0XcQwoh9l2sPxXF~TFN0i7jhU-2N0iOw5VdoYbxoQ64PXxzi6H6gV6xKKoFg4m7CxMFspZ1-pR-yJheyKcz5xsUtOAmniQCBcrZ~UnYnEFJmWgpmaMtolTHXWmo1cD~a7yooOA__",
    ],
    colors: ["#FFEB3B", "#FF9800", "#9C27B0", "#4CAF50", "#3F51B5"],
  },
  {
    id: 4,
    name: "Okonjo Iweala Dress",
    description: "Women's corporate office dress",
    price: 60,
    images: [
      "https://s3-alpha-sig.figma.com/img/1c30/65b1/0cf57a656f3ae9d7b4a17ee2491afaf0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W8VwFxQQM6jI-vPnSmA3cY0fR~dCzoqt8vwb6qoux53NJ1eo3W50vNmxa09lFhAg5wdf7Jj-F-lTQYu7khWl1xJvoh6A7xJW3OeFw3dUOMVLvSjGnQrxE5l9RDW4DSwyzO1bh~wlddVJUfkyrlJx7n3Y8YEtXmlaZDm3ARZW7QFcR8WCeJiPK23mzVsDO4eRmxN~JafB9AVchyxh0XcQwoh9l2sPxXF~TFN0i7jhU-2N0iOw5VdoYbxoQ64PXxzi6H6gV6xKKoFg4m7CxMFspZ1-pR-yJheyKcz5xsUtOAmniQCBcrZ~UnYnEFJmWgpmaMtolTHXWmo1cD~a7yooOA__",
      "https://s3-alpha-sig.figma.com/img/1c30/65b1/0cf57a656f3ae9d7b4a17ee2491afaf0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W8VwFxQQM6jI-vPnSmA3cY0fR~dCzoqt8vwb6qoux53NJ1eo3W50vNmxa09lFhAg5wdf7Jj-F-lTQYu7khWl1xJvoh6A7xJW3OeFw3dUOMVLvSjGnQrxE5l9RDW4DSwyzO1bh~wlddVJUfkyrlJx7n3Y8YEtXmlaZDm3ARZW7QFcR8WCeJiPK23mzVsDO4eRmxN~JafB9AVchyxh0XcQwoh9l2sPxXF~TFN0i7jhU-2N0iOw5VdoYbxoQ64PXxzi6H6gV6xKKoFg4m7CxMFspZ1-pR-yJheyKcz5xsUtOAmniQCBcrZ~UnYnEFJmWgpmaMtolTHXWmo1cD~a7yooOA__",
    ],
    colors: ["#FFEB3B", "#FF9800", "#9C27B0"],
  },
  {
    id: 5,
    name: "Giora Signature Summer Dress",
    description: "Women's summer dress",
    price: 120,
    images: [
      "https://s3-alpha-sig.figma.com/img/1c30/65b1/0cf57a656f3ae9d7b4a17ee2491afaf0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W8VwFxQQM6jI-vPnSmA3cY0fR~dCzoqt8vwb6qoux53NJ1eo3W50vNmxa09lFhAg5wdf7Jj-F-lTQYu7khWl1xJvoh6A7xJW3OeFw3dUOMVLvSjGnQrxE5l9RDW4DSwyzO1bh~wlddVJUfkyrlJx7n3Y8YEtXmlaZDm3ARZW7QFcR8WCeJiPK23mzVsDO4eRmxN~JafB9AVchyxh0XcQwoh9l2sPxXF~TFN0i7jhU-2N0iOw5VdoYbxoQ64PXxzi6H6gV6xKKoFg4m7CxMFspZ1-pR-yJheyKcz5xsUtOAmniQCBcrZ~UnYnEFJmWgpmaMtolTHXWmo1cD~a7yooOA__",
      "https://s3-alpha-sig.figma.com/img/1c30/65b1/0cf57a656f3ae9d7b4a17ee2491afaf0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W8VwFxQQM6jI-vPnSmA3cY0fR~dCzoqt8vwb6qoux53NJ1eo3W50vNmxa09lFhAg5wdf7Jj-F-lTQYu7khWl1xJvoh6A7xJW3OeFw3dUOMVLvSjGnQrxE5l9RDW4DSwyzO1bh~wlddVJUfkyrlJx7n3Y8YEtXmlaZDm3ARZW7QFcR8WCeJiPK23mzVsDO4eRmxN~JafB9AVchyxh0XcQwoh9l2sPxXF~TFN0i7jhU-2N0iOw5VdoYbxoQ64PXxzi6H6gV6xKKoFg4m7CxMFspZ1-pR-yJheyKcz5xsUtOAmniQCBcrZ~UnYnEFJmWgpmaMtolTHXWmo1cD~a7yooOA__",
    ],
    colors: ["#FFEB3B", "#FF9800", "#9C27B0", "#4CAF50", "#3F51B5"],
  },
];

const Checkout = () => (
  <div className="checkout">
    <Header />
    <div className="main-content">
      <Cart items={items} />
      <CartSummary
        total={items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      />
    </div>

    <RecommendedProducts products={recommendedProducts} />
    <Footer />
  </div>
);

export default Checkout;
