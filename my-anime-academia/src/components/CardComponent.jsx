import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const CardComponent = (props) => {
  return (
    <>
      <div className="flex flex-wrap place-content-center mx-auto">
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none  m-10 p-10 cardContainer"
        >
          <Image
            alt={props.alt}
            className="object-cover"
            height="200"
            src={props.img}
            width={200}
          />
          <CardFooter className="justify-between gap-2 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-0 w-full shadow-small  z-10">
            <p className="text-tiny pr-10 text-black font-bold">
              {props.title}
            </p>

            <Button
              className="text-tiny text-black w-auto"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
              type="submit"
              name="id"
              value={props.cardId}
              onChange={props.changeId}
              onClick={props.idPost}
              onPress={props.idClick}
            >
              {props.btnFunct}
            </Button>
            <p type="text">{props.cardId}</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default CardComponent;
