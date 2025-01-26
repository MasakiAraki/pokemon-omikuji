import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { formatFlavorText, getPokemon } from "@/utils/api";
import { MAX_POKEMON_ID, TYPE_TRANSLATIONS } from "@/constants";
import StatBar from "./_components/stat-bar";
import { LuckyParamValue } from "@/types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const ids = Array.from({ length: MAX_POKEMON_ID }, (_, i) => i + 1);
  return ids.map((id) => ({
    id: id.toString(),
  }));
}

type PokemonDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function PokemonDetails({ params }: PokemonDetailsProps) {
  const { id } = await params;
  const pokemon = await getPokemon(Number(id));

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          もどる
        </Link>
      </Button>

      <Card className="p-8 bg-white/50 backdrop-blur-sm dark:bg-gray-900/50 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              今年のあなたは、まさに
            </span>
            <h1 className="text-5xl font-bold">{pokemon.nameJa}</h1>
            <Image
              src={pokemon.imageUrl}
              alt={pokemon.nameJa}
              width={640}
              height={640}
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">🤞 開運キーワード</h3>
              <div className="flex gap-2">
                {pokemon.type.map((type) => (
                  <Badge
                    key={type}
                    variant="outline"
                    className="bg-yellow-100 text-yellow-800 text-base"
                  >
                    {TYPE_TRANSLATIONS[type]}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">🌟 くわしい運勢</h3>
              {Object.entries(pokemon.stats).map(([stat, value]) => (
                <StatBar
                  key={stat}
                  label={stat as LuckyParamValue}
                  value={value}
                />
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                🪽 {pokemon.nameJa}のような１年を！
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {formatFlavorText(pokemon.flavorText)}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}