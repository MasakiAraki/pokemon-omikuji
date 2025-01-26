"use client";

import useFortuneResult from "./_hooks/useFortuneResult";
import FortuneResult from "./_components/fortune-result";
import FortuneButton from "./_components/fortune-button";

export default function Home() {
  const { fortune, drawFortune, isDrawing } = useFortuneResult();

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] relative">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-600">
        ポケモンおみくじ 2025
      </h1>
      <p className="text-lg mb-12 text-center text-gray-600 dark:text-gray-300">
        運命のポケモンと出会い、日常をヒントを得ましょう。
        <br />
        ボタンを押すと、あなたの運勢が表示されます！
      </p>

      {!fortune ? (
        <FortuneButton isDrawing={isDrawing} drawFortune={drawFortune} />
      ) : (
        <FortuneResult fortune={fortune} />
      )}
    </div>
  );
}