import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
   
    {
      title: 'Margaritas',
      href: '/margaritas',
      img: 'https://cdn.bolivia.com/gastronomia/2011/08/19/margarita-3005-0.jpg'
    },
    {
      title: 'Mojitos',
      href: '/mojitos',
      img: 'https://www.shutterstock.com/image-photo/mojito-virgin-long-rum-drink-260nw-1911762766.jpg'
    },
    {
      title: 'Daiquiri',
      href: '/daiquiris',
      img: 'https://www.gastrolabweb.es/u/fotografias/m/2022/12/13/f850x638-23344_100833_5050.jpg'
    },
  ];

  return (
    <section className="py-8">
      <div className="container px-2 mx-auto flex flex-col gap-6">
        <h2 className="text-teal-500 font-extrabold text-4xl text-center transition-colors hover:text-amber-200">Categorías</h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))] place-items-center place-content-center gap-6">
          {categories.map((element, index) => {
            const { title, href, img } = element;
            return (
              <Link
                key={index}
                to={href}
                className="rounded-2xl overflow-hidden w-full"
              >
                <img
                  src={img}
                  alt="Herrero de verano"
                  width={512}
                  height={512}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-sky-900 p-4">
                  <h3 className="text-2xl font-bold text-center">{title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;