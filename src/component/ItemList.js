import { Grid, Image } from "semantic-ui-react";
import Link from "next/link";
import styles from "./ItemList.module.css";

export default function ItemList({ list }) {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href={`/detail/${item.id}`}>
                <a>
                  <div className={styles.wrap}>
                    <Image
                      src={item.image_link}
                      alt={item.name}
                      className={styles.img__item}
                    />
                    <strong className={styles.title__item}>{item.name}</strong>
                    <span className={styles.text__info}>
                      {item.category} {item.product_type}
                    </span>
                    <strong className={styles.num__price}>${item.price}</strong>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
