import {Card, CardBody, Image, CardFooter} from "@nextui-org/react";

export function CardProducts ({products}) {
  return (
    <div className="gap-5 grid grid-cols-2 sm:grid-cols-3">
      {products.map((product) => (
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
          <CardFooter className="text-[18px] justify-between">
            <b>{product.title}</b>
            <p className="text-default-500">S/.{product.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}