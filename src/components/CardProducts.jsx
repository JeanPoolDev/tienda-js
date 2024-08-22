import {Card, CardBody, Image, CardFooter, Button} from "@nextui-org/react";
import { useContext } from "react";
import { CardContext } from "../context/card";
import { AddToCartIcon, RemoveFromCartIcon } from "./icons";

// eslint-disable-next-line react/prop-types
export function CardProducts ({products}) {

  const { card, addToCard, removeFromCard } = useContext(CardContext)

  const havedProduct = product => {
    return card.some(item => item.id === product.id)
  }


  return (
    <div className="gap-5 grid grid-cols-2 sm:grid-cols-3">
      
      {
        // eslint-disable-next-line react/prop-types
        products.map((product) => {

          const hasProduct = havedProduct(product);

          return (
            <Card 
              shadow="sm" 
              key={product.id} 
              isPressable >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={product.title}
                  className="w-full object-cover h-[200px]"
                  src={product.thumbnail}
                />
              </CardBody>
              <CardFooter className="text-[18px] justify-between gap-5">
                <b>{product.title}</b>
                <p className="text-default-500">S/.{product.price}</p>

                <Button

                  color={`${hasProduct ? 'danger' : 'success'}`}

                  onClick={ () => {
                    hasProduct
                     ? removeFromCard(product)
                     : addToCard(product)
                  }}
                >
                  {
                    hasProduct 
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </Button>

              </CardFooter>
            </Card>
          )
        })}
    </div>
  )
}