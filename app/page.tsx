"use client";

import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { Badge } from "./_components/ui/badge";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Matheus</h2>
        <p>Segunda-feira, 05 de agosto.</p>
        {/*BUSCA */}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button size="icon">
            <SearchIcon />
          </Button>
        </div>
        {/*IMAGEM */}
        <div className="relative h-[150px] w-full mt-6 ">
          <Image
            src="/banner-01.svg"
            fill
            className="object-cover rounded-xl"
            alt={"Agende nos melhores com FSW Barber"}
          />
        </div>
        {/*AGENDAMENTO */}
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            {/**ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
                </Avatar>
                <p className="text-sm ml-1">Barbearia FSW</p>
              </div>
            </div>
            {/*DIREITA*/}
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Home;
