import React from "react";

function Error({ error }) {
  return (
    <div className="flex items-center justify-center w-full h-screen flex-col">
      <p className="text-black text-3xl">Не удалось загрузить данные :(</p>
      <p className="text-red-400 text-2xl mt-5">Ошибка: {error}</p>
    </div>
  );
}

export default Error;
