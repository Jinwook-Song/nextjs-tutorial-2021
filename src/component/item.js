import { Image, Button, Header } from "semantic-ui-react";
import styles from "./Item.module.css";

export default function Item({ item }) {
  const {
    image_link,
    name,
    price,
    description,
    updated_at,
    category,
    product_type,
    product_link,
  } = item;
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.img__item}>
          <Image src={image_link} alt={name} />
        </div>
        <div className={styles.info__item}>
          <strong className={styles.title__item}>{name}</strong>
          <strong className={styles.num__price}>${price}</strong>
          <span className={styles.txt__info}>
            {category ? `${category}/` : ""}
            {product_type}
          </span>
          <Button color="orange">구매하기</Button>
        </div>
      </div>
      <Header as="h3">Description</Header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
    </>
  );
}

/**
 * {
id: 398,
brand: "maybelline",
name: "Maybelline Color Sensational Lipliner",
price: "8.29",
price_sign: null,
currency: null,
image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/6607c1b7eb717dfbd3c228b61e4c5148_ra,w158,h184_pa,w158,h184.png",
product_link: "https://well.ca/products/maybelline-color-sensational_14541.html",
website_link: "https://well.ca",
description: "Keep your Maybelline lip color beautiful with matching lip liners that won't smudge, smear or bleed for smooth, defined lips. For best results: Line your lips starting in the center of your upper lip. Work from the center to outer edges of your lips using small strokes, following the contour of your mouth. Follow the same technique for your bottom lip. To extend the wear of your favorite lip color or lip gloss, first fill in your lips completely with lip liner. ",
rating: 3.5,
category: null,
product_type: "lip_liner",
tag_list: [ ],
created_at: "2016-10-01T18:33:39.513Z",
updated_at: "2017-12-23T21:08:35.034Z",
product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/398.json",
api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/398/original/open-uri20171223-4-11xbwij?1514063314",
product_colors: [
{
hex_value: "#A15638",
colour_name: "Nude "
},
{
hex_value: "#7B4344",
colour_name: "Plum "
},
{
hex_value: "#854337",
colour_name: "Raisin "
},
{
hex_value: "#B3705A",
colour_name: "Toast "
}
]
}
 */
