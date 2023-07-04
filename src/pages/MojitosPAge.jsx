import { useLoaderData } from "react-router-dom";

const MojitosPage = () => {
  const data = useLoaderData();
  console.log(data);


  return (
    <section className="py-20">
      <div className="container px-2 mx-auto flex flex-col gap-6">
        <h1 className="text-teal-500 font-extrabold text-3xl text-center transition-colors hover:text-amber-200">Mojitos</h1>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))]  gap-6">
          {data.drinks !== undefined && data.drinks.map(element => {
            const { idDrink, strDrink, strInstructions, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strGlass } = element;
            return (
              <div
                key={idDrink}
                className="rounded-2xl overflow-hidden flex flex-col"
              >

                <img
                  src={strDrinkThumb}
                  alt={strDrink}
                  width={256}
                  height={256}
                  className="w-full h-64 object-cover"
                />

                <div className="h-full p-4 bg-sky-900 flex flex-col gap-2">
                  <h3 className="text-2xl font-bold">{strDrink}</h3>
                  <h4 className="text-base font-semibold">Cristaleria</h4>
                  <span>{strGlass}</span>
                  <h4 className="text-base font-semibold">Ingredientes</h4>
                  <div className="flex gap-8">
                    <ul>
                      <li>{strIngredient1}</li>
                      <li>{strIngredient2}</li>
                      <li>{strIngredient3}</li>
                      <li>{strIngredient4}</li>
                      <li>{strIngredient5}</li>
                      <li>{strIngredient6}</li>
                    </ul>
                    <ul>
                      <li>{strMeasure1}</li>
                      <li>{strMeasure2}</li>
                      <li>{strMeasure3}</li>
                      <li>{strMeasure4}</li>
                      <li>{strMeasure5}</li>
                      <li>{strMeasure6}</li>
                    </ul>
                  </div>
                  <h4 className="text-base font-semibold">Instrucciones</h4>
                  <p>{strInstructions}</p>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MojitosPage;

