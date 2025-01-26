import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Pokemon } from "@/types";

type FortuneResultProps = {
  fortune: {
    level: string;
    pokemon: Pokemon;
  };
};
export default function FortuneResult({ fortune }: FortuneResultProps) {
  return (
    <Card className="w-full max-w-md bg-white shadow-lg rounded-xl border-2 border-gold animate-glow">
      <CardHeader className="bg-red-600 text-white rounded-t-xl">
        <CardTitle className="text-4xl font-bold text-center">
          {fortune.level}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-8">
          <Image
            src={fortune.pokemon.imageUrl}
            alt={fortune.pokemon.name}
            width={240}
            height={240}
            className="rounded-full bg-red-100 p-4 mb-4"
          />
          <h3 className="text-3xl font-bold mb-4">{fortune.pokemon.nameJa}</h3>
          <Link href={`/pokemon/${fortune.pokemon.id}`}>
            <Button className=" text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
              くわしく見る
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}