import { useContext, useId } from "react"
import { CartIcon, ClearCartIcon } from "./icons"
import { Card as CardUI, CardFooter, Image, Button} from "@nextui-org/react";
import './card.css'
import { CardContext } from "../context/card";


export function Card () {

  const { card, addToCard } = useContext(CardContext)
  
  const cardId = useId()
  
  return (
    <aside>
      <label className="button-card" htmlFor={cardId}>
        <CartIcon />
      </label>
      <input id={cardId} type="checkbox" hidden />

      <div className="card p-7">

        {
          card.map(item => (
            <CardUI
              key={item.id}
              isFooterBlurred
              radius="lg"
              className="border-none mb-4"
            >
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src={ item.thumbnail }
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-lg text-white/80 font-bold"> { item.quantity } </p>

                <Button className="text-lg text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm" onClick={() => addToCard(item)}>
                  +
                </Button>

              </CardFooter>
            </CardUI>
          ))
        }

        <footer className="flex items-center justify-center mt-5">
          <Button className="text-lg text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
            <ClearCartIcon />
          </Button>
        </footer>

      </div>

    </aside>
  )
}
