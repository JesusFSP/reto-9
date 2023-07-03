import {useLoaderData } from "react-router-dom";

const CocktailPage = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <section className="py-20">
      <div className="container px-2 mx-auto flex flex-col gap-6">
        <h1 className="text-teal-500 font-extrabold text-3xl text-center transition-colors hover:text-amber-200">Margaritas</h1>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))]  gap-6">
            <h1>hola</h1>
          {data.results !== undefined && data.results.map(element => {
            const { idCategory,  } = element;
            console.log('hola mundo');
            return (
              <h1 key={idCategory}>holasda</h1>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CocktailPage;